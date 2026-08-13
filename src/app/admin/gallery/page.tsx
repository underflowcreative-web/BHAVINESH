'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  width?: number;
  height?: number;
}

interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  count: number;
}

const CATEGORIES_LIST: Array<{ slug: string; name: string }> = [
  { slug: 'weddings', name: 'Wedding' },
  { slug: 'pre-wedding', name: 'Pre Wedding' },
  { slug: 'commercial', name: 'Commercial' },
  { slug: 'model-shoot', name: 'Model Shoot' },
  { slug: 'film', name: 'Film' },
  { slug: 'drone', name: 'Drone' },
  { slug: 'maternity', name: 'Maternity' },
  { slug: 'baby-shoot', name: 'Baby Shoot' },
];

export default function GalleryManagerPage() {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Filtering & Search
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selection
  const [selectedImageIds, setSelectedImageIds] = useState<Set<string>>(new Set());

  // Bulk category selection
  const [bulkCategory, setBulkCategory] = useState<string>('weddings');

  // Drag and Drop
  const [draggedImageId, setDraggedImageId] = useState<string | null>(null);
  const [dragOverCategory, setDragOverCategory] = useState<string | null>(null);

  // Fetch initial data from API
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/gallery');
      const data = await res.json();
      if (data.success) {
        setImages(data.images);
        setCategories(data.categories);
      }
    } catch (err) {
      console.error('Failed to load gallery data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Persist changes to server
  const saveUpdates = async (updates: Array<{ id: string; category: string }>) => {
    if (updates.length === 0) return;
    setSaving(true);
    setSaveMessage('');

    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates }),
      });
      const data = await res.json();

      if (data.success) {
        setImages(data.images);
        setCategories(data.categories);
        setSaveMessage(`Successfully moved ${updates.length} image(s)`);
        setTimeout(() => setSaveMessage(''), 4000);
      } else {
        alert('Failed to save updates: ' + data.error);
      }
    } catch (err) {
      console.error('Error saving:', err);
      alert('Network error saving updates.');
    } finally {
      setSaving(false);
    }
  };

  // Single category update handler
  const handleSingleCategoryChange = (imageId: string, newCategory: string) => {
    saveUpdates([{ id: imageId, category: newCategory }]);
  };

  // Bulk category update handler
  const handleBulkCategoryChange = () => {
    if (selectedImageIds.size === 0) return;
    const updates = Array.from(selectedImageIds).map(id => ({
      id,
      category: bulkCategory,
    }));
    saveUpdates(updates);
    setSelectedImageIds(new Set());
  };

  // Toggle selection
  const toggleSelectImage = (id: string) => {
    setSelectedImageIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filtered images list
  const filteredImages = useMemo(() => {
    return images.filter(img => {
      const matchesCategory =
        selectedCategoryFilter === 'all' || img.category === selectedCategoryFilter;
      const filename = img.src.split('/').pop() || '';
      const matchesSearch =
        searchQuery === '' ||
        filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.alt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [images, selectedCategoryFilter, searchQuery]);

  // Select All / Deselect All
  const isAllFilteredSelected =
    filteredImages.length > 0 && filteredImages.every(img => selectedImageIds.has(img.id));

  const toggleSelectAllFiltered = () => {
    if (isAllFilteredSelected) {
      setSelectedImageIds(prev => {
        const next = new Set(prev);
        filteredImages.forEach(img => next.delete(img.id));
        return next;
      });
    } else {
      setSelectedImageIds(prev => {
        const next = new Set(prev);
        filteredImages.forEach(img => next.add(img.id));
        return next;
      });
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, imageId: string) => {
    e.dataTransfer.setData('text/plain', imageId);
    setDraggedImageId(imageId);
  };

  const handleDragOverCategory = (e: React.DragEvent, slug: string) => {
    e.preventDefault();
    setDragOverCategory(slug);
  };

  const handleDragLeaveCategory = () => {
    setDragOverCategory(null);
  };

  const handleDropOnCategory = (e: React.DragEvent, targetSlug: string) => {
    e.preventDefault();
    setDragOverCategory(null);
    const imageId = e.dataTransfer.getData('text/plain') || draggedImageId;

    if (!imageId) return;

    // If multiple images selected and dragged image is in selection, move all selected
    if (selectedImageIds.has(imageId)) {
      const updates = Array.from(selectedImageIds).map(id => ({
        id,
        category: targetSlug,
      }));
      saveUpdates(updates);
      setSelectedImageIds(new Set());
    } else {
      // Move single dragged image
      saveUpdates([{ id: imageId, category: targetSlug }]);
    }

    setDraggedImageId(null);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-[#e8e4df] p-6 md:p-12 font-sans selection:bg-[#8B7355] selection:text-white">
      {/* Dev Mode Banner */}
      <div className="mb-8 p-4 bg-[#8B7355]/15 border border-[#8B7355]/30 rounded flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="px-2 py-1 bg-[#8B7355] text-white text-[10px] font-bold tracking-widest uppercase rounded">
            Dev Mode Only
          </span>
          <span className="text-xs text-stone-300">
            Internal Portfolio Gallery Management System · Changes persist directly to <code className="text-[#8B7355]">portfolio.ts</code>
          </span>
        </div>
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-stone-400 hover:text-white border border-white/20 hover:border-[#8B7355] px-4 py-2 rounded transition-colors"
        >
          ← Back to Website
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <h1 className="font-display text-4xl md:text-5xl text-white font-light tracking-tight">
            Gallery Management
          </h1>
          <p className="text-sm text-stone-400 mt-2">
            Audit, filter, drag-and-drop, and re-categorize client portfolio photographs in real-time.
          </p>
        </div>

        {/* Stats badge */}
        <div className="flex items-center gap-6 text-xs text-stone-400 uppercase tracking-wider font-mono">
          <div>Total: <span className="text-white font-bold">{images.length}</span></div>
          <div>Showing: <span className="text-[#8B7355] font-bold">{filteredImages.length}</span></div>
          <div>Selected: <span className="text-emerald-400 font-bold">{selectedImageIds.size}</span></div>
        </div>
      </header>

      {/* Save Notification Toast */}
      {saveMessage && (
        <div className="mb-6 p-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs tracking-wider uppercase rounded flex items-center justify-between animate-fade-in">
          <span>✓ {saveMessage}</span>
          <button onClick={() => setSaveMessage('')} className="text-emerald-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Category Drag & Drop Bar / Filter Pills */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B7355] font-semibold">
            Filter & Drag Target Drop-Zones (Drag any photo onto a category to move it)
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* All Filter */}
          <button
            onClick={() => setSelectedCategoryFilter('all')}
            className={`px-4 py-2 rounded text-xs uppercase tracking-wider transition-all ${
              selectedCategoryFilter === 'all'
                ? 'bg-[#8B7355] text-white font-semibold shadow-lg'
                : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            All Categories ({images.length})
          </button>

          {/* Category Drop Target Pills */}
          {CATEGORIES_LIST.map(cat => {
            const count = categories.find(c => c.slug === cat.slug)?.count || 0;
            const isSelected = selectedCategoryFilter === cat.slug;
            const isDragOver = dragOverCategory === cat.slug;

            return (
              <div
                key={cat.slug}
                onDragOver={e => handleDragOverCategory(e, cat.slug)}
                onDragLeave={handleDragLeaveCategory}
                onDrop={e => handleDropOnCategory(e, cat.slug)}
                onClick={() => setSelectedCategoryFilter(cat.slug)}
                className={`px-4 py-2 rounded text-xs uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-2 ${
                  isDragOver
                    ? 'bg-emerald-600 text-white border-emerald-400 scale-105 shadow-xl'
                    : isSelected
                    ? 'bg-[#8B7355] text-white font-semibold border-[#8B7355]'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-white border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                <span className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] text-stone-300 font-mono">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Toolbar: Search, Select All, Bulk Category Change */}
      <div className="mb-10 p-5 bg-[#0d0d0d] border border-white/10 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Search input */}
        <div className="w-full lg:w-1/3 relative">
          <input
            type="text"
            placeholder="Search by filename or description..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-black/60 border border-white/20 px-4 py-3 text-xs text-white placeholder-stone-500 rounded focus:outline-none focus:border-[#8B7355] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-white text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Selection & Bulk Actions */}
        <div className="w-full lg:w-auto flex flex-wrap items-center gap-4">
          <button
            onClick={toggleSelectAllFiltered}
            className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-xs uppercase tracking-wider text-white rounded transition-colors"
          >
            {isAllFilteredSelected ? 'Deselect All' : 'Select All Filtered'}
          </button>

          {/* Bulk Category Move Controls */}
          {selectedImageIds.size > 0 && (
            <div className="flex items-center gap-3 bg-[#8B7355]/20 border border-[#8B7355]/40 px-4 py-2 rounded animate-fade-in">
              <span className="text-xs uppercase tracking-wider text-[#8B7355] font-semibold">
                Move {selectedImageIds.size} Selected To:
              </span>
              <select
                value={bulkCategory}
                onChange={e => setBulkCategory(e.target.value)}
                className="bg-black text-white border border-white/20 px-3 py-1.5 text-xs rounded focus:outline-none focus:border-[#8B7355]"
              >
                {CATEGORIES_LIST.map(c => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
              <button
                onClick={handleBulkCategoryChange}
                disabled={saving}
                className="px-4 py-1.5 bg-[#8B7355] hover:bg-[#8B7355]/80 text-white text-xs uppercase tracking-wider font-semibold rounded transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Apply Move'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="py-24 text-center text-stone-400 text-sm tracking-widest uppercase animate-pulse">
          Loading Portfolio Data...
        </div>
      ) : filteredImages.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-white/10 rounded">
          <p className="text-stone-400 text-sm">No images match your filter/search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategoryFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 text-xs uppercase tracking-widest text-[#8B7355] underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Responsive Masonry Card Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(img => {
            const filename = img.src.split('/').pop() || img.id;
            const isSelected = selectedImageIds.has(img.id);

            return (
              <div
                key={img.id}
                draggable
                onDragStart={e => handleDragStart(e, img.id)}
                className={`group bg-[#111111] border rounded overflow-hidden transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/40 shadow-2xl scale-[1.01]'
                    : 'border-white/10 hover:border-[#8B7355]/60 hover:shadow-xl'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden cursor-grab active:cursor-grabbing">
                  {/* Selection Checkbox Overlay */}
                  <label
                    onClick={e => e.stopPropagation()}
                    className="absolute top-3 left-3 z-20 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectImage(img.id)}
                      className="w-5 h-5 accent-[#8B7355] rounded cursor-pointer"
                    />
                  </label>

                  {/* Thumbnail */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Current Category Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-1 bg-black/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#8B7355] border border-[#8B7355]/40 rounded font-mono">
                      {CATEGORIES_LIST.find(c => c.slug === img.category)?.name || img.category}
                    </span>
                  </div>

                  {/* Drag Handle Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest text-white bg-black/80 px-3 py-1.5 rounded border border-white/20">
                      ⋮⋮ Drag to Move
                    </span>
                  </div>
                </div>

                {/* Card Controls Footer */}
                <div className="p-4 space-y-3 bg-[#0d0d0d] border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span className="truncate max-w-[180px]" title={filename}>
                      {filename}
                    </span>
                    <span className="text-stone-600">
                      {img.width && img.height ? `${img.width}x${img.height}` : ''}
                    </span>
                  </div>

                  {/* Individual Category Dropdown */}
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                      Category:
                    </label>
                    <select
                      value={img.category}
                      onChange={e => handleSingleCategoryChange(img.id, e.target.value)}
                      disabled={saving}
                      className="bg-black text-white border border-white/20 px-2 py-1.5 text-xs rounded focus:outline-none focus:border-[#8B7355] cursor-pointer flex-1"
                    >
                      {CATEGORIES_LIST.map(cat => (
                        <option key={cat.slug} value={cat.slug}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
