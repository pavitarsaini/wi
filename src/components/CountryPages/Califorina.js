import React, {Component, useRef, useState, useEffect, useCallback} from "react";

import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class Califorina extends Component {

    componentWillMount() {
        document.body.id = 'style-2';
    }

    render() {
        return (
            <div >

            <div id="outer">
                <div id="inner">
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-jakarta">Califorina Wild Fires</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-califorina">In 2001, a team of international scientists projected that during the next 100 years, the planet’s inhabitants <a>would witness higher maximum temperatures,</a> more hot days and heat waves, an increase in the risk of forest fires and “substantially degraded air quality” in large metropolitan areas as a result of climate change. In just the past month, nearly two decades after the third United Nations Intergovernmental Panel on Climate Change report was issued, heat records were busted across California, more than 3 million acres of land burned.
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/problem.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-califorina">Although most wildfires are started from human actions, increasing heat, changing rain and snow patterns, shifts in plant communities, and other climate-related changes have vastly increased the likelihood that fires will start more often and burn more intensely and widely than they have in the past. With warmer temperatures in California, researchers have recorded a large increase in lightning strikes. Which is the most common natural cause of wildfires. Even smaller accidental fires are getting out of control and becoming large fires.

                    </div>
                    <ReactTooltip id="registerTip" place="right" effect="solid">
                    a gradual settling or sudden sinking of the Earth's surface due to removal or displacement of subsurface earth materials
      </ReactTooltip>
                    <ScrollAnimation id="stacker" animateOnce animateIn="animate__fadeInUp">
                        <img id="img-stack" src={require('../../assets/imgs/kenya/drought.jpg')}/>
                        <figcaption></figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-califorina" >Wildfires directly impact the residents of California, through constant evacuations and increase in pollution. For children, their school is being distorted and for adults their jobs are. There is no one group in California that is not feeling the effects of wildfires first hand. Economically the once very rich land has crashed due to the risk of fires, dropping the price of homes and buildings to half of what it was in the past. With constant updates to housing and building regulations, many homeowners and builders are unable to keep up with the work and costs. With the real estate market crashing, those who want to move are put into a great loss. Insurance Companies are at the center of the economic impact, with wildfires setting them back about $20 billion in just one year.(Insurance Information Institute) These insurance companies have no other option but to increase premiums, putting the residents in an economic crisis. 
</div>

                    
                </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-califorina">Catastrophic wildfires take a large economic toll on communities through property losses, decreased tourism, even changes in the long-term structure of the local economy. The largest fire in 2018, the “Camp Fire” set insurers back over $8.5 billion. That's just one fire, creating almost a billion in losses. Over the course of that year the cost of wildfires totaled to $20 billion.(Insurance Information Institute). These numbers only include personal losses. The tourist industry in these parts has gone down distractly, with news of constant wildfires, tourists are less inclined to come anywhere near the year.
</div>
                    <div id="paragraph-califorina">
                    Wildfires of 2020 have now scorched a record 1.6 million hectares. The land these fires are burning is crucial to the economy of California. Along with the land, these wildfires are burning the resources available on them as well. For example farm land used to grow crops and trees used as lumbar. California has already seen great losses, and wildfires are predicted to become even more frequent. Having the highest economic output of any American state, the entire national economy will fall as a result of these wildfires.

                    </div>

                    <ScrollAnimation id="stacker" animateOnce animateIn="animate__fadeInUp">
                        <img id="img-stack" src={require('../../assets/imgs/jakarta/eco.jpg')}/>
                        <figcaption>boy walking on top of the Jakarta's giant sea wall. Photograph: ED WRAY/GETTY IMAGES</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-califorina">Wildfires emit carbon dioxide and other greenhouse gases that will increase the effects of climate change for years to come. They damage forests that would otherwise remove CO2 from the air. The smoke released from the fires can travel hundreds of kilometers, affecting plants and animals in other states. These fires not only damage the environment in the short term, but also in the long term. The greenhouse gasses they release, will pollute the air for years and only worsen climate change.  More specifically, invasive weeds and grasses could overtake native plants and shrubs, making soil erosion more likely which could lead to even more frequent wildfires in the future
</div>
                    <div id="paragraph-califorina">This toxic smoke has already caused air quality to plummet to dangerous levels in California, Oregon and WashingtonIn addition to toxic air, there’s also the debris and ash that covers charred neighborhoods. The ash is the aftermath of everything that was burned up, which includes anything in a home, including chemicals, plastic, and paint, all of which can be toxic to humans and animals.
</div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src="./imgs/kenya/.jpg"/>
                    </ScrollAnimation>
                    </ScrollAnimation>


                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">political impacts</div>
                    <div id="paragraph-califorina">Early in August this year, in the United States, senator for California Dianne Feinstein introduced the ‘Emergency Wildfire and Public Safety Act’ in response to the severe impacts of wildfires in recent years. Presented as a set of legal provisions to support adaptation of forest management to the impacts of climate change across California, Montana and the West, the legislation promises to help strengthen the resilience of fires-affected communities. Among other things, it supports the retrofitting of homes with fire-resistant materials and sets to help hospitals and police stations improve their energy efficiency in order to better cope with precautionary power cuts in the wake of fire emergencies.
</div>
                    

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/political.jpg')}/>
                        <figcaption>Akuarium kampung, one of the informal developments that are blamed for worsening flooding. Photograph: Josh Haner/The New York Times</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-califorina">The California Department of Forestry and Fire Prevention, now known as CAL FIRE, estimates that of 33 million acres of forest in the state, 8 to 10 million acres need urgent mechanical thinning and burning to prevent similar disasters.(Helvrag, 2019) Mechanical thinning is the removal of trees in rows or strips at fixed spacing intervals. This stops fire from traveling quickly from one tree to another and makes it easier to control. They are also going to spend a billion dollars from the state’s climate fund. That will go for restoration, reforestation, fuel reduction, prescribed fire, biomass utilization, and new research. The devastating 2018 wildfires have put everyone on edge. San Francisco-based PG&E shut off power to 27,500 Northern California residents for a day, this decision was influenced by winds kicking up and the humidity dropping, increasing the odds that tree branches or other vegetation knocking down power lines and igniting fires.
</div>
                    <div id="paragraph-califorina">There have been attempts to slow down the temperature increase. For example The Paris Agreement, adopted in 2015 by 175 parties, <a>aims to limit global warming to well below 2°C </a>compared to pre-industrial levels. However, the period 2010-2020 was the planet's hottest decade on record and the long-term trend is upward. As technology spreads, so does the need for energy. To keep up demands countries are needing to <a>rely heavily on fossil fuels,</a> which has worsened the effects of global warming.
</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/jakarta/tired.jpg')}/>
                        <figcaption>Meeting of various world leaders during the 2015 UN climate change conference that resulted in the Paris Agreement. Photograph: Guillaume Horcajuelo</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-califorina">I believe that wildfires are not the problem, but rather the spread of wildfires. Natural wildfires help the environment, they burn all the clutter and dried debris from the forest floor. They create new growth by burning the canopy they let sunlight into the floor nurturing new pants. Wildfires become a problem when they spread from one area to another. California needs to invest into controlling the spread of these fires. The easiest way to do so would be to separate the forest from cutting down lines of trees. By putting a space between chunks of forest eliminates the spread of small fires and slows down the spread of large fires. 

                    </div>

                    <div id="paragraph-califorina">A more constant but environmentallyfriendly solutionwould be planting new trees along firebreak lines. They should plant trees and shrubs with low flammability rates and slow consumption rates, to reduce the probability of fire ignition and diffusion in places at a high risk for fires, and to plant along determined firebreak lines. A tree used to prevent fires in Israel is Athel tamaris or better known as salt cedar and shrubs such as caper, mastic and oleander. The addition of fire-resistance plants along these brake lines are far more effective than the current efforts to space-trees. This way, there is minimal habitat and environmental loss, but significantly higher costs.
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

export default Califorina;