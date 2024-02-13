const ingredients = [
  {
    id: 1,
    name: "Chicken Breast",
    quantity: 2,
    consumableDate: "2024-03-10",
    category: "protein",
  },
  {
    id: 2,
    name: "Rice",
    quantity: 5,
    consumableDate: "2024-12-01",
    category: "carbohydrate",
  },
  {
    id: 3,
    name: "Broccoli",
    quantity: 3,
    consumableDate: "2024-02-20",
    category: "vegetable",
  },
  {
    id: 4,
    name: "Soy Sauce",
    quantity: 1,
    consumableDate: "2024-08-15",
    category: "source",
  },
  {
    id: 5,
    name: "Beef Steak",
    quantity: 4,
    consumableDate: "2024-03-05",
    category: "protein",
  },
  {
    id: 6,
    name: "Potatoes",
    quantity: 6,
    consumableDate: "2024-04-22",
    category: "carbohydrate",
  },
  {
    id: 7,
    name: "Carrots",
    quantity: 4,
    consumableDate: "2024-02-28",
    category: "vegetable",
  },
  {
    id: 8,
    name: "Olive Oil",
    quantity: 1,
    consumableDate: "2025-01-15",
    category: "source",
  },
  {
    id: 9,
    name: "Quinoa",
    quantity: 2,
    consumableDate: "2024-09-30",
    category: "carbohydrate",
  },
  {
    id: 10,
    name: "Salmon Fillet",
    quantity: 3,
    consumableDate: "2024-03-12",
    category: "protein",
  },
  {
    id: 11,
    name: "Spinach",
    quantity: 2,
    consumableDate: "2024-02-25",
    category: "vegetable",
  },
  {
    id: 12,
    name: "Tomato Sauce",
    quantity: 2,
    consumableDate: "2024-11-05",
    category: "source",
  },
  {
    id: 13,
    name: "Tofu",
    quantity: 5,
    consumableDate: "2024-03-22",
    category: "protein",
  },
  {
    id: 14,
    name: "Sweet Potatoes",
    quantity: 3,
    consumableDate: "2024-05-18",
    category: "carbohydrate",
  },
  {
    id: 15,
    name: "Kale",
    quantity: 2,
    consumableDate: "2024-03-02",
    category: "vegetable",
  },
];

export async function getIngredients() {
  // Simulating a delay to mimic async data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return ingredients; // Return the categorized ingredients
}
