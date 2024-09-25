import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export const Submitted: React.FC = () => {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1">
            Thanks for your feedback! See how it stacks up in the next tab.
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
