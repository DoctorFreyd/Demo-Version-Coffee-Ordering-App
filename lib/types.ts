export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: "small" | "medium" | "large";
  milk: "whole" | "oat" | "almond" | "soy";
  sugar: 0 | 25 | 50 | 75 | 100;
  extraShots: 0 | 1 | 2 | 3;
  toppings: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  postalCode: string;
  isDefault?: boolean;
}

export type SortOption = "popularity" | "price-low" | "price-high" | "rating";
export type CategoryFilter = "all" | "hot" | "iced" | "specialty";
