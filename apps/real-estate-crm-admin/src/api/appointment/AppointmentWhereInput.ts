import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  dateTime?: DateTimeNullableFilter;
  property?: PropertyWhereUniqueInput;
  agent?: AgentWhereUniqueInput;
  client?: ClientWhereUniqueInput;
};
