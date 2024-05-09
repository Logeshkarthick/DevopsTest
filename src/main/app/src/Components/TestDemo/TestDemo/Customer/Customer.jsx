import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
//import RestaurantServ from "../Service/RestaurantServ";
import CustomerServ from "../Service/CustomerServ";

const Customer = () => {
const navigate = useNavigate();
  const [cusId, setcusId] = useState("");
  const [cusName, setcusName] = useState("");
  const [cusAge, setcusAge] = useState("");
  const [cusMob, setcusMob] = useState("");
  const [cusPreference, setcusPreference] = useState("");
  const [cusAddress, setcusAddress] = useState("");
  const [resId, setresId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Adata, setAdata] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location = "/Customer";
  };
  const handleShow = (Id, name, age, mobile, preference, address, resId) => {
    setShow(true);
    setcusId(Id);
    setcusName(name);
    setcusAge(age);
    setcusMob(mobile);
    setcusPreference(preference);
    setcusAddress(address);
    setresId(resId);
  };

  useEffect(() => {
    CustomerServ.doFindAll().then((response) => {
      setAdata(response.data);
    });
    console.log(Adata);
  }, []);

  const moveInsert = () => {
    navigate("/CustomerInsert");
  };

  const updateFormData = (data) => {
    Customer.doUpdate(data)
      .then(() => {})
      .catch(() => {
        alert("Updation Failure");
      });
  };

  const deleteCustomer = (data) => {
    CustomerServ.doDelete(data).catch(() => {
      alert("Deletion failure");
    });
    window.location = "/Customer";
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={moveInsert}
        name="btnaddCus"
        style={{ marginLeft: "130px", marginTop: "30px" }}
        data-testid="btnCustomer"
      >
        Add Customer
      </Button>
      <Card bg="light" id="findall" class="table table-hover">
        <Card.Header id="fheader">
          <h2>Record</h2>
        </Card.Header>
        <Card.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Customer ID</th>
                <th scope="col">Customer Age</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer mob</th>
                <th scope="col">Customer preference</th>
                <th scope="col">Customer Address</th>
                <th scope="col">Restaurant Id</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Adata.map((data) => (
                <tr>
                  <td>{data.cusId}</td>
                  <td>{data.cusName}</td>
                  <td>{data.cusAge}</td>
                  <td>{data.cusMob}</td>
                  <td>{data.cusPreference}</td>
                  <td>{data.cusAddress}</td>
                  <td>{data.restaurant.resId}</td>

                  <td>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        handleShow(
                          data.cusId,
                          data.cusName,
                          data.cusAge,
                          data.cusMob,
                          data.cusPreference,
                          data.cusAddress
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
                      onClick={() => deleteCustomer(data.resId)}
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
                value={cusId}
                placeholder="Customer Id"
                {...register("cusId", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Id</label>
              {errors.cusId && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                defaultValue={cusName}
                onChange={(e) => {
                  setcusName(e.target.value);
                }}
                placeholder="Customer Name"
                {...register("cusName", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">customer Name</label>
              {errors.cusName && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
              
                id="floatingPasswordCustom"
                type="text"
                placeholder="Customer Age"
                onChange={(e) => {
                  setcusAge(e.target.value);
                }}
                defaultValue={cusAge}
                {...register("cusAge", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Customer Age</label>
              {errors.cusAge && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                onChange={(e) => setcusMob(e.target.value)}
                defaultValue={cusMob}
                placeholder="Customer Mob"
                {...register("cusMob", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">cUSTOMER mOB</label>
              {errors.cusMob && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                defaultValue={cusPreference}
                onChange={(e) => setcusPreference(e.target.value)}
                placeholder="preference"
                {...register("cusPreference", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Telephone</label>
              {errors.cusPreference && (
                <p className="error">Please fill the Field</p>
              )}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                defaultValue={cusAddress}
                onChange={(e) => setcusAddress(e.target.value)}
                placeholder="Address"
                {...register("cusAddress", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Telephone</label>
              {errors.cusAddress && (
                <p className="error">Please fill the Field</p>
              )}
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

export default Customer;
