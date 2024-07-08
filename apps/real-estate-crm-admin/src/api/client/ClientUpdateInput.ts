import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  address?: string | null;
  phone?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
};