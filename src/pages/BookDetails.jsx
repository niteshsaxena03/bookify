import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function BookDetails() {
  const params = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    firebase.getBookByID(params.bookId).then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setUrl(url));
    }
  }, [data]);

  if (!data) return <h1>Loading.....</h1>;

  return (
    <div className="container mt-5">
    <h1>{data.name}</h1>
      <img src={url} width="50% " style={{ borderRadius: "10px" }} />
      <h1>Details of this book</h1>
      <p>Price Rs.{data.price}</p>
      <p>ISBN No. {data.isbnNo}</p>
      <h1>Details of owner</h1>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <Button>Buy Now</Button>
    </div>
  );
}

export default BookDetails;
