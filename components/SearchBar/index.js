import React from "react";
import styles from "./searchbar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import upper from '@/public/images/upper.svg'
import down from '@/public/images/down.svg'

const SearchBar = ({ getSearchData, ascendData, descendData }) => {
  const [searchData, setSearchData] = useState("");
  
  return (
    <section className={styles.search_section}>
      <div className={styles.sort_up} >
        
        <p>Sort with price</p>
        <div className={styles.sorting_container}>
          <button onClick={ascendData}>
          <Image src={upper} alt='upper' />

          </button>
          <button  onClick={descendData}>
          <Image src={down} alt='down'/>

          </button>
        </div>
      </div>
      <div className={styles.search_input_container}>
        <input
          type="search"
          placeholder="Search product"
          value={searchData}
          onChange={(e) => {
            e.preventDefault();
            setSearchData(e.target.value);
            getSearchData(e.target.value);
          }}
        />
        <button onClick={(e)=>{
            e.preventDefault();
            getSearchData(searchData);

        }}>Search </button>
      </div>
    </section>
  );
};

export default SearchBar;
