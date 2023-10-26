import React from 'react';
import ReactDOM from 'react-dom/client';

// import Map from './Components.js/Map';
import Timeline from './Components/Timeline';

import './assets/styles/Home.css';


function App() {
	return (
		<div className='intro'>
			<div  className='intro-text'>
				<p>من ما بدينا عديلة في 2018 عندنا مجموعة من الأنشطة والفعاليات الدورية والمستمرة بتتنوع من إصدارات ورقية، ومنتديات، وأمسيات ثقافية، ومعارض، وغيرها من أنشطة نظمناها ضمن مجموعة واسعة من المشاريع المتعلقة بالفنون والثقافة ومرتبطة كلها بالسياقات والثقافات المحلية المختلفة، ممكن تشوفي نماذج من فعاليات وأنشطة ومنتديات عديلة المتنوعة من هنا</p>
				<h1>الجدول الزمني لتاريخ عديلة</h1>
				<p>تلميح: أضفط على السنة</p>
			</div>
			<Timeline/>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />,
);


