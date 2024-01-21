import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import NavBar from "./navbar";
import Footer from "./footer";
import ProductImage from "./ProductImage";
import ProductAccordian from "./ProductAccordian";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams(); // Retrieves the product ID from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      const q = query(collection(db, "products"), where("productID", "==", productId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Assuming productID is unique, thus taking the first document
        setProduct(querySnapshot.docs[0].data());
      } else {
        console.log("No such product found!");
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <br />
            {/* Pass the productImages array from the product data */}
            <ProductImage productImages={product.productImages || []} />
          </div>

          <div className="col">
            <br />
            <div style={{ fontSize: "42px", fontWeight: "bold" }}>
              {product.name}
            </div>
            <br />
            <div style={{ fontSize: "28px", fontWeight: "bold" }}>
              ${product.price}
            </div>
            <br />
            <div style={{ fontSize: "16px" }}>
              {product.description}
            </div>
            <br />
            {/* Assuming ProductAccordian component takes a details prop */}
            <ProductAccordian project={product.project || []} product = {product || []} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;


