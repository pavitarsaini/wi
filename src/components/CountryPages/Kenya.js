import React, {Component, useRef, useState, useEffect, useCallback} from "react";
import CountUp from 'react-countup';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"

class Kenya extends Component {

    componentWillMount() {
        document.body.id = 'style-2';
    }

    render() {
        return (
            <div >

                <div id="outer">
                    <div id="inner">
                        <div id="title">KENYA DROUGHTS</div>

                    </div>
                </div>
                <div id="cont">

                    <div id="heading">the problem</div>
                    <div id="paragraph">For many in East Africa, this drought is the worst ever. In a number of ways the
                        <a> situation today is worse than the 2010 to 2011 food crisis</a>
                    , which affected millions and resulted in a famine that killed more than 250,000
                        people. We are now in the <a>third year of very low rainfall,</a> coupled with high temperatures, which have exhausted people’s ability to go
                        through another shock

                    </div>
                    <div className="counter-main">
                        <div className="counter fadeIn">
                            <CountUp duration={3} start={0} end={1000000}/>
                            <div className="counter-text fadeInDelay">living in desperate conditions</div>
                        </div>
                        <div className="counter fadeIn">
                            <CountUp duration={5} end={10}/>
                            <div className="counter-text fadeInDelay">died</div>
                        </div>
                        <div className="counter fadeIn">
                            <CountUp duration={5} end={12}/>
                            Months
                            <div className="counter-text fadeInDelay">with lack of rain</div>
                        </div>
                    </div>
                    <div className="cause">

                        <div id="heading">who caused the problem</div>

                        <div id="paragraph">Climate change is real and happening now. <a>The past three years have been the hottest ever recorded.</a> Average global temperatures are now one degree Celsius higher than
                            pre-industrial levels, largely due to human activities. Experts have long
                            predicted that the frequency and intensity of droughts <a>would increase as a result of climate change.</a>

                        </div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src={require('../../assets/imgs/kenya/drought.jpg')}/>
                        </ScrollAnimation>
                    </div>

                        <ScrollAnimation  className="cause" animateOnce animateIn="animate__fadeIn">
                            <div id="heading">who are the stakeholders?</div>

                            <div id="paragraph">Climate change is real and happening now.
                                <a>The past three years have been the hottest ever recorded.</a>
                                Average global temperatures are now one degree Celsius higher than
                                pre-industrial levels, largely due to human activities. Experts have long
                                predicted that the frequency and intensity of droughts
                                <a>would increase as a result of climate change.</a>

                            </div>
                        </ScrollAnimation>

                    <div className="cause">

                        <div id="heading">social impacts</div>

                        <div id="paragraph">Across the Horn of Africa, in Ethiopia, Kenya, Somalia, and
                            the autonomous region of Somaliland, 12.7 million people are facing severe
                            hunger. Additionally, it’s expected that 15 million people will not have access
                            to safe drinking water across these three countries in 2 years. These droughts
                            are <a>putting more burden on those in poverty,</a> and it creates unneeded conflicts between communities.

                        </div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src={require("./../../assets/imgs/kenya/social.jpg")}/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">economic impacts</div>
                        <div id="paragraph">In the agricultural industry, dry conditions and lack of
                            precipitation can damage or kill crops, negatively impacting farmers’ income.
                            Crop loss also impacts consumers through increased food prices and the economic
                            impacts of drought can be felt in other provinces and even countries. For
                            example, the drought in California that began in 2012 has impacted vegetable,
                            fruit, and nut prices in Canada.
                        </div>
                        <div id="paragraph">
                            Livestock producers are impacted by drought because of a lack of drinking water
                            and poor pasture conditions as well as increased prices of feed for livestock.
                            Drought can also hurt the recreation and tourism industry. Businesses, such as
                            water sport rental shops, may be financially impacted during a drought. Small
                            businesses near a waterfront or in a vacation town that rely on a steady stream
                            of tourists for business may also lose money.

                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">environmental impacts</div>
                        <div id="paragraph">Environmental degradation is accelerated during periods of
                            drought due to diminished wetland areas, increased need of income influencing
                            harmful activities, such as deforestation , wood and charcoal burning. Along
                            with a higher chance of wildfires fires.

                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">political impacts</div>
                        <div id="paragraph">The droughts in Kenya have put politicians under pressure
                            over the poor handling of the food crisis. The droughts have been the forefront
                            of politics.

                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">what solutions have been tried?</div>
                        <div id="paragraph">NGOs helped people be better prepared for climatic shocks
                            and stresses such as drought. As well as provided supplies throughout each
                            drought

                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">what needs to happen to solve the problem?
                        </div>
                        <div id="paragraph">In the short term the government needs to step in and manage
                            their resources. The first step would be to figure out which communities have
                            been most devastated by the droughts. Forcing stricter restrictions on
                            non-essential water use is crucial to having a large water reserve for droughts,
                            along with improving efficiency standards in buildings, making sure that all
                            water is being put to good use. Maintenance and repair programs on distribution
                            infrastructure to decrease the amount of leaks and disruptions in the water
                            distribution process.
                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                </div>

            </div>
        );
    }
}
export default Kenya;