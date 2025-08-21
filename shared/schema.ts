import { z } from "zod";

export const propertyRateSchema = z.object({
  weekday: z.number(),
  jumat: z.number(),
  weekend: z.number(),
});

export const propertySchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  rate: propertyRateSchema,
  units: z.number(),
  facilities: z.array(z.string()),
  capacity: z.string(),
  notes: z.array(z.string()),
  image: z.string(),
  type: z.enum(["villa", "glamping"]),
});

export type PropertyRate = z.infer<typeof propertyRateSchema>;
export type Property = z.infer<typeof propertySchema>;
