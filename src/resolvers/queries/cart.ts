export default {
  cart: async (root, { id: cartId }, { Moltin }) => {
    const getCart = await Moltin.Cart(cartId).Get()
    const getCartItems = await Moltin.Cart(cartId).Items()

    const [{ data: { id } }, { data: items }] = await Promise.all([
      getCart,
      getCartItems,
    ])

    return {
      id,
      items,
    }
  },
}
