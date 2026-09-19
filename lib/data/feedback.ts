export type Feedback = {
  id: string;
  name: string;
  rating: number;
  message: string;
  createdAt: string;
};

/** Shown only when the database is unavailable — real reviews live in Supabase. */
export const sampleFeedback: Feedback[] = [];
