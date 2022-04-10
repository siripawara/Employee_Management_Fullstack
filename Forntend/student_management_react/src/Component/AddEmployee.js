import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChane = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const save = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clear = () => {
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-xl">
          <h1>Add Employee</h1>
        </div>
        <div className=" items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChane(e)}
            className="h-10 w-96 border-2 my-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChane(e)}
            className="h-10 w-96 border-2 my-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm">E-mail</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChane(e)}
            className="h-10 w-96 border-2 my-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <button
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-2 "
            onClick={save}
          >
            Save
          </button>
          <button
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-2 mx-4"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
