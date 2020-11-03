import React, {Component} from "react";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class Atlantic extends Component {

    constructor() {
        super();
      this.state = {
        didViewCountUp: false
      };
      this.test = this.test.bind(this)
        
    }  

    test(visible) {
        this.setState({ didViewCountUp: true });
        this.refs.vidRef.play();
    }

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
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-jakarta">Atlantic Hurricanes</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-jakarta">The intensity, frequency and duration of North Atlantic hurricanes, as well as the frequency of the strongest hurricanes, have all increased since the early 1980s. The relative contributions of human and natural causes to these increases are still uncertain. Hurricane-associated storm intensity and rainfall rates are projected to increase as the climate continues to warm. These new Hurricanes have caused immense damage to communities and the environment. 
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/atlantic/problem.png')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-jakarta">Climate change is fueling extreme rainfall, increasing the threat of rain and flooding driven by hurricanes. Hurricanes get their energy by siphoning moisture and energy from warm ocean waters. Due to ocean warming, a greater proportion of tropical cyclones around the world are attaining major storm intensity(Carilec, 2020). Climate change has been linked to an increase in the frequency of hurricanes in the North Atlantic. Sea level rise enables hurricane storm surges to reach further inland and cause more flooding along with destruction of property.

                    </div>
                   
                    <ScrollAnimation afterAnimatedIn={this.test} animateOnce animateIn="animate__fadeInUp">
                    <video id="my-video" ref="vidRef" muted="muted">
                    <source src={require('../../assets/videos/atlantic-graph.webm')} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
                <div className="play" >Increasing tempture and power of Hurricanes</div>


                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-jakarta" >The stakeholders of a Hurricane are similar to those of any natural disaster. Children are unable to go to school and adults are unable to go to work. The adults of the household are also economic stakeholders, as any destruction of their poverty directly impacts their amount of money. This in turn is a positive of workers, who work in home repair. As Hurricanes become more frequent so does their news. Over the years a government's response to a Hurricane has become more important. A poor response can cause hundreds of casualties and a bad reputation among the population and a good response creates a boost in reputation for the political party. These responses become fuel for the opposition as they try to find every little flaw. Lastly, the environmental impacts are wildspread throughout the ecosystem.
</div>

                    
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">social impacts</div>
                    <div id="paragraph-jakarta">The impacts of recent storms disproportionately harmed poor communities, black communities, and communities of color(Carilec, 2020). These communities in the US and elsewhere contribute the least to the emissions that cause climate change but stand to suffer the most because of systemic and structural inequities that keep incomes low, make neighborhoods vulnerable to flooding, and limit access to medical care. These communities do not have the resources or funds to  protect or even repair the damage caused by a Hurricane. To increase this problem, as Hurricanes become more common these communities are not able to repair in time, and the effects of the next Hurricane become much more destructive.
</div>
                  

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/atlantic/social.jpg')}/>
                        <figcaption>People wait to be rescued from their flooded homes after the area was inundated with flooding from a Hurricane. Photograph: Joe Raedle</figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-jakarta">Hurricanes are among the most damaging of natural disasters. A category 4 or 5 storm can reduce U.S. economic production and increase unemployment. Large hurricanes depress the stock market and other financial markets. Even a Category 1 Hurricane can devastate the economy. For example, Hurricane Igor wreaked havoc on Newfoundland and caused $200 million in damages(Dangerfield, 2017). These figures only include direct damages and not the indirect costs. A Hurricane puts all work to stop, fishing which is one of Newfoundland's biggest industries can be put on hold for up to a week with heavy damages to equipment.
</div>
                <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/atlantic/eco.webp')}/>
                        <figcaption>Hurricane Igor and the havoc the storm wreaked. Photograph: Unknown</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-jakarta">Hurricanes generate strong winds that can completely defoliate forest canopies and cause dramatic structural changes in wooded ecosystems. Animals can either be killed by hurricanes or impacted indirectly through changes in habitat and food availability caused by high winds, storm surge, and intense rainfall. Hurricanes have been known to result in large amounts of dead fish and crabs, due to reduced amounts of dissolved oxygen in the water, rapid salinity changes, and violent surf(Foundriest, 2013). This rapidly changes the marine food chain and takes a tool on these populations for multiple weeks.
                    </div>
                    

                    
                    </ScrollAnimation>

                     <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">political  impacts</div>
                    <div id="paragraph-jakarta">Hurricanes receive extreme attention from media and new outlets. Anyone involved in the political and response process is under the eyes of the people. Poor response from a government can have devastating political consequences. In the aftermath of hurricane Katrina, George W. Bush’s approval rating dropped to 40%, his administration received heavy criticism for their handling of the hurricane(CNN, 2005). Many saw a lack of planning and a late response. Even years after Katrina his approval rating never increased, and republicans lost the house and senate, in 2006. As we continue to see an increase in hurricanes, the response of the government is not only crucial, in saving people's lives but also their own office.
</div>
                    

                    
                    </ScrollAnimation>


                    

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-jakarta">Warm water on the ocean's surface fuels hurricanes, making them more powerful and deadly. Using "hurricane suppression technology," the goal is to reduce the storms' power by cooling the ocean's surface and mixing it with the cold water sitting 100 to 300 feet below(Hoffman and Rodrigues, 2009). Intellectual Ventures, a global innovationcompany, believes that it can control hurricanes by moving cooler water from the bottom of the sea onto the top. Although this idea may be revolutionary, it is still in its early stages. There is simply nothing powerful enough to move millions of gallons of water with ease. A proposed idea is a large ship creating washes to cycle the water in high risk areas. 
</div>
                    <div id="paragraph-jakarta">A more international solution is to slow down the rate of the warming waters, by capping carbon emissions. The Paris Agreement aims to do just that, by setting guidelines and goals for parties to meet. If all parties meet their carbon emission goals, the temperature will not increase more than 1.5 degrees. Although the Paris agreement is trying to stop the temperatures from rising too high, the current increase in temperature is going to affect millions of lives. With no way to cool the earth, hurricanes will become more frequent and deadly. 
</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/atlantic/tried.png')}/>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-jakarta">Although there is no real solution to stop Hurricanes, we can try our best to protect people from them. We can start by deploying early Hurricane warning stations, this creates extra time for communities to evacuate. In the long term, cities need to be built from the ground up, to incorporate Hurricane protection. The investment of billions of dollars and years of construction, is the only way to ensure that everyone is protected. We also need a way to decrease the rate of Hurricanes. Since severity of Hurricanes is directly tied to climate change, decreasing climate change will also decrease Hurricanes. The people most affected have to step in and fight against climate change. They need to first decrease their carbon footprint, if they want others to do so as well. 

                    </div>

                    <div id="paragraph-jakarta">At a political standpoint, the effects of the only solution is to give attention to small communities. Even though Atlantic Canada is not hit with the most powerful hurricanes, we must work to design communities to be prepared to tackle them. This class for tougher regulations and codes for building houses in the Atlantic. As we begin to settle more and more land, we increase our carbon emission and it is evident that Hurricanes are only getting stronger. If we spend millions on a proper and protected house, we can not only save lives but also save billions in damages in the future. If we do not work now, it may be too late to fix our mistakes in the future.
</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/atlantic/solution.jpg')}/>
                        <figcaption>This house plan was created for social charity ORLI’s Global Design Ideas Competition, aimed at helping neighbourhoods affected by Hurricanes</figcaption>
                        
                    </ScrollAnimation>
                </ScrollAnimation>

            </div>

        </div>
        );
    }
}

export default Atlantic;