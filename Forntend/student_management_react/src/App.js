import Nav from "./Component/nav";
import "./App.css";
import AddEmployee from "./Component/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./Component/EmployeeList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
