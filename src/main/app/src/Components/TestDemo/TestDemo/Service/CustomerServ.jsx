import axios from "axios";
import React, { Component } from "react";

const insert = "http://localhost:2024/Customer/insertCustomer";
const update = "http://localhost:2024/Customer/updateCustomer";
const dele = "http://localhost:2024/Customer/deleteCustomer/";
const findAll = "http://localhost:2024/Customer/findAllCustomer";

class CustomerServ extends Component {
  doInsert(data) {
    return axios.post(insert, data);
  }

  doUpdate(data) {
    return axios.put(update, data);
  }

  doDelete(data) {
    return axios.delete(dele + data);
  }

  doFindAll() {
    return axios.get(findAll);
  }
}

export default new CustomerServ();
