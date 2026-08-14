'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { useCursor } from '@/hooks/use-cursor';

// ============================================================================
// WEB3FORMS ACCESS KEY CONFIGURATION
// Replace 'YOUR_WEB3FORMS_ACCESS_KEY' below with your key from https://web3forms.com
// Example: const WEB3FORMS_ACCESS_KEY = 'a1b2c3d4-e5f6-7890-abcd-1234567890ab';
// ============================================================================
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '5edb26d9-2cfb-423e-a27a-5a42da95ef78';

export function Contact() {
  const { setCursorVariant } = useCursor();
  const [customKey, setCustomKey] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: '',
    botcheck: false, // Anti-spam honeypot
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    const handleCollectionSelection = (e: Event) => {
      const customEvent = e as CustomEvent<{ collectionTitle: string; eventType: string }>;
      if (customEvent.detail) {
        const { collectionTitle, eventType } = customEvent.detail;
        setFormData((prev) => ({
          ...prev,
          eventType: eventType || prev.eventType,
          message: `[Interested in: ${collectionTitle}]\n${prev.message || ''}`,
        }));
      }
    };

    window.addEventListener('select-collection-enquiry', handleCollectionSelection);
    return () => window.removeEventListener('select-collection-enquiry', handleCollectionSelection);
  }, []);

  const activeAccessKey = customKey.trim() || WEB3FORMS_ACCESS_KEY;
  const isKeyMissing = !activeAccessKey || activeAccessKey === 'YOUR_WEB3FORMS_ACCESS_KEY';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if honeypot is checked
    if (formData.botcheck) {
      return;
    }

    if (isKeyMissing) {
      setStatus('error');
      setErrorMessage('Please enter a valid Web3Forms Access Key below before submitting.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: activeAccessKey,
          subject: 'New Photography Enquiry',
          from_name: 'Bhavinesh Bharathan Photography Website',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          event_type: formData.eventType,
          event_date: formData.eventDate,
          location: formData.location,
          message: formData.message || 'No additional details provided.',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          eventType: '',
          eventDate: '',
          location: '',
          message: '',
          botcheck: false,
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Unable to submit enquiry. Please verify your Web3Forms Access Key.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="bg-secondary section-padding py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-10 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
            <span className="text-label text-bronze tracking-[0.25em] uppercase text-xs font-semibold">
              Seamless Online Enquiry
            </span>
            <h2 className="text-section-title text-white font-display">
              Let's Create<br />
              Something Extraordinary
            </h2>
            <p className="text-body-lg text-stone max-w-xl text-xs sm:text-base">
              Fill out your details below to submit an inquiry directly. We will review your dates and respond promptly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-primary/60 border border-white/10 p-5 sm:p-8 md:p-12 rounded-sm backdrop-blur-sm shadow-2xl">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* Success Message View */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="py-8 sm:py-12 px-4 sm:px-6 text-center space-y-5 sm:space-y-6"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-bronze/20 border border-bronze flex items-center justify-center mx-auto text-bronze text-2xl">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white">
                    Enquiry Sent Successfully
                  </h3>
                  <p className="text-body-lg text-stone max-w-md mx-auto text-xs sm:text-base">
                    Thank you! Your enquiry has been sent successfully. We will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="mt-4 sm:mt-6 uppercase tracking-[0.2em] font-heading text-xs border border-white/20 hover:border-bronze px-7 py-3.5 sm:px-8 sm:py-4 text-white hover:text-bronze transition-colors duration-300 cursor-pointer inline-block"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                /* Main Form View */
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 sm:gap-8"
                  onSubmit={handleSubmit}
                >
                  {/* Web3Forms Access Key Setup Banner if key is unconfigured */}
                  {isKeyMissing && (
                    <div className="p-4 bg-bronze/10 border border-bronze/30 text-stone text-xs leading-relaxed rounded space-y-2">
                      <div className="text-white font-heading font-semibold uppercase tracking-wider text-[11px] flex items-center gap-2">
                        <span>🔑 Web3Forms Access Key Required</span>
                      </div>
                      <p>
                        To receive form submissions in your inbox, enter your free Web3Forms Access Key below or add it to <code className="text-bronze">src/components/sections/contact.tsx</code>.
                      </p>
                      <input
                        type="text"
                        placeholder="Paste Web3Forms Access Key (e.g. a1b2c3d4-e5f6-7890-abcd-1234567890ab)"
                        value={customKey}
                        onChange={(e) => setCustomKey(e.target.value)}
                        className="w-full bg-secondary/80 border border-white/20 px-3 py-2 text-white placeholder-white/30 text-xs focus:outline-none focus:border-bronze font-mono mt-1"
                      />
                    </div>
                  )}

                  {/* Anti-spam Botcheck Honeypot (Hidden from real users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={formData.botcheck}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <ScrollReveal delay={0.1}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          disabled={status === 'submitting'}
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anjali & Rohan"
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white placeholder-white/25 focus:outline-none focus:border-bronze transition-colors text-base disabled:opacity-50 min-h-[44px]"
                        />
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          disabled={status === 'submitting'}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white placeholder-white/25 focus:outline-none focus:border-bronze transition-colors text-base disabled:opacity-50 min-h-[44px]"
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Row 2: Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <ScrollReveal delay={0.3}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={status === 'submitting'}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anjali@example.com"
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white placeholder-white/25 focus:outline-none focus:border-bronze transition-colors text-base disabled:opacity-50 min-h-[44px]"
                        />
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Event Location / City *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          disabled={status === 'submitting'}
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Kochi, Kerala / Destination"
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white placeholder-white/25 focus:outline-none focus:border-bronze transition-colors text-base disabled:opacity-50 min-h-[44px]"
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Row 3: Event Type & Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <ScrollReveal delay={0.5}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Event Type *
                        </label>
                        <select
                          name="eventType"
                          required
                          disabled={status === 'submitting'}
                          value={formData.eventType}
                          onChange={handleChange}
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white focus:outline-none focus:border-bronze transition-colors appearance-none cursor-pointer text-base disabled:opacity-50 min-h-[44px]"
                        >
                          <option value="" disabled className="bg-secondary text-stone">Select Event Type</option>
                          <option value="Wedding" className="bg-secondary text-white">Wedding</option>
                          <option value="Pre-Wedding" className="bg-secondary text-white">Pre-Wedding</option>
                          <option value="Model Shoot" className="bg-secondary text-white">Model Shoot</option>
                          <option value="Commercial Campaign" className="bg-secondary text-white">Commercial Campaign</option>
                          <option value="Film Photography" className="bg-secondary text-white">Film Photography</option>
                          <option value="Drone Cinematography" className="bg-secondary text-white">Drone Cinematography</option>
                          <option value="Maternity" className="bg-secondary text-white">Maternity</option>
                          <option value="Baby Shoot" className="bg-secondary text-white">Baby Shoot</option>
                        </select>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          required
                          disabled={status === 'submitting'}
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white focus:outline-none focus:border-bronze transition-colors text-base disabled:opacity-50 min-h-[44px]"
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Vision & Additional Details */}
                  <ScrollReveal delay={0.7}>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-stone font-heading">
                        Vision & Additional Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        disabled={status === 'submitting'}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event schedule, venue, or specific creative ideas..."
                        className="form-input w-full bg-transparent border-b border-white/20 pb-2.5 sm:pb-3 text-white placeholder-white/25 focus:outline-none focus:border-bronze transition-colors resize-none text-base disabled:opacity-50"
                      />
                    </div>
                  </ScrollReveal>

                  {/* Error Notification Banner */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 sm:p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs sm:text-sm rounded flex items-center justify-between"
                    >
                      <span>{errorMessage}</span>
                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="text-xs uppercase tracking-widest text-white/80 hover:text-white underline ml-3 flex-shrink-0"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  )}

                  {/* Single Web3Forms Submit Button */}
                  <ScrollReveal delay={0.8}>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      onMouseEnter={() => setCursorVariant('button')}
                      onMouseLeave={() => setCursorVariant('default')}
                      className="mt-2 sm:mt-4 w-full py-4 sm:py-5 px-6 sm:px-8 bg-bronze hover:bg-bronze/80 text-white font-heading text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(139,115,85,0.3)] hover:shadow-[0_0_35px_rgba(139,115,85,0.5)] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[50px]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <span>Submit Enquiry</span>
                      )}
                    </button>
                  </ScrollReveal>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details Side */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-12 pt-2 sm:pt-4">
            <ScrollReveal delay={0.2}>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-editorial text-white text-2xl sm:text-3xl font-display">Get In Touch Directly</h3>
                <p className="text-body-lg text-stone text-xs sm:text-base">
                  Available for assignments in Kerala, India and worldwide destination locations. Let's discuss your celebration.
                </p>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-6 sm:gap-8 border-t border-white/10 pt-6 sm:pt-8">
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col gap-1">
                  <span className="text-label text-stone tracking-widest text-[10px] sm:text-xs uppercase">Direct Phone</span>
                  <a
                    href="tel:+919544885698"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="text-white text-lg sm:text-xl font-heading hover:text-bronze transition-colors w-fit nav-link-premium min-h-[44px] flex items-center"
                  >
                    +91 9544885698
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col gap-1">
                  <span className="text-label text-stone tracking-widest text-[10px] sm:text-xs uppercase">Email Address</span>
                  <a
                    href="mailto:bhavineshbharathan@gmail.com"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="text-white text-base sm:text-xl font-heading hover:text-bronze transition-colors w-fit nav-link-premium min-h-[44px] flex items-center break-all sm:break-normal"
                  >
                    bhavineshbharathan@gmail.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="flex flex-col gap-1">
                  <span className="text-label text-stone tracking-widest text-[10px] sm:text-xs uppercase">Base Studio Location</span>
                  <p className="text-white text-base sm:text-xl font-heading">
                    Kerala, India (Available Worldwide)
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="flex flex-col gap-1">
                  <span className="text-label text-stone tracking-widest text-[10px] sm:text-xs uppercase">Instagram Handle</span>
                  <a
                    href="https://instagram.com/bhavinesh_bharathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursorVariant('link')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="text-white text-lg sm:text-xl font-heading hover:text-bronze transition-colors w-fit nav-link-premium min-h-[44px] flex items-center"
                  >
                    @bhavinesh_bharathan
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
