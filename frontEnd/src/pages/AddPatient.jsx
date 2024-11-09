import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
      const [patient, setPatient] = useState({
        id: "",
        name: "",
        email: "",
        age: "",
        address: "",
        phone: "",
      });
      const navigate = useNavigate()
    
     
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('id', patient.id);
        formData.append('name', patient.name);
        formData.append('email', patient.email);
        formData.append('address', patient.address);
        formData.append('age', patient.age);
        formData.append('image', patient.image);
        formData.append('phone', patient.phone);
    
        axios.post('http://localhost:3000/auth/add_employee', formData)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/patient')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
      }
    
      return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Add Employee</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <label htmlFor="inputID" className="form-label">
                  id
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputID"
                  placeholder="Enter id"
                  onChange={(e) =>
                    setPatient({ ...patient, id: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputname4" className="form-label">
                  name
                </label>
                <input
                  type="name"
                  className="form-control rounded-0"
                  id="inputname4"
                  placeholder="Enter name"
                  autoComplete="off"
                  onChange={(e) =>
                    setPatient({ ...patient, name: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputemail" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="inputemail"
                  placeholder="Enter email"
                  onChange={(e) =>
                    setPatient({ ...patient, email: e.target.value })
                  }
                />
                <label htmlFor="inputAge" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputAge"
                  placeholder="Enter Age"
                  autoComplete="off"
                  onChange={(e) =>
                    setPatient({ ...patient, age: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  autoComplete="off"
                  onChange={(e) =>
                    setPatient({ ...patient, address: e.target.value })
                  }
                />
              </div>           
              
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
    

export default AddPatient
