package com.demo.bean;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Transaction")
public class Transaction {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int txId;
	private String txType;
	private String txAmount;
	private String txStatus;
	
	@ManyToOne(targetEntity =  Customer.class,cascade = CascadeType.DETACH)
	@JoinColumn(name="cusId")
	private  Customer  customer;


	
		
		
		
	


	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Transaction(int txId, String txType, String txAmount, String txStatus, Customer customer) {
		super();
		this.txId = txId;
		this.txType = txType;
		this.txAmount = txAmount;
		this.txStatus = txStatus;
		this.customer = customer;
	}


	public int getTxId() {
		return txId;
	}


	public void setTxId(int txId) {
		this.txId = txId;
	}


	public String getTxType() {
		return txType;
	}


	public void setTxType(String txType) {
		this.txType = txType;
	}


	public String getTxAmount() {
		return txAmount;
	}


	public void setTxAmount(String txAmount) {
		this.txAmount = txAmount;
	}


	public String getTxStatus() {
		return txStatus;
	}


	public void setTxStatus(String txStatus) {
		this.txStatus = txStatus;
	}


	public Customer getCustomer() {
		return customer;
	}


	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	

	
	
	
	

}
