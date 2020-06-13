import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function SlideShow() {
	return (
		<div className='slideshow '>
			<Carousel className='carousel'>
				<Carousel.Item>
					<img
						className='d-flex w-100 '
						src={require('../imgs/1.jpg')}
						alt='Husky Puppy'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-flex w-100 '
						src={require('../imgs/3.jpg')}
						alt='Dog and Cat'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100 '
						src={require('../imgs/2.jpg')}
						alt='Dog and Cat'
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
export default SlideShow;
