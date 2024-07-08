import { Appointment } from "../appointment/Appointment";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: string | null;
  appointments?: Array<Appointment>;
};
