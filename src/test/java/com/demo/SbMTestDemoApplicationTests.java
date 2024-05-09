//package com.demo;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import org.junit.Ignore;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.demo.bean.Customer;
//import com.demo.bean.Restaurant;
//import com.demo.bean.Transaction;
//import com.demo.service.CustomerService;
//import com.demo.service.RestaurantService;
//import com.demo.service.TransactionService;
//
//@SpringBootTest
//class SbMTestDemoApplicationTests {
//
//	//@Autowired
//	//RestaurantService serv;
//
////	@Test
////	@Ignore
////	public void test_InsertRestaurant()
////	{
////		Restaurant r = new Restaurant();
////	    r.setResId(88);
////        r.setResName("5Star");
////		r.setResCode("*****5");
////		r.setResBranch("velachery");
////		r.setResTel("7689343");
////		boolean result= serv.doInsert(r);
////		assertEquals(true, result);
////	}
//
////	@Test
////	@Ignore
////	public void test_UpdateRestaurant() {
////
////		Restaurant r = new Restaurant();
////		r.setResId(1);
////		r.setResName("gate");
////		r.setResCode("001");
////		r.setResBranch("MDU");
////		r.setResTel("1233456");
////		boolean result = serv.doUpdate(r);
////		assertEquals(true, result);
////		
////	}
////
////	@Test
////	public void test_deleteRestaurant() {
////
////		boolean result = serv.doDelete(1);
////		assertEquals(false, result);
////
////	}
////
////	@Autowired
////	CustomerService serv;
////	
////	@Test
////	@Ignore
////	public void test_InsertCustomer() {
////		
////		
////         Restaurant r = new Restaurant();
////         r.setResId(4);
////         Customer c = new Customer();
////         c.setCusId(23);
////         c.setCusAge("33");
////         c.setCusName("gopal");
////         c.setCusMob("56789");
////         c.setCusPreference("ac");
////         c.setCusAddress("adayar");
////         c.setRestaurant(r);
////         boolean result= serv.doInsert(c);
//// 		 assertEquals(true, result);
//// 	}
////	
////
////	
////	@Test
////    public void test_UpdateCustomer() {
////		
////        Restaurant r = new Restaurant();
////		r.setResId(4);
////		Customer c = new Customer();
////		c.setCusId(6);
////		c.setCusName("subi");
////		c.setCusAge("21");
////		c.setCusAddress("mdu");
////		c.setCusPreference("AC");
////		c.setRestaurant(r);
////		boolean result = serv.doUpdate(c);
////		assertEquals(true, result);
////		
////	}
//	@Autowired
//	TransactionService serv;
//	
//	@Test
//	public void test_InsertTransaction() {
//		
//		
//		 Customer c = new Customer();
//		 c.setCusId(6);
//         Transaction t =new Transaction();
//         t.setTxId(1);
//         t.setTxAmount("1234");
//         t.setTxType("CASH");
//         t.setTxType("card");
//         boolean result= serv.doInsert(t);
// 		 assertEquals(true, result);
// 	}
//	
//
////	
////	@Test
////    public void test_UpdateTransaction() {
////		
////        Restaurant r = new Restaurant();
////		r.setResId(4);
////		Customer c = new Customer();
////		c.setCusId(6);
////		c.setCusName("subi");
////		c.setCusAge("21");
////		c.setCusAddress("mdu");
////		c.setCusPreference("AC");
////		c.setRestaurant(r);
////		boolean result = serv.doUpdate(t);
////		assertEquals(true, result);
////		
//        
//}
