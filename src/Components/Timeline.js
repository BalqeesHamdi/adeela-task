import React,{useState} from 'react';
import Modal from './Modal';
import {YEARS} from '../constants';

const Timeline = () => {
	const [show,setShow]=useState(false);
	const [year,setYear] = useState();

	const handleYearChange =(year)=>{
		setShow(true);
		setYear(year);
	};

	return (
		<>
			<div className='timeline'>
				{
					YEARS.map((year)=>{
						return(

							<div className='year' onClick={()=>{handleYearChange(year);}} key={year.value}>
								{year.value}
							</div>
						);
					})
				}
			</div>
			{
				show&& <Modal year={year} setShow={setShow} />
			}
		</>
	);
};

export default Timeline;