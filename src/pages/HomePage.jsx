import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/Card";
import { CardGroup } from "react-bootstrap";

function HomePage() {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((book) => setBooks(book.docs));
  }, []);
  return (
    <div className="container">
      <CardGroup>
        {books.map((book) => (
          <MyCard id={book.id} key={Date.now()} {...book.data()} />
        ))}
      </CardGroup>
    </div>
  );
}

export default HomePage;
