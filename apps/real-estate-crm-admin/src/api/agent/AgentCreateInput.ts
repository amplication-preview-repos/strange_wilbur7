import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
