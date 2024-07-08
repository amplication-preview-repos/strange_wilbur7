import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  propertyId?: SortOrder;
  agentId?: SortOrder;
  clientId?: SortOrder;
};
