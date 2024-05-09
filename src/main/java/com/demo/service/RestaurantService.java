package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.bean.Restaurant;
import com.demo.repo.RestaurantRepo;

@Service
public class RestaurantService {
	
	@Autowired 
	RestaurantRepo repo;
	
	public boolean doInsert(Restaurant restaurant )
	{
		try {
			repo.save(restaurant);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	
	}
	

	public boolean doUpdate(Restaurant restaurant )
	{
		try {
			repo.save(restaurant);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	
	}

	public boolean doDelete(int resId )
	{
		try {
			repo.deleteById(resId);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}

		public List< Restaurant> doFindAll()
		{
			
			return repo.findAll();
			
		}
		
	
	}
	
	
	


