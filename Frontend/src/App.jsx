import {Problems} from "./components/Problems";
import {Login} from "./components/Login"
import { Route, Routes } from "react-router-dom";
import {CurProblem} from "./components/CurProblem";
import {Register} from "./components/Register";
import {LandingPage} from "./components/LandingPage";



function App() {
  
  return (
    <>
     
     
      
      <Routes>
        <Route path='/problemlist' element={<Problems />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/problem' element={<CurProblem />} />
      </Routes>
    </>
  )
}

export default App
