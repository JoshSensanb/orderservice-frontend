import Navbar from "./Navbar";
import Link from "next/link";
const Layout = () =>{
    return(

        <>
            <Navbar/>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/orders/allorders">View Orders</Link>
                    </li>
                    <li>
                        <Link href="orders/addorders">Add/Create Order</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>

                </ul>
            </nav>

        </>
    )
}
export default Layout;