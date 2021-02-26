import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from './Card';

class SlickDemo extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			initialSlide: 0,
			arrows: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false
					}
				}
			]
		};
		return (
			<div className='container'>
				<Slider {...settings}>
					<Card />
					<Card />
					<Card />
				</Slider>
			</div>
		);
	}
}

export default SlickDemo;
