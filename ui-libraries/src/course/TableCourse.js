import Table from "react-bootstrap/Table";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TableCourse() {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/course/$/{id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const LastCourse = currentPage * coursesPerPage;
  const FirstCourse = LastCourse - coursesPerPage;
  const CurrentCourse = courses.slice(FirstCourse, LastCourse);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <h2 className="title">Course</h2>
      <h3 className="subtitle">List of Course</h3>
      <Link to={"/add-course"} className="button is-primary my-2">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Descrition</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        {CurrentCourse.map((data, index) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.desc}</td>
                <td>
                  <img src={data.url} alt="foto" width={100} />
                </td>
                <td>
                  <Link
                    to={`/course/edit/${data.id}`}
                    className="button is-warning is-small"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      if (window.confirm("apakah data ini ingin di hapus?")) {
                        deleteCourse();
                      } else {
                      }
                    }}
                    className="button is-danger is-small ml-2 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                paginate(currentPage - 1);
              }}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(
            (page) => (
              <li className="page-item" key={page}>
                <button
                  className="page-link"
                  onClick={() => {
                    paginate(page + 1);
                  }}
                >
                  {page + 1}
                </button>
              </li>
            )
          )}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                paginate(currentPage + 1);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export default TableCourse;