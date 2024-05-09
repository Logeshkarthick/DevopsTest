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
//public class TestTransaction{
//	
//@Test
//public void  CustomerPage() throws InterruptedException {
//	
//	WebDriver driver = new ChromeDriver();
//	driver.get("http://localhost:3000/Transaction");
//	driver.manage().window().maximize();
//	Thread.sleep(1000);
//	
//	driver.findElement(By.linkText("Transaction")).click();
//	Thread.sleep(1000);
//	
//	WebElement addTransaction= driver.findElement(By.name("btnaddtrs"));
//	addTransaction.click();
//	Thread.sleep(1000);
//	
//	
//	WebElement t =driver.findElement(By.name("txType"));
//	t.sendKeys("cash");
//	Thread.sleep(1000);
//	
//	WebElement t1 =driver.findElement(By.name("txAmount"));
//	t1.sendKeys("1234");
//	Thread.sleep(1000);
//	
//	
//
//	WebElement t2 =driver.findElement(By.name("txStatus"));
//	t2.sendKeys("paid");
//	
//	
//	
//
//    WebElement dropdown = driver.findElement(By.name("tIns"));
//      dropdown.findElement(By.xpath("//option[@value = '3']")).click();
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