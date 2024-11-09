import React, {useEffect,useState} from 'react';
import axios from 'axios';
import "./PatientList.css";

const PatientList = () => {
    const [patients,setPatient] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:3000/backend/patient");
                setPatient(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <div>
        <div className = "patients">
            {patients.map(patient => (
                <div key={patient.id} className="patient">
                    <h3>{patient.MedID}</h3>
                    <p>Name: {patient.F_name} {patient.L_name}</p>
                    <p>age: {patient.age}</p>
                    <p>Birthday: {patient.birthday}</p>
                    <p>gender: {patient.gender}</p>
                    <p>Address: {patient.address}, {patient.city}, {patient.state}, {patient.zipcode}</p>
                    <p>Email: {patient.email}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
export default PatientList;