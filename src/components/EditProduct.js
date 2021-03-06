import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {editProductAction} from '../actions/productAction';
import {useHistory} from 'react-router-dom';

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch(); 
    //nuevo state de producto
    const [product, saveProduct] = useState({
        name: '',
        price: ''
    })
    //producto a editar
    const editProduct = useSelector(state => state.products.editProduct)
     //llenar state product
     useEffect(() => {
         saveProduct(editProduct);
     }, [editProduct])

     //leer los datos del formulario
     const onChangeForm = e => {
         saveProduct({
             ...product,
             [e.target.name] : [e.target.value]
         })
     }

    const {name, price} = product;
    

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch(editProductAction(product));

        history.push('/')
    }
    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-wieght-bold">
                        Update Product
                    </h2>

                    <form
                     onSubmit={submitEditProduct}
                    >
                        <div className="form-group">
                            <input 
                             type="text"
                             className="form-control"
                             placeholder="Product Name"
                             name="name"
                             value={name}
                             onChange={onChangeForm}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                             type="number"
                             className="form-control"
                             placeholder="Price"
                             name="price"
                             value={price}
                             onChange={onChangeForm}
                            />
                        </div>

                        <button 
                         type="submit"
                         className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                         >Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
 );
}
 
export default EditProduct;