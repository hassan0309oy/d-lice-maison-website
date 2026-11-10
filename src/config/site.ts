// Central content config: prices, purchase links, covers, texts, videos, testimonials.
import logo from "@/assets/logo.png";
import v1 from "@/assets/videos/recette-1.mp4.asset.json";
import v2 from "@/assets/videos/recette-2.mp4.asset.json";
import v3 from "@/assets/videos/recette-3.mp4.asset.json";
import v4 from "@/assets/videos/recette-4.mp4.asset.json";
import v5 from "@/assets/videos/recette-5.mp4.asset.json";
import v6 from "@/assets/videos/recette-6.mp4.asset.json";
import v7 from "@/assets/videos/recette-7.mp4.asset.json";
import v8 from "@/assets/videos/recette-8.mp4.asset.json";
import v9 from "@/assets/videos/recette-9.mp4.asset.json";
import v10 from "@/assets/videos/recette-10.mp4.asset.json";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";
import a5 from "@/assets/avatar-5.jpg";
import a6 from "@/assets/avatar-6.jpg";
import c20fr from "@/assets/cover-20-fr.png.asset.json";
import c20en from "@/assets/cover-20-en.png.asset.json";
import c40fr from "@/assets/cover-40-fr.png.asset.json";
import c40en from "@/assets/cover-40-en.png.asset.json";
import c60fr from "@/assets/cover-60-fr.png.asset.json";
import c60en from "@/assets/cover-60-en.png.asset.json";

export type Lang = "fr" | "en";
export const LANG_KEY = "delices-maison-lang";
export const LOGO_URL = logo;

export type Pack = {
  id: string;
  count: number;
  price: string;
  oldPrice?: string; // only set if a real discount is confirmed
  cover: Record<Lang, string>;
  link: Record<Lang, string>;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  benefits: Record<Lang, string[]>;
  cta: Record<Lang, string>;
  featured?: boolean;
};

export const PACKS: Pack[] = [
  {
    id: "pack-20", count: 20, price: "12,97 $",
    cover: { fr: c20fr.url, en: c20en.url },
    link: {
      fr: "https://shop.beacons.ai/delices.maison/999d248fb6f4-4f92-8c7c-c0b95e38968a",
      en: "https://shop.beacons.ai/delices.maison/9d89f4fd-fbec-4b3e-b461-eed147d0e30a",
    },
    name: { fr: "20 Recettes Gourmandes", en: "20 Delicious Recipes" },
    description: {
      fr: "L'essentiel pour se régaler chaque semaine : des plats réconfortants, simples et savoureux, prêts en un clin d'œil.",
      en: "The essentials to treat yourself every week: comforting, simple and tasty dishes, ready in no time.",
    },
    benefits: {
      fr: ["Recettes rapides du quotidien", "Ingrédients faciles à trouver", "Parfait pour débuter"],
      en: ["Quick everyday recipes", "Easy-to-find ingredients", "Perfect to get started"],
    },
    cta: { fr: "🍗 Je veux mes recettes !", en: "🍗 I want my recipes!" },
  },
  {
    id: "pack-40", count: 40, price: "19,85 $", featured: true,
    cover: { fr: c40fr.url, en: c40en.url },
    link: {
      fr: "https://shop.beacons.ai/delices.maison/b56fe518-96c8-4c7d-9046-5d3b32f62824",
      en: "https://shop.beacons.ai/delices.maison/93588ae7-2264-4e8c-a143-35f39b2c8eef",
    },
    name: { fr: "40 Recettes Délicieuses", en: "40 Delicious Recipes" },
    description: {
      fr: "Variez les plaisirs : entrées, plats et douceurs pour surprendre toute la famille sans passer des heures en cuisine.",
      en: "Mix it up: starters, mains and sweet treats to delight the whole family without spending hours in the kitchen.",
    },
    benefits: {
      fr: ["Deux fois plus d'idées", "Plats familiaux & desserts", "Le meilleur rapport qualité-prix"],
      en: ["Twice as many ideas", "Family meals & desserts", "Best value for money"],
    },
    cta: { fr: "❤️ Obtenir mes recettes", en: "❤️ Get my recipes" },
  },
  {
    id: "pack-60", count: 60, price: "22,99 $",
    cover: { fr: c60fr.url, en: c60en.url },
    link: {
      fr: "https://shop.beacons.ai/delices.maison/4cec94e4-278e-45c9-ae48-1b2f18d49d15",
      en: "https://shop.beacons.ai/delices.maison/02b4f25d-28fe-447f-b04a-e0950c441025",
    },
    name: { fr: "60 Recettes Exceptionnelles", en: "60 Exceptional Recipes" },
    description: {
      fr: "La collection complète pour cuisiner comme un chef : des recettes raffinées et gourmandes pour toutes les occasions.",
      en: "The complete collection to cook like a chef: refined, mouth-watering recipes for every occasion.",
    },
    benefits: {
      fr: ["La collection la plus complète", "Recettes raffinées & festives", "Des mois d'inspiration"],
      en: ["The most complete collection", "Refined & festive recipes", "Months of inspiration"],
    },
    cta: { fr: "🍳 Je récupère mon e-book", en: "🍳 Grab my e-book" },
  },
];

