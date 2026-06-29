import React from 'react';
import OrderForm from '../components/OrderForm';

function Order() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Place an Order</h1>
      <OrderForm />
    </div>
  );
}

export default Order;