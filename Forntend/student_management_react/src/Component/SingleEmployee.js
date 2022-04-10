import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleEmployee = (props) => {
  const [first, setfirst] = useState(null);
  const navigate = useNavigate();
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
  };

  return (
    <>
      <tr>
        <td className="text-center px-6 whitespace-nowrap py-2">
          {props.data.firstName}
        </td>
        <td className="text-center px-6 whitespace-nowrap py-2">
          {props.data.lastName}
        </td>
        <td className="text-center px-6 whitespace-nowrap py-2">
          {" "}
          {props.data.email}
        </td>
        <td className="text-left px-6 whitespace-nowrap py-2">
          <a href="#" className="px-3 text-green-900 font-semibold">
            Edit
          </a>
          <a
            href="#"
            onClick={() => {
              //   axios.delete(
              //     `http://localhost:8080/api/v1/employees/${props.data.id}`
              //   );
              props.op(props.data.id);
            }}
            className=" text-red-900 font-semibold"
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default SingleEmployee;
