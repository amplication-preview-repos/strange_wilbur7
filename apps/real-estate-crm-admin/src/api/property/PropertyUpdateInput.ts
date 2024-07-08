import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  listingDate?: Date | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
