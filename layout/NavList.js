import Link from "next/link"

const NavList = ({nav, data, href}) => {
    <li className={`${data?"is-show":""}`}>
        <Link href={href}>
        <a >{nav}</a>
        </Link>
    </li>
}
export default NavList