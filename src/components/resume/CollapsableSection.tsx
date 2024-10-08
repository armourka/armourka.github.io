import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Card,
  Collapse,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface CollapsableSectionProps {
  title: string
  children: React.ReactNode
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const CollapsableSection: React.FC<CollapsableSectionProps> = (
  props: CollapsableSectionProps
) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardHeader
        title={props.title}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
      ></CardHeader>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{props.children}</CardContent>
      </Collapse>
    </Card>
  )
}
