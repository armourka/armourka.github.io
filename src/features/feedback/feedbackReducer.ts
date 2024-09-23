/* eslint-disable @typescript-eslint/default-param-last */

import { SUBMIT_FEEDBACK } from "./actionTypes";
import { FeedbackActionTypes, FeedbackSubmission } from "./types";

const initialState = {
  items: [
    {
      name: 'Joe Smith',
      email: 'joe@joe.com',
      product: 'Web Development (hourly)',
      rating: 5,
      recScore: 5
    },
    {
      name: 'Alice Bobson',
      email: 'abob@son.com',
      product: 'Other',
      rating: 3,
      recScore: 3
    }]
}

export default (state = initialState, action: FeedbackActionTypes) => {
  switch (action.type) {
    case SUBMIT_FEEDBACK:
      state.items.push(action.payload)
      return { ...state, items: state.items }
    default:
      return state
  }
}