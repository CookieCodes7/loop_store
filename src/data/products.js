export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const FILTERS = [
  'All',
  'Rings',
  'Necklaces',
  'Bracelets',
  'Charms'
];

export const PRODUCTS = [

  {
    id: 1,
    name: 'Crimson Heart Ring',
    price: 99,
    k: 'ring',
    mat: 'Silver-tone metal with red detailing',
    desc: 'A bold silver-tone ring built around a striking heart-inspired design. The deep red detailing adds contrast to the sculpted metal, creating a dark statement piece made to stand out.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/crimson-heart-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'everyday'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 2,
    name: 'Card Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone metal with engraved detailing',
    desc: 'A distinctive ring inspired by playing-card symbolism. Intricate engraved details give the piece a vintage edge while the sculpted silver-tone finish keeps it sharp and modern.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/card-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'everyday'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true
  },

  {
    id: 3,
    name: 'Dragon Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A detailed dragon-inspired ring with a powerful sculpted silhouette. Textured detailing and an aggressive profile give this piece a strong presence without being overly flashy.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/dragon-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'essentials'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true
  },

  {
    id: 4,
    name: 'Serpent Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A serpent-inspired ring designed with flowing curves and textured detailing. Its sculptural shape wraps naturally around the finger for a distinctive everyday statement.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/serpent-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'stack'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true
  },

  {
    id: 5,
    name: 'Red Stone Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone metal with red stone detailing',
    desc: 'A sharp silver-tone ring centred around a deep red stone. The contrast between the polished metal and vivid red centre gives the piece a dark, confident character.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/red-stone-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'essentials'],
    dim: 'Adjustable fit',
    stock: 12
  },


    {
    id: 6,
    name: 'Bat Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A bold bat-inspired ring with a wide sculpted silhouette and sharp wing details. The polished silver-tone finish contrasts with darker recessed details for a dark, striking look.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/bat-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'dark'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 7,
    name: 'Royal Crown Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A distinctive crown-inspired ring surrounded by intricate sculpted details. The raised crown centerpiece gives it a bold royal character while the open band keeps the design visually sharp.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/crown-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'royal'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 8,
    name: 'Eagle Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'An eagle-inspired ring featuring detailed spread wings across the front. Deep engraved textures bring out the feather pattern and give the piece a powerful, detailed presence.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/eagle-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'dark'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 9,
    name: 'Star Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A clean statement ring built around a raised five-point star. Textured detailing across the band adds depth while the polished star creates a strong contrast.',
    variants: ['6', '7', '8', '9', '10'],
    images: [
      '/images/products/star-ring.jpg'
    ],
    cat: 'Rings',
    tags: ['statement', 'everyday'],
    dim: 'Adjustable fit',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
  id: 'necklace-cross-red',
  name: 'Red Edge Cross Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'cross', 'red', 'silver'],
  description:
    'A sleek silver-tone necklace featuring a long cross pendant with a striking red accent running along its edge. A darker, statement-style piece with a sharp silhouette.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/katana-necklace.jpg']
},

{
  id: 'necklace-mini-axe',
  name: 'Mini Axe Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'axe', 'statement', 'silver'],
  description:
    'A compact silver-tone pendant built around a miniature axe design, finished with small sculpted details around the handle. A playful statement piece with an edgy feel.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/mini-axe-necklace.jpg']
},

{
  id: 'necklace-star',
  name: 'Starlight Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'star', 'silver', 'celestial'],
  description:
    'A delicate silver-tone chain finished with a luminous star-shaped pendant and a smaller star detail beside it. A subtle celestial piece that adds a softer touch to everyday fits.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/starlight-necklace.jpg']
},

{
  id: 'necklace-heart-angel',
  name: 'Angel Heart Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'heart', 'angel', 'red'],
  description:
    'A striking heart-shaped red pendant framed by detailed angel wings. The contrast between the bright red heart and silver-tone detailing gives this necklace a bold romantic character.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/angel-heart-necklace.jpg']
},

{
  id: 'necklace-strawberry',
  name: 'Strawberry Charm Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'strawberry', 'red', 'charm'],
  description:
    'A slim silver-tone chain finished with a tiny strawberry-shaped charm in red and green. A playful everyday piece with a small pop of colour.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/strawberry-charm-necklace.jpg']
},

{
  id: 'necklace-pink-heart',
  name: 'Pink Heart Orbit Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'heart', 'pink', 'silver'],
  description:
    'A faceted pink heart pendant wrapped with a silver-tone band detail. The combination creates a clean, dimensional look that stands out without being oversized.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/pink-heart-orbit-necklace.jpg']
},

{
  id: 'necklace-pink-flower',
  name: 'Pink Blossom Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'flower', 'pink', 'minimal'],
  description:
    'A simple silver-tone chain paired with a round pink flower pendant. Its soft colour and understated shape make it an easy piece for everyday styling.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/pink-blossom-necklace.jpg']
},

{
  id: 'necklace-pink-lightning',
  name: 'Pink Lightning Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'lightning', 'pink', 'statement'],
  description:
    'A sharp lightning-bolt pendant covered in pink detailing. The angular shape gives the necklace an energetic, modern look that works especially well with streetwear-inspired outfits.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/pink-lightning-necklace.jpg']
},

{
  id: 'necklace-bat',
  name: 'Bat Pendant Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'bat', 'dark', 'statement'],
  description:
    'A clean silver-tone bat pendant with a bold silhouette. Simple, recognizable and slightly dark, making it an easy statement piece for an edgier look.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/bat-pendant-necklace.jpg']
},

{
  id: 'berserk-symbol',
  name: 'Geometric Symbol Necklace',
  price: 129,
  category: 'Necklaces',
  tags: ['necklace', 'geometric', 'silver', 'minimal'],
  description:
    'A polished silver-tone pendant built around an abstract geometric symbol. Its open design keeps the piece clean and modern while giving it a distinctive silhouette.',
  variants: ['One Size'],
  stock: 12,
  images: ['/images/products/berserk-necklace.jpg']
}

].map((p) => ({
  ...p,
  cat: p.cat || p.category,
  desc: p.desc || p.description,
  slug: slugify(p.name),
}));

export const EXTRA = {};

export const STYLES = [
  ['Everyday', 'ring'],
  ['Statement', 'ring'],
  ['Essentials', 'ring'],
  ['Stack', 'ring']
];