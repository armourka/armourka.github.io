import React, { Fragment } from 'react';
import { FormControl } from '@mui/base/FormControl';
import Button from '@mui/material/Button';
import { Box, Checkbox, FormControlLabel, FormGroup, SelectChangeEvent, FormLabel, Input, InputLabel, MenuItem, Select, TextField, Card, CardContent, FormHelperText, Typography } from '@mui/material';
import { BorderAll, Label } from '@mui/icons-material';

import { PRODUCTS_LIST } from '../ProductCatalog/ProductCatalog';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '../../../theme';
import CustomRating from '../../CustomRating';
import CustomRating2 from '../../CustomRating2';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../../features/feedback';
import { Submitted } from './Submitted';


export const FormSubmission: React.FC = () => {
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [product, setProduct] = React.useState('')
  const [rating, setRating] = React.useState<number>(3)
  const [recScore, setRecScore] = React.useState<number>(5)
  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (event: any) => {
    setProduct(event.target.value as string);
  };
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
      type: actionTypes.SUBMIT_FEEDBACK, payload: {
        name,
        email,
        product,
        rating: rating as number,
        recScore: recScore as number
      }
    })
    setSubmitted(true)
  }
  /* <p> A simple form for data collection. This is for demonstration purposes only - to leave real feedback, please use my contact page. </p> */

  return (<Fragment>
    <Typography gutterBottom variant="subtitle1">Customer Satisfaction Survey</Typography>

    {submitted ? <Submitted /> :
      <Card variant='outlined' >
        <CardContent>
          <FormControl >
            {/* <FormLabel>Customer Satisfaction Survey</FormLabel> */}
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1 },
              }}
              // noValidate
              autoComplete="off"
              display="flex"
              flexDirection="column"
              gap={2}
            >
              {/* <FormGroup row> */}
              <TextField required label="Name" variant="standard" onChange={handleUpdateName}></TextField>
              <TextField required label="Email Address" variant="standard" onChange={handleUpdateEmail}></TextField>
              {/* </FormGroup> */}

              <TextField select
                // sx={{ width: '75%' }}
                id="product-select"
                value={product}
                label="Product Purchased"
                onChange={handleChange}
              >
                {PRODUCTS_LIST.map((item, idx) => (<MenuItem value={item} key={idx}>{item}</MenuItem>))}
              </TextField>

              {/* {TODO: Instead of doing this centered, put smiley ratings lhs and on the right have labels on hover/select
            OR smileys rhs with labels to the left of the smileys, wrap to next row on small screens.} */}
              <FormGroup>
                <InputLabel>Please rate your experience using this site</InputLabel>
                {/* <Box sx={{ margin: '0 30%' }}> */}
                <Box sx={{ marginTop: '1rem' }}>
                  <CustomRating
                    name='experience-rating'
                    value={rating}
                    onChange={handleChangeRating}
                  />
                  {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormHelperText sx={{ flex: 1, marginLeft: '-25%' }}>Very dissatisfied</FormHelperText>
                    <FormHelperText>Very satisfied</FormHelperText>
                  </Box> */}
                </Box>
              </FormGroup>
              <FormGroup>
                <InputLabel>How likely are you to recommend these services to a friend?</InputLabel>
                {/* <Box sx={{ margin: '0 30%' }}> */}
                <Box sx={{ marginTop: '1rem' }}>
                  <CustomRating
                    name='experience-rating'
                    value={recScore}
                    onChange={handleChangeRecScore}
                  />
                  {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <FormHelperText sx={{ flex: 1, marginLeft: '-25%' }}>I have no friends</FormHelperText>
                    <FormHelperText>Very likely</FormHelperText>
                  </Box> */}
                </Box>

                {/* <Box sx={{ margin: '0 auto' }}>
                <CustomRating2
                  name='recommendation-score'
                  value={recScore}
                  onChange={handleChangeRecScore}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <FormHelperText sx={{ flex: 1, marginLeft: '-25%' }}>Not at all likely</FormHelperText>
                  <FormHelperText>Extremely Likely</FormHelperText>
                </Box>
              </Box> */}
              </FormGroup>

              <Button onClick={handleSubmitForm}>Submit</Button>
            </Box >
          </FormControl >
        </CardContent>
      </Card >}
    {/* </ThemeProvider> */}
  </Fragment>)
}