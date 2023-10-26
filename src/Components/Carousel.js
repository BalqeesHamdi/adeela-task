import React,{useState} from 'react';

const Carousel = ({events}) => {
	const [current, setCurrent] = useState(0);
	const length = events.length;
  
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
  
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
  
	return (
		<div className='carousel'>
			<i className="fa fa-chevron-left left-arrow" onClick={prevSlide}></i>
			<i className="fa fa-chevron-right right-arrow" onClick={nextSlide}></i>
			{events.map((event, index) => {
				return (
					<>
						<div key={index} className='inner-carousel-container' >
							{index === current && (
								<>
									<img src={event.image} alt="" className='carousel-image'  />
									<div className='carousel-text'>
										<p>{event.title}</p>
										<p>{event.description}</p>	
									</div>
								</>
							)}
						</div>
					</>
				);
			})}
		</div>
	);

};

export default Carousel;