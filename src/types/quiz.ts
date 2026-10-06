export interface QuizAnswers {
  name: string;
  age: string;
  bodyArea: string;
  mainPain: string;
  previousAttempts: string;
  mainObstacle: string;
  currentWeight: number;
  targetWeight: number;
  desiredResult: string;
}

export type QuizStep =
  | 'hero'
  | 'q1_age'
  | 'q2_area'
  | 'q3_pain'
  | 'identification'
  | 'q4_attempts'
  | 'belief_break'
  | 'q5_obstacle'
  | 'mechanism'
  | 'q6_current_weight'
  | 'q7_target_weight'
  | 'goal_summary'
  | 'q8_desired_result'
  | 'analysis'
  | 'result'
  | 'social_proof'
  | 'plan_ready'
  | 'offer';
