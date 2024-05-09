//package com.demo;
//
//import org.junit.jupiter.api.Test;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//import org.springframework.boot.test.context.SpringBootTest;
//
//@SpringBootTest
//public class TestCustomer{
//	
//@Test
//public void  CustomerPage() throws InterruptedException {
//	
//	WebDriver driver = new ChromeDriver();
//	driver.get("http://localhost:3000/Customer");
//	driver.manage().window().maximize();
//	Thread.sleep(1000);
//	
//	driver.findElement(By.linkText("Customer")).click();
//	Thread.sleep(1000);
//	
//	WebElement addCustomer= driver.findElement(By.name("btnaddCus"));
//	addCustomer.click();
//	Thread.sleep(1000);
//	
//	
//	WebElement cname =driver.findElement(By.name("cusName"));
//	cname.sendKeys("karthick");
//	Thread.sleep(1000);
//	
//	WebElement cage =driver.findElement(By.name("cusAge"));
//	cage.sendKeys("33");
//	Thread.sleep(1000);
//	
//	WebElement cmob =driver.findElement(By.name("cusMob"));
//	cmob.sendKeys("98765456");
//	Thread.sleep(1000);
//	
//	
//
//	WebElement cper =driver.findElement(By.name("cusPreference"));
//	cper.sendKeys("ac");
//	
//	WebElement cadr =driver.findElement(By.name("cusAddress"));
//	cadr.sendKeys("chennai1");
//	
//	
//
//    WebElement dropdown = driver.findElement(By.name("cIns"));
//      dropdown.findElement(By.xpath("//option[@value = '4']")).click();
//      Thread.sleep(1000);
//      
//      
////    WebElement element=	driver.findElement(By.name("btsCins"));
////  	Actions action = new Actions(driver);
////    action.moveToElement(element).click().build().perform();
////    Thread.sleep(1000);
//
//    
//}}