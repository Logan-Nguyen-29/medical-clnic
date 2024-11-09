import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import OfficeStaffView from "./pages/OfficeStaffView";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PatientView from "./pages/PatientView";
import Form from "./pages/Form";
import Referral from "./pages/Referral";
import Report from "./pages/Report";
import PatientContact from "./pages/PatientContact";
import AddPatient from "./pages/AddPatient";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<OfficeStaffView />}>
        <Route path='' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/patient' element={<PatientView />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/referral' element={<Referral />}></Route>
        <Route path='/report' element={<Report />}></Route>
        <Route path='/patientcontact' element={<PatientContact />}></Route>
        <Route path='/add_patient' element={<AddPatient />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

