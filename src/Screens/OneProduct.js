import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct } from "../redux/Actions/Actions";
import { Link } from 'react-router-dom';
import "../App.css";
import { addToCart } from "../redux/Actions/Actions";

const OneProduct = () => {

    const product = useSelector((state) => state.product);
    const { title, image, price, description, category } = product;
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                dispatch(selectedProduct(json))
            })
    }, [id]);

    return (

        <div className="product">
        <div>
            <Link to={`/`} className="back btn btn-primary">
                Back
            </Link>
        </div>
        <br />
        <div className="w3-card max-width ">
            <div>
                <div className="row g-0 justify-content-around">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start width " alt={title} />
                    </div>
                    <div className="col-md-6 detail">
                        <div className="card-body">
                            <h5 className="card-title ">{title}</h5>
                            <p className="card-text"><small className="text-muted">{category}</small></p>

                            <p className="card-title">$ {price}</p>
                            <p className="card-text">{description}</p>
                            <br />
                            <br />
                            <button className="btn btn-primary" onClick={() => {dispatch(addToCart(id))}}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </div>
    );
};

export default OneProduct;