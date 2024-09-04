import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/footer";
import Link from 'next/link'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

const animation = useRef(null);

useEffect(() => {
  gsap.fromTo(animation.current.children, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.1 });

  }, []);
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div ref={animation}> 
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
    </>
  );
}
