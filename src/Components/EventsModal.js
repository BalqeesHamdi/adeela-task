import React,{useEffect, useState} from 'react';
import Carousel from './Carousel';
import {EVENTS} from '../constants/index';

const EventsModal = ({area,setModal}) => {
	const [matchingEvents, setMatchingEvents] = useState([]);
	
	useEffect(()=>{
		EVENTS.map((event)=>{
			if(event.area === area)
				setMatchingEvents(current => [...current, event]);
			else 
				setMatchingEvents(current => [...current]);
		}
		);
	},[]);
	console.log(matchingEvents);

	return (
		<div id="myModal" className="eventsModal"   onClick={() => {
			setModal({show:false});
		}} >
			<div className="modal-content"  onClick={e => {
				e.stopPropagation();
			}}>
				<Carousel events={matchingEvents}/>
			</div>
		</div>	
	);
};

export default EventsModal;