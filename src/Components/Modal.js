import React from 'react';
import Map from './Map';

const Modal = ({year,setShow}) => {
	return (
		<div className={'modal'} style={{backgroundColor:year.color}}>
			<div className='modal-nav' >
				<div onClick={()=>setShow(false)} className='icon'>
					<span className="iconify" data-icon="ic:baseline-close"></span>	
				</div>
				<p>{year.value}</p>
			</div>
			<div className='map-container'>
				<Map areas={year.areas}/>
				<p className='section-intro'>اقرأ عن جميع الأحداث التي أنشأتها عديلة في هذا العام ، انقر فوق المناطق البيضاء لمعرفة المزيد حول كل حدث في تلك المنطقة المحددة</p>
			</div>
		</div>
	);
};

export default Modal;