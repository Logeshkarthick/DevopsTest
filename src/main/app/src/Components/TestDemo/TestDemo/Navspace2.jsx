import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoHome } from "react-icons/io5";
import { BsDatabaseAdd } from "react-icons/bs";
import { BsDatabaseFillX } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { BsCollection } from "react-icons/bs";
import { Nav, Navbar, Container } from "react-bootstrap";
import Home from "./Home";
import Restaurant from "./Restaurant/Restaurant";
import RestaurantInsert from "./Restaurant/RestaurantInsert";
import RestaurantServ from "./Service/RestaurantServ";
import Customer from "./Customer/Customer";
import CustomerInsert from "./Customer/CustomerInsert";
import TransactionServ from "./Service/TransactionServ";
import Transaction from "./Transaction/Transaction";
import TransactionInsert from "./Transaction/TransactionInsert";

const Navspace2 = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar
          expand="lg"
          className="bg-body-tertiry"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714089600&semt=ais"
                width="100"
                height="70"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              id="nav-toggle-button"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  <div className="box">
                    <b className="icon">
                      <IoHome />
                      Home
                    </b>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/Restaurant">
                  <div className="box">
                    <b className="icon">Restaurant</b>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/Transaction">
                  <div className="box">
                    <b className="icon">Transaction</b>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/Customer">
                  <div className="box">
                    <b className="icon">Customer</b>
                  </div>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="">Restaurant Management System</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Restaurant" element={<Restaurant />} />
          <Route path="/RestaurantInsert" element={<RestaurantInsert />} />
          {/* <Route path="/Account" element={<Account />} />
          <Route path="/AccountInsert" element={<AccountInsert />} /> */}
          <Route path="/Customer" element={<Customer />} />/
          <Route path="/CustomerInsert" element={<CustomerInsert />} />
          <Route path="/Transaction" element={<Transaction />} />/
          <Route path="/TransactionInsert" element={<TransactionInsert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navspace2;
