import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// import { useLoaderData} from "react-router-dom";
// import { customFetch } from "../utils/index";
// import { useState} from "react-redux"

// export const loader = async ({ params }) => {
//   const req = await customFetch(`/products/${params.id}`);
//   const product = req.data;
//   return { product };
// };

// function Product() {
//   const { product } = useLoaderData();
//   const [productAmount, setProductAmount] = useState(1);

//   // console.log(product);
//   const setAmount = (type) => {
//     if (type == "decrase" && productAmount >= 1) {
//       setProductAmount((prev) => -1);
//     } else if (type == "increase") {
//       setProductAmount((prev) => +1);
//     }
//   };

//   const addToBag = () => {
//     const newProduct = {
//       ...product,
//       amount: productAmount,
//     };
//   };

//   return <>
//    <div className="max-w-6xl mx-auto flex-col items-start">
//     <h1 className="text-3xl font-bold">{product.title}</h1>
//      <div className="carousel carousel-center max-w-4xl mx-auto p-4 space-x-4 bg-neutral rounded-box">
//       {product.images.map((image) => {
//         return (
//           <div className="carousel-item"> 
//           <img  src={image} className="rounded-box h-96" />
//           </div>
//         );
//       })}
//      </div>
//      <div className="flex items-center gap-2"> 
//      <button
//       onClick={() => setAmount("increase")}
//       className="btn btn-secondary">+</button>
//      <h3>1</h3>
//      <button 
//      onClick={() => setAmount("decrease")} 
//      className="btn btn-secondary"
//      disabled={productAmount == 1 ? true : false}
//      >
//       -
//       </button>

//      <hr />
//      <button onClick={addToBag} 
//      className="btn btn-primary"
//      >
//       Add To Bag
//       </button>
//      </div>
//     </div>
//    </>
// }

// export default Product;
