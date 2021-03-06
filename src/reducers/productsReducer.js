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

//cada reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null,
};

//todo reducer es un switch
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    //ADD A PRODUCT
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_OK:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //DOWNLOAD PRODUCTS
    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: action.payload, //true
      };
    case DOWNLOAD_PRODUCTS_OK:
      return {
        ...state,
        loading: null,
        products: action.payload,
      };
    case DOWNLOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //DELETE PRODUCTS
    case START_EDIT_PRODUCT:
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        deleteProduct: action.payload,
      };
    case DELETED_PRODUCT_OK:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.deleteProduct
        ),
        deleteProduct: null,
      };
    case DELETED_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //EDIT PRODUCTS
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload,
      };
    case EDITED_PRODUCT_OK:
      return {
        ...state,
        editProduct: null,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    case EDITED_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
