/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import image from '../assets/img/28-450x300.jpg';

const Card = () => {
	return (
		<div className='card'>
			<div className='card__container'>
				<div className='card__header'>
					<div className='card__media'>
						<div className='card__media-thumb'>
							<a className='card__hover-effect' href='#'>
								<img src={image} alt='Rental Place' />
							</a>
						</div>
					</div>
				</div>
				<div className='card__body'></div>
				<div className='card__footer'></div>
			</div>
		</div>
	);
};

export default Card;
