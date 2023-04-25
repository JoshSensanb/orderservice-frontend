import styles from "/src/styles/NavBar.module.css"
import Link from "next/link";


const NavBar = () => {
    return (
        <>
            <header>
                <Link className={styles.logo} href="/">logo</Link>

                <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
                <label htmlFor="menu-bar">menu</label>

                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">home</Link>
                        </li>

                        <li>
                            <Link href="/orders/viewallorders">View All Orders</Link>
                        </li>
                        <li>
                            <Link href="/orders/addorders">New Order</Link>
                        </li>
                        <li>
                            <Link href="about">about</Link>
                        </li>


                    </ul>

                </nav>
            </header>
        </>
    );
};

export default NavBar;
