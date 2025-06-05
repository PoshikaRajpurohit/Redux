import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";
import { addNewBook } from "../services/Actions/Action";
import "../App.css";

const AddBook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    id: "",
    title: "",
    desc: "",
    category: "",
    price: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(initialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    dispatch(addNewBook(inputForm));
    setInputForm(initialState);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="add-book-card shadow p-4 w-100" style={{ maxWidth: "700px" }}>
        <h3 className="text-center text-primary mb-4 fw-bold">📚 Add a New Book</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Book Description"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Book Price"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Category</Form.Label>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
            >
              <option value="">Select Category</option>
              <option value="Education">Education</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Comedy">Comedy</option>
              <option value="Motivational">Motivational</option>
              <option value="Story">Story</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Book Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5 py-2 rounded-pill fw-semibold">
              Add Book
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default AddBook;
