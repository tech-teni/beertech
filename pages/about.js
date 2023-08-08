import Head from "next/head";
import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
// import Image from 'next/image'
import { Inter } from "next/font/google";
import styles from "@/styles/product.module.css";
import Wrapper from "@/components/Wrapper/index";
import Image from "next/image";
import martini from "@/public/images/martini.jpg";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "@/store/slices/cartSlice";

export default function About() {
  return (
    <>
      <Head>
        <title>Beerr Tech | about</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main className={styles.products}>
          <section className={styles.project_section}>
            <p className={styles.null_product}>About us </p>
            <p style={{padding: "10px 15px 30px" }}>
              Get Alcoholic Beverages online at Supermart.ng that are perfect
              for both social and formal occasions. Get glasses in the air with
              friends and enjoy various wines with different food items, snacks,
              frozen foods, biscuits, ready meals, and more. You could also
              relax with a bottle of whiskey while playing games or chatting
              away with friends. Browse through our brands like Jack Daniels,
              Hennessy, Johnnie Walker, Remy Martin, St. Remy, Spar, Thomas
              Barton, Kiss Mix, Bullet, Smirnoff Ice, Absolut Vodka, Magic
              Moments, and Orijin and enjoy same-day delivery at Beertech. Get Alcoholic Beverages online at Supermart.ng that are perfect
              for both social and formal occasions. Get glasses in the air with
              friends and enjoy various wines with different food items, snacks,
              frozen foods, biscuits, ready meals, and more. You could also
              relax with a bottle of whiskey while playing games or chatting
              away with friends. Browse through our brands like Jack Daniels,
              Hennessy, Johnnie Walker, Remy Martin, St. Remy, Spar, Thomas
              Barton, Kiss Mix, Bullet, Smirnoff Ice, Absolut Vodka, Magic
              Moments, and Orijin and enjoy same-day delivery at Beertech.Get Alcoholic Beverages online at Supermart.ng that are perfect
              for both social and formal occasions. Get glasses in the air with
              friends and enjoy various wines with different food items, snacks,
              frozen foods, biscuits, ready meals, and more. You could also
              relax with a bottle of whiskey while playing games or chatting
              away with friends. Browse through our brands like Jack Daniels,
              Hennessy, Johnnie Walker, Remy Martin, St. Remy, Spar, Thomas
              Barton, Kiss Mix, Bullet, Smirnoff Ice, Absolut Vodka, Magic
              Moments, and Orijin and enjoy same-day delivery at Beertech.
            </p>
         
          </section>
        </main>
      </Wrapper>
    </>
  );
}
