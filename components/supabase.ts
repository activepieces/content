export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]
  import { PostgrestError } from '@supabase/supabase-js'

  export type DbResult<T> = T extends PromiseLike<infer U> ? U : never
  export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
  export type DbResultErr = PostgrestError
export interface Database {
  public: {
    Tables: {
      voting: {
        Row: {
          created_at: string
          issueId: string
          userId: string
        }
        Insert: {
          created_at?: string
          issueId: string
          userId: string
        }
        Update: {
          created_at?: string
          issueId?: string
          userId?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]
