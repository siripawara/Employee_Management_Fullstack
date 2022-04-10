import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import SingleEmployee from "./SingleEmployee";
import axios from "axios";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setloading] = useState(true);

  let fetchData = async () => {
    try {
      console.log("loading");
      const res = await EmployeeService.getEmployee();
      setEmployees(res.data);
      console.log(res.data);
      setloading(false);
      console.log(" loaded");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
    console.log("sasasasa");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-9">
      <div className="h-12">
        <button
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          onClick={() => {
            navigate("/addemployee");
          }}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow-md bottom-b">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th>First name</th>
              <th>Lastname</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => {
              return (
                <SingleEmployee
                  key={employee.id}
                  data={employee}
                  op={deleteEmployee}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
