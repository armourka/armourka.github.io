import { SUBMIT_FEEDBACK } from "./actionTypes";
import feedbackReducer from "./feedbackReducer";
import { FeedbackActionTypes } from "./types";

describe('features > feedback > feedbackReducer', () => {
  test(`adds new feedback item if ${SUBMIT_FEEDBACK} action is provided`, () => {
    const initialState = {
      items: [{
        name: 'test',
        email: 'test',
        product: 'Test Product',
        rating: 1,
        recScore: 2
      }]
    }

    const newFeedback = {
      name: 'newName',
      email: 'newEmail',
      product: 'Test Product',
      rating: 5,
      recScore: 5
    }

    const expectedState = {
      items: [
        {
          name: 'test',
          email: 'test',
          product: 'Test Product',
          rating: 1,
          recScore: 2
        },
        {
          name: 'newName',
          email: 'newEmail',
          product: 'Test Product',
          rating: 5,
          recScore: 5
        }
      ]
    }

    const action: FeedbackActionTypes = {
      type: SUBMIT_FEEDBACK,
      payload: newFeedback
    }

    expect(feedbackReducer(initialState, action)).toEqual(expectedState)


  })

})