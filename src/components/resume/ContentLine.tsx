import React from 'react'
import { Box } from '@mui/material'

interface ContentLineProps {
  title: string;
  bulletList?: string[];
  image?: React.ReactNode;

}
export const ContentLine: React.FC<ContentLineProps> = ({title, bulletList, image}) => {
  return (
  <Box sx={{display: 'flex', alignItems: 'center'}}>
    <Box sx={{}}>
    {image}</Box>
    <Box sx={{flex: 1}}>{title}</Box>
    <Box sx={{flex: 2}}>
      - item 1
      - item 2
      - item 3
    </Box>
  </Box>)
}