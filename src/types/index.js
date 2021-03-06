//types se usan en el action para ir describiendo y ejecutando ciertas funciones
//y en el reducer vamos a evaluar cada condicion para actualizar el state y ver que esta sucediendo

//ADD PRODUCT TYPES
export const ADD_PRODUCT        = 'ADD_PRODUCT';
export const ADD_PRODUCT_OK     = 'ADD_PRODUCT_OK';
export const ADD_PRODUCT_ERROR  = 'ADD_PRODUCT_ERROR';

//DOWNLOAD PRODUCT TYPES
export const START_DOWNLOAD_PRODUCTS = 'START_DOWNLOAD_PRODUCTS';
export const DOWNLOAD_PRODUCTS_OK    = 'DOWNLOAD_PRODUCTS_OK ';
export const DOWNLOAD_PRODUCTS_ERROR = 'DOWNLOAD_PRODUCTS_ERROR';

//DELETE PRODUCT TYPES
export const GET_PRODUCT_DELETE    = 'GET_PRODUCT_DELETE';
export const DELETED_PRODUCT_OK    = 'DELETED_PRODUCT_OK';
export const DELETED_PRODUCT_ERROR = 'DELETED_PRODUCT_ERROR';

//DELETE PRODUCT TYPES
export const GET_PRODUCT_EDIT     = 'GET_PRODUCT_EDIT';
export const START_EDIT_PRODUCT   = 'START_EDIT_PRODUCT';
export const EDITED_PRODUCT_OK    = 'EDITED_PRODUCT_OK';
export const EDITED_PRODUCT_ERROR = 'EDITED_PRODUCT_ERROR';

//ALERTS TYPES
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';