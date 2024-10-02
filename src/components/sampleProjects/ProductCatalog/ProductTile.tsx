import { Box, Button, CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import React, { ReactNode } from 'react'

interface ProductTileProps {
  title: string
  description: string
  price: string
  image?: ReactNode
}

export const ProductTile: React.FC<ProductTileProps> = (props) => {
  const { title, description, image, price } = props
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {image || (
        <Box margin="auto">
          <a
            title="Facebook, Public domain, via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
          >
            <img
              height="200px"
              alt="React-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
            />
          </a>
        </Box>
      )}
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="subtitle1">{price}</Typography>

        <Box sx={{ display: 'flex', marginTop: '16px' }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginRight: '16px' }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
