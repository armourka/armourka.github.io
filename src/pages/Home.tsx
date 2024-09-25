import React, { Fragment } from 'react'
// import Counter from '../components/counter/Counter'
import { Box, Fade, Toolbar, Typography } from '@mui/material'
import { Ascii } from '../components/Ascii'
import rose from '../assets/rose'

export const Home: React.FC = () => {
  return (
    <>
      <Toolbar />
      {/* option 1: flex left and right */}
      {/* <Box sx={{
        width: '90%',
        padding: '20px 10px',
        margin: '0px auto',
        marginTop: '2rem',
        display: 'flex'
      }}>
        <Box sx={{flex: 1}}>
          <Typography variant="h1" >K__Arm</Typography>
          <Typography variant="h2">web developer</Typography>
          <Typography variant="body1">subtext, paragraph component </Typography>
        </Box>
        <Box sx={{flex: 1, color: '#00ff00'}}>
          <Ascii />
        </Box>
      </Box> */}

      {/* Option 2: let them overlap */}
      <Box
        sx={{
          width: '75%',
          // padding: '20px 10px',
          margin: '0px auto',
          // marginTop: '2rem',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: '25%' }}>
          <Typography variant="h1">k_armour</Typography>
          {/* <Typography variant="h2">web developer</Typography> */}
          <Typography variant="body1">
            web developer seeking full-time or freelance employment{' '}
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', left: '40%', color: '#00ff00' }}>
          <Ascii formattedText={rose} />
        </Box>
      </Box>
    </>
  )
}
