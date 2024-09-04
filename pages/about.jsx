import Head from "next/head";
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const About = () => {

    const animation = useRef(null);

    useEffect(() => {
        gsap.fromTo(animation.current.children, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: 0.1 });

    }, []);

    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div ref={animation}>
                <div><h1>About</h1></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            </div>
        </>
    );
}

export default About
