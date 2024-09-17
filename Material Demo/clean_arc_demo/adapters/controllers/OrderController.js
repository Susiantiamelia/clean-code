const CreateOrderUseCase = require('../../usecase/CreateOrderUseCase');
const OrderRepository = require('../repositories/OrderRepository');
const OrderPresenter = require('../presenters/OrderPresenter');

class OrderController {
  constructor() {
    const orderRepository = new OrderRepository();
    this.createOrderUseCase = new CreateOrderUseCase(orderRepository);
  }

  async createOrder(req, res) {
    const { customerId, items } = req.body;
    try {
      const orderId = await this.createOrderUseCase.execute(customerId, items);
      const response = OrderPresenter.present({ orderId });
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new OrderController();
