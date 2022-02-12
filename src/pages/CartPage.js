import React from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function CartPage() {
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>CartPage</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  cart.map((s, index) => {
                      
                    return (
                        <tr key={s.id}>
                        <td>{++index}</td>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.price}</td>
                        <td>{s.qty}</td>
                        <td>{s.price * s .qty}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
}