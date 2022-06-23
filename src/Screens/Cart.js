import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { Link } from "react-router-dom";

const Cart = () => {

    let productsData = useSelector((state) => state.allProducts.products);
    let productsid = useSelector((state) => state.cart.addOnePToCart);

    console.log("productsData", productsData);
    console.log("productsid", productsid);

    var Data = [];
    productsid.map((productid, i) => {
        Data = [...Data, productsData.filter((productData) => productData.id == productid)];

    });

    console.log("Data", Data);

    var prices = [];
    var total = 0;

    Data.map((data, i) => {
        prices = [...prices, data[0].price]
    });
    for (var i = 0; i < prices.length; i++) {
        total = total + prices[i];
    }

    const renderList = Data.map((data, i) => {
        console.log("data title", data[0].title);
        if (Data.length !== 0) {
            return (
                <div className="card-width card col-6 col-sm-6 col-md-4 col-lg-3 w3-hover-shadow w3-center " data={data[0]} key={i}>
                    <li>
                        <Link to={`/product/${data[0].id}/cart`}>
                            <img src={data[0].image} className="card-img-top width" alt={data[0].title} />
                        </Link>
                    </li>
                    <div className="card-body">
                        <h5 className="card-title">{data[0].title}</h5>
                        <h5 className="card-price">{data[0].price} $</h5>
                        <p className="card-text">{data[0].description}</p>
                    </div>
                </div>
            );
        }
    });

    const noItems = "Cart is empty";

    return (
        <div>
            {Data.length != 0 ? (
                <div>
                    <div>
                        <Link to={`/`} className="back-h btn btn-primary">
                            Back
                        </Link>
                    </div>
                    <div className="all-products container">

                        <div className="row justify-content-around" >
                            {renderList}
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="noItems">{noItems}</h1>
            )}
            <h1 className="total "> Total: {total} $</h1>
        </div>

    );
};


export default Cart;