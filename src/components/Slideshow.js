import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function SlideShow(){
    return (
			<Carousel className='carousel'>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={require('../imgs/vet-examing-boxer-puppy-555782789-596844295f9b582c3566433c_slim.jpg')}
						alt='Boxer Puppy'
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src={require('../imgs/image(1).png')}
						alt='Husky Puppy'
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className='d-block w-100'
						src={require('../imgs/header-us-mri-vet_05_slim.jpg')}
						alt='Dog and Cat'
					/>
				</Carousel.Item>
			</Carousel>
		);
}

export default SlideShow
