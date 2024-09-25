import React from 'react'
import { Box, Card, Tabs, Tab, Typography } from '@mui/material'
import { DataViewer } from './DataViewer/DataViewer'
import { FormSubmission } from './FormSubmission/FormSubmission'
import { ProductCatalog } from './ProductCatalog/ProductCatalog'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export const ProjectsHolder: React.FC = () => {
  const [tab, setTab] = React.useState(0)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ margin: '0 auto', width: '100%' }}>
      <Card sx={{ margin: 'auto', marginTop: '20px', p: 2 }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Form Submission" />
          <Tab label="Data Viewer" />
          <Tab label="Product Catalog" />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <FormSubmission />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <DataViewer />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <ProductCatalog />
        </TabPanel>
      </Card>
    </Box>
  )
}