// Recipe videos: autoplay, muted, looping marquee.
export const VIDEOS: string[] = [v1.url, v2.url, v3.url, v4.url, v5.url, v6.url, v7.url, v8.url, v9.url, v10.url];

// Customer reviews shown in "Ils nous font confiance".
export const TESTIMONIALS: { name: string; avatar: string; rating: number; text: Record<Lang, string> }[] = [
  { name: "Camille R.", avatar: a1, rating: 5, text: { fr: "Merci vraiment Délices Maison ! Le poulet rôti du pack 20 est devenu le plat préféré de mes enfants, on le fait chaque dimanche.", en: "Thank you so much Délices Maison! The roast chicken from the 20 pack is now my kids' favourite, we make it every Sunday." } },
  { name: "Sarah M.", avatar: a2, rating: 5, text: { fr: "J'ai reçu l'e-book en deux minutes. Les étapes sont claires, les photos donnent faim, et j'ai réussi dès le premier essai.", en: "I got the e-book within two minutes. The steps are clear, the photos make you hungry, and I nailed it on my first try." } },
  { name: "Inès B.", avatar: a3, rating: 5, text: { fr: "Je cherchais des idées pas chères pour la semaine : avec le pack 40 je ne me demande plus quoi cuisiner. Bravo Délices Maison.", en: "I wanted budget ideas for the week: with the 40 pack I never wonder what to cook anymore. Well done Délices Maison." } },
  { name: "Julie T.", avatar: a4, rating: 5, text: { fr: "Un e-book magnifique, très bien mis en page. Les desserts du pack 60 ont fait sensation à l'anniversaire de ma mère.", en: "A gorgeous, beautifully laid-out e-book. The desserts from the 60 pack were a hit at my mum's birthday." } },
  { name: "Marc D.", avatar: a5, rating: 5, text: { fr: "Je ne savais presque rien cuisiner. Grâce à Délices Maison je prépare de vrais repas le soir, et ma femme est bluffée.", en: "I could barely cook. Thanks to Délices Maison I make real dinners now, and my wife is amazed." } },
  { name: "Aïcha K.", avatar: a6, rating: 5, text: { fr: "Des recettes généreuses qui rappellent la cuisine de famille. Rapport qualité-prix imbattable, je recommande les yeux fermés !", en: "Generous recipes that taste like family cooking. Unbeatable value, I recommend it without hesitation!" } },
];

export const T = {
  fr: {
    title: "Délices Maison — E-books de recettes gourmandes",
    metaDesc: "Des recettes délicieuses à portée de clic : e-books de recettes faciles, rapides et gourmandes, livrés instantanément.",
    tagline: "Recettes · Faciles · Gourmandes",
    slogan: "Des recettes délicieuses à portée de clic !",
    sub: "Rapides, gourmandes, faciles et accessibles : des e-books pensés pour régaler toute la maison.",
    discover: "Découvrir nos recettes",
    packsTitle: "Nos e-books de recettes",
    packsSub: "Choisissez votre pack et recevez-le instantanément par e-mail.",
    recipes: "recettes",
    popular: "Le plus populaire",
    videosTitle: "En cuisine avec nous",
    videosEmpty: "Nos vidéos de recettes arrivent très bientôt !",
    testiTitle: "Ils nous font confiance !",
    testiNote: "Avis clients vérifiés",
    trust: ["Livraison instantanée par e-mail", "Paiement 100 % sécurisé", "Recettes simples & testées", "Support client à l'écoute"],
    footer: "Fait avec amour, pour les gourmands.",
    change: "English",
  },
  en: {
    title: "Délices Maison — Delicious recipe e-books",
    metaDesc: "Delicious recipes just a click away: easy, quick and mouth-watering recipe e-books, delivered instantly.",
    tagline: "Recipes · Easy · Delicious",
    slogan: "Delicious recipes just a click away!",
    sub: "Quick, tasty, easy and affordable: e-books designed to delight the whole household.",
    discover: "Discover our recipes",
    packsTitle: "Our recipe e-books",
    packsSub: "Pick your pack and get it instantly by email.",
    recipes: "recipes",
    popular: "Most popular",
    videosTitle: "In the kitchen with us",
    videosEmpty: "Our recipe videos are coming very soon!",
    testiTitle: "Loved by our customers!",
    testiNote: "Verified customer reviews",
    trust: ["Instant delivery by email", "100% secure payment", "Simple, tested recipes", "Friendly customer support"],
    footer: "Made with love, for food lovers.",
    change: "Français",
  },
} as const;
