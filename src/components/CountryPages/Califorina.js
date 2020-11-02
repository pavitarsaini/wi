import React, {Component, useRef, useState, useEffect, useCallback} from "react";

import CountUp from 'react-countup';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class Califorina extends Component {
    constructor() {
        super();
      this.state = {
        didViewCountUp: false
      };
      this.test = this.test.bind(this)
        
    }  

    componentWillMount() {
        document.body.id = 'style-2';
    }

    test(visible) {this.setState({ didViewCountUp: true });}

    render() {
        return (
            <div >

            <div id="outer">
                <div id="inner">
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-califorina">Califorina Wildfires</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-califorina">In 2001, a team of international scientists projected that during the next 100 years, the planet’s inhabitants <a>would witness higher maximum temperatures,</a> more hot days and heat waves, an increase in the risk of forest fires and substantially degraded air quality in large metropolitan areas as a result of climate change(Rust and Barboza, 2020). In just the past month, nearly two decades after the third United Nations Intergovernmental Panel on Climate Change report was issued, heat records were busted across California and <a>more than 3 million acres of land burned.</a>
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/cali/problem.jpg')}/>
                        <figcaption>Flames from the LNU Lightning Complex fires leap above Butts Canyon Road on Sunday as firefighters work to contain the blaze in unincorporated Lake County, Calif. Photograph: Noah Berger / AP</figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-califorina">Although most wildfires are started from human actions, <a>increasing heat, changing rain and snow patterns, shifts in plant communities,</a> and other climate-related changes have vastly increased the likelihood that fires will start more often and burn more intensely and widely than they have in the past. With warmer temperatures in California, researchers have recorded a <a>large increase in lightning strikes.</a> Which is the most common natural cause of wildfires. Even smaller accidental fires are getting out of control and becoming large fires.

                    </div>
                    
                    <ScrollAnimation afterAnimatedIn={this.test} animateOnce animateIn="animate__fadeInUp">
                    <div className="counter-main">
                        <div className="counter3 fadeIn">
                            <CountUp duration={3} useEasing start={0} end={this.state.didViewCountUp ? 97 : 0} suffix={"%"}/>
                            <div className="counter-text fadeInDelay">of Wildfires are caused by people</div>
                        </div>
                        <div className="counter3 fadeIn">
                            <CountUp duration={3} useEasing end={this.state.didViewCountUp ? 11000 : 0} separator=" "/>
                            <div className="counter-text fadeInDelay">lightning strikes over 72 hours</div>
                        </div>
                        <div className="counter3 fadeIn">
                            <CountUp duration={5} useEasing start={0} end={this.state.didViewCountUp ? 4 : 0}/>
                            <div className="counter-text fadeInDelay">millions acres buined in 2020</div>
                        </div>
                    </div>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-califorina" >Wildfires directly impact the residents of California, through constant evacuations and increase in pollution. For children, their school is being disturbed and for adults their jobs are. There is no <a>group in California that is not feeling the effects of wildfires first hand.</a> Economically the once very rich land has crashed due to the risk of fires, dropping the price of homes and buildings to half of what it was in the past. With constant updates to housing and building regulations, many homeowners and builders are <a>unable to keep up with the work and costs.</a> With the real estate market crashing, those who want to move are put into a great loss. Insurance Companies are at the center of the economic impact, with wildfires set them back <a>about $20 billion in just one year.</a>(Insurance Information Institute) These insurance companies have no other option but to increase premiums, <a>putting the residents in an economic crisis.</a> 
</div>


                    
                </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-califorina">Catastrophic wildfires take a large economic toll on communities through <a>property losses, decreased tourism, even changes in the long-term structure of the local economy.</a> The largest fire in 2018, <a>the “Camp Fire” set insurers back over $8.5 billion.</a> That's just one fire, creating almost $10 billion in losses. Over the course of that year the cost of wildfires totaled to $20 billion.(Insurance Information Institute). These numbers only include personal losses. The tourist industry in these parts has gone down distractly, with news of constant wildfires, <a>tourists are less inclined to come anywhere near the area.</a>
</div>
                    <div id="paragraph-califorina">
                    <a>Wildfires of 2020 have now scorched a record 1.6 million hectares.</a> The land these fires are burning is crucial to the economy of California. Along with the land, these wildfires are <a>burning the resources available on them</a> as well. For example farm land used to grow crops and trees used as lumbar. California has already seen great losses, and wildfires are predicted to become even more frequent. Having the highest economic output of any American state, <a>the entire national economy will fall as a result of these wildfires.</a>

                    </div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/cali/eco.jpg')}/>
                        <figcaption>Wildfires approaching crops. Photograph: Noah Berger / AP</figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-califorina">Wildfires emit carbon dioxide and other greenhouse gases that will <a>increase the effects of climate change for years to come.</a> They damage forests that would otherwise remove CO2 from the air. The smoke released from the fires can travel hundreds of kilometers, affecting <a>plants and animals in other states.</a> These fires not only damage the environment in the short term, but also in the long term. The greenhouse gasses they release, will pollute the air for years and only worsen climate change.  More specifically, invasive weeds and grasses could <a>overtake native plants and shrubs,</a> making soil erosion more likely which could lead to even more frequent wildfires in the future
</div>
                    <div id="paragraph-califorina">Smoke has already caused air quality to plummet to dangerous levels in California, Oregon and Washington. In addition to toxic air, there’s also the debris and ash that covers charred neighborhoods. The ash is the aftermath of everything that was burned up, which includes anything in a home, including chemicals, plastic, and paint, <a>all of which can be toxic to humans and animals.</a>
</div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/cali/envir.webp')} type/>
                        <figcaption>People stop to take morning pictures of the Golden Gate Bridge covered in smoke from wildfires on September 9. Photograph: Eric Risberg/AP</figcaption>
                    </ScrollAnimation>
                    </ScrollAnimation>


                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">political impacts</div>
                    <div id="paragraph-califorina">Early in August this year, in the United States, senator for California Dianne Feinstein introduced the <a>‘Emergency Wildfire and Public Safety Act’</a> in response to the severe impacts of wildfires in recent years. Presented as a set of legal provisions to support adaptation of forest management to the impacts of climate change across California, Montana and the West, the legislation promises to <a>help strengthen the resilience of fires-affected communities.</a> Among other things, it supports the retrofitting of homes with fire-resistant materials and sets to help hospitals and police stations improve their energy efficiency in order to better cope with precautionary power cuts in the wake of fire emergencies.
</div>
                    

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-califorina">The California Department of Forestry and Fire Prevention, now known as CAL FIRE, estimates that of 33 million acres of forest in the state, <a>8 to 10 million acres need urgent mechanical thinning and burning</a> to prevent similar disasters(Helvrag, 2019). Mechanical thinning is the removal of trees in rows or strips at fixed spacing intervals. This stops fire from <a>traveling quickly from one tree to another</a> and makes it easier to control. They are also going to spend a billion dollars from the state’s climate fund. That will go for restoration, reforestation, fuel reduction, prescribed fire, biomass utilization, and new research. The devastating 2018 wildfires have put everyone on edge. San Francisco-based PG&E <a>shut off power to 27,500 Northern California residents for a day,</a> this decision was influenced by winds kicking up and the humidity dropping, increasing the odds of tree branches or other vegetation knocking down power lines and igniting fires.</div>
                    
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/cali/tried.jpg')} type/>
                        <figcaption>A key process in managing forests for fire resistance is thinning tree stands to reduce the fuel that propels the blazes. Photograph: CALmatters</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-califorina">I believe that wildfires are not the problem, but rather <a>the spread of wildfires.</a> Natural wildfires help the environment, they burn all the clutter and dried debris from the forest floor. They create new growth by burning the canopy they let sunlight into the floor nurturing new pants. Wildfires become a problem when they spread from one area to another. California needs to invest into controlling the spread of these fires. The easiest way to do so would be to <a>separate the forest by cutting down lines of trees.</a> By putting a space between chunks of forest eliminates the spread of small fires and slows down the spread of large fires. 

                    </div>

                    <div id="paragraph-califorina">A more costly but environmentally friendly solution would be planting new trees along firebreak lines. They should <a>plant trees and shrubs with low flammability rates and slow consumption rates,</a> to reduce the probability of fire ignition and diffusion in places at a high risk for fires, and to plant along determined firebreak lines. A tree used to prevent fires in Israel is Athel tamaris or better known as salt cedar and shrubs such as caper, mastic and oleander. The addition of fire-resistance plants along these brake lines are <a>far more effective than the current efforts</a> to space-trees. This way, there is minimal habitat and environmental loss, but significantly higher costs.
</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/cali/solution.jpeg')}/>
                        <figcaption>Pistacia lentiscus (Mastic Tree)</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

            </div>

        </div>
        );
    }
}

export default Califorina;