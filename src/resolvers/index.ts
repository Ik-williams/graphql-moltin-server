import authenticationMutationResolvers from './mutations/authentication'
import cartMutationResolvers from './mutations/cart'

import cartQueryResolvers from './queries/cart'
import brandQueryResolvers from './queries/brands'
import productQueryResolvers from './queries/products'
import rootQueryResolvers from './root'

export default {
  ...rootQueryResolvers,
  Mutation: {
    ...authenticationMutationResolvers,
    ...cartMutationResolvers,
  },
  Query: {
    ...brandQueryResolvers,
    ...cartQueryResolvers,
    ...productQueryResolvers,
  },
}
