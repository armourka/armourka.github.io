import { SUBMIT_FEEDBACK } from "./actionTypes";

interface SubmitFeedbackAction {
  type: typeof SUBMIT_FEEDBACK
  payload: FeedbackSubmission
}

export type FeedbackActionTypes = SubmitFeedbackAction

export interface FeedbackSubmission {
  name: string
  email: string
  product: string //TODO type product enum
  rating: number
  recScore: number
}

export interface FeedbackState {
  items: FeedbackSubmission[]
}