import React, { useState } from 'react';
import { CartItem, Product, ProductColor } from '../types';
import { X, CheckCircle2, MessageCircle, ShieldCheck, Truck, Sparkles, CreditCard, Banknote } from 'lucide-react';

interface DirectOrderItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  directItem?: DirectOrderItem | null;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  directItem,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [giftNote, setGiftNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'whatsapp'>('whatsapp');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Items to order
  const orderList = directItem
    ? [
        {
          id: `direct-${directItem.product.id}`,
          product: directItem.product,
          selectedColor: directItem.selectedColor,
          quantity: directItem.quantity
        }
      ]
    : cartItems;

  const totalAmount = orderList.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    const generatedId = `TB-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedId);
    setIsSubmitted(true);
    onOrderCompleted();
  };

  const getWhatsAppReceiptUrl = () => {
    const itemsSummary = orderList
      .map(
        (i) => `• ${i.product.name} (${i.selectedColor.name}) x${i.quantity} = $${i.product.price * i.quantity}`
      )
      .join('%0A');

    const msg = `🌸 *New Order Confirmation - Twist & Bloom* 🌸%0A%0A` +
      `*Order ID:* ${orderNumber}%0A` +
      `*Customer:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Address:* ${address}, ${city}%0A` +
      `*Payment:* ${paymentMethod.toUpperCase()}%0A%0A` +
      `*Items Ordered:*%0A${itemsSummary}%0A%0A` +
      `*Total Amount:* $${totalAmount}%0A` +
      (giftNote ? `*Gift Note:* "${giftNote}"%0A%0A` : '%0A') +
      `Hello! I just placed this order. Please confirm delivery and artisan preparation time! ✨`;

    return `https://wa.me/15550198273?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in zoom-in-95 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close checkout modal"
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Order Confirmed Screen */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-stone-900">
                Order Confirmed!
              </h2>
              <p className="text-xs text-stone-500">
                Order Reference: <strong className="font-mono text-stone-900">{orderNumber}</strong>
              </p>
              <p className="text-sm text-stone-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>! Your handmade pipe-cleaner order has been safely placed.
                Our craft artisans will begin bending and assembling your piece right away.
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 text-left text-xs text-stone-700 space-y-2 border border-stone-200">
              <div className="flex justify-between font-medium">
                <span>Shipping To:</span>
                <span className="text-stone-900">{address}, {city}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Payment:</span>
                <span className="text-stone-900 uppercase">{paymentMethod}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-stone-200 text-sm text-stone-900">
                <span>Total Paid / Payable:</span>
                <span className="font-mono">${totalAmount}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppReceiptUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Artisan on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-medium transition-colors"
              >
                Back to Store
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
                Fast & Secure Checkout
              </p>
              <h2 className="text-2xl font-display font-bold text-stone-900">
                Complete Your Order
              </h2>
            </div>

            {/* Order Items Snapshot */}
            <div className="bg-stone-50 rounded-2xl p-3 border border-stone-200 max-h-36 overflow-y-auto space-y-2">
              {orderList.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.selectedColor.hex }} />
                    <span className="font-medium text-stone-800">{item.product.name}</span>
                    <span className="text-stone-400">({item.selectedColor.name} x{item.quantity})</span>
                  </div>
                  <span className="font-mono font-bold text-stone-900 tabular-nums">
                    ${item.product.price * item.quantity}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-stone-200 flex justify-between text-xs font-bold text-stone-900">
                <span>Total Amount:</span>
                <span className="font-mono tabular-nums">${totalAmount}</span>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Recipient or buyer name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Contact / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Email Address (Receipt)</label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">City / District *</label>
                  <input
                    type="text"
                    required
                    placeholder="City, State / ZIP"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Delivery Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Street name, apt, suite or unit"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Complimentary Gift Card Message</label>
                <input
                  type="text"
                  placeholder="e.g. Happy 21st Birthday Sarah! With all my love."
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700">Payment Option</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'whatsapp'
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Pay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-stone-700" />
                    <span>Cash on Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-xs font-medium flex flex-col items-center gap-1 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400'
                        : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-stone-700" />
                    <span>Card / Apple Pay</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Place Order (${totalAmount})</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
