package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.bean.Customer;
import com.demo.repo.CustomerRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/Customer")
public class CustomerController {
	
	@Autowired
	CustomerRepo repo;
	
	@PostMapping("/insertCustomer")
	public ResponseEntity<String> insertCustomer(@RequestBody Customer customer){
		try {
			repo.save(customer);
			return ResponseEntity.ok("Inserted Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Insertion Failure");
		}
	}
	
	@PutMapping("/updateCustomer")
	public ResponseEntity<String> updateCustomer(@RequestBody Customer customer){
		try {
			repo.save(customer);
			return ResponseEntity.ok("Updation Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Updation Failure");
		}
	}
	
	@DeleteMapping("/deleteCustomer/{cusId}")
	public ResponseEntity<String> deleteCustomer(@PathVariable("cusId")int cusId){
	    try {
	        repo.deleteById(cusId);
	        return ResponseEntity.ok("Deletion Success");
	    }catch(Exception e) {
	        return ResponseEntity.badRequest().body("Deletion Failure");
	    }
	
	}
	
	
	@GetMapping("/findAllCustomer")
	public List<Customer> findAllCustomer(){
		return repo.findAll();
	}

}
