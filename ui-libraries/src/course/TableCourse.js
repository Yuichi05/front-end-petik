/** @format */
// ini pakai react bootsrap

import Table from "react-bootstrap/Table";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function TableCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  return (
    <Layout>
      <h2 className="title">Course</h2>
      <h3 className="subtitle">List of Course</h3>
      <Link to={"/Course/add"} className="button is-primary my-2">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Descrition</th>
            <th>Image</th>
          </tr>
        </thead>
        {courses.map((data) => {
          return (
            <tbody>
              <tr>
                <td>1</td>
                <td>{data.name}</td>
                <td>{data.desc}</td>
                <td>
                  <img src={data.url} alt="foto" width={100} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Layout>
  );
}

export default TableCourse;