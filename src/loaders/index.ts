import * as DataLoader from 'dataloader'
import { keyBy } from 'lodash'

import { Moltin } from '../'

const brandLoader = new DataLoader(async brandIds => {
  return brandIds.map(async id => {
    const { data } = await Moltin.Brands.Get(id)

    return data
  })
})

const productLoader = new DataLoader(async productIds => {
  return productIds.map(async id => {
    const { data } = await Moltin.Products.Get(id)

    return data
  })
})

export default {
  brandLoader,
  productLoader,
}
