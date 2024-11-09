import React, {useEffect,useState} from 'react';
import axios from 'axios';
import "./MedicalRecord.css";

const MedicalRecord = () => {
    const [medicalRecord,setMedicalRecord] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get("http://localhost:3000/backend/medicalrecord");
                setMedicalRecord(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])

    return (
        <div>
        <div className = "medicalrecords">
            {medicalRecord.map(medicalREcord => (
                <div key={medicalREcord.id} className="medicalrecord">
                    <h3>{medicalREcord.MedID}</h3>
                    <p>Sex: {medicalREcord.sex}</p>
                    <p>Height: {medicalREcord.height}</p>
                    <p>Weight: {medicalREcord.weight}</p>
                    <p>Allergies: {medicalREcord.allergies}</p>
                    <p>Emergency Contact Info: {medicalREcord.emergencContactInfo}</p>
                </div>
            ))}
        </div>
        </div>
    )
}
export default MedicalRecord;