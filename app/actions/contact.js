"use server";

import { createClient } from "@supabase/supabase-js";

export async function submitContact(formData) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

    // Check if env variables are defined
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === "your_supabase_project_url") {
      return { 
        success: false, 
        message: "Supabase configuration is missing. Please add your credentials to .env.local file." 
      };
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return { success: false, message: "All fields are required." };
    }

    // Insert into the 'contacts' table
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, message: "Failed to send message. Please try again later." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
