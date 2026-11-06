import type { Product } from "@/shared/types/product.ts";

// SOLEIL_VII
import Image1 from "/images/productCard/product-1.webp";
import Image2 from "/images/productCard/product-2.webp";
import Image3 from "/images/productCard/product-3.webp";
import Image4 from "/images/productCard/product-4.webp";
// NUIT_DOPALE
import Image5 from "/images/productCard/product-5.webp";
import Image6 from "/images/productCard/product-6.webp";
import Image7 from "/images/productCard/product-7.webp";
import Image8 from "/images/productCard/product-8.webp";

export const MOCKS_PRODUCTS: Product[] = [
  // Товары главной страницы (label определяет секцию)
  {
    id: 1,
    name: "Oud Minuit",
    brand: "X|Cos",
    category: "fragrance",
    price: 750,
    image: Image1,
    description: "...",
    label: "soleil",
  },
  {
    id: 2,
    name: "Nuit de Suède",
    brand: "X|Cos",
    category: "fragrance",
    price: 420,
    image: Image2,
    description: "...",
    label: "soleil",
  },
  {
    id: 3,
    name: "Iris Ombre",
    brand: "X|Cos",
    category: "fragrance",
    price: 680,
    image: Image3,
    description: "...",
    label: "soleil",
  },
  {
    id: 4,
    name: "Jasmin Rêve",
    brand: "X|Cos",
    category: "fragrance",
    price: 1200,
    image: Image4,
    description: "...",
    label: "soleil",
  },
  {
    id: 5,
    name: "Velvet Noir",
    brand: "X|Cos",
    category: "fragrance",
    price: 300,
    image: Image5,
    description: "...",
    label: "nuit",
  },
  {
    id: 6,
    name: "Rose Élysée",
    brand: "X|Cos",
    category: "fragrance",
    price: 400,
    image: Image6,
    description: "...",
    label: "nuit",
  },
  {
    id: 7,
    name: "Silk Bloom",
    brand: "X|Cos",
    category: "fragrance",
    price: 500,
    image: Image7,
    description: "...",
    label: "nuit",
  },
  {
    id: 8,
    name: "Amber Solstice",
    brand: "X|Cos",
    category: "fragrance",
    price: 600,
    image: Image8,
    description: "...",
    label: "nuit",
  },

  // Остальные товары каталога (без label, на главной не показываются)
  {
    id: 9,
    name: "Advanced Night Repair Serum",
    brand: "Estee Lauder",
    category: "skincare",
    price: 115,
    image: Image1, // временная картинка
    description:
      "Deep and fast penetrating face serum that reduces the look of multiple signs of aging.",
  },
  {
    id: 10,
    name: "Matte Liquid Lipstick",
    brand: "MAC",
    category: "makeup",
    price: 26,
    image: Image2, // временная картинка
    description:
      "A lipstick formula with high color payoff in a no-shine matte finish.",
  },
  {
    id: 11,
    name: "Hydrating Shampoo with Argan Oil",
    brand: "Moroccanoil",
    category: "hair",
    price: 28,
    image: Image3, // временная картинка
    description:
      "Gently cleanses and infuses dry hair with antioxidant-rich argan oil.",
  },
  {
    id: 12,
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "fragrance",
    price: 145,
    image: Image4, // временная картинка
    description:
      "An aromatic-woody fragrance with a captivating trail. A timeless scent housed in a deep and mysterious blue bottle.",
  },
  {
    id: 13,
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: Image5, // временная картинка
    description:
      "A water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules.",
  },
  {
    id: 14,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "skincare",
    price: 8,
    image: Image1, // временная картинка
    description:
      "A lightweight serum that helps reduce the look of blemishes and congestion.",
  },
  {
    id: 15,
    name: "Hydro Boost Water Gel",
    brand: "Neutrogena",
    category: "skincare",
    price: 19,
    image: Image2, // временная картинка
    description:
      "An oil-free gel moisturizer with hyaluronic acid for lasting hydration.",
  },
  {
    id: 16,
    name: "Toleriane Double Repair Moisturizer",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 22,
    image: Image3, // временная картинка
    description:
      "A daily face cream with ceramides and niacinamide for sensitive skin.",
  },
  {
    id: 17,
    name: "Ultra Facial Cream",
    brand: "Kiehl's",
    category: "skincare",
    price: 38,
    image: Image4, // временная картинка
    description: "A 24-hour daily cream that keeps skin soft and comfortable.",
  },
  {
    id: 18,
    name: "Retinol 0.5% in Squalane",
    brand: "The Ordinary",
    category: "skincare",
    price: 11,
    image: Image5, // временная картинка
    description: "A moderate-strength retinol serum targeting signs of aging.",
  },
  {
    id: 19,
    name: "Effaclar Purifying Foaming Gel",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 17,
    image: Image6, // временная картинка
    description: "A gentle cleanser for oily and blemish-prone skin.",
  },
  {
    id: 20,
    name: "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
    brand: "Clinique",
    category: "skincare",
    price: 39,
    image: Image7, // временная картинка
    description:
      "A gel-cream moisturizer that keeps skin hydrated for up to three days.",
  },
  {
    id: 21,
    name: "Cicaplast Baume B5",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 16,
    image: Image8, // временная картинка
    description:
      "A soothing multi-purpose balm that helps repair irritated skin.",
  },
  {
    id: 22,
    name: "Anthelios UVMune 400 SPF 50",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 24,
    image: Image1, // временная картинка
    description: "A broad-spectrum sunscreen with a light, non-greasy finish.",
  },
  {
    id: 23,
    name: "Squalane + Probiotic Gel Cleanser",
    brand: "Biossance",
    category: "skincare",
    price: 28,
    image: Image2, // временная картинка
    description:
      "A gentle gel cleanser that removes impurities without stripping skin.",
  },
  {
    id: 24,
    name: "Glycolic Acid 7% Toning Solution",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: Image3, // временная картинка
    description:
      "An exfoliating toner that improves skin radiance and texture.",
  },
  {
    id: 25,
    name: "Minéral 89 Hyaluronic Acid Booster",
    brand: "Vichy",
    category: "skincare",
    price: 30,
    image: Image4, // временная картинка
    description:
      "A daily fortifying serum with volcanic water and hyaluronic acid.",
  },
  {
    id: 26,
    name: "Midnight Recovery Concentrate",
    brand: "Kiehl's",
    category: "skincare",
    price: 52,
    image: Image5, // временная картинка
    description: "A nourishing facial oil blend designed to work overnight.",
  },
  {
    id: 27,
    name: "Moisturizing Cream",
    brand: "CeraVe",
    category: "skincare",
    price: 18,
    image: Image6, // временная картинка
    description: "A rich cream with three essential ceramides for dry skin.",
  },
  {
    id: 28,
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "skincare",
    price: 14,
    image: Image7, // временная картинка
    description:
      "A non-foaming cleanser that cleans while maintaining the skin barrier.",
  },
  {
    id: 29,
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    category: "skincare",
    price: 25,
    image: Image8, // временная картинка
    description:
      "A lightweight essence that hydrates and improves skin elasticity.",
  },
  {
    id: 30,
    name: "Low pH Good Morning Gel Cleanser",
    brand: "COSRX",
    category: "skincare",
    price: 11,
    image: Image1, // временная картинка
    description:
      "A mild morning cleanser with a slightly acidic pH for daily use.",
  },
  {
    id: 31,
    name: "Water Bank Blue Hyaluronic Cream",
    brand: "Laneige",
    category: "skincare",
    price: 40,
    image: Image2, // временная картинка
    description:
      "A cooling gel cream that delivers deep, long-lasting moisture.",
  },
  {
    id: 32,
    name: "Lip Sleeping Mask",
    brand: "Laneige",
    category: "skincare",
    price: 24,
    image: Image3, // временная картинка
    description: "An overnight lip treatment that leaves lips soft and smooth.",
  },
  {
    id: 33,
    name: "Soft Pinch Liquid Blush",
    brand: "Rare Beauty",
    category: "makeup",
    price: 23,
    image: Image4, // временная картинка
    description:
      "A highly pigmented liquid blush that blends easily for a natural flush.",
  },
  {
    id: 34,
    name: "Pro Filt'r Soft Matte Foundation",
    brand: "Fenty Beauty",
    category: "makeup",
    price: 40,
    image: Image5, // временная картинка
    description:
      "A long-wearing foundation with a soft matte finish in a wide shade range.",
  },
  {
    id: 35,
    name: "Lash Sensational Sky High Mascara",
    brand: "Maybelline",
    category: "makeup",
    price: 13,
    image: Image6, // временная картинка
    description:
      "A flexible-bristle mascara for full, lifted and lengthened lashes.",
  },
  {
    id: 36,
    name: "Hollywood Flawless Filter",
    brand: "Charlotte Tilbury",
    category: "makeup",
    price: 49,
    image: Image7, // временная картинка
    description:
      "A complexion booster that gives skin a soft-focus, glowing look.",
  },
  {
    id: 37,
    name: "SuperStay Matte Ink Liquid Lipstick",
    brand: "Maybelline",
    category: "makeup",
    price: 12,
    image: Image8, // временная картинка
    description: "A long-lasting liquid lipstick with an intense matte finish.",
  },
  {
    id: 38,
    name: "Naked3 Eyeshadow Palette",
    brand: "Urban Decay",
    category: "makeup",
    price: 54,
    image: Image1, // временная картинка
    description:
      "A palette of rose-hued neutral shadows in matte and shimmer finishes.",
  },
  {
    id: 39,
    name: "Brow Wiz Pencil",
    brand: "Anastasia Beverly Hills",
    category: "makeup",
    price: 25,
    image: Image2, // временная картинка
    description:
      "An ultra-slim retractable pencil for precise, hair-like brow strokes.",
  },
  {
    id: 40,
    name: "Cloud Paint Gel Blush",
    brand: "Glossier",
    category: "makeup",
    price: 22,
    image: Image3, // временная картинка
    description:
      "A seamless gel-cream blush that melts into skin for a dewy glow.",
  },
  {
    id: 41,
    name: "Teint Idole Ultra Wear Foundation",
    brand: "Lancôme",
    category: "makeup",
    price: 47,
    image: Image4, // временная картинка
    description:
      "A full-coverage foundation that stays comfortable for up to 24 hours.",
  },
  {
    id: 42,
    name: "Better Than Sex Mascara",
    brand: "Too Faced",
    category: "makeup",
    price: 29,
    image: Image5, // временная картинка
    description: "A volumizing mascara that builds dramatic, defined lashes.",
  },
  {
    id: 43,
    name: "Addict Lip Glow",
    brand: "Dior",
    category: "makeup",
    price: 40,
    image: Image6, // временная картинка
    description:
      "A color-reviving lip balm that adapts to the natural shade of your lips.",
  },
  {
    id: 44,
    name: "Radiant Creamy Concealer",
    brand: "NARS",
    category: "makeup",
    price: 32,
    image: Image7, // временная картинка
    description:
      "A medium-to-full coverage concealer with a radiant, natural finish.",
  },
  {
    id: 45,
    name: "All Nighter Setting Spray",
    brand: "Urban Decay",
    category: "makeup",
    price: 36,
    image: Image8, // временная картинка
    description: "A weightless setting spray that helps makeup last all day.",
  },
  {
    id: 46,
    name: "Epic Ink Liner",
    brand: "NYX Professional Makeup",
    category: "makeup",
    price: 11,
    image: Image1, // временная картинка
    description:
      "A waterproof liquid liner with a precise brush tip and intense pigment.",
  },
  {
    id: 47,
    name: "Gloss Bomb Universal Lip Luminizer",
    brand: "Fenty Beauty",
    category: "makeup",
    price: 22,
    image: Image2, // временная картинка
    description:
      "A high-shine, non-sticky gloss that flatters every skin tone.",
  },
  {
    id: 48,
    name: "Airbrush Flawless Setting Powder",
    brand: "Charlotte Tilbury",
    category: "makeup",
    price: 46,
    image: Image3, // временная картинка
    description:
      "A finely milled powder that sets makeup and blurs the look of pores.",
  },
  {
    id: 49,
    name: "Shape Tape Concealer",
    brand: "Tarte",
    category: "makeup",
    price: 30,
    image: Image4, // временная картинка
    description:
      "A full-coverage, crease-resistant concealer for brightening under eyes.",
  },
  {
    id: 50,
    name: "Gimme Brow+ Volumizing Gel",
    brand: "Benefit",
    category: "makeup",
    price: 26,
    image: Image5, // временная картинка
    description:
      "A tinted fiber gel that adds fullness and definition to brows.",
  },
  {
    id: 51,
    name: "No.3 Hair Perfector",
    brand: "Olaplex",
    category: "hair",
    price: 30,
    image: Image6, // временная картинка
    description:
      "A weekly at-home treatment that helps repair and strengthen damaged hair.",
  },
  {
    id: 52,
    name: "Gold Lust Repair & Restore Shampoo",
    brand: "Oribe",
    category: "hair",
    price: 48,
    image: Image7, // временная картинка
    description:
      "A restorative shampoo that strengthens hair and improves shine.",
  },
  {
    id: 53,
    name: "Elixir Ultime Original Oil",
    brand: "Kérastase",
    category: "hair",
    price: 45,
    image: Image8, // временная картинка
    description: "A lightweight hair oil that nourishes and adds glossy shine.",
  },
  {
    id: 54,
    name: "Moroccanoil Treatment",
    brand: "Moroccanoil",
    category: "hair",
    price: 34,
    image: Image1, // временная картинка
    description:
      "An argan oil-infused treatment that conditions and smooths hair.",
  },
  {
    id: 55,
    name: "Original Dry Shampoo",
    brand: "Batiste",
    category: "hair",
    price: 8,
    image: Image2, // временная картинка
    description:
      "A quick refresh spray that absorbs excess oil between washes.",
  },
  {
    id: 56,
    name: "Deep Cleanse Shampoo",
    brand: "Bumble and bumble",
    category: "hair",
    price: 32,
    image: Image3, // временная картинка
    description:
      "A clarifying shampoo that removes buildup and leaves hair fresh.",
  },
  {
    id: 57,
    name: "No.7 Bonding Oil",
    brand: "Olaplex",
    category: "hair",
    price: 30,
    image: Image4, // временная картинка
    description:
      "A weightless oil that boosts shine and helps protect against heat.",
  },
  {
    id: 58,
    name: "Surf Spray",
    brand: "Bumble and bumble",
    category: "hair",
    price: 31,
    image: Image5, // временная картинка
    description: "A salt-infused spray for tousled, beachy texture.",
  },
  {
    id: 59,
    name: "Don't Despair, Repair! Deep Conditioning Mask",
    brand: "Briogeo",
    category: "hair",
    price: 38,
    image: Image6, // временная картинка
    description:
      "A rich mask that restores moisture and softness to dry, damaged hair.",
  },
  {
    id: 60,
    name: "Curl Enhancing Smoothie",
    brand: "SheaMoisture",
    category: "hair",
    price: 14,
    image: Image7, // временная картинка
    description: "A moisturizing styler that defines curls and reduces frizz.",
  },
  {
    id: 61,
    name: "Scalp Revival Charcoal Shampoo",
    brand: "Briogeo",
    category: "hair",
    price: 26,
    image: Image8, // временная картинка
    description: "A detoxifying shampoo that soothes and refreshes the scalp.",
  },
  {
    id: 62,
    name: "Perfect Hair Day 5-in-1 Styling Treatment",
    brand: "Living Proof",
    category: "hair",
    price: 29,
    image: Image1, // временная картинка
    description: "A leave-in spray that detangles, smooths and protects hair.",
  },
  {
    id: 63,
    name: "Iron Shape 11 Finishing Spray",
    brand: "Redken",
    category: "hair",
    price: 24,
    image: Image2, // временная картинка
    description:
      "A heat-activated spray for long-lasting, sleek straight styles.",
  },
  {
    id: 64,
    name: "Botanical Repair Shampoo",
    brand: "Aveda",
    category: "hair",
    price: 28,
    image: Image3, // временная картинка
    description:
      "A plant-based shampoo that strengthens and repairs damaged strands.",
  },
  {
    id: 65,
    name: "Scalp Therapy Revitalizing Conditioner",
    brand: "Nioxin",
    category: "hair",
    price: 25,
    image: Image4, // временная картинка
    description:
      "A lightweight conditioner that hydrates hair and keeps the scalp balanced.",
  },
  {
    id: 66,
    name: "Black Opium Eau de Parfum",
    brand: "Yves Saint Laurent",
    category: "fragrance",
    price: 95,
    image: Image5, // временная картинка
    description:
      "A warm, addictive blend of coffee, white flowers and vanilla.",
  },
  {
    id: 67,
    name: "Bloom Eau de Parfum",
    brand: "Gucci",
    category: "fragrance",
    price: 92,
    image: Image6, // временная картинка
    description: "A rich white floral fragrance with tuberose and jasmine.",
  },
  {
    id: 68,
    name: "Light Blue Eau de Toilette",
    brand: "Dolce & Gabbana",
    category: "fragrance",
    price: 78,
    image: Image7, // временная картинка
    description: "A fresh, sparkling scent of Sicilian lemon and apple.",
  },
  {
    id: 69,
    name: "Sauvage Eau de Toilette",
    brand: "Dior",
    category: "fragrance",
    price: 105,
    image: Image8, // временная картинка
    description: "A fresh, spicy fragrance with bergamot and ambroxan.",
  },
  {
    id: 70,
    name: "La Vie Est Belle Eau de Parfum",
    brand: "Lancôme",
    category: "fragrance",
    price: 98,
    image: Image1, // временная картинка
    description: "A sweet and elegant blend of iris, praline and vanilla.",
  },
  {
    id: 71,
    name: "Chance Eau Tendre",
    brand: "Chanel",
    category: "fragrance",
    price: 120,
    image: Image2, // временная картинка
    description: "A soft, fruity-floral scent with grapefruit and jasmine.",
  },
  {
    id: 72,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    category: "fragrance",
    price: 85,
    image: Image3, // временная картинка
    description:
      "An aquatic, citrusy fragrance inspired by the Mediterranean sea.",
  },
  {
    id: 73,
    name: "Miss Dior Blooming Bouquet",
    brand: "Dior",
    category: "fragrance",
    price: 90,
    image: Image4, // временная картинка
    description: "A delicate floral scent of peony, rose and white musk.",
  },
  {
    id: 74,
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "fragrance",
    price: 125,
    image: Image5, // временная картинка
    description:
      "A deep, woody aromatic fragrance with citrus and incense notes.",
  },
  {
    id: 75,
    name: "Flowerbomb Eau de Parfum",
    brand: "Viktor&Rolf",
    category: "fragrance",
    price: 110,
    image: Image6, // временная картинка
    description:
      "An explosive floral bouquet of jasmine, orchid and patchouli.",
  },
  {
    id: 76,
    name: "Good Girl Eau de Parfum",
    brand: "Carolina Herrera",
    category: "fragrance",
    price: 100,
    image: Image7, // временная картинка
    description: "A bold contrast of tuberose, almond and tonka bean.",
  },
  {
    id: 77,
    name: "Daisy Eau de Toilette",
    brand: "Marc Jacobs",
    category: "fragrance",
    price: 80,
    image: Image8, // временная картинка
    description:
      "A light, playful floral fragrance with strawberry and violet leaves.",
  },
  {
    id: 78,
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    category: "fragrance",
    price: 102,
    image: Image1, // временная картинка
    description:
      "A fusion of lavender and orange blossom with a warm vanilla base.",
  },
  {
    id: 79,
    name: "Eros Eau de Toilette",
    brand: "Versace",
    category: "fragrance",
    price: 75,
    image: Image2, // временная картинка
    description: "A fresh, sweet scent of mint, green apple and tonka bean.",
  },
  {
    id: 80,
    name: "Mon Paris Eau de Parfum",
    brand: "Yves Saint Laurent",
    category: "fragrance",
    price: 96,
    image: Image3, // временная картинка
    description:
      "A fruity floral fragrance with strawberry, raspberry and white musk.",
  },
  {
    id: 81,
    name: "Santal 33 Eau de Parfum",
    brand: "Le Labo",
    category: "fragrance",
    price: 215,
    image: Image4, // временная картинка
    description: "A smoky, leathery sandalwood scent with cedar and violet.",
  },
  {
    id: 82,
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    category: "fragrance",
    price: 235,
    image: Image5, // временная картинка
    description: "An airy, amber-woody fragrance with jasmine and saffron.",
  },
  {
    id: 83,
    name: "Philosykos Eau de Toilette",
    brand: "Diptyque",
    category: "fragrance",
    price: 140,
    image: Image6, // временная картинка
    description:
      "A green, woody scent that captures the fig tree from leaf to root.",
  },
  {
    id: 84,
    name: "Black Orchid Eau de Parfum",
    brand: "Tom Ford",
    category: "fragrance",
    price: 150,
    image: Image7, // временная картинка
    description:
      "A luxurious, dark floral blend with black truffle and patchouli.",
  },
  {
    id: 85,
    name: "Lost Cherry Eau de Parfum",
    brand: "Tom Ford",
    category: "fragrance",
    price: 395,
    image: Image8, // временная картинка
    description:
      "A decadent cherry fragrance with almond, tonka bean and sandalwood.",
  },
  {
    id: 86,
    name: "Jazz Club Eau de Toilette",
    brand: "Maison Margiela Replica",
    category: "fragrance",
    price: 130,
    image: Image1, // временная картинка
    description: "A smoky, warm scent of rum, tobacco leaf and vanilla bean.",
  },
  {
    id: 87,
    name: "Cloud Eau de Parfum",
    brand: "Ariana Grande",
    category: "fragrance",
    price: 55,
    image: Image2, // временная картинка
    description:
      "A creamy gourmand fragrance with lavender, coconut and whipped cream.",
  },
  {
    id: 88,
    name: "Born in Roma Eau de Parfum",
    brand: "Valentino",
    category: "fragrance",
    price: 108,
    image: Image3, // временная картинка
    description: "A mineral vanilla scent with woody and floral accents.",
  },
];
