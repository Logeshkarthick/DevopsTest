package com.demo.service;

import org.springframework.stereotype.Service;

import com.demo.bean.Customer;
import com.demo.repo.CustomerRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class CustomerService{
	
	@Autowired 
	CustomerRepo repo;
	
	public boolean doInsert(Customer customer )
	{
		try {
			repo.save(customer);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	
	}
	

	public boolean doUpdate(Customer customer )
	{
		try {
			repo.save(customer);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	
	}

	public boolean doDelete(int cusId )
	{
		try {
			repo.deleteById(cusId);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}

		public List< Customer> doFindAll()
		{
			
			return repo.findAll();
			
		}
		
	
	}
	
	
	