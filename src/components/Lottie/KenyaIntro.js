import  React, { useState } from  'react'
import  Lottie  from  'lottie-web-react'
let  animationFile = require('../../assets/lottie/intro.json')
const  renderer ='svg'
const  rendererSettings = {
preserveAspectRatio:  'xMinYMin slice',
}

function  KanyaIntro() {
const [playingState, setPlayingState] = useState('play')
const [autoplay, setAutoplay] = useState(true)
const [loop, setLoop] = useState(false)
const [animationData, setAnimationData] = useState(animationFile)
const [speed, setSpeed] = useState(1)
const [direction, setDirection] = useState(1)
return (
<Lottie
options={{
renderer:  renderer,
loop:  loop,
autoplay:  autoplay,
animationData:  animationData,
rendererSettings:  rendererSettings
}}
playingState={playingState}
speed={speed}
direction={direction}
/>
)
}
export  default  KanyaIntro