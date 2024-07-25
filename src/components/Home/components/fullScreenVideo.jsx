import {useEffect, useState} from 'react';
import { Player, BigPlayButton } from 'video-react';
import style from '../../../styles/Video.module.scss'
export default function FullScreenVideo(){
	return(<>
	 <div className={style['videoWindow.active']}>
	<div className={style.close}> <img src={require('../../../images/arrow.svg').default} alt="" /> </div>
 	<video id={1} autoPlay={true } muted   loop width="280px" height={'280px'} className="videoPlayer" src={require('../../../images/IMG_8336.MOV')} 	></video>
	 </div>
	</>)
}