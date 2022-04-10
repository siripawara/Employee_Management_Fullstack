package com.siri.employeeSystem.repository;

import com.siri.employeeSystem.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnployeeRepository extends JpaRepository<EmployeeEntity,Long> {
}
