import Navbar from "./Navbar";
import Link from "next/link";
const Layout = () =>{
    return(

        <>
            <Navbar/>
            <nav>
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/orders">orders</Link>
                    </li>
                    <li>
                        <Link href="/addorders">addorders</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>

                </ul>
            </nav>

        </>
    )
}
export default Layout;