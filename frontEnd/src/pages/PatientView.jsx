import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PatientView = () => {
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate(); // Use the 'navigate' hook

  useEffect(() => {
    axios
      .get("http://localhost:3000/backend/patient")
      .then((result) => {
        if (result.data.Status) {
          setPatient(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/backend/delete_patient/'+id)
    .then(result => {
        if(result.data.Status) {
            window.location.reload()
        } else {
            alert(result.data.Error)
        }
    })
  } 
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Patient List</h3>
      </div>
      <Link to="/add_patient" className="btn btn-success">
        Add Patient
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Medical ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((p) => (
              <tr key={p._id}>
                <td>{p.MedID}</td>
                <td>{p.F_name} {p.L_name}</td>
                <td>{p.email}</td>
                <td>{p.age}</td>
                <td>{p.address}</td>
                <td>{p.phone}</td>
                <td>
                  <Link
                    to={`/backend/edit_patient/` + p.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientView
