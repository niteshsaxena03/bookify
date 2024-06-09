import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";

function ViewOrderDetails() {
  const params = useParams();
  const firebase = useFirebase();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, []);

  return (
    <div className="container">
      <h1>orders</h1>
      {orders.map((order) => {
        const data = order.data();
        return (
          <div
            key={data.uid}
            style={{ border: "1px solid", borderColor:"red" }}
          >
            <h5>Order by:{data.displayName}</h5>
            <h6>Qty:{data.qty}</h6>
            <h6>Email:{data.userEmail}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default ViewOrderDetails;
