const OrderModel = require('../../frameworks/sequelize/models/OrderModel');

class OrderRepository {
  async save(order) {
    const result = await OrderModel.create({
      customerId: order.customerId,
      items: JSON.stringify(order.items),
      status: order.status,
      createdAt: order.createdAt,
    });
    return result.id;
  }
}

module.exports = OrderRepository;
