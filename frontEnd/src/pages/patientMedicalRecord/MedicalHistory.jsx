import React, {useEffect,useState} from 'react';
import axios from 'axios';
import "./MedicalHistory.css";

const MedicalHistory = () => {
    const [medicalHistory,setMedicalHistory] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:3000/backend/medicalhistory");
                setMedicalHistory(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <div>
        <div className = "medicalhistorys">
            {medicalHistory.map(medicalHisTory => (
                <div key={medicalHisTory.id} className="medicalhistory">
                    <h3>{medicalHisTory.MedID}</h3>
                    <p>Condition: {medicalHisTory.condition}</p>
                    <p>Treatment: {medicalHisTory.treatment}</p>
                    <p>Medication: {medicalHisTory.medication}</p>
                    <p>bloodtype: {medicalHisTory.bloodType}</p>
                    <p>Allergies: {medicalHisTory.allergies}</p>
                    <p>Doctor: {medicalHisTory.doctor}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
export default MedicalHistory;