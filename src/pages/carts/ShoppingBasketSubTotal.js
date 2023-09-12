import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../store/reducers/orderSlice'
import { updateOrderStatus } from '../../store/reducers/authSlice'
import { useSelector } from 'react-redux'

export default function ShoppingBasketSubTotal(props) {
  const authStore = useSelector((state) => state.authSlice)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <CloudDoneIcon />
          </IconButton>
        }
        title=""
        subheader={`Your order qualifies for FREE Delivery in the UK. Delivery Details
        Select this option at checkout.`}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          Subtotal ({props.quantity} items): {`£${props.subTotal}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          color="primary"
          onClick={async () => {
            dispatch(updateOrderStatus('checkout'))
            if (Object.entries(authStore.userinfo).length === 0) {
              navigate('/login')
            } else {
              //const ret = dispatch(addItemToCart())
              dispatch(createOrder())
              navigate('/checkout')
            }
          }}
          variant="contained"
          size="small"
          aria-label="add to basket"
          sx={{
            marginRight: 0,
            marginLeft: 10,
            marginTop: 3,
            marginBottom: 0,
          }}
        >
          <Typography
            variant="body2"
            style={{
              color: 'yellow',
              textTransform: 'none',
            }}
          >
            Proceed to Checkout
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}
