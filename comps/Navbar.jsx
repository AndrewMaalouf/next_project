import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
              <Link href="/"><Image src="/logo.svg" alt="logo" width={128} height={77}/></Link>
            </div>
            <Link href="/about">About</Link>
            <Link href="/andrew">Ninja Listing</Link>
        </nav>
    );
}
 
export default Navbar;