export interface Property {
  slug: string;
  address: {
    street: string;
    postcode: string;
    city: string;
  };
  price: number;
  area: number;
  bathrooms: number;
  bedrooms: number;
  energy_class: EnergyClasses;
  description: string;
  location_description: string;
  images: string[];
}

export const energyClasses = ["A+", "A", "B", "C", "D", "E", "F", "G", "H"] as const;
export type EnergyClasses = (typeof energyClasses)[number];
