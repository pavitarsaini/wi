import React, {Component, useRef, useState, useEffect, useCallback} from "react";

import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class Jakarta extends Component {

    componentWillMount() {
        document.body.id = 'style-2';
    }

    playVideo() {
        this.refs.vidRef.play();
      }

    render() {
        return (
            <div >

            <div id="outer">
                <div id="inner">
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-jakarta">Jakarta Sea Level Rise</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-jakarta">A recent study has identified <a>Jakarta as among the world’s major metropolitan areas on the brink of sinking</a> as a result of rising sea levels and extreme weather caused by climate change. Much of the city is projected to be <a>completely submerged within the next twenty five years.</a> The problem is so severe that Indonesia had to take an extraordinary step by <a>moving its capital away from Jakarta,</a> to the island of Borneo. Sea level rise is not a new Phenomenon, in the past many small Islands have disappeared because of it. But what makes this much worse is the effect on the entire nation.
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/problem.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-jakarta">Global warming is the primary cause of current sea level rise. As water heats, it expands. These reactions can be seen in all oceans and was the main driver of <a>sea level rise in the past 100 years.</a> The melting of ice glaciers, ice caps and ice sheets is adding even more water to the world's oceans(UCSUSA, 2013). Jakarta is not just sinking because of Global warming, but also because of <a data-tip data-for="registerTip">Land-subsidence.</a> Land-subsidence. It is caused by the extraction of large volumes of groundwater from aquifers beneath the city, the sinking is further exacerbated by the soft, swampy ground on which the city sits. Despite some of this extraction being illegal, the city does not have the resources to enforce it effectively and, due to the <a>inadequate provision of drinkable water to many of its districts,</a> the locals often have no alternative.

                    </div>
                    <ReactTooltip id="registerTip" place="right" effect="solid">
                    a gradual settling or sudden sinking of the Earth's surface due to removal or displacement of subsurface earth materials
      </ReactTooltip>
                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                    <video ref="vidRef" loop>
                    <source src={require('../../assets/videos/sinking.webm')} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <button className="play" onClick={this.playVideo.bind(this)}>PLAY</button>

                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-jakarta" >Unlike other issues, rising sea levels will have a large impact on the rich. As sea level rises, middle class families that live in apartments in the city will not lose much money. But the <a>rich owners of the building will be put into a great loss.</a> The millions put into a building will be ruined in a matter of months. But like every issue, sea level rise will greatly impact poor families. Many do not have the money to move to a new location, where <a>prices will be higher due to the demand.</a> Currently due to flooding street food works are facing a huge loss, as the city floods people are less inclined to get out of the house and makes it difficult to walk around with their stalls. These floods are also affecting middle class families, who are unable to go to work and their children are unable to go to school. As it may seem that sea level rise helps the environment by creating more water ecosystems. <a>The contact between the city and water will destroy it.</a> All the harmful chemicals used in our homes will enter into the ocean.
</div>

                    
                </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-jakarta">The destruction of infrastructure creates <a>large economic deficits,</a> as floods become more common building owners are finding it very costly to do temporary repairs every time. With large floods rendering some buildings useless. Jakarta is the heart of Indonesia, both culturally and economically. It contributes the most of any province to Indonesia's GDP with a GRP of about $300 000 USD. If Jakarta sinks into the ocean Indonesia's economy <a>will lose its largest producer and about a 5th of its GDP.</a>
</div>
                    <div id="paragraph-jakarta">
                    Even trying to save the city is becoming a costly project. They will have to spend <a>around $42 billion on the giant seawall.</a> That’s the choice more coastal cities are increasingly facing, <a>to spend money to adapt now or suffer worse down the road.</a>

                    </div>

                    <ScrollAnimation id="stacker" animateOnce animateIn="animate__fadeInUp">
                        <img id="img-stack" src={require('../../assets/imgs/jakarta/eco.jpg')}/>
                        <figcaption>boy walking on top of the Jakarta's giant sea wall. Photograph: ED WRAY/GETTY IMAGES</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-jakarta">Many forms of wildlife make their home on the beach. As the rising ocean erodes the shoreline and floods the areas in which coastal animals live, <a>animals like shorebirds and sea turtles will suffer.</a> Their nests may be swept away by flooding, an especially big problem for endangered animals like sea turtles that can't afford to lose any offspring. Their habitats may be so <a>damaged by flooding or changes in the surrounding plant life</a> that they can no longer survive in the environment.
                    </div>
                    <div id="paragraph-jakarta">More saltwater hitting our shores will change the <a>chemistry of the soil on the coast,</a> meaning the plant life there will most likely change as well. As rising ocean water seeps into the ground, the soil near the coast will become saltier. Some plants will simply be unable to <a>cope with the change in soil salinity and may disappear from the shoreline.</a> Researchers have claimed that Trees have to work harder to pull water out of salty soil. As a result, their growth can be stunted and if the soil is salty enough, they will die(Climate Central, 2009). Even though Jakarta is a city, it does contain many large gardens and green areas, which are home to many animals and plants.
</div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/envir.jpg')}/>
                        <figcaption>destruction of a village creating debris in the water. Photograph: Elly Burhaini Faizal</figcaption>
                    </ScrollAnimation>
                    </ScrollAnimation>


                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">political impacts</div>
                    <div id="paragraph-jakarta">Jakarta’s former governor, Basuki Tjahaja Purnama, tried to tackle several of Jakarta’s big problems. But failed to wrest control of the water supply from the private companies. He assembled a sanitation crew, called the Orange Army, to remove sediment and garbage from rivers and canals. He <a>cleared out some of the villages that obstructed waterways.</a> The efforts began to make a difference. Rains that once caused days of floods <a>drained within hours.</a>
</div>
                    <div id="paragraph-jakarta">But many people forced out, resisted the moves, convinced that the evictions were really intended to enrich developers, not improve drainage. These villages became the <a>center of protest against the governor.</a> This conflict was quickly turned into a violent anti-Chinese movement by his political rivals. This issue was turned into an argument about whether a non-Muslim should lead a Muslim-majority city. The governor found himself regularly attacked at Friday prayers. <a>He lost his re-election bid,</a> and the Islamists, who exploited anger against him, had him brought up on charges of blasphemy. <a>He is serving two years in prison</a>(KIMMELMAN, 2017).
</div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/political.jpg')}/>
                        <figcaption>Akuarium kampung, one of the informal developments that are blamed for worsening flooding. Photograph: Josh Haner/The New York Times</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-jakarta">The country has spent billions to defend itself from rising sea levels. With multiple proposed plans <a>either failing or not being approved by the locals.</a> In 2019 they created a new plan for an offshore seawall, which has gone through its first approval. It is scheduled to begin construction in 2023. The plan proposes a <a>40km wall along the shore,</a> costing a total of $4 billion plus another 4 billion for pumping stations and reservoirs. Jakarta knows the amount of trouble it is in, and are doing everything they can to delay the inevitable.
</div>
                    <div id="paragraph-jakarta">There have been attempts to slow down the temperature increase. For example The Paris Agreement, adopted in 2015 by 175 parties, <a>aims to limit global warming to well below 2°C </a>compared to pre-industrial levels. However, the period 2010-2020 was the planet's hottest decade on record and the long-term trend is upward. As technology spreads, so does the need for energy. To keep up demands countries are needing to <a>rely heavily on fossil fuels,</a> which has worsened the effects of global warming.
</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/tired.jpg')}/>
                        <figcaption>Meeting of various world leaders during the 2015 UN climate change conference that resulted in the Paris Agreement. Photograph: Guillaume Horcajuelo</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-jakarta">Although climate change is a large factor in rising sea levels, there is not much Indonesia can do by itself. But what it can do is slow down other factors that are sinking the city. Land-subsidence is causing the city to sink. Stopping this would help <a>decrease the effects of sea level rise.</a> First they need to create a sustainable water management plan to <a>end unmonitored extraction of large volumes of groundwater from aquifers</a> beneath the city. Retrofitting one of the world’s biggest cities with a sewer system is not easy task and will cost billions.

                    </div>

                    <div id="paragraph-jakarta">Secondly, learning from other flooding cities will mitigate the current effects. <a>Creating a 'Waterproof' urban plan</a> prepares the city's infrastructure for large floods. For example in Bangkok, the Centennial Park was established to protect the sinking city from flooding during heavy rainfalls. With artificial wetlands and a water tank below, <a>the park can store up to 4,564 cubic metres of water.</a>
</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/solution.jpg')}/>
                        <figcaption>Centennial Park incorporates various anti-flooding features. Photograph: Courtesy Landprocess</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

            </div>

        </div>
        );
    }
}

export default Jakarta;