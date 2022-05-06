import React, { useContext, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaStar, FaCartArrowDown, FaRupeeSign } from "react-icons/fa";

import { ProductContext } from "../context/ProductContext";
import { UserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


const ViewProduct = () => {

  const {state} = useContext(ProductContext);

  const context = useContext(UserContext);

  const contextCart = useContext(CartContext);

  const history = useNavigate();

  const {product} = state

  if(context.user?.email === "sidgiri2000@gmail.com"){
    return(
      <div className="darkbg outfitfont text-white">
        <Header />
    <Container className="p-2">
      <Row className="">
        <Col lg={6} md="5" >
          <Card className="border-0 darkbg">
            <CardBody className="darkbg border-0">
              
              <CardTitle className="montezfont primaryTextColor mt-3">
                <h1 className="lightfont">{product?.name}</h1>
              </CardTitle>
              <CardSubtitle className="greyfontcolor mt-5">
                <h4 className="lightfont">
                  
                  Category : {product?.type}
                </h4>
              </CardSubtitle>
              <CardSubtitle className="greyfontcolor mt-2">
                <h4 className="lightfont">
                  
                  <FaRupeeSign /> {product?.price}
                </h4>
              </CardSubtitle>
              <CardSubtitle className="greyfontcolor mt-4">
                <h5 >
                  
                  <FaStar /> <span className="p-2">{product?.rating}</span>
                </h5>
              </CardSubtitle>
              <CardSubtitle className="mt-5">
                <h3>Consists Of :</h3>
                <p className="lightfont">
                
                  
                  {product?.consistOf}
                </p>
              </CardSubtitle>
              <CardSubtitle className="mt-5">
                <h3>Benefits :</h3>
                <p className="lightfont">
               
                  {product?.benefits}
                </p>
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
        <img 
              height="550"
              width="550"
              className="cardImg profile border-danger"
              src={product?.picture}
              />
        </Col>

      </Row>
    </Container>
    </div>
    )
  }

  


  const addInCart = item => {
    const isAlreadyAdded = contextCart.cartItem.findIndex(array => {
        return array.id === item.id;
    })

    if(isAlreadyAdded !== -1) {
        toast("already added in cart", {type : "error"});
        return;
    }

    contextCart.setCartItem([...contextCart.cartItem,item])
    
    



    history("/checkout")
}

// useEffect(()=>{
//   localStorage.setItem("products",JSON.stringify(contextCart.cartItem));
// },[])

  
    

  return (
    <div className="darkbg outfitfont text-white">
    <Header />
    <Container className="p-3 mt-5">
      <Row className="mt-5">
        <Col lg={6} md="5" className="mt-3">
          <Card className="border-0 darkbg">
            <CardBody className="darkbg border-0">
              
              <CardTitle className="montezfont primaryTextColor mt-3">
                <h1 className="lightfont">{product?.name}</h1>
              </CardTitle>
              <CardSubtitle className="greyfontcolor mt-5">
                <h4 className="lightfont">
                  
                  Category : {product?.type}
                </h4>
              </CardSubtitle>
              {/* 
              <CardSubtitle className="greyfontcolor mt-2">
                <h4 className="lightfont">
                  
                  Rs. {product?.price}
                </h4>
  </CardSubtitle> */}
              <CardSubtitle className="greyfontcolor mt-4">
                <h5 >
                  
                  <FaStar /> <span className="p-2">{product?.rating}</span>
                </h5>
              </CardSubtitle>
              <CardSubtitle className="mt-5">
                <h3>Consists Of :</h3>
                <p className="lightfont">
                
                  
                  {product?.consistOf}
                </p>
              </CardSubtitle>
              <CardSubtitle className="mt-5">
                <h3>Benefits :</h3>
                <p className="lightfont">
               
                  {product?.benefits}
                </p>
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} className="mt-3" >
        <button className="addtocart border-0 p-2 px-4 mt-4 cardhover" onClick={()=>addInCart(product)}>
                <Row>
                  <Col>
                Item Total : <FaRupeeSign /> {product.price} 
                </Col>
                <Col>
                    Add to Cart  <FaCartArrowDown className="primaryTextColor ml-2"/>
                </Col>
                </Row>
                </button>
        <img 
              height="450"
              width="450"
              className="cardImg profile border-danger rounded mt-4"
              src={product?.picture}
              />
              

        </Col>

      </Row>
    </Container>

    <Footer />
    
    </div>

  )
}

export default ViewProduct