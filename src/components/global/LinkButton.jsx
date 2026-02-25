import { Link } from "react-router"

const LinkButton = ({ to, children }) => {
    return (
        <Link to={to} className="bg-teal-800 text-white px-5 py-2 rounded-full font-bold">{children}</Link>
    )
}

export default LinkButton