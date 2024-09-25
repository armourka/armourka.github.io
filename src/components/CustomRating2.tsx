import * as React from 'react'
import { styled } from '@mui/material/styles'
import Rating, { IconContainerProps, RatingProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { Button } from '@mui/material'

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}))

export default function CustomRating(props: RatingProps) {
  function IconContainer(iprops: IconContainerProps) {
    const { value, ...other } = iprops
    return (
      <span {...other}>
        <Button variant={value == props.value ? 'contained' : 'outlined'}>
          {value}
        </Button>
      </span>
    )
  }

  return (
    <StyledRating
      IconContainerComponent={IconContainer}
      value={props.value}
      onChange={props.onChange}
      highlightSelectedOnly
    />
  )
}
