import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { portfolioImages, categories, PortfolioImage, Category } from '@/data/portfolio';

const PORTFOLIO_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'portfolio.ts');

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      images: portfolioImages,
      categories: categories,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch gallery data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { updates } = body as { updates: Array<{ id: string; category: string }> };

    if (!Array.isArray(updates) || updates.length === 0) {
      return NextResponse.json({ success: false, error: 'No updates provided' }, { status: 400 });
    }

    // Create map of updates
    const updateMap = new Map<string, string>();
    updates.forEach(u => updateMap.set(u.id, u.category));

    // Clone and update images array
    const updatedImages: PortfolioImage[] = portfolioImages.map(img => {
      if (updateMap.has(img.id)) {
        const newCat = updateMap.get(img.id)!;
        return {
          ...img,
          category: newCat,
        };
      }
      return img;
    });

    // Recalculate category counts
    const categoryCounts: Record<string, number> = {};
    updatedImages.forEach(img => {
      categoryCounts[img.category] = (categoryCounts[img.category] || 0) + 1;
    });

    // Update categories list with accurate counts
    const updatedCategories: Category[] = categories.map(cat => {
      const catImages = updatedImages.filter(i => i.category === cat.slug);
      return {
        ...cat,
        count: categoryCounts[cat.slug] || 0,
        coverImage: catImages.length > 0 ? catImages[0].src : cat.coverImage,
      };
    });

    // Format new file content
    const fileContent = `export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  width?: number;
  height?: number;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  count: number;
}

export const categories: Category[] = ${JSON.stringify(updatedCategories, null, 2)};

export const portfolioImages: PortfolioImage[] = ${JSON.stringify(updatedImages, null, 2)};
`;

    // Persist to src/data/portfolio.ts
    fs.writeFileSync(PORTFOLIO_FILE_PATH, fileContent, 'utf8');

    return NextResponse.json({
      success: true,
      updatedCount: updates.length,
      images: updatedImages,
      categories: updatedCategories,
    });
  } catch (error) {
    console.error('Error updating portfolio.ts:', error);
    return NextResponse.json({ success: false, error: 'Failed to update portfolio data' }, { status: 500 });
  }
}
