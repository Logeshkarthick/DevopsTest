import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import TransactionServ from "../Service/TransactionServ";

const Transaction = () => {
  const navigate = useNavigate();
  const [txId, settxId] = useState("");
  const [txType, settxType] = useState("");
  const [txAmount, settxAmount] = useState("");
  const [txStatus, settxStatus] = useState("");

  const [cusId, setcusId] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Adata, setAdata] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //window.location = "/Restaurant";
  };
  const handleShow = (Id, type, Amount, status) => {
    setShow(true);
    settxId(Id);
    settxType(type);
    settxAmount(Amount);
    settxStatus(status);

    setcusId(status);
  };

  useEffect(() => {
    TransactionServ.doFindAll().then((response) => {
      console.log(response.data);
      setAdata(response.data);
    }, []);
  }, show);

  const moveInsert = () => {
    navigate("/TransactionInsert");
  };

  const updateFormData = () => {
    const data = { txId, txType, txAmount, txStatus };
    console.log(data);
    TransactionServ.doUpdate(data)
      .then(() => {})
      .catch(() => {
        alert("Updation Failure");
      });
  };

  const deleteTransactiont = (data) => {
    TransactionServ.doDelete(data).catch(() => {
      alert("Deletion failure");
    });
    window.location = "/Transaction";
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={moveInsert}
        name="btnaddtrs"
        data-testid="btnTransaction"
        style={{ marginLeft: "130px", marginTop: "30px" }}
      >
        Add Transaction
      </Button>
      <Card bg="light" id="findall" class="table table-hover">
        <Card.Header id="fheader">
          <h2>Record</h2>
        </Card.Header>
        <Card.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Transaction ID</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Transaction Amount</th>
                <th scope="col">Transaction Status</th>

                <th scope="col">Customer Id</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Adata.map((data) => (
                <tr>
                  <td>{data.txId}</td>
                  <td>{data.txType}</td>
                  <td>{data.txAmount}</td>
                  <td>{data.txStatus}</td>
                 

                  <td>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        handleShow(
                          data.txId,
                          data.txType,
                          data.txAmount,
                          data.txStatus,

                          data.customer.cusId
                        )
                      }
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteTransactiont(data.resId)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(updateFormData)}>
          <Modal.Header closeButton id="header">
            <Modal.Title>Insertion Operation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                value={txId}
                placeholder="Transaction Id"
                {...register("txId", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Transaction Id</label>
              {errors.txId && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                defaultValue={txType}
                onChange={(e) => {
                  settxType(e.target.value);
                }}
                placeholder="Transaction type"
                {...register("txType", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Transaction type</label>
              {errors.txType && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Transaction Amount"
                onChange={(e) => {
                  settxAmount(e.target.value);
                }}
                defaultValue={txAmount}
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
                onChange={(e) => settxStatus(e.target.value)}
                defaultValue={txStatus}
                placeholder="Transaction Status"
                {...register("txStatus", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">
                Transaction Status{" "}
              </label>
              {errors.txStatus && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                onChange={(e) => cusId(e.target.value)}
                defaultValue={cusId}
                placeholder="Customer  Id"
                {...register("cusId", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer Id</label>
              {errors.cusId && <p className="error">Please fill the Field</p>}
            </Form.Floating>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose}
              style={{ margin: "10px" }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="success"
              onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Transaction;
