export default {
  stripeTokenPayment: async (root, { orderId, token: payment }, { Moltin }) => {
    try {
      await Moltin.Orders.Payment(orderId, {
        gateway: 'stripe',
        method: 'purchase',
        payment,
      })

      const { data: order } = await Moltin.Orders.Get(orderId)

      return order
    } catch (e) {
      return e
    }
  },
}
