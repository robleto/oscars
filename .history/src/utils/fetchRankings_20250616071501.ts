// src/utils/fetchRankings.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;


export async function fetchRankings() {
	const { data, error } = await supabase.from("moviesDB").select("*");

	if (error) throw new Error(error.message);
	return data;
}
