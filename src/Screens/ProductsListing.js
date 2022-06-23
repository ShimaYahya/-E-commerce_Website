import Product from '../Components/Product';
import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Actions/Actions";
import "../App.css";

const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                dispatch(setProducts(json))
            })
    }, []);



    console.log("Products:", products);
    return (
        <div>
            <div className="all-products container ">
                <div className="row justify-content-around " >
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default ProductListing;