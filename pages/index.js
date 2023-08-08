import Head from "next/head";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Inter } from "next/font/google";
import styles from "@/styles/product.module.css";
import Wrapper from "@/components/Wrapper/index";
import Image from "next/image";
import martini from "@/public/images/martini.jpg";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "@/store/slices/cartSlice";
import loaderImage from '@/public/images/btn_loader.gif'


export default function Product() {
  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);
  const [added, setAdd] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // search product
  let getSearchData = (input) => {
    if (input.length !== "") {
      let res = store.filter((each) => {
        return each.name.toLowerCase().includes(input.toLowerCase());
      });

      setData(res);
    } else if (input.length === "") {
      setData(store);
    }
  };

  //  fetch data
  useEffect(() => {
    setLoading(true)
    fetch("/api/productData")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setStore(data);
        setLoading(false)

      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(false)

    });
  }, []);

  // sort by ascending
  let ascendData = () => {
    const sortedProducts = store.slice().sort((a, b) => a.price - b.price);
    setData(sortedProducts);
  };

  // sort by descending
  let descendData = () => {
    const sortedProducts = store.slice().sort((a, b) => b.price - a.price);
    setData(sortedProducts);
  };

  // Add to cart
  let addToCart = (selectedProduct) => {
    const payload = selectedProduct;
  };

  return (
    <>
      <Head>
        <title>Beerr Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main className={styles.products}>
          <SearchBar
            getSearchData={getSearchData}
            ascendData={ascendData}
            descendData={descendData}
          />
          <section className={styles.project_section}>
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
                          setAdd(!added);

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

            {data.length === 0 && loading=== false &&(
              <p className={styles.null_product}> No product found</p>
            )}

             {loading=== true &&
            <div className={styles.loader}> <Image src={loaderImage} alt='loader' width={100} height={100} /></div> 
            }
          </section>
        </main>
      </Wrapper>
    </>
  );
}
