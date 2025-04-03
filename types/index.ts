import { Database } from "./supabase";

export type SupplierType = Database["public"]["Tables"]["suppliers"]["Row"];
