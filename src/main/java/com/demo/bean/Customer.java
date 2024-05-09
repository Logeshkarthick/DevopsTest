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
@Table(name="Customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cusId;
	private String cusName;
	private String cusAge;
	private String cusMob;
	private String cusPreference;
	private String cusAddress;
	
	
	
	@ManyToOne(targetEntity = Restaurant.class,cascade = CascadeType.DETACH )
	@JoinColumn(name="resId")
	private Restaurant restaurant;

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int cusId, String cusName, String cusAge, String cusMob, String cusPreference, String cusAddress,
			Restaurant restaurant) {
		super();
		this.cusId = cusId;
		this.cusName = cusName;
		this.cusAge = cusAge;
		this.cusMob = cusMob;
		this.cusPreference = cusPreference;
		this.cusAddress = cusAddress;
		this.restaurant = restaurant;
	}

	public int getCusId() {
		return cusId;
	}

	public void setCusId(int cusId) {
		this.cusId = cusId;
	}

	public String getCusName() {
		return cusName;
	}

	public void setCusName(String cusName) {
		this.cusName = cusName;
	}

	public String getCusAge() {
		return cusAge;
	}

	public void setCusAge(String cusAge) {
		this.cusAge = cusAge;
	}

	public String getCusMob() {
		return cusMob;
	}

	public void setCusMob(String cusMob) {
		this.cusMob = cusMob;
	}

	public String getCusPreference() {
		return cusPreference;
	}

	public void setCusPreference(String cusPreference) {
		this.cusPreference = cusPreference;
	}

	public String getCusAddress() {
		return cusAddress;
	}

	public void setCusAddress(String cusAddress) {
		this.cusAddress = cusAddress;
	}

	public Restaurant getRestaurant() {
		return restaurant;
	}

	public void setRestaurant(Restaurant restaurant) {
		this.restaurant = restaurant;
	}

	
}
