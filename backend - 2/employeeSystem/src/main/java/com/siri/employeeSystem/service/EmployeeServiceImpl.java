package com.siri.employeeSystem.service;

import com.siri.employeeSystem.entity.EmployeeEntity;
import com.siri.employeeSystem.model.Employee;
import com.siri.employeeSystem.repository.EnployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    private EnployeeRepository enployeeRepository;

    public EmployeeServiceImpl(EnployeeRepository enployeeRepository) {
        this.enployeeRepository = enployeeRepository;
    }


    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity  employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        enployeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<EmployeeEntity> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = enployeeRepository.findAll();

        return employeeEntities;



    }

    @Override
    public Long deleteEmployee(Long id) {

        enployeeRepository.deleteById(id);
        return id;

    }


}
