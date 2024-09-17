class Order {
  constructor(customerId, items) {
    this.customerId = customerId;
    this.items = items;
    this.status = 'pending';
    this.createdAt = new Date();
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

module.exports = Order;
