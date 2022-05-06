import React, { useContext } from 'react'
import {Row, Col} from "reactstrap"

import {FaRegStar, FaStar, FaRupeeSign} from "react-icons/fa"
import {MdDelete, MdEdit} from "react-icons/md"

import firebase from "firebase/compat/app"

import {ProductContext} from "../context/ProductContext"
import {UPDATE_PRODUCT, SET_SINGLE_PRODUCT} from "../context/action.types"

import { toast, Toast } from 'react-toastify'
import { getDatabase, ref, remove, update } from 'firebase/database'
import { useNavigate } from 'react-router-dom'

const HomeProduct = ({product}) => {

    const {dispatch} = useContext(ProductContext);
    const history = useNavigate()
    
    const viewSingleProduct = product => {
        dispatch({
          type : SET_SINGLE_PRODUCT,
          payload : product
        }) 
    

        history("/product/view")
      }

    return(
      
        <Col onClick={()=>viewSingleProduct(product)} >  
                <img height={150} width={150} src={product.picture} className="rounded-circle imghover" />
                <p className='text-gray-100 text-6xl lightfont'>{product.name}</p>
                <Row>
               
                <Col><p><FaRupeeSign /> {product.price}</p></Col>
                </Row>
                </Col>
    )

}


export default HomeProduct