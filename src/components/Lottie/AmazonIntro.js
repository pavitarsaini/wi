import  React, { useState } from  'react'
import  Lottie  from  'lottie-web-react'
let  animationFile = require('../../assets/lottie/data.json')
const  renderer ='svg'
const  rendererSettings = {
preserveAspectRatio:  'xMinYMin slice',
}

function  AmazonIntro() {
const [playingState] = useState('play')
const [autoplay] = useState(true)
const [loop] = useState(true)
const [animationData] = useState(animationFile)
const [speed] = useState(1)
const [direction] = useState(1)
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
export  default  AmazonIntro