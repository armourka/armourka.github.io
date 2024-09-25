import React from 'react'
import { Box } from '@mui/material'
import rose from '../assets/rose'

interface AsciiProps {
  formattedText: string
}

export const Ascii: React.FC<AsciiProps> = ({ formattedText }) => {
  return (
    <Box
      sx={{
        display: 'block',
        whiteSpace: 'pre',
        zIndex: -1,
      }}
    >
      {formattedText}
    </Box>
  )
}
