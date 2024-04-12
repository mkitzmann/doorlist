import { Property } from "@/types";
import propertiesDb from "../data/properties.json";
import { computed } from "vue";

export default function useProperty() {
  const properties = computed<Property[]>(
    () => propertiesDb as unknown as Property[]
  );

  function findProperty(slug: string): Property | undefined {
    return properties.value.find((item) => item.slug === slug);
  }

  return {
    properties,
    findProperty,
  };
}
