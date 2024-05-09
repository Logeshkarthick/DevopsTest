import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import RestaurantServ from "../Service/RestaurantServ";

const Restaurant = () => {
 const navigate = useNavigate();
  const [resId, setresId] = useState("");
  const [resName, setresName] = useState("");
  const [resCode, setresCode] = useState("");
  const [resBranch, setresBranch] = useState("");
  const [resTel, setresTel] = useState("");
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
  const handleShow = (Id, name, code, branch, tele) => {
    setShow(true);
    setresId(Id);
    setresName(name);
    setresBranch(branch);
    setresCode(code);
    setresTel(tele);
  };

   useEffect(() => {
     RestaurantServ.doFindAll().then((response) => {
       setAdata(response.data);
     });
   }, show);

  const moveInsert = () => {
    navigate("/RestaurantInsert");
  };

  const updateFormData = () => {
    const data = { resId, resName, resCode, resBranch, resTel };
    console.log(data);
    // RestaurantServ.doUpdate(data)
    //   .then(() => {})
    //   .catch(() => {
    //     alert("Updation Failure");
    //});
  };

  const deleteRestaurant = (data) => {
    RestaurantServ.doDelete(data).catch(() => {
      alert("Deletion failure");
    });
    window.location = "/Restaurant";
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        onClick={moveInsert}
        name="btnaddRes"
        data-testid="btnRestaurant"
        style={{ marginLeft: "130px", marginTop: "30px" }}
      >
        Add Restaurant
      </Button>
      <Card bg="light" id="findall" class="table table-hover">
        <Card.Header id="fheader">
          <h2>Record</h2>
        </Card.Header>
        <Card.Body>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Restaurant ID</th>
                <th scope="col">Restaurant Name</th>
                <th scope="col">Restaurant Code</th>
                <th scope="col">Restaurant Branch</th>
                <th scope="col">Telephone</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Adata.map((data) => (
                <tr>
                  <td>{data.resId}</td>
                  <td>{data.resName}</td>
                  <td>{data.resCode}</td>
                  <td>{data.resBranch}</td>
                  <td>{data.resTel}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() =>
                        handleShow(
                          data.resId,
                          data.resName,
                          data.resCode,
                          data.resBranch,
                          data.resTel
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
                      onClick={() => deleteRestaurant(data.resId)}
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
                value={resId}
                placeholder="Restaurant Id"
                {...register("resId", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Id</label>
              {errors.resId && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                defaultValue={resName}
                onChange={(e) => {
                  setresName(e.target.value);
                }}
                placeholder="Restaurant Name"
                {...register("resName", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Name</label>
              {errors.resName && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                placeholder="Restaurant Code"
                onChange={(e) => {
                  setresCode(e.target.value);
                }}
                defaultValue={resCode}
                {...register("resCode", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Restaurant Code</label>
              {errors.resCode && <p className="error">Please fill the Field</p>}
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPasswordCustom"
                type="text"
                onChange={(e) => setresBranch(e.target.value)}
                defaultValue={resBranch}
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
                defaultValue={resTel}
                onChange={(e) => setresTel(e.target.value)}
                placeholder="Telephone"
                {...register("resTel", { required: true })}
              />
              <label htmlFor="floatingPasswordCustom">Telephone</label>
              {errors.resTel && <p className="error">Please fill the Field</p>}
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

export default Restaurant;
