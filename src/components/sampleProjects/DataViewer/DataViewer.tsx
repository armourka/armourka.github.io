import React from 'react'
import logo from './logo.png' // Tell webpack this JS file uses this image
import { useSelector } from 'react-redux'
import { selectors } from '../../../features/feedback'
import { FeedbackSubmission } from '../../../features/feedback/types'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material'
import { FeedbackTable } from './FeedbackTable'

// TODO: refactor this to be reusable
// const averageFromObjectArray = (array: FeedbackSubmission[], key: keyof FeedbackSubmission) => {
//   let sum: number = 0
//   array.forEach((item: FeedbackSubmission) => {
//     sum += item.get(key)
//   })
//   console.log(sum)
//   console.log(sum / numResponses)
//   // TODO: fix this when i can connect to npm and install lodash
//   // return round(((sum / numResponses) || 0), 1)
//   return (sum / numResponses || 0).toFixed(1)
// }

export const DataViewer: React.FC = () => {
  const feedback = useSelector(selectors.getAllFeedback)
  const numResponses = feedback.length

  const averageRating = () => {
    let sum: number = 0
    feedback.forEach((item: FeedbackSubmission) => {
      sum += item.rating
    })
    return (sum / numResponses || 0).toFixed(1)
  }
  const averageRecScore = () => {
    let sum: number = 0
    feedback.forEach((item: FeedbackSubmission) => {
      sum += item.recScore
    })
    return (sum / numResponses || 0).toFixed(1)
  }
  const mostPopularProduct = () => {
    // stub
    return feedback[0].product
  }

  return (
    <>
      <Typography variant="subtitle1">Site Analytics</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: 2,
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}
      >
        <Card variant="outlined" sx={{ width: '30%' }}>
          <CardContent>
            <Typography variant="subtitle1">Average Site Rating</Typography>
            <Typography variant="h2">{averageRating()}</Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ width: '30%' }}>
          <CardContent>
            <Typography variant="subtitle1">Most Popular Product</Typography>
            <Box sx={{ margin: 'auto' }}>
              <img
                width="100px"
                alt="React-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
              />
            </Box>
            <Typography variant="subtitle2">{mostPopularProduct()}</Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ width: '30%' }}>
          <CardContent>
            <Typography variant="subtitle1">
              Average Recommendation Score
            </Typography>
            <Typography variant="h2">{averageRecScore()}</Typography>
          </CardContent>
        </Card>
      </Box>
      <FeedbackTable data={feedback} />
    </>
  )
}
