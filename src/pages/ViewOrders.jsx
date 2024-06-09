import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/Card";
import { CardGroup } from "react-bootstrap";

function ViewOrders() {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyBooks(firebase.user.uid)
        ?.then((books) => setBooks(books.docs));
  }, [firebase]);

  if (!firebase.isLoggedIn) return <h1>Please login first</h1>;

  return (
    <div>
      <CardGroup>
        {books.map((book) => (
          <MyCard link={`/books/orders/${book.id}`} key={book.Id} id={book.Id} {...book.data()} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ViewOrders;
