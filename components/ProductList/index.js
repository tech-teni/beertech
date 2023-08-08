import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { add, remove } from "@/store/slices/cartSlice";


const ProductList = ({data}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
  
  return (
    <ul>
    {data.map((each) => {
      return (
        <li key={each.id}>
          <Image
            src={`/images/${each.image}`}
            alt="product Image"
            width={100}
            height={100}
          />
          <div>
            <h4>{each.name}</h4>
            <span>
              <b>₦</b>
              <b>{each.price}</b>
            </span>
            <button
              style={{
                backgroundColor: cart?.find(
                  (obj) => obj.id === each.id
                )
                  ? "blue"
                  : "#cccaca",
              }}
              onClick={(e) => {
                dispatch(add(each));

                if (cart?.find((obj) => obj.id === each.id)) {
                  dispatch(remove(each));
                } else {
                  dispatch(add(each));
                }
              }}
            >
              {cart?.find((obj) => obj.id === each.id)
                ? "Added"
                : "Add to cart"}
            </button>
          </div>
        </li>
      );
    })}
  </ul>

  )
}

export default ProductList
