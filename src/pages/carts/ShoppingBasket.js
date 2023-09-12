import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import ShoppingBasketRow from './ShoppingBasketRow'

import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import ShoppingBasketSubTotal from './ShoppingBasketSubTotal'
import { useNavigate } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ShoppingBasket() {
  const productStore = useSelector((state) => state.productSlice)
  const navigate = useNavigate()

  useEffect(() => {
    if (!productStore.cartItemList?.length) {
      navigate('/')
    }
  }, [navigate, productStore.cartItemList?.length])

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={16}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={12}>
        {productStore.categoryProductOrderList?.map((row, index) => {
          return (
            <ShoppingBasketRow
              data={row}
              index={index}
              key={index}
              cartItemId={productStore.cartItemList[index].id}
            />
          )
        })}
      </Grid>
      <Grid item xs={4}>
        <Item>
          <ShoppingBasketSubTotal
            subTotal={productStore.subTotal}
            quantity={productStore.totalQuantities}
          />
        </Item>
      </Grid>
    </Grid>
  )
}
