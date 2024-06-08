import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";
import { Navigate, useNavigate } from "react-router-dom";

function MyCard(props) {
  const [url, setUrl] = useState(null);
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setUrl(url));
  }, []);
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem", margin: "15px" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <h5>Price is Rs{props.price}/-</h5>
            <h6>Published By {props.displayName}</h6>
          </Card.Text>
          <Button
            variant="primary"
            onClick={(e) => navigate(`/book/view/${props.id}`)}
          >
            View Book
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
