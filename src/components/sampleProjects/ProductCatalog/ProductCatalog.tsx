import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { ProductTile } from './ProductTile'
import { CatalogHeader } from './CatalogHeader'

export const PRODUCTS_LIST = [
  {
    title: 'Web Development (hourly)',
    description:
      'I can create web applications using ReactJS, NextJS, Typescript',
    price: '$100 - $500',
    image: (
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
    ),
  },
  {
    title: 'Web Development (project)',
    description:
      'I can create web applications using ReactJS, NextJS, Typescript',
    price: '$100 - $500',
    image: (
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
    ),
  },
  {
    title: 'Oil Change',
    description: 'Standard vehicle maintenance',
    price: '$20',
    image: (
      <a
        title="Dvortygirl, CC BY-SA 3.0 'https://creativecommons.org/licenses/by-sa/3.0', via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Motor_oil_refill_with_funnel.JPG"
      >
        <img
          width="100%"
          alt="Motor oil refill with funnel"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Motor_oil_refill_with_funnel.JPG/512px-Motor_oil_refill_with_funnel.JPG?20070819072352"
        ></img>
      </a>
    ),
  },
  {
    title: 'Brake Replacement',
    description: 'Standard vehicle maintenance',
    price: '$100',
    image: (
      <a
        title="dave_7 from Lethbridge, Canada, CC BY 2.0 &lt;https://creativecommons.org/licenses/by/2.0&gt;, via Wikimedia Commons"
        href="https://commons.wikimedia.org/wiki/File:Finished_(5049379177).jpg"
      >
        <img
          width="100%"
          alt="Finished (5049379177)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Finished_%285049379177%29.jpg/512px-Finished_%285049379177%29.jpg?20140807100807"
        />
      </a>
    ),
  },
]

export const ProductCatalog: React.FC = () => {
  return (
    <>
      <Paper square elevation={0} sx={{ width: '100%' }}>
        {/* <CatalogHeader /> */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ padding: '1rem' }}
        >
          {PRODUCTS_LIST.map((product, idx) => (
            <Grid item xs={12} sm={3} md={3}>
              <ProductTile
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                key={idx}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  )
}
