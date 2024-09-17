const Order = require('../entity/Order');

class CreateOrderUseCase {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(customerId, items) {
    const order = new Order(customerId, items);
    const total = order.calculateTotal();

    if (total <= 0) {
      throw new Error('Order total must be greater than zero.');
    }

    return await this.orderRepository.save(order);
  }
}

module.exports = CreateOrderUseCase;
