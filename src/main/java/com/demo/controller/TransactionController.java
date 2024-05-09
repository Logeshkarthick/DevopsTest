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

import com.demo.bean.Transaction;
import com.demo.repo.TransactionRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/Transaction")
public class TransactionController {
	
	@Autowired
	TransactionRepo repo;
	
	@PostMapping("/insertTransaction")
	public ResponseEntity<String> insertTransaction(@RequestBody Transaction transaction){
		try {
			repo.save(transaction);
			return ResponseEntity.ok("Inserted Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Insertion Failure");
		}
	}
	
	@PutMapping("/updateCustomer")
	public ResponseEntity<String> updateTransaction(@RequestBody Transaction transaction){
		try {
			repo.save(transaction);
			return ResponseEntity.ok("Updation Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Updation Failure");
		}
	}
	
	@DeleteMapping("/deleteBy/{txId}")
	public ResponseEntity<String> deleteTransaction(@PathVariable("txId")int txId){
		try {
			repo.deleteById(txId);
			return ResponseEntity.ok("Deletion Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Deletion Failure");
		}
	}
	
	
	@GetMapping("/findAllTransaction")
	public List<Transaction> findAllCustomer(){
		return repo.findAll();
	}

}
