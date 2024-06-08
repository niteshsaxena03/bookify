import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";

function LoginPage() {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebase);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.loginUserWithEmailAndPassword(
        email,
        password
      );
      if (result) alert("Successfully logged in");
    } catch (error) {
      console.log(error);
      alert("Error logging in");
    }
  };
  return (
    <div className="container mt-5 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <h1>Or</h1>
      <Button variant="danger" onClick={() => firebase.signInWithGoogle()}>
        Sign in With Google
      </Button>
    </div>
  );
}

export default LoginPage;
