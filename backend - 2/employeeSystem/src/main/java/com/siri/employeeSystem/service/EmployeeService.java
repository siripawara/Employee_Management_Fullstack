package com.siri.employeeSystem.service;

import com.siri.employeeSystem.entity.EmployeeEntity;
import com.siri.employeeSystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<EmployeeEntity> getAllEmployees();

    Long deleteEmployee(Long id);


}
