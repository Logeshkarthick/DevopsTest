package com.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.bean.Restaurant;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

}
