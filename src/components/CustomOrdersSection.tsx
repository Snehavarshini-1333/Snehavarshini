import React, { useState } from 'react';
import { CustomOrderData } from '../types';
import { Palette, Sparkles, Upload, CheckCircle2, MessageCircle, Copy, Check, Info } from 'lucide-react';

interface CustomOrdersSectionProps {
  onSubmitCustomOrder: (order: CustomOrderData) => void;
}

export const CustomOrdersSection: React.FC<CustomOrdersSectionProps> = ({
  onSubmitCustomOrder
}) => {
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [productType, setProductType] = useState<CustomOrderData['productType']>('Bouquet');
  const [selectedColors, setSelectedColors] = useState<string[]>(['Sakura Pink', 'Lilac Mist']);
  const [bouquetSize, setBouquetSize] = useState('Classic 7-Stem ($45)');
  const [personalizedName, setPersonalizedName] = useState('');
  const [lampDesign, setLampDesign] = useState('Glass Bell Jar with Fairy Lights');
  const [giftCombination, setGiftCombination] = useState('Bouquet + Matching Keychain in Gift Box');
  const [occasion, setOccasion] = useState('Birthday');
  const [customRequirements, setCustomRequirements] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [referenceImg, setReferenceImg] = useState<{ name: string; url: string } | null>(null);
  const [submittedOrder, setSubmittedOrder] = useState<CustomOrderData | null>(null);
  const [copied, setCopied] = useState(false);

  const availableColorPalette = [
    { name: 'Sakura Pink', hex: '#FFB7C5' },
    { name: 'Lilac Mist', hex: '#C8B6FF' },
    { name: 'Buttercup Yellow', hex: '#FFE5A0' },
    { name: 'Peach Cream', hex: '#FFD3B6' },
    { name: 'Mint Meadow', hex: '#B5C99A' },
    { name: 'Sky Cerulean', hex: '#A0C4FF' },
    { name: 'Crimson Romance', hex: '#D62828' },
    { name: 'Pure Snow White', hex: '#FFFDF9' }
  ];

  const handleToggleColor = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      if (selectedColors.length > 1) {
        setSelectedColors(selectedColors.filter((c) => c !== colorName));
      }
    } else {
      if (selectedColors.length < 5) {
        setSelectedColors([...selectedColors, colorName]);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferenceImg({ name: file.name, url });
    }
  };

  // Estimate price
  const calculateEstimatedPrice = () => {
    let base = 25;
    if (productType === 'Bouquet') {
      if (bouquetSize.includes('Petite')) base = 32;
      else if (bouquetSize.includes('Classic')) base = 48;
      else if (bouquetSize.includes('Deluxe')) base = 75;
      else if (bouquetSize.includes('Grand')) base = 110;
    } else if (productType === 'Decorative Lamp') {
      base = 65;
    } else if (productType === 'Cute Keychain') {
      base = 15;
    } else if (productType === 'Customized Gift Set') {
      base = 85;
    } else if (productType === 'Flower Stem') {
      base = 12;
    }
    return base * quantity;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !contactNumber.trim()) return;

    const newOrder: CustomOrderData = {
      id: `TB-CUST-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      contactNumber,
      email,
      productType,
      preferredColors: selectedColors,
      bouquetSize: productType === 'Bouquet' ? bouquetSize : undefined,
      personalizedName: personalizedName.trim() || undefined,
      lampDesign: productType === 'Decorative Lamp' ? lampDesign : undefined,
      giftCombination: productType === 'Customized Gift Set' ? giftCombination : undefined,
      occasion,
      customRequirements,
      quantity,
      referenceImageName: referenceImg?.name,
      referenceImageData: referenceImg?.url,
      estimatedPrice: calculateEstimatedPrice(),
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    onSubmitCustomOrder(newOrder);
    setSubmittedOrder(newOrder);
  };

  const generateWhatsAppMessage = (order: CustomOrderData) => {
    const text = `🌸 *New Custom Order Inquiry - Twist & Bloom* 🌸%0A%0A` +
      `*Order ID:* ${order.id}%0A` +
      `*Name:* ${order.customerName}%0A` +
      `*Contact:* ${order.contactNumber}%0A` +
      `*Product Type:* ${order.productType}%0A` +
      (order.bouquetSize ? `*Bouquet Size:* ${order.bouquetSize}%0A` : '') +
      (order.lampDesign ? `*Lamp Design:* ${order.lampDesign}%0A` : '') +
      (order.giftCombination ? `*Gift Combination:* ${order.giftCombination}%0A` : '') +
      (order.personalizedName ? `*Personalized Name/Text:* "${order.personalizedName}"%0A` : '') +
      `*Preferred Colors:* ${order.preferredColors.join(', ')}%0A` +
      `*Occasion:* ${order.occasion}%0A` +
      `*Quantity:* ${order.quantity}%0A` +
      `*Estimated Total:* $${order.estimatedPrice}%0A` +
      (order.customRequirements ? `*Special Notes:* ${order.customRequirements}%0A%0A` : '%0A') +
      `Hello! I just configured this custom order on your website. Could we discuss finishing details and dispatch time? ✨`;
    return text;
  };

  const handleCopySummary = (order: CustomOrderData) => {
    const text = `Twist & Bloom Custom Order #${order.id}\nCustomer: ${order.customerName}\nProduct: ${order.productType}\nColors: ${order.preferredColors.join(', ')}\nOccasion: ${order.occasion}\nQuantity: ${order.quantity}\nEstimate: $${order.estimatedPrice}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="custom-orders" className="py-16 bg-[#F6F2EC]/60 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-800">
            Personalized Craft Studio
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900">
            Customize Your Handmade Order
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Have a special color scheme, bouquet size, or personalized name in mind?
            Share your idea, and our artisans will craft your vision petal by petal.
          </p>
        </div>

        {submittedOrder ? (
          /* Success Card */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto text-rose-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-stone-900">
                Custom Order Request Received!
              </h3>
              <p className="text-xs text-stone-500">
                Reference Code: <strong className="font-mono text-stone-800">{submittedOrder.id}</strong>
              </p>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Thank you, <strong>{submittedOrder.customerName}</strong>! We have saved your custom specifications.
                Connect directly with our craft artisan on WhatsApp to finalize details or discuss reference photos.
              </p>
            </div>

            {/* Order snapshot summary */}
            <div className="bg-stone-50 rounded-2xl p-4 text-left text-xs text-stone-700 space-y-2 border border-stone-200/70">
              <div className="flex justify-between">
                <span className="text-stone-500">Item:</span>
                <span className="font-medium text-stone-900">{submittedOrder.productType} (x{submittedOrder.quantity})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Colors:</span>
                <span className="font-medium text-stone-900">{submittedOrder.preferredColors.join(', ')}</span>
              </div>
              {submittedOrder.personalizedName && (
                <div className="flex justify-between">
                  <span className="text-stone-500">Personalized Charm:</span>
                  <span className="font-medium text-stone-900">"{submittedOrder.personalizedName}"</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-stone-500">Occasion:</span>
                <span className="font-medium text-stone-900">{submittedOrder.occasion}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                <span>Estimated Price:</span>
                <span className="font-mono">${submittedOrder.estimatedPrice}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/15550198273?text=${generateWhatsAppMessage(submittedOrder)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to Artisan on WhatsApp</span>
              </a>

              <button
                onClick={() => handleCopySummary(submittedOrder)}
                className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Details' : 'Copy Details'}</span>
              </button>
            </div>

            <button
              onClick={() => setSubmittedOrder(null)}
              className="text-xs text-rose-700 hover:underline pt-2 block mx-auto"
            >
              ← Create another custom request
            </button>
          </div>
        ) : (
          /* Customization Form & Live Price Preview Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6"
            >
              {/* Step 1: Product Type */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  1. What would you like us to handcraft?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(['Bouquet', 'Decorative Lamp', 'Cute Keychain', 'Customized Gift Set', 'Flower Stem'] as const).map(
                    (type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setProductType(type)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                          productType === type
                            ? 'bg-rose-50 border-rose-400 text-rose-900 shadow-xs ring-1 ring-rose-400'
                            : 'bg-stone-50/70 border-stone-200 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        {type === 'Bouquet' && '💐 '}
                        {type === 'Decorative Lamp' && '💡 '}
                        {type === 'Cute Keychain' && '🔑 '}
                        {type === 'Customized Gift Set' && '🎁 '}
                        {type === 'Flower Stem' && '🌸 '}
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Conditional Options based on Product Type */}
              {productType === 'Bouquet' && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Bouquet Size & Density
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: 'Petite 3-Stem', price: '$32' },
                      { label: 'Classic 7-Stem', price: '$48' },
                      { label: 'Deluxe 15-Stem', price: '$75' },
                      { label: 'Grand 25-Stem', price: '$110' }
                    ].map((sz) => (
                      <button
                        key={sz.label}
                        type="button"
                        onClick={() => setBouquetSize(`${sz.label} (${sz.price})`)}
                        className={`p-2.5 rounded-xl border text-center text-xs transition-all ${
                          bouquetSize.includes(sz.label)
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <p className="font-semibold">{sz.label}</p>
                        <p className="text-[11px] opacity-80">{sz.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {productType === 'Decorative Lamp' && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Lamp Style & Base
                  </label>
                  <select
                    value={lampDesign}
                    onChange={(e) => setLampDesign(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  >
                    <option value="Glass Bell Jar with Fairy Lights">Glass Bell Jar with Warm Fairy Lights & Wood Base</option>
                    <option value="Sunflower Cloche Night Light">Illuminated Sunflower Garden in Cloche</option>
                    <option value="Bedside Fluffy Cloud Lamp">Fluffy Chenille Cloud Bedside Lamp</option>
                    <option value="Mini Ceramic Vase Lamp">Glazed Ceramic Bud Vase with Lit Blooms</option>
                  </select>
                </div>
              )}

              {productType === 'Cute Keychain' && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Personalized Name / Initial Charm (Optional)
                  </label>
                  <input
                    type="text"
                    maxLength={15}
                    placeholder="e.g. 'Emma' or letter 'S'"
                    value={personalizedName}
                    onChange={(e) => setPersonalizedName(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                  <p className="text-[11px] text-stone-500">
                    We hand-engrave a natural wood charm or sculpt a mini letter charm to attach with gold hardware.
                  </p>
                </div>
              )}

              {productType === 'Customized Gift Set' && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Gift Combination Preference
                  </label>
                  <select
                    value={giftCombination}
                    onChange={(e) => setGiftCombination(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  >
                    <option value="Bouquet + Matching Keychain in Gift Box">Bouquet + Matching Keychain in Presentation Box ($85)</option>
                    <option value="Floral Cloche Lamp + Personalized Letter">Floral Cloche Lamp + Calligraphy Note Box ($95)</option>
                    <option value="Graduate Celebration Hamper">Graduate Celebration Hamper with Cap & Lights ($78)</option>
                    <option value="Romantic Couple Everlasting Rose Box">Romantic Couple Everlasting Rose Box ($80)</option>
                  </select>
                </div>
              )}

              {/* Step 2: Preferred Color Palette */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    2. Select Preferred Pastel Colors (Pick 1-4)
                  </label>
                  <span className="text-[11px] text-stone-500">{selectedColors.length} selected</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableColorPalette.map((col) => {
                    const isSelected = selectedColors.includes(col.name);
                    return (
                      <button
                        key={col.name}
                        type="button"
                        onClick={() => handleToggleColor(col.name)}
                        className={`p-2 rounded-xl border flex items-center gap-2 text-xs transition-all ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-xs'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-stone-300 shrink-0"
                          style={{ backgroundColor: col.hex }}
                        />
                        <span className="truncate">{col.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Occasion & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    3. Occasion / Celebration
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  >
                    <option value="Birthday">Birthday 🎂</option>
                    <option value="Anniversary">Anniversary 💕</option>
                    <option value="Valentine's Day">Valentine's Day 💐</option>
                    <option value="Graduation">Graduation 🎓</option>
                    <option value="Friendship">Friendship Keepsake 🫶</option>
                    <option value="Festival / Holidays">Festival / Celebration ✨</option>
                    <option value="Just Because / Self Love">Just Because 🌸</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 font-bold hover:bg-stone-200 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-mono text-base font-bold text-stone-800 w-8 text-center tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 font-bold hover:bg-stone-200 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 4: Custom Requirements */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  4. Custom Notes & Special Details
                </label>
                <textarea
                  rows={3}
                  value={customRequirements}
                  onChange={(e) => setCustomRequirements(e.target.value)}
                  placeholder="Describe your flower choices (e.g., more daisies, pink ribbon bow, specific date needed by, greeting card message)..."
                  className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
              </div>

              {/* Step 5: Reference Image Upload */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  5. Upload Reference Photo or Inspiration (Optional)
                </label>
                <div className="border-2 border-dashed border-stone-200 rounded-2xl p-4 text-center hover:border-rose-300 transition-colors bg-stone-50/50">
                  {referenceImg ? (
                    <div className="flex items-center justify-between bg-white p-2 rounded-xl border border-stone-200">
                      <div className="flex items-center gap-3">
                        <img
                          src={referenceImg.url}
                          alt="Uploaded reference"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <span className="text-xs text-stone-700 font-medium truncate max-w-[200px]">
                          {referenceImg.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setReferenceImg(null)}
                        className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer block space-y-1">
                      <Upload className="w-6 h-6 text-stone-400 mx-auto" />
                      <p className="text-xs text-stone-600">
                        <span className="text-rose-700 font-medium">Click to upload</span> an inspiration image (PNG, JPG)
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Step 6: Customer Contact Information */}
              <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Contact / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl p-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-stone-900 hover:bg-stone-800 active:scale-[0.99] text-white text-sm font-semibold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-rose-300" />
                <span>Submit Custom Order (${calculateEstimatedPrice()})</span>
              </button>
            </form>

            {/* Live Artisan Preview Sticky Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm sticky top-24 space-y-5">
              <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>Customization Summary</span>
              </div>

              <div className="aspect-[4/3] rounded-2xl bg-stone-100 overflow-hidden relative">
                <img
                  src={
                    productType === 'Bouquet'
                      ? '/src/assets/images/product_tulip_bouquet_1790585719349.jpg'
                      : productType === 'Decorative Lamp'
                      ? '/src/assets/images/product_sunflower_lamp_1790585731582.jpg'
                      : productType === 'Cute Keychain'
                      ? '/src/assets/images/product_cute_keychains_1790585743089.jpg'
                      : productType === 'Customized Gift Set'
                      ? '/src/assets/images/product_gift_box_1790585765482.jpg'
                      : '/src/assets/images/product_single_flowers_1790585753377.jpg'
                  }
                  alt="Custom order preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">{productType}</p>
                    <p className="opacity-90">{occasion} Special</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                  <span>Selected Palette:</span>
                  <div className="flex items-center gap-1">
                    {selectedColors.map((c) => (
                      <span
                        key={c}
                        title={c}
                        className="w-3.5 h-3.5 rounded-full border border-stone-200 inline-block"
                        style={{
                          backgroundColor:
                            availableColorPalette.find((item) => item.name === c)?.hex || '#E5D4C0'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {productType === 'Bouquet' && (
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span>Size:</span>
                    <span className="font-medium text-stone-800">{bouquetSize}</span>
                  </div>
                )}

                {personalizedName && (
                  <div className="flex justify-between py-1.5 border-b border-stone-100">
                    <span>Personalized:</span>
                    <span className="font-medium text-stone-800 font-mono">"{personalizedName}"</span>
                  </div>
                )}

                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span>Craft Time:</span>
                  <span className="font-medium text-stone-800">2–3 Days Handcrafting</span>
                </div>

                <div className="pt-2 flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-stone-800">Estimated Total:</span>
                  <span className="text-2xl font-bold font-mono text-stone-900 tabular-nums">
                    ${calculateEstimatedPrice()}
                  </span>
                </div>
              </div>

              <div className="bg-rose-50/70 rounded-xl p-3 flex items-start gap-2.5 text-[11px] text-rose-900">
                <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <p>
                  No upfront charge! Submitting sends your request to our artisan workshop. We confirm color swatches and delivery date before processing.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
