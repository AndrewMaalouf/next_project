import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <h1>Error</h1>
            <h2>This page cannot found</h2>
            <p>Go back to the <Link href="/">Home</Link></p>
        </div>
    );
}
 
export default NotFound;