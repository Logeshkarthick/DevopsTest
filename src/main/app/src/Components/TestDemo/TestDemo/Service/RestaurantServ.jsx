import axios from "axios";
import React, { Component } from "react";

const insert = "http://localhost:2024/Restaurant/insertRestaurant";
const update = "http://localhost:2024/Restaurant/updateRestaurant";
const dele = "http://localhost:2024/Restaurant/deleteRestaurant/";
const findAll = "http://localhost:2024/Restaurant/findAllRestaurant";

class RestaurantServ extends Component {
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

export default new RestaurantServ();
