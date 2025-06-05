import { Button, Spinner, Table, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { deleteBook, getAllBooksAsync } from "../services/Actions/Action";
import { useNavigate } from "react-router";
import "../App.css";

const Home = () => {
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, []);

  return (
    <Container className="home-container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4">📚 Book List</h2>
      {isLoading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="table-wrapper shadow-sm rounded">
          <Table responsive bordered hover className="custom-table text-center align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Image</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.desc}</td>
                  <td>{book.category}</td>
                  <td>₹{book.price}</td>
                  <td>
                    <img src={book.image} alt="book" height={60} className="rounded shadow-sm" />
                  </td>
                  <td>
                    <Button
                      variant="outline-primary"
                      className="icon-button"
                      onClick={() => handleEdit(book.id)}
                    >
                      <FaEdit />
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      className="icon-button"
                      onClick={() => handleDelete(book.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Home;
