import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//import Style from "../Style.css";
import { useNavigate } from "react-router-dom";
import RestaurantServ from "../Service/RestaurantServ";

import CustomerServ from "../Service/CustomerServ";

const CustomerInsert = () => {
  const navigate = useNavigate();
  const [BData, setBData] = useState([]);
  const [resId, setresId] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    RestaurantServ.doFindAll().then((response) => {
      setBData(response.data);
    });
  }, []);

  const goBack = () => {
    navigate("/Customer");
  };

  const getFormData = (data) => {
    var { cusId, cusName, cusAge, cusMob, cusPreference, cusAddress } = data;
    var inData = {
      cusId,
      cusName,
      cusAge,
      cusMob,
      cusPreference,
      cusAddress,
      restaurant: { resId },
    };
    console.log(inData);
    CustomerServ.doInsert(inData)
      .then(() => {
        navigate("/Customer");
      })
      .catch(() => {
        alert("Not Inserted");
      });
  };

  return (
    <div>
      <Card bg="dark" border="dark" id="Mform">
        <Card.Header id="header">
          <h2>Insertion Operation</h2>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(getFormData)}>
            <Form.Select
              aria-label="Default select example"
              className="mb-3"
              name="cIns"
              onChange={(e) => setresId(e.target.value)}
            >
              <option>--select restaurant--</option>
              {BData.map((data) => (
                <option value={data.resId}>{data.resName}</option>
              ))}
            </Form.Select>
            <Form.Floating className="mb-3">
              <Form.Control
                data-testid="tbox-name"
                id="floatingPasswordCustom"
                type="text"
                placeholder="  customer Name"
                {...register("cusName", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer Name</label>
              {errors.cusName && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                data-testid="tbox-age"
                id="floatingPasswordCustom"
                type="text"
                placeholder="Customer age"
                {...register("cusAge", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer Age</label>
              {errors.cusName && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Customer Mobile num"
                {...register("cusMob", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer mobile</label>
              {errors.cusMob && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Customer preference"
                {...register("cusPreference", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">
                customer preference
              </label>
              {errors.cusPreference && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="tbox-add"
                placeholder="  customer address"
                {...register("cusAddress", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer Address</label>
              {errors.cusAddress && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>

            <br />
            <Button variant="contained" color="primary" onClick={goBack}>
              GoBack
            </Button>
            <Button
              variant="contained"
              color="success"
              type="submit"
              name="btsCins"
              style={{ marginLeft: "300px" }}
            >
              Insert
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomerInsert;
