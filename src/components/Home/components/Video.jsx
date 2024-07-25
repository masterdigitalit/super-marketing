import {useEffect, useState, useRef} from 'react';
import { Player, BigPlayButton } from 'video-react';
import style from '../../../styles/Video.module.scss'
import videoFirst from '../../../images/IMG_8336.mp4'
export default function Video() {
	const [path, setPath] = useState(false)
	const [show, setShow] = useState(false)
	useEffect(() => {
		
		firstVideoRef.current.play()
		secondVideoRef.current.play()
		firstVideoRef.current.style['border-radius'] = '50%'
	}, []);

const firstVideoRef = useRef(null);
const secondVideoRef = useRef(null);
const handlePlay = () => {
	const elem = firstVideoRef.current
	if(elem){ 
		firstVideoRef.current.controls = true
		firstVideoRef.current.muted = false
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen();
		}
	}
}



		// dom.video_1[id].setAttribute("controls","true")

		// dom.video_1[id].muted = false
		
		// dom.video_1[id].autoPlay = false
		

		
	

	return (
		<>

		
		<div className={style.video}>
			<div className={style.items}>
			<div className={style['container-1']}>
				<div className={style.infoAboutVideo}>
					<div className={style.title}>Вся статистика в телеграме</div>
					<div className={style.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis erat eu elementum dictum. Pellentesque malesuada ex nec porta commodo. Nunc rutrum metus dui, ac feugiat enim consequat fringilla. Cras id scelerisque dui. Donec fringilla eros non arcu tincidunt, sit amet vestibulum massa egestas. </div>
				</div>
				<div className={style.videoComponent} >
		<svg version="1.1"
	
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"

     >
	<rect width="100%" height="100%" fill="#000" />
	

	<g transform="rotate(-90deg)" fill="none" stroke-width="4"> 	  	 
	
	<circle cx="140" cy="140" r="135" stroke="#a60f6c" stroke-dasharray="807, 40" stroke-dashoffset="-21"></circle>
	  </g>
	
   
   
 </svg>	
 <div className={style.videoWindow}>

 <video id={1} autoplay="" muted="true" loop playsinline="" ref={firstVideoRef} className="videoPlayer" src={require('../../../images/IMG_8015.mp4')} 	></video>
 {/* <video id={1} autoplay muted playsinline className="videoPlayer" src={require('../../../images/IMG_8336.mp4')} 	></video> */}
	 </div>
	 <div className={style.hoverComponent}>
		<div className={style.info}>Нажмите на видео, чтобы просмотреть его</div>
	</div>
	<div className={style.point}>
		<div className={style.bool}></div>
	</div>
	 </div>
	 
	 
	 </div>
	 <div className={style['container-1']}>
				<div className={style.infoAboutVideo}>
					<div className={style.title}>Вся статистика в телеграме</div>
					<div className={style.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis erat eu elementum dictum. Pellentesque malesuada ex nec porta commodo. Nunc rutrum metus dui, ac feugiat enim consequat fringilla. Cras id scelerisque dui. Donec fringilla eros non arcu tincidunt, sit amet vestibulum massa egestas. </div>
				</div>
				<div className={style.videoComponent} >
		<svg version="1.1"
	
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"

     >
	<rect width="100%" height="100%" fill="#000" />
	

	<g transform="rotate(-90deg)" fill="none" stroke-width="4"> 	  	 
	
	<circle cx="140" cy="140" r="135" stroke="#a60f6c" stroke-dasharray="807, 40" stroke-dashoffset="-21"></circle>
	  </g>
	
   
   
 </svg>	
 <div className={style.videoWindow}>

 <video id={1} autoplay="" muted="true" loop playsinline=""  ref={secondVideoRef} className="videoPlayer" src={require('../../../images/IMG_8336.mp4')} 	></video>

	 </div>	<div className={style.hoverComponent}>
	<div className={style.info}>Нажмите на видео, чтобы просмотреть его</div>
	</div>

	<div className={style.point}>
		<div className={style.bool}></div>
	</div>
	 </div>
	 
	 
	 </div>
	 </div>

	
	 </div>
		</>
		)


}
