import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";

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
    <div className="container">
      <img src={url} />
    </div>
  );
}

export default BookDetails;
