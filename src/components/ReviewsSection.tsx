import React, { useState } from 'react';
import { ReviewItem } from '../types';
import { Star, CheckCircle, Plus, X } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
  onAddReview: (review: ReviewItem) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [productBought, setProductBought] = useState('Pastel Dreamscape Everlasting Bouquet');
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author,
      rating,
      title: title.trim() || 'Wonderful handmade treasure!',
      comment,
      productBought,
      occasion,
      date: 'Just now',
      verified: true,
      avatarBg: 'bg-rose-100 text-rose-700'
    };

    onAddReview(newRev);
    setModalOpen(false);
    setAuthor('');
    setTitle('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Stats Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
              Customer Love & Trust
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
              Loved by Gift Givers Everywhere
            </h2>
            <p className="text-sm text-stone-600 max-w-xl">
              See what our customers say about receiving our handcrafted everlasting bouquets, lamps, and custom gifts.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center justify-end gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-1">
                <strong className="text-stone-900 font-bold">4.9 / 5.0</strong> based on 320+ reviews
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/80 flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating & Occasion */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-stone-500">
                    {rev.occasion}
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="font-bold text-base text-stone-900 leading-snug">
                  "{rev.title}"
                </h3>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Product Info */}
              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${rev.avatarBg}`}
                  >
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-stone-900">{rev.author}</span>
                      {rev.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <span className="text-[11px] text-stone-400">{rev.date}</span>
                  </div>
                </div>

                <span className="text-[11px] text-stone-500 italic max-w-[150px] truncate text-right">
                  {rev.productBought}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5 animate-in zoom-in-95">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-display font-bold text-stone-900">
                Share Your Experience
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Your feedback helps our craft studio blossom!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Picker */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setRating(num)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          num <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jessica M."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              {/* Product & Occasion */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Item Purchased</label>
                  <select
                    value={productBought}
                    onChange={(e) => setProductBought(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800"
                  >
                    <option value="Pastel Dreamscape Everlasting Bouquet">Pastel Bouquet</option>
                    <option value="Sunflower Sanctuary Glass Cloche Lamp">Sunflower Lamp</option>
                    <option value="Fluffy Teddy Bear Blossom Keychain">Teddy Keychain</option>
                    <option value="Signature Bespoke Keepsake Gift Hamper">Gift Hamper</option>
                    <option value="Custom Pipe-Cleaner Creation">Custom Order</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Occasion</label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800"
                  >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Valentine's Day">Valentine's Day</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Friendship gifts">Friendship</option>
                    <option value="Self Gift">Home Decor</option>
                  </select>
                </div>
              </div>

              {/* Review Title */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Headline</label>
                <input
                  type="text"
                  placeholder="Sum up your experience in one sentence"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              {/* Review Comment */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Review *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you liked about the craftsmanship, color, or gifting experience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Post Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
