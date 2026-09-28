import { ReviewItem } from '../types';

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    rating: 5,
    title: 'The most breathtaking bouquet I have ever received!',
    comment: 'My partner gifted me the Pastel Dreamscape Everlasting Bouquet for our 3rd anniversary. The craftsmanship on the velvet tulips is beyond words—it looks straight out of an ethereal fairy tale. Six months later, it sits on my dresser looking as fluffy and vivid as day one!',
    productBought: 'Pastel Dreamscape Everlasting Bouquet',
    occasion: 'Anniversaries',
    date: '2 weeks ago',
    verified: true,
    avatarBg: 'bg-rose-100 text-rose-700'
  },
  {
    id: 'rev-2',
    author: 'Chloe M.',
    rating: 5,
    title: 'Sunflower lamp gave my bedroom the coziest aura',
    comment: 'The Sunflower Bell Jar lamp with the fairy lights is pure magic at night. The pipe cleaners are so dense and plush—you can see how much care went into curling every individual petal. Ordering custom colors for my sister’s upcoming birthday too!',
    productBought: 'Sunflower Sanctuary Glass Cloche Lamp',
    occasion: 'Birthdays',
    date: '1 month ago',
    verified: true,
    avatarBg: 'bg-amber-100 text-amber-700'
  },
  {
    id: 'rev-3',
    author: 'Marcus & Jessica Tan',
    rating: 5,
    title: 'Ordered bespoke graduation bouquet for our daughter',
    comment: 'We wanted something our daughter could keep forever from her college convocation. The team customized the bouquet in her university colors with a tiny graduation cap. She cried happy tears! Amazing service and seamless communication on WhatsApp.',
    productBought: 'Graduation Blossom Keepsake Bouquet',
    occasion: 'Graduation',
    date: '3 weeks ago',
    verified: true,
    avatarBg: 'bg-indigo-100 text-indigo-700'
  },
  {
    id: 'rev-4',
    author: 'Aria Lin',
    rating: 5,
    title: 'Cutest keychains for me and my best friends',
    comment: 'Ordered 3 matching teddy bear keychains with custom tiny tulips. The gold clasps are sturdy and the bears are so soft to touch. Everyone keeps asking where I got them! Packaging arrived smelling like subtle fresh lavender.',
    productBought: 'Fluffy Teddy Bear Blossom Keychain',
    occasion: 'Friendship gifts',
    date: 'Just recently',
    verified: true,
    avatarBg: 'bg-emerald-100 text-emerald-700'
  }
];
