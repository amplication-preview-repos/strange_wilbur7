import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  dateTime?: Date | null;
  property?: PropertyWhereUniqueInput | null;
  agent?: AgentWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
};
