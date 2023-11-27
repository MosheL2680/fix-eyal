import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

const Products = () => {
    const { categoryId } = useParams();
    const [prods, setProds] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/categories/${categoryId}/products/`)
            .then(res => setProds(res.data))
    }, [categoryId]);
    
    return (
        <div>
            <h1>Category: {categoryId}</h1>
            <div>
                {prods.map(product => (
                    <div>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
