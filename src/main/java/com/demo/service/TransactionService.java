package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.bean.Transaction;
import com.demo.repo.TransactionRepo;

;

@Service
public class TransactionService {
	
	@Autowired 
	TransactionRepo repo;
	
	public boolean doInsert(Transaction transaction )
	{
		try {
			repo.save(transaction);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	
	}
	

	public boolean doUpdate(Transaction transaction )
	{
		try {
			repo.save(transaction);
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

		public List< Transaction> doFindAll()
		{
			
			return repo.findAll();
			
		}
		
	
	}