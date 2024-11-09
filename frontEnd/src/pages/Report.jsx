import React, {useState} from 'react'
import "./Doc-Styles.css"

const Report = () => {

    const[values, setValues] = useState({
        first_name: ' ',
        last_name: ' ',
        date_of_birth: ' ',
        gender: ' ',
        height: ' ',
        weight: ' ',
        allergies: ' ',
        conditions: ' ',
        treatment: ' ',
        medication: ' ',
        diagnosis_date: ' ',
        upload_document: ' ',
        medical_notes: ' ',
        
    })


    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

  return (
      <div className="container">
        <h1> Patient Medical Report</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter First Name" name="firstname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastname" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="D.o.B">Date Of Birth</label>
            <input type="text" placeholder="Enter Date of Birth" name="D.o.B" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="gender">Gender</label>
            <input type="radio" name="gender" required
            onChange={(e) => handleChanges(e)}/> Male
            <input type="radio" name="gender" required
            onChange={(e) => handleChanges(e)}/> Female
            <input type="radio" name="gender" required
            onChange={(e) => handleChanges(e)}/> Other

            <label htmlFor="height">Height</label>
            <input type="text" placeholder="Enter Height" name="height" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="weight">Weight</label>
            <input type="text" placeholder="Enter Weight" name="weight" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="allergies">Allergies</label>
            <input type="text" placeholder="Enter Allergies" name="allergies" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="conditions">Conditions</label>
            <input type="text" placeholder="Enter Conditions" name="conditions" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="medication">Treatment</label>
            <input type="text" placeholder="Enter Treatment" name="medication" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="medication">Medication</label>
            <input type="text" placeholder="Enter Medication" name="medication" required
            onChange={(e) => handleChanges(e)}/>

            
            <label htmlFor="diagnosis_date">Diagnosis Date</label>
            <input type="text" placeholder="Enter Dianosis Date" name="diagnosis_date" required
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="upload_document">Upload Document</label>
            <input type="file" placeholder="Select Document" name="upload_document" 
            onChange={(e) => handleChanges(e)}/>

            <label htmlFor="medical_notes">Medical Notes</label>
            <textarea name="medical_notes" id="medical_notes" cols="30" rows="10" 
            onChange={(e) => handleChanges(e)} placeholder="Enter Medical Notes" required/>

            <button> Reset </button>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Report
