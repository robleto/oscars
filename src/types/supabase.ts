export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export interface Database {
	public: {
		Tables: {
			profiles: {
				Row: {
					id: string;
					username: string;
					full_name: string | null;
					avatar_url: string | null;
					bio: string | null;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id: string;
					username: string;
					full_name?: string | null;
					avatar_url?: string | null;
					bio?: string | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["profiles"]["Insert"]
				>;
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			movies: {
				Row: {
					id: number;
					title: string;
					release_year: number;
					poster_url: string;
					thumb_url: string;
					runtime: number;
					created_at?: string;
				};
				Insert: {
					id: number;
					title: string;
					release_year: number;
					poster_url: string;
					thumb_url: string;
					runtime: number;
					created_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["movies"]["Insert"]
				>;
				Relationships: [];
			};
			rankings: {
				Row: {
					id: string;
					user_id: string;
					movie_id: number;
					seen_it: boolean;
					ranking: number;
					created_at?: string;
					updated_at?: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					movie_id: number;
					seen_it?: boolean;
					ranking?: number;
					created_at?: string;
					updated_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["rankings"]["Insert"]
				>;
				Relationships: [
					{
						foreignKeyName: "rankings_movie_id_fkey";
						columns: ["movie_id"];
						referencedRelation: "movies";
						referencedColumns: ["id"];
					},
				];
			};
			movie_lists: {
				Row: {
					id: string;
					user_id: string;
					name: string;
					description: string | null;
					is_public: boolean;
					created_at?: string;
					updated_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					name: string;
					description?: string | null;
					is_public?: boolean;
					created_at?: string;
					updated_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["movie_lists"]["Insert"]
				>;
				Relationships: [];
			};
			movie_list_items: {
				Row: {
					id: string;
					list_id: string;
					movie_id: number;
					ranking: number;
					seen_it: boolean;
					score: number | null;
					created_at?: string;
					updated_at?: string;
				};
				Insert: {
					id?: string;
					list_id: string;
					movie_id: number;
					ranking?: number;
					seen_it?: boolean;
					score?: number | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["movie_list_items"]["Insert"]
				>;
				Relationships: [
					{
						foreignKeyName: "movie_list_items_list_id_fkey";
						columns: ["list_id"];
						referencedRelation: "movie_lists";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "movie_list_items_movie_id_fkey";
						columns: ["movie_id"];
						referencedRelation: "movies";
						referencedColumns: ["id"];
					},
				];
			};
			awards: {
				Row: {
					id: number;
					user_id: string;
					year: number;
					nominee_ids: number[];
					winner_id: number | null;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id?: number;
					user_id: string;
					year: number;
					nominee_ids: number[];
					winner_id?: number | null;
					created_at?: string;
					updated_at?: string;
				};
				Update: Partial<
					Database["public"]["Tables"]["awards"]["Insert"]
				>;
				Relationships: [];
			};
		};
		Views: object;
		Functions: object;
		Enums: object;
	};
}
