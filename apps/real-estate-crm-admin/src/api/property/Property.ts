import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  description: string | null;
  listingDate: Date | null;
  appointments?: Array<Appointment>;
};
