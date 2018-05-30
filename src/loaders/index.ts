import * as DataLoader from 'dataloader'
import { keyBy } from 'lodash'

import { Moltin } from '../'

const brandLoader = new DataLoader(async brandIds => {
  console.log('Brand IDS inside loader')
  console.log(brandIds)

  return brandIds.map(async id => {
    console.log('LOOOOPING')
    const { data } = await Moltin.Brands.Get(id)

    return data

    // brandsById.push(brand)
  })
})

export default {
  brandLoader,
}
