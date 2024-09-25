import React, { Fragment } from 'react'
import { FormControl } from '@mui/base/FormControl'
import Button from '@mui/material/Button'
import {
  Box,
  FormGroup,
  InputLabel,
  MenuItem,
  TextField,
  Card,
  CardContent,
  FormHelperText,
  Typography,
} from '@mui/material'
import { PRODUCTS_LIST } from '../ProductCatalog/ProductCatalog'

import CustomRating from '../../CustomRating'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../../features/feedback'
import { Submitted } from './Submitted'

const ratingLabels: { [index: string]: string } = {
  1: 'Very Bad',
  2: 'Bad',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
}

const recScoreLabels: { [index: string]: string } = {
  1: 'I have no friends',
  2: 'Unlikely',
  3: 'Meh',
  4: 'Likely',
  5: 'Extremely likely',
}

export const FormSubmission: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [product, setProduct] = React.useState('')
  const [rating, setRating] = React.useState<number>(3)
  const [recScore, setRecScore] = React.useState<number>(5)
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (event: any) => {
    setProduct(event.target.value as string)
  }
  const handleChangeRating = (event: any) => {
    setRating(parseInt(event.target.value, 10))
  }
  const handleChangeRecScore = (event: any) => {
    setRecScore(parseInt(event.target.value, 10))
  }
  const handleUpdateName = (event: any) => {
    setName(event.target.value as string)
  }
  const handleUpdateEmail = (event: any) => {
    setEmail(event.target.value as string)
  }

  const handleSubmitForm = () => {
    dispatch({
      type: actionTypes.SUBMIT_FEEDBACK,
      payload: {
        name,
        email,
        product,
        rating: rating as number,
        recScore: recScore as number,
      },
    })
    setSubmitted(true)
  }

  // TODO: add form validation
  return (
    <Fragment>
      <Typography gutterBottom variant="subtitle1">
        Customer Satisfaction Survey
      </Typography>

      {submitted ? (
        <Submitted />
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Card variant="outlined">
            <CardContent>
              <FormControl>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1 },
                  }}
                  autoComplete="off"
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <TextField
                    required
                    label="Name"
                    variant="standard"
                    onChange={handleUpdateName}
                  ></TextField>
                  <TextField
                    required
                    label="Email Address"
                    variant="standard"
                    onChange={handleUpdateEmail}
                  ></TextField>

                  <TextField
                    select
                    id="product-select"
                    value={product}
                    label="Product Purchased"
                    onChange={handleChange}
                  >
                    {PRODUCTS_LIST.map((item, idx) => (
                      <MenuItem value={item} key={idx}>
                        {item}
                      </MenuItem>
                    ))}
                  </TextField>

                  <FormGroup>
                    <div>Please rate your experience using this site</div>
                    <Box sx={{ marginTop: '1rem', display: 'flex' }}>
                      <CustomRating
                        name="experience-rating"
                        value={rating}
                        onChange={handleChangeRating}
                      />
                      <FormHelperText sx={{ ml: 2 }}>
                        {ratingLabels[rating]}
                      </FormHelperText>
                    </Box>
                  </FormGroup>
                  <FormGroup>
                    <div>
                      How likely are you to recommend these services to a
                      friend?
                    </div>
                    <Box sx={{ marginTop: '1rem', display: 'flex' }}>
                      <CustomRating
                        name="recommendation-rating"
                        value={recScore}
                        onChange={handleChangeRecScore}
                      />
                      <FormHelperText sx={{ ml: 2 }}>
                        {recScoreLabels[recScore]}
                      </FormHelperText>
                    </Box>
                  </FormGroup>

                  <Button onClick={handleSubmitForm}>Submit</Button>
                </Box>
              </FormControl>
            </CardContent>
          </Card>
        </Box>
      )}
    </Fragment>
  )
}
