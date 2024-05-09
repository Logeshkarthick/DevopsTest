package com.demo.controller;

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
import java.util.List;

import com.demo.bean.Restaurant;
import com.demo.repo.RestaurantRepo;
import com.demo.service.RestaurantService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/Restaurant")
public class RestaurantController {
	
	@Autowired RestaurantService serv;
	
	@PostMapping("/insertRestaurant")
	public ResponseEntity<String> insertRestaurant(@RequestBody Restaurant restaurant){
		try {
			serv.doInsert(restaurant);
			return ResponseEntity.ok("Inserted Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Insertion Failure");
		}
	}
	
	@PutMapping("/updateRestaurant")
	public ResponseEntity<String> updateRestaurant(@RequestBody Restaurant restaurant){
		try {
			serv.doUpdate(restaurant);
			return ResponseEntity.ok("Updation Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Updation Failure");
		}
	}
	
	@DeleteMapping("/deleteRestaurant/{resId}")
	public ResponseEntity<String> deleteRestaurant(@PathVariable("resId")int resId){
		try {
			serv.doDelete(resId);
			return ResponseEntity.ok("Deletion Success");
		}catch(Exception e) {
			return ResponseEntity.badRequest().body("Deletion Failure");
		}
	}
	
	
	@GetMapping("/findAllRestaurant")
	public List<Restaurant> findAllRestaurant(){
		return serv.doFindAll();
	}

}
