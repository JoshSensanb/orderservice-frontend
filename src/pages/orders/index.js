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
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i}>
                  <td data-label="customerId">{o.id}</td>
                  <td data-label="total">{o.total}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Orders;
