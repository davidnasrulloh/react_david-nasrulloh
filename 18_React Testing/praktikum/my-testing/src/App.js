import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormCoding from "./Component/FormCoding";
import Search from "./Component/Search";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/form-coding' exact element={<FormCoding/>} />
      <Route path='/search' exact element={<Search/>}/>
    </Routes>
  );
}

export default App;
