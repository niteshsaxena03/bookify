import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

function List() {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [isbnNo, setisbnNo] = useState("");
  const [price, setprice] = useState("");
  const [coverPic, setcoverPic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbnNo, price, coverPic);
  };
  return (
    <div className="container mt-5 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ISBN"
            value={isbnNo}
            onChange={(e) => setisbnNo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover pic</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setcoverPic(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default List;
