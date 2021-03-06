import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; //useDisp: ejecutar acciones, useSelector para acceder al state

//Actions de redux
import { createNewProductAction } from "../actions/productAction";
import { showAlert, hideAlertAction } from "../actions/alertAction";

const NewProduct = ({ history }) => {
  // history viene react router dom
  //state del componente
  const [name, saveName] = useState("");
  const [price, savePrice] = useState(0);

  //utilizar useDispatch
  const dispatch = useDispatch();

  //acceder al state del store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);
  //llamar el action de productoAction
  const addProduct = (product) => dispatch(createNewProductAction(product));

  //cuando el usuario haga el submit
  const submitNewProduct = (e) => {
    e.preventDefault();

    //validar form
    if (name.trim() === "" || price <= 0) {
      const response = {
        msg: "Both fields are obligatory",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(showAlert(response));
      return;
    }
    //si no hay errores
    dispatch(hideAlertAction());
    //crear nuevo producto
    addProduct({
      name,
      price,
    });

    //redireccionar
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-wieght-bold">
              Add New Product
            </h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  value={price}
                  onChange={(e) => savePrice(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>
            </form>
            {loading ? <p>Loading..</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                An error has ocurred
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
