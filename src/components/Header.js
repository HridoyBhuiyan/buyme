import React, { Component } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/header.css';
import { DataContext } from './Context';
import { Container, Navbar } from 'react-bootstrap';

export class Header extends Component {
	static contextType = DataContext;

	state = {
		toggle: false,
	};

	menuToggle = () => {
		this.setState({ toggle: !this.state.toggle });
	};

	render() {
		const { toggle } = this.state;
		const { cart } = this.context;
		return (
			<header>
				<Navbar collapseOnSelect expand="lg" variant="light" className="header--nav--1">
					<Container>
						<div className=" ">
							<h1>
								<Link className="nav--header--icon" to="/">Dhaka Store</Link>
							</h1>
						</div>
						<div className="menu" onClick={this.menuToggle}>
							<img src={Menu} alt="" width="25" />
						</div>
						<nav className="pt-3">
							<ul className={toggle ? 'toggle' : ''} >
								<li>
									<Link className="header--menu" to="/">Home</Link>
								</li>
								<li>
									<Link className="header--menu" to="/product">Product</Link>
								</li>
								<li>
									<Link className="header--menu" to="/contact">Contact</Link>
								</li>
								<li>
									<Link className="header--menu" to="/about">About</Link>
								</li>
								<li>
									<Link className="header--menu" to="/login">Login / Register</Link>
								</li>
								<li className="close" onClick={this.menuToggle}>
									<img src={Close} alt="" width="20" />
								</li>
							</ul>
							<div className="nav-cart">
								<span>{cart.length}</span>
								<Link to="/cart">
									<img src={CartIcon} alt="" width="20" />
								</Link>
							</div>
						</nav>
					</Container>
				</Navbar>
			</header>
		);
	}
}

export default Header;
