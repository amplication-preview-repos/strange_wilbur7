import { Property } from "../property/Property";
import { Agent } from "../agent/Agent";
import { Client } from "../client/Client";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  property?: Property | null;
  agent?: Agent | null;
  client?: Client | null;
};
