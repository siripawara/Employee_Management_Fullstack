import axios from "axios";

const EMPLOYEE_API_BASED_URL = "http://localhost:8080/api/v1/employees/";

class EmoplyeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASED_URL, employee);
  }

  getEmployee() {
    return axios.get(EMPLOYEE_API_BASED_URL);
  }
}

export default new EmoplyeeService();
