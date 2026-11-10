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

// Дополнительные картинки для товаров
import Image9 from "/images/productCard/product-9.webp";
import Image10 from "/images/productCard/product-10.webp";
import Image11 from "/images/productCard/product-11.webp";
import Image12 from "/images/productCard/product-12.webp";
import Image13 from "/images/productCard/product-13.webp";
import Image14 from "/images/productCard/product-14.webp";
import Image15 from "/images/productCard/product-15.webp";
import Image16 from "/images/productCard/product-16.webp";
import Image17 from "/images/productCard/product-17.webp";
import Image18 from "/images/productCard/product-18.webp";
import Image19 from "/images/productCard/product-19.webp";
import Image20 from "/images/productCard/product-20.webp";
import Image21 from "/images/productCard/product-21.webp";
import Image22 from "/images/productCard/product-22.webp";
import Image23 from "/images/productCard/product-23.webp";
import Image24 from "/images/productCard/product-24.webp";
import Image25 from "/images/productCard/product-25.webp";
import Image26 from "/images/productCard/product-26.webp";
import Image27 from "/images/productCard/product-27.webp";
import Image28 from "/images/productCard/product-28.webp";
import Image29 from "/images/productCard/product-29.webp";
import Image30 from "/images/productCard/product-30.webp";
import Image31 from "/images/productCard/product-31.webp";
import Image32 from "/images/productCard/product-32.webp";
import Image33 from "/images/productCard/product-33.webp";
import Image34 from "/images/productCard/product-34.webp";
import Image35 from "/images/productCard/product-35.webp";
import Image36 from "/images/productCard/product-36.webp";
import Image37 from "/images/productCard/product-37.webp";
import Image38 from "/images/productCard/product-38.webp";
import Image39 from "/images/productCard/product-39.webp";
import Image40 from "/images/productCard/product-40.webp";
import Image41 from "/images/productCard/product-41.webp";
import Image42 from "/images/productCard/product-42.webp";
import Image43 from "/images/productCard/product-43.webp";
import Image44 from "/images/productCard/product-44.webp";
import Image45 from "/images/productCard/product-45.webp";
import Image46 from "/images/productCard/product-46.webp";
import Image47 from "/images/productCard/product-47.webp";
import Image48 from "/images/productCard/product-48.webp";
import Image49 from "/images/productCard/product-49.webp";
import Image50 from "/images/productCard/product-50.webp";
import Image51 from "/images/productCard/product-51.webp";
import Image52 from "/images/productCard/product-52.webp";
import Image53 from "/images/productCard/product-53.webp";
import Image54 from "/images/productCard/product-54.webp";

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
    image: Image9,
    description:
      "Deep and fast penetrating face serum that reduces the look of multiple signs of aging.",
  },
  {
    id: 10,
    name: "Matte Liquid Lipstick",
    brand: "MAC",
    category: "makeup",
    price: 26,
    image: Image10,
    description:
      "A lipstick formula with high color payoff in a no-shine matte finish.",
  },
  {
    id: 11,
    name: "Hydrating Shampoo with Argan Oil",
    brand: "Moroccanoil",
    category: "hair",
    price: 28,
    image: Image11,
    description:
      "Gently cleanses and infuses dry hair with antioxidant-rich argan oil.",
  },
  {
    id: 12,
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "fragrance",
    price: 145,
    image: Image12,
    description:
      "An aromatic-woody fragrance with a captivating trail. A timeless scent housed in a deep and mysterious blue bottle.",
  },
  {
    id: 13,
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: Image13,
    description:
      "A water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules.",
  },
  {
    id: 14,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    category: "skincare",
    price: 8,
    image: Image14,
    description:
      "A lightweight serum that helps reduce the look of blemishes and congestion.",
  },
  {
    id: 15,
    name: "Hydro Boost Water Gel",
    brand: "Neutrogena",
    category: "skincare",
    price: 19,
    image: Image15,
    description:
      "An oil-free gel moisturizer with hyaluronic acid for lasting hydration.",
  },
  {
    id: 16,
    name: "Toleriane Double Repair Moisturizer",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 22,
    image: Image16,
    description:
      "A daily face cream with ceramides and niacinamide for sensitive skin.",
  },
  {
    id: 17,
    name: "Ultra Facial Cream",
    brand: "Kiehl's",
    category: "skincare",
    price: 38,
    image: Image17,
    description: "A 24-hour daily cream that keeps skin soft and comfortable.",
  },
  {
    id: 18,
    name: "Retinol 0.5% in Squalane",
    brand: "The Ordinary",
    category: "skincare",
    price: 11,
    image: Image18,
    description: "A moderate-strength retinol serum targeting signs of aging.",
  },
  {
    id: 19,
    name: "Effaclar Purifying Foaming Gel",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 17,
    image: Image19,
    description: "A gentle cleanser for oily and blemish-prone skin.",
  },
  {
    id: 20,
    name: "Moisture Surge 72-Hour Auto-Replenishing Hydrator",
    brand: "Clinique",
    category: "skincare",
    price: 39,
    image: Image20,
    description:
      "A gel-cream moisturizer that keeps skin hydrated for up to three days.",
  },
  {
    id: 21,
    name: "Cicaplast Baume B5",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 16,
    image: Image21,
    description:
      "A soothing multi-purpose balm that helps repair irritated skin.",
  },
  {
    id: 22,
    name: "Anthelios UVMune 400 SPF 50",
    brand: "La Roche-Posay",
    category: "skincare",
    price: 24,
    image: Image22,
    description: "A broad-spectrum sunscreen with a light, non-greasy finish.",
  },
  {
    id: 23,
    name: "Squalane + Probiotic Gel Cleanser",
    brand: "Biossance",
    category: "skincare",
    price: 28,
    image: Image23,
    description:
      "A gentle gel cleanser that removes impurities without stripping skin.",
  },
  {
    id: 24,
    name: "Glycolic Acid 7% Toning Solution",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: Image24,
    description:
      "An exfoliating toner that improves skin radiance and texture.",
  },
  {
    id: 25,
    name: "Minéral 89 Hyaluronic Acid Booster",
    brand: "Vichy",
    category: "skincare",
    price: 30,
    image: Image25,
    description:
      "A daily fortifying serum with volcanic water and hyaluronic acid.",
  },
  {
    id: 26,
    name: "Midnight Recovery Concentrate",
    brand: "Kiehl's",
    category: "skincare",
    price: 52,
    image: Image26,
    description: "A nourishing facial oil blend designed to work overnight.",
  },
  {
    id: 27,
    name: "Moisturizing Cream",
    brand: "CeraVe",
    category: "skincare",
    price: 18,
    image: Image27,
    description: "A rich cream with three essential ceramides for dry skin.",
  },
  {
    id: 28,
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    category: "skincare",
    price: 14,
    image: Image28,
    description:
      "A non-foaming cleanser that cleans while maintaining the skin barrier.",
  },
  {
    id: 29,
    name: "Advanced Snail 96 Mucin Power Essence",
    brand: "COSRX",
    category: "skincare",
    price: 25,
    image: Image29,
    description:
      "A lightweight essence that hydrates and improves skin elasticity.",
  },
  {
    id: 30,
    name: "Low pH Good Morning Gel Cleanser",
    brand: "COSRX",
    category: "skincare",
    price: 11,
    image: Image30,
    description:
      "A mild morning cleanser with a slightly acidic pH for daily use.",
  },
  {
    id: 31,
    name: "Water Bank Blue Hyaluronic Cream",
    brand: "Laneige",
    category: "skincare",
    price: 40,
    image: Image31,
    description:
      "A cooling gel cream that delivers deep, long-lasting moisture.",
  },
  {
    id: 32,
    name: "Lip Sleeping Mask",
    brand: "Laneige",
    category: "skincare",
    price: 24,
    image: Image32,
    description: "An overnight lip treatment that leaves lips soft and smooth.",
  },
  {
    id: 33,
    name: "Soft Pinch Liquid Blush",
    brand: "Rare Beauty",
    category: "makeup",
    price: 23,
    image: Image33,
    description:
      "A highly pigmented liquid blush that blends easily for a natural flush.",
  },
  {
    id: 34,
    name: "Pro Filt'r Soft Matte Foundation",
    brand: "Fenty Beauty",
    category: "makeup",
    price: 40,
    image: Image34,
    description:
      "A long-wearing foundation with a soft matte finish in a wide shade range.",
  },
  {
    id: 35,
    name: "Lash Sensational Sky High Mascara",
    brand: "Maybelline",
    category: "makeup",
    price: 13,
    image: Image35,
    description:
      "A flexible-bristle mascara for full, lifted and lengthened lashes.",
  },
  {
    id: 36,
    name: "Hollywood Flawless Filter",
    brand: "Charlotte Tilbury",
    category: "makeup",
    price: 49,
    image: Image36,
    description:
      "A complexion booster that gives skin a soft-focus, glowing look.",
  },
  {
    id: 37,
    name: "SuperStay Matte Ink Liquid Lipstick",
    brand: "Maybelline",
    category: "makeup",
    price: 12,
    image: Image37,
    description: "A long-lasting liquid lipstick with an intense matte finish.",
  },
  {
    id: 38,
    name: "Naked3 Eyeshadow Palette",
    brand: "Urban Decay",
    category: "makeup",
    price: 54,
    image: Image38,
    description:
      "A palette of rose-hued neutral shadows in matte and shimmer finishes.",
  },
  {
    id: 39,
    name: "Brow Wiz Pencil",
    brand: "Anastasia Beverly Hills",
    category: "makeup",
    price: 25,
    image: Image39,
    description:
      "An ultra-slim retractable pencil for precise, hair-like brow strokes.",
  },
  {
    id: 40,
    name: "Cloud Paint Gel Blush",
    brand: "Glossier",
    category: "makeup",
    price: 22,
    image: Image40,
    description:
      "A seamless gel-cream blush that melts into skin for a dewy glow.",
  },
  {
    id: 41,
    name: "Teint Idole Ultra Wear Foundation",
    brand: "Lancôme",
    category: "makeup",
    price: 47,
    image: Image41,
    description:
      "A full-coverage foundation that stays comfortable for up to 24 hours.",
  },
  {
    id: 42,
    name: "Better Than Sex Mascara",
    brand: "Too Faced",
    category: "makeup",
    price: 29,
    image: Image42,
    description: "A volumizing mascara that builds dramatic, defined lashes.",
  },
  {
    id: 43,
    name: "Addict Lip Glow",
    brand: "Dior",
    category: "makeup",
    price: 40,
    image: Image43,
    description:
      "A color-reviving lip balm that adapts to the natural shade of your lips.",
  },
  {
    id: 44,
    name: "Radiant Creamy Concealer",
    brand: "NARS",
    category: "makeup",
    price: 32,
    image: Image44,
    description:
      "A medium-to-full coverage concealer with a radiant, natural finish.",
  },
  {
    id: 45,
    name: "All Nighter Setting Spray",
    brand: "Urban Decay",
    category: "makeup",
    price: 36,
    image: Image45,
    description: "A weightless setting spray that helps makeup last all day.",
  },
  {
    id: 46,
    name: "Epic Ink Liner",
    brand: "NYX Professional Makeup",
    category: "makeup",
    price: 11,
    image: Image46,
    description:
      "A waterproof liquid liner with a precise brush tip and intense pigment.",
  },
  {
    id: 47,
    name: "Gloss Bomb Universal Lip Luminizer",
    brand: "Fenty Beauty",
    category: "makeup",
    price: 22,
    image: Image47,
    description:
      "A high-shine, non-sticky gloss that flatters every skin tone.",
  },
  {
    id: 48,
    name: "Airbrush Flawless Setting Powder",
    brand: "Charlotte Tilbury",
    category: "makeup",
    price: 46,
    image: Image48,
    description:
      "A finely milled powder that sets makeup and blurs the look of pores.",
  },
  {
    id: 49,
    name: "Shape Tape Concealer",
    brand: "Tarte",
    category: "makeup",
    price: 30,
    image: Image49,
    description:
      "A full-coverage, crease-resistant concealer for brightening under eyes.",
  },
  {
    id: 50,
    name: "Gimme Brow+ Volumizing Gel",
    brand: "Benefit",
    category: "makeup",
    price: 26,
    image: Image50,
    description:
      "A tinted fiber gel that adds fullness and definition to brows.",
  },
  {
    id: 51,
    name: "No.3 Hair Perfector",
    brand: "Olaplex",
    category: "hair",
    price: 30,
    image: Image51,
    description:
      "A weekly at-home treatment that helps repair and strengthen damaged hair.",
  },
  {
    id: 52,
    name: "Gold Lust Repair & Restore Shampoo",
    brand: "Oribe",
    category: "hair",
    price: 48,
    image: Image52,
    description:
      "A restorative shampoo that strengthens hair and improves shine.",
  },
  {
    id: 53,
    name: "Elixir Ultime Original Oil",
    brand: "Kérastase",
    category: "hair",
    price: 45,
    image: Image53,
    description: "A lightweight hair oil that nourishes and adds glossy shine.",
  },
  {
    id: 54,
    name: "Rose Water Facial Mist",
    brand: "Caudalie",
    category: "skincare",
    price: 24,
    image: Image54,
    description:
      "A refreshing facial mist with rose water that hydrates and sets makeup.",
  },
];
