export type CategoryKey = "grill" | "classics" | "sides" | "drinks";

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: CategoryKey;
  signature?: boolean;
}

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "grill", label: "Off the Grill" },
  { key: "classics", label: "The Classics" },
  { key: "sides", label: "Sides & Snacks" },
  { key: "drinks", label: "Drinks & Shakes" },
];

export const menu: MenuItem[] = [
  {
    name: "Smokehouse Stacker",
    price: 14000,
    description:
      "Double-smashed beef, charred onion jam, aged cheddar, ember mayo, toasted brioche.",
    category: "grill",
    signature: true,
  },
  {
    name: "Mile-Marker Melt",
    price: 15000,
    description: "Short rib, provolone, grilled peppers, horseradish cream, hoagie roll.",
    category: "grill",
  },
  {
    name: "Blackened Catch",
    price: 13000,
    description: "Cajun-blackened fish, pickled slaw, lime aioli, soft flour tortilla.",
    category: "grill",
  },
  {
    name: "Ranch Hand Ribs",
    price: 19000,
    description: "Half rack, dry-rubbed and bourbon-glazed, side of pickles.",
    category: "grill",
    signature: true,
  },
  {
    name: "Reuben on the Shoulder",
    price: 13000,
    description: "Pastrami, swiss, sauerkraut, russian dressing, marble rye.",
    category: "classics",
  },
  {
    name: "Club at the Crossing",
    price: 12000,
    description: "Turkey, bacon, avocado, tomato, triple-stacked sourdough.",
    category: "classics",
  },
  {
    name: "Philly Detour",
    price: 14000,
    description: "Shaved ribeye, grilled onions, provolone, hoagie, side of jus.",
    category: "classics",
    signature: true,
  },
  {
    name: "Grilled Cheese & Bisque",
    price: 10000,
    description: "Three-cheese blend on charred sourdough, cup of tomato bisque.",
    category: "classics",
  },
  {
    name: "Loaded Shoulder Fries",
    price: 8000,
    description: "Hand-cut fries, cheese curds, bacon, scallion, gravy.",
    category: "sides",
  },
  {
    name: "Charred Corn Elote",
    price: 6000,
    description: "Grilled corn, cotija, chili-lime crema.",
    category: "sides",
  },
  {
    name: "Smoked Wings (6)",
    price: 9000,
    description: "Dry-rubbed, your choice of ember glaze or dry smoke.",
    category: "sides",
    signature: true,
  },
  {
    name: "Hush Puppies",
    price: 6000,
    description: "Cornmeal fritters, whipped honey butter.",
    category: "sides",
  },
  {
    name: "Burnt-Sugar Shake",
    price: 7000,
    description: "Vanilla bean, caramelized sugar, whipped cream.",
    category: "drinks",
  },
  {
    name: "Southern Sweet Tea",
    price: 4000,
    description: "House-brewed, slow-steeped, served over ice.",
    category: "drinks",
  },
  {
    name: "Ember Lemonade",
    price: 5000,
    description: "Charred lemon, mint, cane sugar.",
    category: "drinks",
  },
  {
    name: "Cold Brew on Ice",
    price: 5000,
    description: "Slow-steeped overnight, oat milk optional.",
    category: "drinks",
  },
];
