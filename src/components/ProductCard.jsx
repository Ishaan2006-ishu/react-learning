import { useState } from "react";



function ProductCard({ name, price}) {
    const [purchased, setPurchased] = useState(false);
function handleClick() {
    setPurchased(true);
}
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