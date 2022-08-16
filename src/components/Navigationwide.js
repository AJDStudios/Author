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

function NavigationWide(){
    return(
        <nav className="navwide">
           <div className="menuwide">
                <ul className="nav-linkswide">
                    <CustomLink to="/Home" className="route">Home</CustomLink>
                    <CustomLink to="/About" className="route">About</CustomLink>
                    <CustomLink to="/Works" className="route">Works</CustomLink>
                    <CustomLink to="/Blog" className="route">Blog</CustomLink>
                    <CustomLink to="/Updates" className="route">Updates</CustomLink>
                    <CustomLink to="/Links" className="route">Links</CustomLink>
                    <CustomLink to="/Forum" className="route">Forum</CustomLink>
                    <CustomLink to="/Contact" className="route">Contact</CustomLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationWide