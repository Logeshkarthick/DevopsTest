import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Style from "../Style.css";
import { useNavigate } from "react-router-dom";
import RestaurantService from "../Service/RestaurantServ";
import RestaurantServ from "../Service/RestaurantServ";

const RestaurantInsert = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    navigate("/Restaurant");
  };

  const getFormData = (data) => {
    RestaurantServ.doInsert(data)
      .then(() => {
        navigate("/Restaurant");
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
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="resName"
                placeholder="Restaurant Name"
                {...register("resName", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">RestaurantName</label>
              {errors.resName && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="resCode"
                placeholder="Restaurant Code"
                {...register("resCode", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Code</label>
              {errors.resCode && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="resbr"
                placeholder="Restaurant Branch"
                {...register("resBranch", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Branch</label>
              {errors.resBranch && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Telephone"
                {...register("resTel", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Telephone</label>
              {errors.resTel && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <br />
            <Button variant="contained" color="primary" onClick={goBack}>
              GoBack
            </Button>
            <Button
              variant="contained"
              color="success"
              type="submit"
              name="btnIns"
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

export default RestaurantInsert;
