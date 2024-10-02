import styled from '@emotion/styled'
import { IconButton, Paper, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'

const PageHeader = styled(Paper)({
  height: '64px',
  display: 'flex',
  alignItems: 'center',
})

export const CatalogHeader = () => {
  return (
    <PageHeader elevation={4} square>
      <Typography variant="h4" sx={{ marginLeft: '2rem', flex: 1 }}>
        Your site logo
      </Typography>
      <IconButton sx={{ marginRight: '1rem' }}>
        <ShoppingCartIcon />
      </IconButton>
    </PageHeader>
  )
}
