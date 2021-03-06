//Las actions tienen los mismos types que el reducer
//tambien se realizan las consultas db
import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_OK,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  DELETED_PRODUCT_OK,
  DELETED_PRODUCT_ERROR,
  GET_PRODUCT_EDIT,
  EDITED_PRODUCT_OK,
  EDITED_PRODUCT_ERROR,
  START_EDIT_PRODUCT,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

//esta funcion es la que se va a usar en la vista
//crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    //este dispatch ejecutara las funciones
    dispatch(addProduct());

    try {
      //insertar en la api
      await clientAxios.post("/products", product);
      //si todo sale bien, updatea state
      dispatch(addProductOk(product));
      //Alert confirmed
      Swal.fire(
        "Confirmed",
        "The product has been added correctly!",
        "success"
      );
    } catch (error) {
      //si hay un error cambir el state
      dispatch(addProductError(true));

      //Alert error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error has ocurred, try again.",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//si producto se guarda en db (action)
const addProductOk = (product) => ({
  type: ADD_PRODUCT_OK,
  payload: product, //usamos el payload porque va a modificar el estado
});
//si hubo error
const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

//descargar products de la db json
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const response = await clientAxios.get("/products");
      dispatch(downloadProductsOk(response.data));
    } catch (error) {
      dispatch(downloadProductsError());
    }
  };
}

const downloadProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true,
});

const downloadProductsOk = (products) => ({
  type: DOWNLOAD_PRODUCTS_OK,
  payload: products,
});

const downloadProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});

//seleccionar y eliminar product de la db json
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getProductDelete(id));

    try {
      await clientAxios.delete(`/products/${id}`);
      dispatch(deleteProductOk());

      //Si se elimina, mostrar alerta
      Swal.fire("Deleted!", "The product has been deleted.", "success");
    } catch (error) {
      dispatch(deleteProductError());
    }
  };
}

const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const deleteProductOk = () => ({
  type: DELETED_PRODUCT_OK,
});

const deleteProductError = () => ({
  type: DELETED_PRODUCT_ERROR,
  payload: true,
});

//Colocar producto en edicion
export function getProductEdit(product) {
  return (dispatch) => {
    dispatch(getProductAction(product));
  };
}

const getProductAction = (product) => ({
  type: GET_PRODUCT_EDIT,
  payload: product,
});

//Editar product en la db json
export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct(product));

    try {
      await clientAxios.put(`/products/${product.id}`, product);
      dispatch(editProductOk(product));
    } catch (error) {
      dispatch(editProductError());
    }
  };
}
const editProduct = () => ({
  type: START_EDIT_PRODUCT,
});

const editProductOk = (product) => ({
  type: EDITED_PRODUCT_OK,
  payload: product,
});

const editProductError = () => ({
  type: EDITED_PRODUCT_ERROR,
  payload: true,
});
