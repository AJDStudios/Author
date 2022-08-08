import{ Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink ({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end:true }) 

	return (
		<li className={isActive ? "active" : ""}>
			<Link to = {to} {...props}>
				{children}
			</Link>
		</li>
	)
}

export default function Navbar () {
    return (
	 <nav className="nav">
      <Link to="/" className="site-title">
        Aaron James Dodd
      </Link>
      <ul className="nav-links">
				<CustomLink to="/Portfolio">Portfolio</CustomLink>
				<CustomLink to="/About">About</CustomLink>
				<CustomLink to="/Updates">Updates</CustomLink>
				<CustomLink to="/Contact">Contact</CustomLink>
			</ul>
			<div className="burger"> 
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>		
    </nav>
	)
}

