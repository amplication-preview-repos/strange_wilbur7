import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  appointments?: Array<Appointment>;
};
