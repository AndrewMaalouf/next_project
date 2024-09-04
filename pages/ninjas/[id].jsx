import Link from 'next/link'
import styles from "@/styles/Home.module.css";
import gsap from 'gsap';
import { useEffect, useRef } from 'react';


// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/');
//     const data = await res.json();

//     // map data to an array of path objects with params (id)
//     const paths = data.map(ninja => {
//       return {
//         params: { id: ninja.id.toString() }
//       }
//     })

//     return {
//       paths,
//       fallback: false
//     }
//   }

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}



export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const ninja = await res.json();

  if (!ninja) {
    return { notFound: true };
  }

  return {
    props: { ninja }
  }
}


// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
//   const data = await res.json();

//   return {
//     props: { ninja: data }
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   // Fetch user data
//   const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const userData = await userRes.json();

//   // Fetch photo data
//   const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
//   const photoData = await photoRes.json();

//   return {
//     props: {
//       ninja: userData,
//       photo: photoData.url, // Only the URL of the photo
//     }
//   }
// }


const Details = ({ ninja }) => {

  const imgRef = useRef(null);
  const btnAnimation = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef.current.children, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.1 });

    gsap.fromTo(btnAnimation.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "power1.out" }
    );    

    }, []);
    

  return (
    <>
      <div ref={imgRef}>
        <img
          src="/ninja.png"
          alt="Ninja"
          width={100}
          height={100}
        />

          <div><h1>{ninja.name}</h1></div>
          <div><a href="#"><p>{ninja.email}</p></a></div>
          <div><a href="#"><p>{ninja.website}</p></a></div>
          <div><p>{ninja.address.city}</p></div>

      </div>
      <Link href="/ninjas" className={styles.btn} ref={btnAnimation}>Go Back</Link>
    </>
  );
}

export default Details;