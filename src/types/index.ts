export interface Property {
  address: {
    street: string;
    postcode: string;
    city: string;
  };
  price: number;
  area: number;
  bathrooms: number;
  bedrooms: number;
  energy_class: "A+" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  description: string;
  location_description: string;
  images: string[];
}
