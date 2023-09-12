import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { Button, FormControl, FormLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateCart } from '../../store/reducers/productSlice'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ShoppingBasketRow(props) {
  const dispatch = useDispatch()
  const {
    id,
    name,
    productname,
    description,
    price,
    discountprice,
    unitsinstock,
    quantityperunit,
    discount,
    discountvaliduntil,
    tax_rate,
  } = props.data

  const quantityMenuItem = [
    { label: '1', value: '1', id: 1 },
    { label: '2', value: '2', id: 2 },
    { label: '3', value: '3', id: 3 },
    { label: '4', value: '4', id: 4 },
    { label: '5', value: '5', id: 5 },
    { label: '6', value: '6', id: 6 },
    { label: '7', value: '7', id: 7 },
    { label: '8', value: '8', id: 8 },
  ]

  return (
    <Grid container item sx={{ flexGrow: 1 }} spacing={2}>
      <Grid item xs={12} sm={4} md={4}>
        <Item>
          <Card sx={{ maxWidth: 245 }} id={id}>
            <CardMedia
              component="img"
              height="160"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
          </Card>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Item>
          <Card sx={{ maxWidth: 545 }} id={id}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {description}
              </Typography>
              <Typography
                variant="h5"
                color="text.primary"
                sx={{ display: 'inline' }}
              >
                Price: {`£${discountprice}`}
              </Typography>
              {discountprice !== price && (
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'line-through',
                    display: 'inline',
                    marginLeft: 2,
                  }}
                >
                  {`£${price}`}
                </Typography>
              )}
              {discountvaliduntil.Valid && (
                <Typography variant="body1" color="text.secondary">
                  {`Discount: £${discount}`}
                </Typography>
              )}
              {discountvaliduntil.Valid && (
                <Typography variant="body1" color="text.secondary">
                  {`valid until ${new Date(
                    discountvaliduntil.Time,
                  ).toDateString()}`}
                </Typography>
              )}

              <Typography variant="body2" color="text.secondary">
                Unit in Stock: {unitsinstock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity per Unit: {quantityperunit}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Quantity {props.data.quantity}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormControl component="fieldset">
                <FormLabel id="sort-field-label" component="legend">
                  Quantity:
                </FormLabel>
                <Select
                  labelId="file-search-field-select-label"
                  id="file-search-field-select"
                  value={props.data.quantity}
                  onChange={(e) => {
                    dispatch(
                      updateCart({
                        quantity: Number(e.target.value),
                        cartItemId: props.cartItemId,
                      }),
                    )
                  }}
                >
                  {quantityMenuItem.map((e) => (
                    <MenuItem key={e.id} value={e.value}>
                      {e.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                color="primary"
                onClick={() => {
                  dispatch(removeFromCart(props.cartItemId))
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
                    color: 'white',
                    textTransform: 'none',
                  }}
                >
                  Remove from Basket
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Item>
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <Card sx={{ maxWidth: 345 }} id={id}>
          <CardContent>
            <Typography variant="h5" color="text.primary">
              Price: {`£${Number(discountprice) * props.data.quantity}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
