import React, { Component } from "react";
import axios from "axios";

const insert = "http://localhost:2024/Transaction/insertTransaction";
const update = "http://localhost:2024/Transaction/updateTransaction";
const dele = "http://localhost:2024/Transaction/deleteTransaction/";
const findAll = "http://localhost:2024/Transaction/findAllTransaction";

class TransactionServ extends Component {
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
export default new TransactionServ();
