import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/Card";

function HomePage() {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((book) => setBooks(book.docs));
  }, []);
  return (
    <div className="container">
      {books.map((book) => (
        <MyCard {...book.data()}/>
      ))}
    </div>
  );
}

export default HomePage;
