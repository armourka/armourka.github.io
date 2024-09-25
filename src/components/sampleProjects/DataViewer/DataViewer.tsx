import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../../features/feedback'
import { FeedbackSubmission } from '../../../features/feedback/types'
import { Box, Card, CardContent, Grid, styled, Typography } from '@mui/material'
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

const AnalyticsTile = styled(Card)({
  textAlign: 'center',
  height: '100%',
})

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
      <Typography variant="subtitle1" gutterBottom>
        Site Analytics
      </Typography>

      <Grid container spacing={3} sx={{ margin: '2 2' }}>
        <Grid item xs={12} md={4}>
          <AnalyticsTile variant="outlined">
            <CardContent>
              <Typography variant="subtitle1">Average Site Rating</Typography>
              <Typography variant="h2">{averageRating()}</Typography>
            </CardContent>
          </AnalyticsTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnalyticsTile variant="outlined">
            <CardContent>
              <Typography variant="subtitle1">Most Popular Product</Typography>
              <Box sx={{ margin: 'auto' }}>
                <img
                  width="100px"
                  alt="React-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
                />
              </Box>
              <Typography variant="subtitle2">
                {mostPopularProduct()}
              </Typography>
            </CardContent>
          </AnalyticsTile>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnalyticsTile variant="outlined">
            <CardContent>
              <Typography variant="subtitle1">
                Average Recommendation Score
              </Typography>
              <Typography variant="h2">{averageRecScore()}</Typography>
            </CardContent>
          </AnalyticsTile>
        </Grid>
      </Grid>
      <FeedbackTable data={feedback} />
    </>
  )
}
