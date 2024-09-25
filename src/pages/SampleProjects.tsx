// I'm available to take on any front-end projects
// Here is a small sample of projects I can build to support you and your business needs
// Data Viewer, Product Catalog
import React from 'react'
import { Page } from '../components/Page'
import { Typography, Box } from '@mui/material'
import { ProjectsHolder } from '../components/sampleProjects/ProjectsHolder'

export const SampleProjects: React.FC = () => {
  return (
    <Page>
      <Box sx={{ margin: 'auto', marginTop: '20px', width: '75%' }}>
        <Typography>
          These front-end demo pages are intended to give you an idea of what I
          can build to support your business needs. Don't limit your
          expectations - this is only a small sample of what I can offer!
        </Typography>
        <ProjectsHolder></ProjectsHolder>
      </Box>
    </Page>
  )
}
