class OrderPresenter {
    static present(order) {
      return {
        orderId: order.orderId,
        message: 'Order created successfully',
      };
    }
  }
  
  module.exports = OrderPresenter;
  