import React from 'react'
import { Box, Fade } from '@mui/material'

type PageProps = {
  children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <Fade in={true}>
      <Box
        sx={{
          width: '90%',
          padding: '20px 10px',
          margin: '0px auto',
          marginTop: '2rem',
        }}
      >
        {children}
      </Box>
    </Fade>
  )
}
