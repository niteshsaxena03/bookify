import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard(props) {
  return (
    <div className="mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <h5>Price is Rs{props.price}/-</h5>
            <h6>Published By {props.displayName}</h6>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
