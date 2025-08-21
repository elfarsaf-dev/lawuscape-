import { z } from "zod";

export const propertyRateItemSchema = z.object({
  label: z.string(),
  price: z.number(),
});

export const propertySchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  rates: z.array(propertyRateItemSchema),
  units: z.number(),
  facilities: z.array(z.string()),
  capacity: z.string(),
  notes: z.array(z.string()),
  image: z.string(),
  type: z.enum(["villa", "glamping"]),
});

export type PropertyRateItem = z.infer<typeof propertyRateItemSchema>;
export type Property = z.infer<typeof propertySchema>;
