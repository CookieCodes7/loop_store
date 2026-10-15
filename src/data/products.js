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

  // =========================
  // RINGS
  // =========================

  {
    id: 1,
    name: 'Crimson Heart Ring',
    price: 99,
    k: 'ring',
    mat: 'Silver-tone metal with red detailing',
    desc: 'A bold heart-inspired ring with deep red detailing. The heart represents love, passion and emotional connection, while the darker sculpted design gives it a more mysterious edge. Made for anyone who wears their feelings without saying a word.',
    images: ['/images/products/crimson-heart-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'heart', 'love', 'red'],
    dim: 'Open adjustable band',
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
    desc: 'A distinctive playing-card inspired ring covered in intricate details. Cards represent chance, risk and the unpredictable nature of the game. A piece for those who are willing to take their chances and play by their own rules.',
    images: ['/images/products/card-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'cards', 'luck', 'risk'],
    dim: 'Open adjustable band',
    stock: 12,
    featured: true
  },

  {
    id: 3,
    name: 'Dragon Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A powerful dragon-inspired ring with an aggressive sculpted silhouette. The dragon has long represented strength, power, courage and protection. Its detailed form gives the piece a commanding presence.',
    images: ['/images/products/dragon-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'dragon', 'strength', 'power'],
    dim: 'Open adjustable band',
    stock: 12,
    featured: true
  },

  {
    id: 4,
    name: 'Serpent Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A serpent-inspired ring built around flowing curves and textured detailing. The serpent represents transformation, rebirth and adaptability, making this piece a symbol of becoming something new without forgetting where you came from.',
    images: ['/images/products/serpent-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'serpent', 'rebirth', 'transformation'],
    dim: 'Open adjustable band',
    stock: 12,
    featured: true
  },

  {
    id: 5,
    name: 'Red Stone Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone metal with red stone detailing',
    desc: 'A sharp silver-tone ring centred around a deep red stone. Red represents passion, confidence and intensity, giving the piece a bold character that immediately draws attention.',
    images: ['/images/products/red-stone-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'red', 'stone', 'passion'],
    dim: 'Open adjustable band',
    stock: 12
  },

  {
    id: 6,
    name: 'Bat Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal',
    desc: 'A striking bat-shaped ring with a wide sculpted silhouette. The bat represents mystery, independence and the ability to move through darkness without fear. A dark statement piece for those who prefer the unconventional.',
    images: ['/images/products/bat-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'bat', 'dark', 'mystery'],
    dim: 'Open adjustable band',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 7,
    name: 'Royal Crown Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone sculpted metal with dark detailing',
    desc: 'A detailed crown ring built around a central royal emblem. The crown represents confidence, leadership and owning your individuality. A reminder to carry yourself like you belong at the top.',
    images: ['/images/products/crown-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'crown', 'royal', 'confidence'],
    dim: 'Open adjustable band',
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
    desc: 'A detailed eagle ring with wings spread across the band. The eagle represents freedom, vision, strength and the courage to rise above limitations. A powerful piece with a strong sense of movement.',
    images: ['/images/products/eagle-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'eagle', 'freedom', 'strength'],
    dim: 'Open adjustable band',
    stock: 12,
    featured: true,
    isNew: true
  },

  {
    id: 9,
    name: 'Star Ring',
    price: 129,
    k: 'ring',
    mat: 'Silver-tone metal with textured detailing',
    desc: 'A bold star-centred ring framed by textured detailing. The star represents ambition, direction and the pursuit of something greater. A simple symbol with a strong message: keep moving toward your own path.',
    images: ['/images/products/star-ring.jpg'],
    cat: 'Rings',
    tags: ['statement', 'star', 'ambition', 'direction'],
    dim: 'Open adjustable band',
    stock: 12,
    isNew: true
  },


  // =========================
  // NECKLACES
  // =========================

  {
    id: 10,
    name: 'Red Edge Cross Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with red detailing',
    desc: 'A sleek cross pendant with a striking red accent running along its edge. The cross represents faith, belief and personal conviction, while the red detailing adds a bold sense of passion and intensity.',
    images: ['/images/products/katana-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'cross', 'red', 'faith'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 11,
    name: 'Mini Axe Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal',
    desc: 'A compact axe-shaped pendant with sculpted detailing. The axe represents strength, determination and the willingness to cut through obstacles standing in your way. Small in size, but bold in meaning.',
    images: ['/images/products/mini-axe-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'axe', 'strength', 'statement'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 12,
    name: 'Starlight Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal',
    desc: 'A delicate chain finished with a luminous star-shaped pendant and a smaller star detail. Stars represent hope, ambition and direction — a reminder to keep looking toward something greater.',
    images: ['/images/products/starlight-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'star', 'hope', 'celestial'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 13,
    name: 'Angel Heart Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with red detailing',
    desc: 'A striking red heart framed by detailed angel wings. The heart represents love and passion, while the wings represent protection, freedom and guidance. Together they create a piece built around love with a sense of protection.',
    images: ['/images/products/angel-heart-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'heart', 'angel', 'love'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 14,
    name: 'Strawberry Charm Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with red and green detailing',
    desc: 'A slim silver-tone chain finished with a tiny strawberry-shaped charm. The strawberry represents sweetness, playfulness and enjoying the little things, giving this piece a lighter personality.',
    images: ['/images/products/strawberry-charm-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'strawberry', 'charm', 'playful'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 15,
    name: 'Pink Heart Orbit Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with pink detailing',
    desc: 'A faceted pink heart pendant wrapped with a silver-tone band. The heart represents love and connection, while the orbit-like framing gives it a sense of movement and individuality.',
    images: ['/images/products/pink-heart-orbit-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'heart', 'pink', 'love'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 16,
    name: 'Pink Blossom Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with pink detailing',
    desc: 'A simple chain paired with a soft pink flower pendant. Flowers represent growth, beauty and new beginnings, making this a subtle piece for anyone embracing change and personal growth.',
    images: ['/images/products/pink-blossom-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'flower', 'pink', 'growth'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 17,
    name: 'Pink Lightning Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal with pink detailing',
    desc: 'A sharp lightning-bolt pendant covered in pink detailing. Lightning represents energy, speed and sudden change. Its angular silhouette gives the necklace an energetic, confident character.',
    images: ['/images/products/pink-lightning-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'lightning', 'pink', 'energy'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 18,
    name: 'Bat Pendant Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal',
    desc: 'A clean bat pendant with a bold silhouette. The bat represents mystery, independence and embracing the darker side of individuality. A simple symbol with an unmistakably alternative character.',
    images: ['/images/products/bat-pendant-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'bat', 'dark', 'mystery'],
    dim: 'One Size',
    stock: 12
  },

  {
    id: 19,
    name: 'Geometric Symbol Necklace',
    price: 129,
    k: 'necklace',
    mat: 'Silver-tone metal',
    desc: 'A polished pendant built around an abstract geometric symbol. Its open design represents individuality and interpretation — a symbol that can mean something different to the person wearing it.',
    images: ['/images/products/berserk-necklace.jpg'],
    cat: 'Necklaces',
    tags: ['necklace', 'geometric', 'symbol', 'minimal'],
    dim: 'One Size',
    stock: 12
  }

].map((p) => ({
  ...p,
  slug: slugify(p.name)
}));


export const EXTRA = {};


export const STYLES = [
  ['Everyday', 'ring'],
  ['Statement', 'ring'],
  ['Essentials', 'ring'],
  ['Stack', 'ring']
];