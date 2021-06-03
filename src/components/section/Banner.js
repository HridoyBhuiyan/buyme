import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Img from './images/banner.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Banner extends Component {
	render() {
		return (
			<div>
				<Image src={Img} fluid />
			</div>
		);
	}
}

export default Banner;
