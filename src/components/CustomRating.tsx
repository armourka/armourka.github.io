import * as React from 'react'
import { styled } from '@mui/material/styles'
import Rating, { IconContainerProps, RatingProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}))

const customIcons: {
  [index: string]: React.ReactElement
} = {
  1: <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />,
  2: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />,
  3: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 30 }} />,
  4: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 30 }} />,
  5: <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 30 }} />,
}

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props
  return <span {...other}>{customIcons[value]}</span>
}

export default function CustomRating(props: RatingProps) {
  return (
    <StyledRating
      IconContainerComponent={IconContainer}
      value={props.value}
      onChange={props.onChange}
      highlightSelectedOnly
    />
  )
}
