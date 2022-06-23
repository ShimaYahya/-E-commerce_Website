import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";

const Product = () => {

    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, description } = product;
        return (
            <div className="card-width card col-6 col-sm-6 col-md-4 col-lg-3 w3-hover-shadow w3-center " key={id}>
                <li>
                    <Link to={`/product/${id}`}>
                        <img src={image} className="card-img-top width" alt={title} />
                    </Link>
                </li>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-price">$ {price}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        );
    });

    return (
        <>{renderList}</>
    );
};

export default Product;