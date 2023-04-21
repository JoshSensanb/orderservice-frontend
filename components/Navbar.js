import Link from "next/link"
import styles from '../src/styles/Navbar.module.css'

const Navbar = () =>{
    return(

        <header>
            <Link href="/>" className={styles.logo}>Logo</Link>

        </header>
    )
}
export default Navbar;