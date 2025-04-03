export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			bodysizes: {
				Row: {
					coefs_females: Json;
					coefs_males: Json;
					created_at: string | null;
					id: number;
					is_active: boolean;
					min_ease: number;
					name: string;
					updated_at: string | null;
				};
				Insert: {
					coefs_females?: Json;
					coefs_males: Json;
					created_at?: string | null;
					id?: number;
					is_active: boolean;
					min_ease: number;
					name: string;
					updated_at?: string | null;
				};
				Update: {
					coefs_females?: Json;
					coefs_males?: Json;
					created_at?: string | null;
					id?: number;
					is_active?: boolean;
					min_ease?: number;
					name?: string;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			bodysizes_v1: {
				Row: {
					coefs_females: Json;
					coefs_males: Json;
					created_at: string | null;
					id: number;
					is_active: boolean;
					name: string;
					updated_at: string | null;
				};
				Insert: {
					coefs_females?: Json;
					coefs_males: Json;
					created_at?: string | null;
					id?: number;
					is_active: boolean;
					name: string;
					updated_at?: string | null;
				};
				Update: {
					coefs_females?: Json;
					coefs_males?: Json;
					created_at?: string | null;
					id?: number;
					is_active?: boolean;
					name?: string;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			categories_fits_coefs: {
				Row: {
					category: string | null;
					coefs_females: Json | null;
					coefs_males: Json | null;
					created_at: string | null;
					fits: string | null;
					id: number;
					sub_category: string | null;
					updated_at: string | null;
				};
				Insert: {
					category?: string | null;
					coefs_females?: Json | null;
					coefs_males?: Json | null;
					created_at?: string | null;
					fits?: string | null;
					id?: number;
					sub_category?: string | null;
					updated_at?: string | null;
				};
				Update: {
					category?: string | null;
					coefs_females?: Json | null;
					coefs_males?: Json | null;
					created_at?: string | null;
					fits?: string | null;
					id?: number;
					sub_category?: string | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			customers: {
				Row: {
					age: number | null;
					bodysizes: Json | null;
					created_at: string | null;
					email: string | null;
					gender: Database["public"]["Enums"]["gender_type"] | null;
					height: number | null;
					pid: string;
					updated_at: string | null;
					weight: number | null;
				};
				Insert: {
					age?: number | null;
					bodysizes?: Json | null;
					created_at?: string | null;
					email?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					height?: number | null;
					pid?: string;
					updated_at?: string | null;
					weight?: number | null;
				};
				Update: {
					age?: number | null;
					bodysizes?: Json | null;
					created_at?: string | null;
					email?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					height?: number | null;
					pid?: string;
					updated_at?: string | null;
					weight?: number | null;
				};
				Relationships: [];
			};
			event_logs: {
				Row: {
					browser: string;
					browser_ip: string | null;
					device: string;
					event_datetime: string;
					event_type: Database["public"]["Enums"]["event_type"];
					organization_pid: string | null;
					pid: string;
					product_pid: string | null;
					variant_pid: string | null;
				};
				Insert: {
					browser: string;
					browser_ip?: string | null;
					device: string;
					event_datetime: string;
					event_type: Database["public"]["Enums"]["event_type"];
					organization_pid?: string | null;
					pid?: string;
					product_pid?: string | null;
					variant_pid?: string | null;
				};
				Update: {
					browser?: string;
					browser_ip?: string | null;
					device?: string;
					event_datetime?: string;
					event_type?: Database["public"]["Enums"]["event_type"];
					organization_pid?: string | null;
					pid?: string;
					product_pid?: string | null;
					variant_pid?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "event_logs_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "event_logs_product_pid_fkey";
						columns: ["product_pid"];
						referencedRelation: "products";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "event_logs_variant_pid_fkey";
						columns: ["variant_pid"];
						referencedRelation: "variants";
						referencedColumns: ["pid"];
					}
				];
			};
			feedbacks: {
				Row: {
					browser: string;
					browser_ip: string | null;
					created_at: string | null;
					customer_pid: string | null;
					device: string;
					feedback: string | null;
					organization_pid: string | null;
					pid: string;
					product_pid: string | null;
					ratings: number | null;
				};
				Insert: {
					browser: string;
					browser_ip?: string | null;
					created_at?: string | null;
					customer_pid?: string | null;
					device: string;
					feedback?: string | null;
					organization_pid?: string | null;
					pid?: string;
					product_pid?: string | null;
					ratings?: number | null;
				};
				Update: {
					browser?: string;
					browser_ip?: string | null;
					created_at?: string | null;
					customer_pid?: string | null;
					device?: string;
					feedback?: string | null;
					organization_pid?: string | null;
					pid?: string;
					product_pid?: string | null;
					ratings?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "feedbacks_customer_pid_fkey";
						columns: ["customer_pid"];
						referencedRelation: "customers";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "feedbacks_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "feedbacks_product_pid_fkey";
						columns: ["product_pid"];
						referencedRelation: "products";
						referencedColumns: ["pid"];
					}
				];
			};
			marcy_users: {
				Row: {
					company: string;
					created_at: string | null;
					firstname: string | null;
					pid: string;
					product_list: string | null;
					pseudo: string;
					service: string;
				};
				Insert: {
					company: string;
					created_at?: string | null;
					firstname?: string | null;
					pid?: string;
					product_list?: string | null;
					pseudo: string;
					service: string;
				};
				Update: {
					company?: string;
					created_at?: string | null;
					firstname?: string | null;
					pid?: string;
					product_list?: string | null;
					pseudo?: string;
					service?: string;
				};
				Relationships: [];
			};
			marcy_users_data: {
				Row: {
					bodysizes: Json;
					gender: string;
					height: number;
					marcy_user_pid: string;
					recommended_bottom: string;
					recommended_top: string;
					updated_at: string | null;
					weight: number;
				};
				Insert: {
					bodysizes: Json;
					gender: string;
					height: number;
					marcy_user_pid: string;
					recommended_bottom: string;
					recommended_top: string;
					updated_at?: string | null;
					weight: number;
				};
				Update: {
					bodysizes?: Json;
					gender?: string;
					height?: number;
					marcy_user_pid?: string;
					recommended_bottom?: string;
					recommended_top?: string;
					updated_at?: string | null;
					weight?: number;
				};
				Relationships: [
					{
						foreignKeyName: "marcy_users_data_marcy_user_pid_fkey";
						columns: ["marcy_user_pid"];
						referencedRelation: "marcy_users";
						referencedColumns: ["pid"];
					}
				];
			};
			marcy_users_feedback: {
				Row: {
					ease_of_use: number;
					marcy_user_pid: string;
					recommendation_relevance: number;
					seamless_process: number;
				};
				Insert: {
					ease_of_use: number;
					marcy_user_pid: string;
					recommendation_relevance: number;
					seamless_process: number;
				};
				Update: {
					ease_of_use?: number;
					marcy_user_pid?: string;
					recommendation_relevance?: number;
					seamless_process?: number;
				};
				Relationships: [
					{
						foreignKeyName: "marcy_users_feedback_marcy_user_pid_fkey";
						columns: ["marcy_user_pid"];
						referencedRelation: "marcy_users";
						referencedColumns: ["pid"];
					}
				];
			};
			models: {
				Row: {
					ankle_to_floor: string | null;
					arm_circ: number | null;
					arm_length: number | null;
					"back-build": number | null;
					calf: number | null;
					chest: number | null;
					"chest-waist": string | null;
					"front-build": number | null;
					height: number | null;
					hips: number | null;
					id: number;
					inseam: number | null;
					name: string;
					neck: number | null;
					neck_width: string | null;
					"neck-chest": string | null;
					"neck-pelvis_front": number | null;
					"neck-waist_back": number | null;
					"neck-waist_front": number | null;
					"neck-waist_front_low": string | null;
					pant_waist: number | null;
					pelvis: number | null;
					sex: number;
					shoulder_length: number | null;
					shoulder_width: number | null;
					sideseam: number | null;
					sideseam_from_waist: string | null;
					thigh: number | null;
					"under-chest": number | null;
					"upper-arm_length": number | null;
					waist: number | null;
					"waist-pant_waist": number | null;
					"waist-pelvis_front": string | null;
					wears_jacket_letter: string | null;
					wears_jacket_numeric: number | null;
					wears_pant_letter: string | null;
					wears_pant_numeric: number | null;
					wears_top_letter: string | null;
					wears_top_numeric: number | null;
				};
				Insert: {
					ankle_to_floor?: string | null;
					arm_circ?: number | null;
					arm_length?: number | null;
					"back-build"?: number | null;
					calf?: number | null;
					chest?: number | null;
					"chest-waist"?: string | null;
					"front-build"?: number | null;
					height?: number | null;
					hips?: number | null;
					id: number;
					inseam?: number | null;
					name: string;
					neck?: number | null;
					neck_width?: string | null;
					"neck-chest"?: string | null;
					"neck-pelvis_front"?: number | null;
					"neck-waist_back"?: number | null;
					"neck-waist_front"?: number | null;
					"neck-waist_front_low"?: string | null;
					pant_waist?: number | null;
					pelvis?: number | null;
					sex: number;
					shoulder_length?: number | null;
					shoulder_width?: number | null;
					sideseam?: number | null;
					sideseam_from_waist?: string | null;
					thigh?: number | null;
					"under-chest"?: number | null;
					"upper-arm_length"?: number | null;
					waist?: number | null;
					"waist-pant_waist"?: number | null;
					"waist-pelvis_front"?: string | null;
					wears_jacket_letter?: string | null;
					wears_jacket_numeric?: number | null;
					wears_pant_letter?: string | null;
					wears_pant_numeric?: number | null;
					wears_top_letter?: string | null;
					wears_top_numeric?: number | null;
				};
				Update: {
					ankle_to_floor?: string | null;
					arm_circ?: number | null;
					arm_length?: number | null;
					"back-build"?: number | null;
					calf?: number | null;
					chest?: number | null;
					"chest-waist"?: string | null;
					"front-build"?: number | null;
					height?: number | null;
					hips?: number | null;
					id?: number;
					inseam?: number | null;
					name?: string;
					neck?: number | null;
					neck_width?: string | null;
					"neck-chest"?: string | null;
					"neck-pelvis_front"?: number | null;
					"neck-waist_back"?: number | null;
					"neck-waist_front"?: number | null;
					"neck-waist_front_low"?: string | null;
					pant_waist?: number | null;
					pelvis?: number | null;
					sex?: number;
					shoulder_length?: number | null;
					shoulder_width?: number | null;
					sideseam?: number | null;
					sideseam_from_waist?: string | null;
					thigh?: number | null;
					"under-chest"?: number | null;
					"upper-arm_length"?: number | null;
					waist?: number | null;
					"waist-pant_waist"?: number | null;
					"waist-pelvis_front"?: string | null;
					wears_jacket_letter?: string | null;
					wears_jacket_numeric?: number | null;
					wears_pant_letter?: string | null;
					wears_pant_numeric?: number | null;
					wears_top_letter?: string | null;
					wears_top_numeric?: number | null;
				};
				Relationships: [];
			};
			orders: {
				Row: {
					browser: string | null;
					browser_ip: string | null;
					cart_token: string | null;
					created_at: string;
					customer: Json;
					customer_id: string | null;
					device: string | null;
					is_cancelled: boolean | null;
					is_refunded: boolean | null;
					is_updated: boolean | null;
					order_currency: string;
					order_id: string;
					order_total: number;
					organization_pid: string | null;
					pid: string;
					status: Database["public"]["Enums"]["order_status"];
					updated_at: string;
					vat: Json;
				};
				Insert: {
					browser?: string | null;
					browser_ip?: string | null;
					cart_token?: string | null;
					created_at: string;
					customer: Json;
					customer_id?: string | null;
					device?: string | null;
					is_cancelled?: boolean | null;
					is_refunded?: boolean | null;
					is_updated?: boolean | null;
					order_currency: string;
					order_id: string;
					order_total: number;
					organization_pid?: string | null;
					pid?: string;
					status: Database["public"]["Enums"]["order_status"];
					updated_at: string;
					vat: Json;
				};
				Update: {
					browser?: string | null;
					browser_ip?: string | null;
					cart_token?: string | null;
					created_at?: string;
					customer?: Json;
					customer_id?: string | null;
					device?: string | null;
					is_cancelled?: boolean | null;
					is_refunded?: boolean | null;
					is_updated?: boolean | null;
					order_currency?: string;
					order_id?: string;
					order_total?: number;
					organization_pid?: string | null;
					pid?: string;
					status?: Database["public"]["Enums"]["order_status"];
					updated_at?: string;
					vat?: Json;
				};
				Relationships: [
					{
						foreignKeyName: "orders_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					}
				];
			};
			organization_analytics: {
				Row: {
					date: string | null;
					fringuant_aov: number | null;
					fringuant_log_add_to_cart_conversion_rate: number | null;
					fringuant_log_clicked_conversion_rate: number | null;
					fringuant_log_display_conversion_rate: number | null;
					fringuant_log_scan_conversion_rate: number | null;
					fringuant_orders_count: number | null;
					fringuant_return_product_count: number | null;
					fringuant_return_product_revenue: number | null;
					fringuant_revenue: number | null;
					fringuant_session_add_to_cart_conversion_rate: number | null;
					fringuant_session_clicked_conversion_rate: number | null;
					fringuant_session_display_conversion_rate: number | null;
					fringuant_session_scan_conversion_rate: number | null;
					log_add_to_cart_count: number | null;
					log_add_to_cart_rate: number | null;
					log_clicked_count: number | null;
					log_clicked_rate: number | null;
					log_displayed_count: number | null;
					log_logged_in_count: number | null;
					log_registered_count: number | null;
					log_scan_count: number | null;
					log_send_data_count: number | null;
					log_send_feedback_count: number | null;
					log_start_experience_count: number | null;
					log_total: number | null;
					organization_aov: number | null;
					organization_log_display_conversion_rate: number | null;
					organization_order_count: number | null;
					organization_pid: string | null;
					organization_return_product_count: number | null;
					organization_return_product_revenue: number | null;
					organization_revenue: number | null;
					organization_session_display_conversion_rate: number | null;
					pid: string;
					session_add_to_cart_count: number | null;
					session_add_to_cart_rate: number | null;
					session_clicked_count: number | null;
					session_clicked_rate: number | null;
					session_displayed_count: number | null;
					session_logged_in_count: number | null;
					session_registered_count: number | null;
					session_scan_count: number | null;
					session_send_data_count: number | null;
					session_send_feedback_count: number | null;
					session_start_experience_count: number | null;
					session_total: number | null;
				};
				Insert: {
					date?: string | null;
					fringuant_aov?: number | null;
					fringuant_log_add_to_cart_conversion_rate?: number | null;
					fringuant_log_clicked_conversion_rate?: number | null;
					fringuant_log_display_conversion_rate?: number | null;
					fringuant_log_scan_conversion_rate?: number | null;
					fringuant_orders_count?: number | null;
					fringuant_return_product_count?: number | null;
					fringuant_return_product_revenue?: number | null;
					fringuant_revenue?: number | null;
					fringuant_session_add_to_cart_conversion_rate?: number | null;
					fringuant_session_clicked_conversion_rate?: number | null;
					fringuant_session_display_conversion_rate?: number | null;
					fringuant_session_scan_conversion_rate?: number | null;
					log_add_to_cart_count?: number | null;
					log_add_to_cart_rate?: number | null;
					log_clicked_count?: number | null;
					log_clicked_rate?: number | null;
					log_displayed_count?: number | null;
					log_logged_in_count?: number | null;
					log_registered_count?: number | null;
					log_scan_count?: number | null;
					log_send_data_count?: number | null;
					log_send_feedback_count?: number | null;
					log_start_experience_count?: number | null;
					log_total?: number | null;
					organization_aov?: number | null;
					organization_log_display_conversion_rate?: number | null;
					organization_order_count?: number | null;
					organization_pid?: string | null;
					organization_return_product_count?: number | null;
					organization_return_product_revenue?: number | null;
					organization_revenue?: number | null;
					organization_session_display_conversion_rate?: number | null;
					pid?: string;
					session_add_to_cart_count?: number | null;
					session_add_to_cart_rate?: number | null;
					session_clicked_count?: number | null;
					session_clicked_rate?: number | null;
					session_displayed_count?: number | null;
					session_logged_in_count?: number | null;
					session_registered_count?: number | null;
					session_scan_count?: number | null;
					session_send_data_count?: number | null;
					session_send_feedback_count?: number | null;
					session_start_experience_count?: number | null;
					session_total?: number | null;
				};
				Update: {
					date?: string | null;
					fringuant_aov?: number | null;
					fringuant_log_add_to_cart_conversion_rate?: number | null;
					fringuant_log_clicked_conversion_rate?: number | null;
					fringuant_log_display_conversion_rate?: number | null;
					fringuant_log_scan_conversion_rate?: number | null;
					fringuant_orders_count?: number | null;
					fringuant_return_product_count?: number | null;
					fringuant_return_product_revenue?: number | null;
					fringuant_revenue?: number | null;
					fringuant_session_add_to_cart_conversion_rate?: number | null;
					fringuant_session_clicked_conversion_rate?: number | null;
					fringuant_session_display_conversion_rate?: number | null;
					fringuant_session_scan_conversion_rate?: number | null;
					log_add_to_cart_count?: number | null;
					log_add_to_cart_rate?: number | null;
					log_clicked_count?: number | null;
					log_clicked_rate?: number | null;
					log_displayed_count?: number | null;
					log_logged_in_count?: number | null;
					log_registered_count?: number | null;
					log_scan_count?: number | null;
					log_send_data_count?: number | null;
					log_send_feedback_count?: number | null;
					log_start_experience_count?: number | null;
					log_total?: number | null;
					organization_aov?: number | null;
					organization_log_display_conversion_rate?: number | null;
					organization_order_count?: number | null;
					organization_pid?: string | null;
					organization_return_product_count?: number | null;
					organization_return_product_revenue?: number | null;
					organization_revenue?: number | null;
					organization_session_display_conversion_rate?: number | null;
					pid?: string;
					session_add_to_cart_count?: number | null;
					session_add_to_cart_rate?: number | null;
					session_clicked_count?: number | null;
					session_clicked_rate?: number | null;
					session_displayed_count?: number | null;
					session_logged_in_count?: number | null;
					session_registered_count?: number | null;
					session_scan_count?: number | null;
					session_send_data_count?: number | null;
					session_send_feedback_count?: number | null;
					session_start_experience_count?: number | null;
					session_total?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "organization_analytics_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					}
				];
			};
			organizations: {
				Row: {
					background_img_url: string;
					count: number;
					created_at: string;
					domain_name: string;
					email_domain: string | null;
					expiration: number | null;
					fringuant_api_key: string;
					is_active: boolean;
					key_integrity: string | null;
					name: string;
					pid: string;
					pretty_name: string | null;
					specific_id: string | null;
					subscription_type: string;
					updated_at: string;
					visibility: number | null;
				};
				Insert: {
					background_img_url?: string;
					count: number;
					created_at?: string;
					domain_name: string;
					email_domain?: string | null;
					expiration?: number | null;
					fringuant_api_key: string;
					is_active: boolean;
					key_integrity?: string | null;
					name: string;
					pid?: string;
					pretty_name?: string | null;
					specific_id?: string | null;
					subscription_type: string;
					updated_at?: string;
					visibility?: number | null;
				};
				Update: {
					background_img_url?: string;
					count?: number;
					created_at?: string;
					domain_name?: string;
					email_domain?: string | null;
					expiration?: number | null;
					fringuant_api_key?: string;
					is_active?: boolean;
					key_integrity?: string | null;
					name?: string;
					pid?: string;
					pretty_name?: string | null;
					specific_id?: string | null;
					subscription_type?: string;
					updated_at?: string;
					visibility?: number | null;
				};
				Relationships: [];
			};
			product_orders: {
				Row: {
					added_via_fringuant: boolean | null;
					is_cancelled: boolean | null;
					is_refunded: boolean | null;
					is_updated: boolean | null;
					order_pid: string | null;
					organization_pid: string | null;
					pid: string;
					price: number | null;
					product_pid: string | null;
					variant_id: string | null;
					variant_pid: string | null;
					variant_size: string | null;
				};
				Insert: {
					added_via_fringuant?: boolean | null;
					is_cancelled?: boolean | null;
					is_refunded?: boolean | null;
					is_updated?: boolean | null;
					order_pid?: string | null;
					organization_pid?: string | null;
					pid?: string;
					price?: number | null;
					product_pid?: string | null;
					variant_id?: string | null;
					variant_pid?: string | null;
					variant_size?: string | null;
				};
				Update: {
					added_via_fringuant?: boolean | null;
					is_cancelled?: boolean | null;
					is_refunded?: boolean | null;
					is_updated?: boolean | null;
					order_pid?: string | null;
					organization_pid?: string | null;
					pid?: string;
					price?: number | null;
					product_pid?: string | null;
					variant_id?: string | null;
					variant_pid?: string | null;
					variant_size?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "product_orders_order_pid_fkey";
						columns: ["order_pid"];
						referencedRelation: "orders";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "product_orders_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "product_orders_product_pid_fkey";
						columns: ["product_pid"];
						referencedRelation: "products";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "product_orders_variant_pid_fkey";
						columns: ["variant_pid"];
						referencedRelation: "variants";
						referencedColumns: ["pid"];
					}
				];
			};
			products: {
				Row: {
					created_at: string;
					images_src: string[] | null;
					is_active: boolean;
					name: string;
					organization_id: string;
					organization_pid: string | null;
					pid: string;
					pim_id: string | null;
					specification_pid: string | null;
					updated_at: string;
				};
				Insert: {
					created_at: string;
					images_src?: string[] | null;
					is_active: boolean;
					name: string;
					organization_id: string;
					organization_pid?: string | null;
					pid?: string;
					pim_id?: string | null;
					specification_pid?: string | null;
					updated_at: string;
				};
				Update: {
					created_at?: string;
					images_src?: string[] | null;
					is_active?: boolean;
					name?: string;
					organization_id?: string;
					organization_pid?: string | null;
					pid?: string;
					pim_id?: string | null;
					specification_pid?: string | null;
					updated_at?: string;
				};
				Relationships: [
					{
						foreignKeyName: "products_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "products_specification_pid_fkey";
						columns: ["specification_pid"];
						referencedRelation: "specifications";
						referencedColumns: ["pid"];
					}
				];
			};
			profiles: {
				Row: {
					id: string;
					organization_pid: string | null;
					updated_at: string | null;
					username: string | null;
				};
				Insert: {
					id: string;
					organization_pid?: string | null;
					updated_at?: string | null;
					username?: string | null;
				};
				Update: {
					id?: string;
					organization_pid?: string | null;
					updated_at?: string | null;
					username?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "profiles_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					}
				];
			};
			scans: {
				Row: {
					age: number | null;
					bodysizes: Json;
					created_at: string | null;
					gender: Database["public"]["Enums"]["gender_type"] | null;
					guid: string;
					height: number | null;
					organization_pid: string | null;
					updated_at: string | null;
					weight: number | null;
				};
				Insert: {
					age?: number | null;
					bodysizes: Json;
					created_at?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					guid?: string;
					height?: number | null;
					organization_pid?: string | null;
					updated_at?: string | null;
					weight?: number | null;
				};
				Update: {
					age?: number | null;
					bodysizes?: Json;
					created_at?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					guid?: string;
					height?: number | null;
					organization_pid?: string | null;
					updated_at?: string | null;
					weight?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "scans_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					}
				];
			};
			specifications: {
				Row: {
					fabric: string | null;
					gender: Database["public"]["Enums"]["gender_type"] | null;
					is_active: boolean;
					organization_pid: string | null;
					pid: string;
					specifications: Json;
					type: Database["public"]["Enums"]["garment_type"] | null;
				};
				Insert: {
					fabric?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					is_active: boolean;
					organization_pid?: string | null;
					pid?: string;
					specifications: Json;
					type?: Database["public"]["Enums"]["garment_type"] | null;
				};
				Update: {
					fabric?: string | null;
					gender?: Database["public"]["Enums"]["gender_type"] | null;
					is_active?: boolean;
					organization_pid?: string | null;
					pid?: string;
					specifications?: Json;
					type?: Database["public"]["Enums"]["garment_type"] | null;
				};
				Relationships: [
					{
						foreignKeyName: "specifications_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					}
				];
			};
			suppliers: {
				Row: {
					created_at: string;
					is_active: boolean | null;
					name: string;
					pid: string;
					prefix: string;
					supplier_id: string;
					updated_at: string;
				};
				Insert: {
					created_at?: string;
					is_active?: boolean | null;
					name: string;
					pid?: string;
					prefix: string;
					supplier_id: string;
					updated_at?: string;
				};
				Update: {
					created_at?: string;
					is_active?: boolean | null;
					name?: string;
					pid?: string;
					prefix?: string;
					supplier_id?: string;
					updated_at?: string;
				};
				Relationships: [];
			};
			tests: {
				Row: {
					created_at: string;
					dimension: string;
					event_log_pid: string | null;
					order_pid: string | null;
					pid: string;
					value: string;
				};
				Insert: {
					created_at: string;
					dimension: string;
					event_log_pid?: string | null;
					order_pid?: string | null;
					pid?: string;
					value: string;
				};
				Update: {
					created_at?: string;
					dimension?: string;
					event_log_pid?: string | null;
					order_pid?: string | null;
					pid?: string;
					value?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tests_event_log_pid_fkey";
						columns: ["event_log_pid"];
						referencedRelation: "event_logs";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "tests_order_pid_fkey";
						columns: ["order_pid"];
						referencedRelation: "orders";
						referencedColumns: ["pid"];
					}
				];
			};
			variants: {
				Row: {
					created_at: string;
					is_active: boolean;
					organization_pid: string | null;
					pid: string;
					product_id: string;
					product_pid: string | null;
					updated_at: string;
					variant_color: string | null;
					variant_composition: string | null;
					variant_id: string;
					variant_name: string | null;
					variant_price: number | null;
					variant_size: string | null;
					variant_style: string | null;
				};
				Insert: {
					created_at: string;
					is_active: boolean;
					organization_pid?: string | null;
					pid?: string;
					product_id: string;
					product_pid?: string | null;
					updated_at: string;
					variant_color?: string | null;
					variant_composition?: string | null;
					variant_id: string;
					variant_name?: string | null;
					variant_price?: number | null;
					variant_size?: string | null;
					variant_style?: string | null;
				};
				Update: {
					created_at?: string;
					is_active?: boolean;
					organization_pid?: string | null;
					pid?: string;
					product_id?: string;
					product_pid?: string | null;
					updated_at?: string;
					variant_color?: string | null;
					variant_composition?: string | null;
					variant_id?: string;
					variant_name?: string | null;
					variant_price?: number | null;
					variant_size?: string | null;
					variant_style?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "variants_organization_pid_fkey";
						columns: ["organization_pid"];
						referencedRelation: "organizations";
						referencedColumns: ["pid"];
					},
					{
						foreignKeyName: "variants_product_pid_fkey";
						columns: ["product_pid"];
						referencedRelation: "products";
						referencedColumns: ["pid"];
					}
				];
			};
			wordings: {
				Row: {
					created_at: string | null;
					organization_pid: string | null;
					pid: string;
					updated_at: string | null;
					wording: Json;
				};
				Insert: {
					created_at?: string | null;
					organization_pid?: string | null;
					pid: string;
					updated_at?: string | null;
					wording?: Json;
				};
				Update: {
					created_at?: string | null;
					organization_pid?: string | null;
					pid?: string;
					updated_at?: string | null;
					wording?: Json;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			average_basket_per_week: {
				Args: {
					p_organization_pid: string;
					p_interval: unknown;
				};
				Returns: {
					week_start: string;
					organization_pid: string;
					average_basket: number;
				}[];
			};
			event_logs_organization_analytics: {
				Args: {
					date: string;
					organization_pid_param: string;
				};
				Returns: {
					organization_pid: string;
					log_displayed_count: number;
					log_clicked_count: number;
					log_start_experience_count: number;
					log_logged_in_count: number;
					log_send_data_count: number;
					log_scan_count: number;
					log_add_to_cart_count: number;
					log_registered_count: number;
					log_send_feedback_count: number;
					log_add_to_cart_rate: number;
					log_clicked_rate: number;
					session_displayed_count: number;
					session_clicked_count: number;
					session_start_experience_count: number;
					session_logged_in_count: number;
					session_send_data_count: number;
					session_scan_count: number;
					session_add_to_cart_count: number;
					session_registered_count: number;
					session_send_feedback_count: number;
					session_add_to_cart_rate: number;
					session_clicked_rate: number;
					log_total: number;
					session_total: number;
				}[];
			};
			get_organization_analytics: {
				Args: {
					p_organization_pid: string;
				};
				Returns: {
					week_start: string;
					organization_pid: string;
					total_clicked_count: number;
					total_scan_count: number;
				}[];
			};
			product_analytics: {
				Args: {
					start_date: string;
					end_date: string;
					org_pid: string;
				};
				Returns: {
					product_pid: string;
					product_name: string;
					product_images: string[];
					log_displayed_count: number;
					log_clicked_count: number;
					log_scan_count: number;
					log_add_to_cart_count: number;
					log_add_to_cart_rate: number;
					session_displayed_count: number;
					session_clicked_count: number;
					session_scan_count: number;
					session_add_to_cart_count: number;
					session_add_to_cart_rate: number;
				}[];
			};
			product_orders_organization_analytics: {
				Args: {
					date: string;
					organization_pid_param: string;
				};
				Returns: {
					organization_pid: string;
					organization_order_count: number;
					fringuant_orders_count: number;
					organization_revenue: number;
					fringuant_revenue: number;
					fringuant_return_product_count: number;
					organization_return_product_count: number;
					fringuant_return_product_revenue: number;
					organization_return_product_revenue: number;
					fringuant_aov: number;
					organization_aov: number;
				}[];
			};
			usage_between_dates: {
				Args: {
					p_organization_pid: string;
					p_date_start: string;
					p_date_end: string;
				};
				Returns: {
					organization_pid: string;
					total_clicked_count: number;
					total_scan_count: number;
				}[];
			};
			usage_per_week: {
				Args: {
					p_organization_pid: string;
					p_interval: unknown;
				};
				Returns: {
					week_start: string;
					organization_pid: string;
					total_clicked_count: number;
					total_scan_count: number;
				}[];
			};
			user_engagement_rate_per_week: {
				Args: {
					p_organization_pid: string;
					p_interval: unknown;
				};
				Returns: {
					week_start: string;
					organization_pid: string;
					user_engagement_rate: number;
				}[];
			};
		};
		Enums: {
			event_type:
				| "FRINGUANT_BUTTON_DISPLAYED"
				| "FRINGUANT_BUTTON_CLICKED"
				| "USER_HAS_STARTED_THE_EXPERIENCE"
				| "START_EXPERIENCE"
				| "USER_IS_ON_LOGGIN_PAGE"
				| "USER_IS_LOGGED_IN"
				| "USER_HAS_SEND_DATA"
				| "USER_HAS_COMPLETE_SCAN"
				| "USER_IS_ON_RECOMMENDATION_PAGE"
				| "USER_HAS_ADD_TO_CART"
				| "USER_WENT_BACK_TO_SCAN"
				| "USER_IS_ON_REGISTER_PAGE"
				| "USER_HAS_REGISTERED"
				| "USER_HAS_SEND_FEEDBACK";
			event_type_1:
				| "FRINGUANT_BUTTON_DISPLAYED"
				| "FRINGUANT_BUTTON_CLICKED"
				| "USER_HAS_STARTED_THE_EXPERIENCE"
				| "START_EXPERIENCE"
				| "USER_IS_ON_LOGGIN_PAGE"
				| "USER_IS_LOGGED_IN"
				| "USER_HAS_SEND_DATA"
				| "USER_HAS_COMPLETE_SCAN"
				| "USER_IS_ON_RECOMMENDATION_PAGE"
				| "USER_HAS_ADD_TO_CART"
				| "USER_WENT_BACK_TO_SCAN"
				| "USER_IS_ON_REGISTER_PAGE"
				| "USER_HAS_REGISTERED"
				| "USER_HAS_SEND_FEEDBACK";
			garment_type:
				| "short_sleeve_top"
				| "long_sleeve_top"
				| "short_sleeve_outwear"
				| "long_sleeve_outwear"
				| "vest"
				| "sling"
				| "shorts"
				| "trousers"
				| "skirt"
				| "short_sleeve_dress"
				| "long_sleeve_dress"
				| "vest_dress"
				| "sling_dress";
			gender_type: "M" | "F" | "licorne" | "unisex";
			order_status: "CREATED" | "UPDATED" | "REFUNDED" | "CANCELLED";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
