import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";
import './TopNav.css';

function TopNav() {
    const wpMenu = useStaticQuery(graphql`
    {
        allWpMenuItem(
            filter: {menu: {node: {slug: {eq: "primary-menu"}}}, parentDatabaseId: {eq: 0}}
        ) {
            nodes {
            path
            title:label
            }
        }
        }
    `)
    const menuItems = wpMenu.allWpMenuItem.nodes;
    return (
        <ul className="navLinks">
            {
                menuItems?.map((menuItem, index) => {
                    return (
                        <li key={index}>
                            <Link to={menuItem.path} className="nav-link topLinks" activeClassName="current-link">{menuItem.title}</Link>
                        </li>
                    )
                })
            }
        </ul >
    )
}
export default TopNav;
