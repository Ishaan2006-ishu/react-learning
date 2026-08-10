import { useState } from "react";


const [purchased, setPurchased] = useState(false);
function handleClick() {
    setPurchased(true);
}
function ProductCard({ name, price, available }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>
    {purchased ? "Purchased ✅" : "Available"}
</p>
        <button onClick={handleClick}>
    Buy Now
</button>
            
        </div>
    );
}   




export default ProductCard;