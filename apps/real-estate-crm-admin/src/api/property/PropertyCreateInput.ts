import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  price?: number | null;
  description?: string | null;
  listingDate?: Date | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
