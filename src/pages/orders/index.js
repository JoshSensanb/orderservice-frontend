import styles from "src/styles/order.module.css";
import data from '/data/data'
import { useState, useEffect } from "react";
import Spinner from "/components/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.order()
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Total</th>
                <th>Shipping State</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i}>
                  <td data-label="customerId">{o.customerId}</td>
                  <td data-label="total">{o.total}</td>
                  <td data-label="shippingAddress.state">{o.shippingAddress.state}</td>
                  <td data-label="shippingAddress.city">{o.shippingAddress.city}</td>
                  <td data-label="shippingAddress.postalCode">{o.shippingAddress.postalCode}</td>
                  <td data-label="item.name">{o.item.name}</td>
                  <td data-label="item.quantity">{o.item.quantity}</td>
                  <td data-label="item.price">{o.item.price}</td>
                  <td data-label="payment.method">{o.payment.method}</td>
                  <td data-label="payment.number">{o.payment.number}</td>
                  <td data-label="payment.billingAddress.state">{o.payment.billingAddress.state}</td>
                  <td data-label="payment.billingAddress.city">{o.payment.billingAddress.city}</td>
                  <td data-label="payment.billingAddress.postalCode">{o.payment.billingAddress.postalCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Orders;
