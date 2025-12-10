import { createClient } from '@supabase/supabase-js';

// Supabase client with automatic tenant/project isolation
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiZmFkMzVmNDMtOTI0MC00MDQwLTkwZDUtYmJlZWVkYWQ1ZWIzIiwianRpIjoiYjI1Y2ZkY2QtMzQ5NC00N2Y2LWE4YjQtZTlhYTJmYmE2N2FhIiwiaWF0IjoxNzY1NDA0NzczLCJleHAiOjE3NjU0MDc0NzN9.ztl4ah8-hYG87DAgPUzOECIBd_1wF5G5FEoBIcJY1iw`
      }
    }
  }
);

// Type definitions for applications table
export interface Application {
  id: string;
  tenantid: string;
  projectid: string;
  application_type: 'mentor' | 'mentee';
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  military_branch?: string;
  years_of_service?: number;
  deployment_history?: string;
  current_situation?: string;
  support_needs?: string;
  availability?: string;
  experience?: string;
  motivation: string;
  additional_info?: string;
  status: 'pending' | 'reviewing' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}
