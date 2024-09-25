import { Typography } from '@mui/material'
import React from 'react'

export const PRODUCTS_LIST = [
  'Web Development (hourly)',
  'Web Development (project)',
  'Oil Change',
  'Brake Job',
  'Other',
]

export const ProductCatalog: React.FC = () => {
  return (
    <>
      <Typography variant="subtitle1">Product Catalog</Typography>
      <Typography variant="h2"> Coming Soon!</Typography>
    </>
  )
}
