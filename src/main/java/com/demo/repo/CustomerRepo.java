package com.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.bean.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
