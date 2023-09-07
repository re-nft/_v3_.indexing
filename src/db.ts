import { type Store as Store_, TypeormDatabase } from "@subsquid/typeorm-store";

export const db = new TypeormDatabase();
export type Store = Store_;
