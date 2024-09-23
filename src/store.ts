import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import { FeedbackReducer } from './features/feedback'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  feedback: FeedbackReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

/*
export interface SystemState {
  count: {
    value: number
    }
  feedback: FeedbackState
}
*/

export default store
