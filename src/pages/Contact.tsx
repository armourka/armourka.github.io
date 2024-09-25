import React from 'react'
import { Page } from '../components/Page'
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  FormControl,
} from '@mui/material'

export const Contact: React.FC = () => {
  return (
    <Page>
      <Box
        sx={{
          margin: '2rem auto',
        }}
      >
        <Card
          sx={{
            margin: 'auto',
            width: '50%',
            p: '2rem 2rem',
          }}
        >
          <Box component="form">
            <TextField fullWidth label="Name"></TextField>
            <TextField fullWidth label="Email"></TextField>
            <TextField multiline fullWidth label="Message"></TextField>
            <Button role="submit">Submit</Button>
          </Box>
        </Card>
      </Box>
    </Page>
  )
}
