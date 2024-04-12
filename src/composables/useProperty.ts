import { Property } from "@/types";
import { computed } from "vue";

export default function useProperty(property: Property) {
  const formattedPrice = computed(() => {
    return property.price.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    });
  });

  const pluraliseBath = computed(() =>
    property.bathrooms > 1 ? "Bäder" : "Bad"
  );


  return {
    formattedPrice,
    pluraliseBath,
  };
}
