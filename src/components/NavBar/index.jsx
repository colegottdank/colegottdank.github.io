import React from "react";
import { NavLink } from "react-router-dom";
import Velocity from "velocity-animate";
import Button from "react-md/lib/Buttons";
import "./navbarstyles.css";
import logo from "../../images/logo/logo_transparent.png";
import BottomNavigation from "react-md/lib/BottomNavigations";
import Collapse from "react-md/lib/Helpers/Collapse";

/*
* @return div which wraps list of NavLinks
*/
class NavBar extends React.Component {
    scroll(event) {
        const offset = "-80";
        console.log(offset);
        Velocity(document.getElementById(event), "scroll", {
            duration: 1000,
            easing: "easeIn",
            offset: offset
        });
    }
    render() {
        const navRoutes = [
            { route: "landing" },
            { route: "my expertise" },
            { route: "my work" },
            { route: "get in touch" }
        ];

        return (
            <header className="navbar-wrapper">
                <nav className="navbar__nav">
                    <img
                        className="navbar-logo"
                        alt="Cole Gottdank - Logo"
                        src={logo}
                        onClick={this.scroll.bind(this, "landing", -100)}
                    />
                    <NavRoutes
                        routes={navRoutes}
                        scroll={this.scroll.bind(this)}
                    />
                </nav>
            </header>
        );
    }
}

/*
* @return list of NavLinks
*/
class NavRoutes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
    }

    collapse() {
        this.setState = {
            collapsed: this.state.collapsed === true ? false : true
        };
    }
    // Map through navRoutes and create NavLinks
    // Object containing routes (can modify here)
    render() {
        return (
            <ul className="navroutes__wrapper__ul">
                {this.props.routes.map(navRoute =>
                    <li className="navroutes__li" key={navRoute.route}>
                        <NavLink
                            key={navRoute.route}
                            className="navroutes--navlink"
                            activeClassName="navroutes--navlink--active"
                            onClick={this.props.scroll.bind(
                                this,
                                navRoute.route.replace(/\s/g, ""),
                                0
                            )}
                            to={`/${navRoute.route.replace(/\s/g, "")}`}
                        >
                            {navRoute.route}
                        </NavLink>
                    </li>
                )}
            </ul>
        );
    }
}

export default NavBar;
