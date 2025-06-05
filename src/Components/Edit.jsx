import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { getBook, updateBook } from "../services/Actions/Action";
import "../App.css";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state.bookReducer);

  const intialState = {
    id: "",
    title: "",
    desc: "",
    category: "",
    price: "",
    image: "",
  };
  const [inputForm, setInputForm] = useState(intialState);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(inputForm));
    setInputForm(intialState);
    navigate("/");
  };

  useEffect(() => {
    if (id) dispatch(getBook(id));
  }, [id]);

  useEffect(() => {
    if (book) setInputForm(book);
  }, [book]);

  return (
    <Container className="edit-container mt-5 p-4 shadow rounded bg-white">
      <h2 className="text-primary fw-bold text-center mb-4">✏️ Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Title
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Book Title"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Book Description"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Price
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter Book Price"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Select
              aria-label="Category"
              name="category"
              value={inputForm.category}
              onChange={handleChanged}
              required
            >
              <option value="">Select Category</option>
              <option value="Education">Education</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Comedy">Comedy</option>
              <option value="Motivational">Motivational</option>
              <option value="Story">Story</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="2">
            Book Image
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
              required
            />
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" className="px-4">
            Update Book
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditBook;
