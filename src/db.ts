import { type Store as Store_, TypeormDatabase } from "@subsquid/typeorm-store";

// read here for TypeormDatabase options:
// https://docs.subsquid.io/store/postgres/typeorm-store/
export const db = new TypeormDatabase();
export type Store = Store_;
