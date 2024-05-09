//package com.demo;
//
//
//import org.junit.jupiter.api.Test;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.springframework.boot.test.context.SpringBootTest;
//
//
//@SpringBootTest
//public class TestRestaurant {
//	
//	@Test
//	public void doOpenpage() throws InterruptedException {
//		WebDriver driver = new ChromeDriver();
//		driver.get("http://localhost:3000/");
//		driver.manage().window().maximize();
//		Thread.sleep(1000);
//		
//		driver.findElement(By.linkText("Restaurant")).click();
//		Thread.sleep(1000);
//		
//		WebElement addRestaurant = driver.findElement(By.name("btnaddRes"));
//		addRestaurant.click();
//		Thread.sleep(1000);
//		
////		WebElement addId =driver.findElement(By.name("resId"));
////		addId.sendKeys("099");
//		
//
//		WebElement rcode =driver.findElement(By.name("resCode"));
//		rcode.sendKeys("045");
//		Thread.sleep(1000);
//		
//
//		WebElement rbranch =driver.findElement(By.name("resBranch"));
//		rbranch.sendKeys("virudhunagar");
//		Thread.sleep(1000);
//		
//		
//
//		WebElement rtel =driver.findElement(By.name("resTel"));
//		rtel.sendKeys("456789");
//		Thread.sleep(1000);
//		
//		
//		WebElement rname =driver.findElement(By.name("resName"));
//		rname.sendKeys("SUBEGAM");
//		Thread.sleep(1000);
//		
//		
//		
//		driver.findElement(By.name("btnIns")).click();
//		
//		
//}
//	
//	
//	
//	
//		
//		
//		
//		
//		
//		
//		
//	}
//		
//		
//	
//	
//	
//
//
//	
//	
