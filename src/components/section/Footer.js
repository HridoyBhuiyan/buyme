import React, { Component } from 'react';
import { Fragment } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import '../../index.css';
import bc from '../section/images/barcoad.png';
class Footer extends Component {
	render() {
		return (
			<Fragment>
				<Container className="bg-dark text-white p-2" fluid>
					<Row>
						<Col md={4}>
							<p className="footer--title">Follow us on:</p>

							<ul className="footer--ul">
								<li>
									<a href="https://www.facebook.com">Facebook</a>
								</li>
								<li>
									<a href="https://www.twitter.com">Twitter</a>
								</li>
								<li>
									<a href="https://www.instragram.com">Instragram</a>
								</li>
							</ul>
						</Col>
						<Col md={4}>
							<p className="footer--title">Contact Us</p>
							<ul className="footer--ul">
								<li>
									<b>Email :</b> Hellohridoy@gmail.com
								</li>
								<li>
									<b>Facebook :</b> FB.com/Hridoy.Bhuiyann
								</li>
								<li>
									<b>Phone :</b> 01711952465
								</li>
							</ul>
						</Col>
						<Col md={4}>
							<p className="footer--title">Find us Google Play</p>
							<Image src={bc} />
						</Col>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default Footer;
