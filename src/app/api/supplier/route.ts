import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";
import { SupplierType } from "@/types";
import { createClient, SupabaseClient } from '@supabase/supabase-js';


/********** Configuration de Supabase ************/
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * GET
 * @param req - The Request object.
 * @returns The response object containing the product and user details.
 */
export async function GET(
	req: NextRequest
): Promise<NextResponse<SupplierType> | NextResponse> {
	const { searchParams } = new URL(req.url);
	const supplierId = searchParams.get("providerId");

	if (!supplierId) return NextResponse.redirect(new URL("/api/unauthorized", req.url));

	const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);  
	// const supabase = createRouteHandlerClient<Database>({ cookies });

	const { data, error } = await supabase
		.from("suppliers")
		.select("*")
		.eq("supplier_id", supplierId)
		.single();

	if (error) return NextResponse.json(error, { status: 400 });

	return NextResponse.json(data, { status: 200 });
}
