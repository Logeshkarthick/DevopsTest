import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
//import Style from "../Style.css";
import { useNavigate } from "react-router-dom";
import TransactionServ from "../Service/TransactionServ";
import CustomerServ from "../Service/CustomerServ";

const TransactionInsert = () => {
  const navigate = useNavigate();
  const [BData, setBData] = useState([]);
  const [cusId, setcusId] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const goBack = () => {
    navigate("/Transaction");
  };

  useEffect(() => {
    CustomerServ.doFindAll().then((response) => {
      setBData(response.data);
      console.log(response.data);
    });
  }, []);

  const getFormData = (data) => {
    const { txId, txType, txAmount, txStatus } = data;
    const inData = { txId, txType, txAmount, txStatus, customer: { cusId } };
    console.log(inData);
    TransactionServ.doInsert(inData)
      .then(() => {
        navigate("/Transaction");
      })
      .catch(() => {
        alert("failure");
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
              onChange={(e) => {
                setcusId(e.target.value);
              }}
            >
              <option>--select customer--</option>
              {BData.map((data) => (
                <option value={data.cusId}>{data.cusAge}</option>
              ))}
            </Form.Select>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="ts-Id"
                placeholder="Transaction id"
                {...register("txId", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Transaction id</label>
              {errors.txId && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                data-testid="ts-type"
                placeholder="Transaction Type"
                {...register("txType", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Transaction Type</label>
              {errors.txType && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Transaction Amount"
                {...register("txAmount", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Transaction Amount</label>
              {errors.txAmount && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Status"
                {...register("txStatus", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Status</label>
              {errors.txStatus && (
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
              name="tIns"
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

export default TransactionInsert;
