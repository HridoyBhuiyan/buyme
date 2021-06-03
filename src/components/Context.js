import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
	state = {
		products: [
			{
				_id: '1',
				title: 'Shoes',
				src: 'https://i.ibb.co/HPPhfv7/item1.jpg',
				description: 'Strong and stylish shoes for boys',
				content:
					'Upper Material- Artificial Leather. Outsole Material- Rubber. Features Fastening- Slip On. Toe Shape- Round. Style- Fashion & Casual. Pattern- Solid',
				price: 35,
				colors: ['red', 'black', 'crimson', 'teal'],
				count: 1,
			},
			{
				_id: '2',
				title: 'Female Dress',
				src: 'https://i.ibb.co/y8xPQrQ/female-Dress.jpg',
				description: 'Beautiful dress for beautiful women',
				content:
					'A skirt is the lower part of a dress/gown or a separate outer garment that covers a person from the waist downwards. At its simplest, a skirt can be a draped garment made out of a single piece of fabric (such as pares). However, most skirts are fitted to the body at the waist or hips and fuller below, with the fullness introduced by means of darts, gores, pleats, or panels. Modern skirts are usually made of light to mid-weight fabrics, such as denim, jersey, worsted, or poplin. Skirts of thin or clingy fabrics are often worn with slips to make the material of the skirt drape better and for modesty.',
				price: 50,
				colors: ['red', 'crimson', 'teal'],
				count: 1,
			},
			{
				_id: '3',
				title: 'SmartWatch',
				src: 'https://i.ibb.co/j3fL9Yj/thumbnail.jpg',
				description: 'Time to explore your smartness and style',
				content:
					'A smartwatch is a digital watch that provides many other features besides timekeeping. Examples include monitoring your heart rate, tracking your activity, and providing reminders throughout the day. Like a smartphone, a smartwatch has a touchscreen display, which allows you to perform actions by tapping or swiping on the screen.',
				price: 75,
				colors: ['lightblue', 'white', 'crimson', 'teal'],
				count: 1,
			},
			{
				_id: '4',
				title: 'Rayban Sunglass',
				src: 'https://i.ibb.co/Hncvyr3/sunglass.jpg',
				description: 'Protect your eyes from heavy sunlight',
				content:
					'Sunglasses or sun glasses (informally called shades or sunnies; more names below) are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.',
				price: 45,
				colors: ['orange', 'black', 'crimson', 'teal'],
				count: 1,
			},
			{
				_id: '5',
				title: 'Brandnew Laptop',
				src: 'https://i.ibb.co/42yg575/laptop.jpg',
				description: 'Work faster and easily by powerful laptop',
				content:
					"A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard. These typically have a 'clamshell' form factor, typically having the screen mounted on the inside of the upper lid of the clamshell and the keyboard on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a laptop mode. Laptops are folded shut for transportation, and thus are suitable for mobile use. Its name comes from lap, as it was deemed practical to be placed on a person's lap when being used. Today, laptops are the used in a variety of settings, such as at work, in education, for playing games, web browsing, for personal multimedia, and general home computer use.",
				price: 500,
				colors: ['orange', 'black', 'crimson', 'teal'],
				count: 1,
			},
			{
				_id: '6',
				title: 'Jogger Pants',
				src: 'https://i.ibb.co/R7TH4Fv/pant.jpg',
				description: 'Dont be formal always, get a jogger',
				content:
					'Sweatpants are a casual variety of soft trousers intended for comfort or athletic purposes, although they are now worn in many different situations. In the United Kingdom, Ireland, Australia, New Zealand, and South Africa they are known as tracksuit bottoms. In Australia and New Zealand, they are also commonly known as trackpants, trackies or tracky daks.',
				price: 30,
				colors: ['orange', 'black', 'crimson', 'teal'],
				count: 1,
			},
		],
		cart: [],
		total: 0,
	};

	addCart = id => {
		const { products, cart } = this.state;
		const check = cart.every(item => {
			return item._id !== id;
		});
		if (check) {
			const data = products.filter(product => {
				return product._id === id;
			});
			this.setState({ cart: [...cart, ...data] });
		} else {
			alert('The product has been added to cart.');
		}
	};

	reduction = id => {
		const { cart } = this.state;
		cart.forEach(item => {
			if (item._id === id) {
				item.count === 1 ? (item.count = 1) : (item.count -= 1);
			}
		});
		this.setState({ cart: cart });
		this.getTotal();
	};

	increase = id => {
		const { cart } = this.state;
		cart.forEach(item => {
			if (item._id === id) {
				item.count += 1;
			}
		});
		this.setState({ cart: cart });
		this.getTotal();
	};

	removeProduct = id => {
		if (window.confirm('Do you want to delete this product?')) {
			const { cart } = this.state;
			cart.forEach((item, index) => {
				if (item._id === id) {
					cart.splice(index, 1);
				}
			});
			this.setState({ cart: cart });
			this.getTotal();
		}
	};

	getTotal = () => {
		const { cart } = this.state;
		const res = cart.reduce((prev, item) => {
			return prev + item.price * item.count;
		}, 0);
		this.setState({ total: res });
	};

	componentDidUpdate() {
		localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
		localStorage.setItem('dataTotal', JSON.stringify(this.state.total));
	}

	componentDidMount() {
		const dataCart = JSON.parse(localStorage.getItem('dataCart'));
		if (dataCart !== null) {
			this.setState({ cart: dataCart });
		}
		const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
		if (dataTotal !== null) {
			this.setState({ total: dataTotal });
		}
	}

	render() {
		const { products, cart, total } = this.state;
		const { addCart, reduction, increase, removeProduct, getTotal } = this;
		return (
			<DataContext.Provider
				value={{
					products,
					addCart,
					cart,
					reduction,
					increase,
					removeProduct,
					total,
					getTotal,
				}}
			>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}
