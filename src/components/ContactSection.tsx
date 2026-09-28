import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
            Let's Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
            Get in Touch with Our Studio
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Have questions about custom flower arrangements, bulk corporate orders, wedding favors, or workshop visits? 
            We are always happy to chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels and Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Box */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-stone-600">Fastest response for custom orders & live photos</p>
                </div>
              </div>
              <a
                href="https://wa.me/15550198273?text=Hello%20Twist%20%26%20Bloom!%20I'm%20interested%20in%20your%20handmade%20pipe-cleaner%20crafts%20and%20would%20like%20to%20inquire."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BE5B] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+1 555-019-8273)</span>
              </a>
            </div>

            {/* Instagram Highlight Box */}
            <div className="bg-rose-50 border border-rose-200/80 rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-stone-900">Instagram Community</h3>
                  <p className="text-xs text-stone-600">Watch behind-the-scenes sculpting reels & drops</p>
                </div>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white hover:bg-stone-50 text-stone-900 font-semibold text-xs rounded-xl border border-stone-200 flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Instagram className="w-4 h-4 text-rose-600" />
                <span>Follow @twistandbloom_crafts</span>
              </a>
            </div>

            {/* Studio Info List */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 space-y-4 text-xs text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-semibold">Artisan Studio & Workshop:</strong>
                  <span>142 Artisan Lane, Suite 4B, Blossom District, CA 94107</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-semibold">Email Us:</strong>
                  <a href="mailto:hello@twistandbloomcrafts.com" className="hover:text-rose-700 underline">
                    hello@twistandbloomcrafts.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-semibold">Studio Phone:</strong>
                  <span>+1 (555) 019-8273 (Mon - Sat, 9am - 7pm PST)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
            <div className="mb-6 space-y-1">
              <h3 className="text-xl font-display font-bold text-stone-900">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500">
                Leave a note below and our craft team will respond within 12 hours.
              </p>
            </div>

            {isSent ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-950">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Thank you for reaching out. We will get back to you shortly with love and details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Inquiry Topic</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800"
                  >
                    <option value="Custom Order Details">Custom Order Details</option>
                    <option value="Wedding / Event Favors">Wedding / Event Bulk Favors</option>
                    <option value="Corporate Gifting">Corporate Gifting & Hampers</option>
                    <option value="Shipping & Delivery">Shipping & Delivery Question</option>
                    <option value="Workshop Visit">Studio Workshop Visit</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our artisans assist you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
