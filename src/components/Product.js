import React from 'react';
import {useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


//redux
import {useDispatch} from 'react-redux';
import {deleteProductAction, getProductEdit} from '../actions/productAction';


const Product = ({product}) => {
    const {name, price, id} = product

    const dispatch = useDispatch();
    const history = useHistory(); // habilitar history para redireccion

    //confirmar si desea eliminarlo
    const confirmDeleteProduct = id => {
        //preguntar al usuario
        Swal.fire({
            title: 'Delete ' + product.name,
            text: "You won't be able to revert this! Are you sure?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete'
          }).then((result) => {
            if (result.isConfirmed) {
            //pasarlo al action
            dispatch(deleteProductAction(id));
            }
          })
        
    }

    //funcion que redirige
    const redirectEdition = product => {
        dispatch(getProductEdit(product));
        history.push(`/products/edit/${product.id}`)
    }
    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="actions">
                <button 
                type="button" 
                className="btn btn-primary mr-2"
                onClick={() => redirectEdition(product)}
                >Edit</button>
                <button 
                 type="button"
                 className="btn btn-danger"
                 onClick={() => confirmDeleteProduct(id)}
                 >Delete</button>
            </td>
        </tr>
     );
}
 
export default Product;
