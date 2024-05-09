package com.demo.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Restaurant")
public class Restaurant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int resId;
	private String resName;
	private String resCode;
	private String resBranch;
	private String resTel;
	
	


	public Restaurant() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Restaurant(int resId, String resName, String resCode, String resBranch, String bnTel) {
		super();
		this.resId = resId;
		this.resName = resName;
		this.resCode = resCode;
		this.resBranch = resBranch;
		this.resTel = resTel;
	}
	

	public int getResId() {
		return resId;
	}


	public void setResId(int resId) {
		this.resId = resId;
	}


	public String getResName() {
		return resName;
	}


	public void setResName(String resName) {
		this.resName = resName;
	}


	public String getResCode() {
		return resCode;
	}


	public void setResCode(String resCode) {
		this.resCode = resCode;
	}


	public String getResBranch() {
		return resBranch;
	}


	public void setResBranch(String resBranch) {
		this.resBranch = resBranch;
	}


	public String getResTel() {
		return resTel;
	}


	public void setResTel(String resTel) {
		this.resTel = resTel;
	}
	
	
	
	

}
