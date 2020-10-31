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
                    <div id="paragraph">For many in East Africa, this drought is the worst ever. In a number of ways the situation today <a>is worse than the 2010 to 2011 food crisis,</a> which affected millions and resulted in a famine that killed more than 250,000 people(McKie, 2019). We are now in the third year of very low rainfall, coupled with high temperatures, which <a>have exhausted people’s ability to go through another shock.</a> This issue of long periods without rain, is becoming more common in the world and is devastating third world countries that do not have the resources to combat it.
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
                            &#160;Months
                            <div className="counter-text fadeInDelay">with lack of rain</div>
                        </div>
                    </div>
                    <div className="cause">

                        <div id="heading">who caused the problem</div>

                        <div id="paragraph">Climate change is real and happening now. The past three years have been <a>the hottest ever recorded.</a> Average global temperatures are now one degree Celsius higher than pre-industrial levels, largely due to human activities. Experts have long predicted that <a>the frequency and intensity of droughts would increase as a result of climate change.</a> The increasing release of greenhouse gasses like chlorofluorocarbons(CFCs) has taken a large tool on our ozone layer, that absorbs almost all of the sun's harmful ultraviolet light. Most blame climate change for these increasing droughts, but it is evident that <a>our actions were the ones that are having the most impact.</a>

                        </div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src={require('../../assets/imgs/kenya/drought.jpg')}/>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                        <div id="heading">who are the stakeholders?</div>

                        < div id = "paragraph" >Droughts affect everyone in the area, but long term droughts have <a>the greatest impact on poor families.</a> A middle class family has enough money to get through a drought, where food prices skyrocket. But a poor family does not. To further the effects on the poor families, their jobs are put at risk. Those who work on farms, tourist stops or at local markets are jobs less during this time. With prices of common items on the rise, <a>many are unable to afford much more than what they need.</a>
                        </div>
                        <div id="paragraph">
                        Someone whose entire income is dependent on water is a farmer. Farmers are not able to water their crops, putting them at a loss. Being unable to pay for their equipment, <a>many don’t make it out with any money left.</a> They are then forced to sell their land and move to a city where they can find a consistent job. <a>This is the phenomenon known as urbanization,</a> and as farmers move to cities the demand for food increases but the supply decreases. This then contributes to the already increasing prices, putting even middle class families in a tough spot.

                        </div>

                    </ScrollAnimation>

                    <div className="cause">

                        <div id="heading">social impacts</div>

                        <div id="paragraph">Droughts affect people in several ways. It is predicted that in 2 years, across the Horn of Africa <a>15 million people will not have access to safe drinking</a>(OXFAM, 2017). Access to clean drinking water is essential for all life, and sources of water are not enough during a drought. Without the presence of water, people must bring in enough water from elsewhere to survive. Mostly the women or children have to walk tens of kilometers in order to bring back just a few buckets of water. During this time children are not able to go to school and receive the education they need. 
                        </div>
                        <div id="paragraph">It is also predicted that in 2 years, <a>12.7 million people will face severe hunger in the  Horn of Africa</a>(OXFAM, 2017). Water is also needed for crops to grow. When not enough precipitation falls to naturally water crops, they must be watered by irrigation. Irrigation is possible only when there is enough water in nearby rivers, lakes, or streams. During a drought, <a>these water sources are diminished and may even dry up,</a> preventing crops from being irrigated and causing them to die off.</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src={require("./../../assets/imgs/kenya/social.jpg")}/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">economic impacts</div>
                        <div id="paragraph">Drought can cost people, businesses and governments money. These impacts may be local, and only affect those in the drought-stricken area, or they may be widespread and impact people living outside the drought affected area. In the agricultural industry, <a>lack of precipitation can damage or kill crops, and negatively impact farmers’ income.</a> One season with low growth, can be enough to ruin a farmer's income for multiple years. A low yield in one season, decreases the amount of money available in the next season. Forcing farmers to resort to cheap but environmentally costly methods of agriculture. 
                        </div>
                        <div id="paragraph">
                        Crop loss also impacts consumers through increased food prices and the economic impacts of drought can be felt in other areas and even countries. For example, the drought in California that began in 2012 <a>has impacted vegetable, fruit, and nut prices in Canada</a>(Alberta WaterPortal, 2014). Lastly droughts can also hurt the recreation and tourism industry. Businesses, such as water sport rental shops, may be financially impacted during a drought.


                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">environmental impacts</div>
                        <div id="paragraph">The environment is directly impacted by a drought. <a>Droughts can affect water sources, land, fish and wildlife and plant communities.</a> Environmental degradation is accelerated during periods of drought due to diminished wetland areas, <a>increased need of income influencing harmful activities,</a> such as deforestation, wood and charcoal burning. Along with a higher chance of wildfires fires. They also have a devastating impact on the food chain. <a>Inadequate water supply can result in reduced ability for soils to support crops.</a> Not being able to support crops creates a ripple effect in the ecosystem that endangers all fish, animals and plant life. Along with the decrease in water in lakes, where most animals go to cool off and drink.


                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">political impacts</div>
                        <div id="paragraph">The droughts in Kenya have put <a>politicians under pressure over the poor handling of the food crisis.</a> The droughts have been the forefront of politics, influencing elections and decisions of the political parties. Before the Election in 2017, the severe drought affecting Kenya, which <a>increased the cost of food and fuelled inflation,</a> became a key issue in the election campaign. The price of maize flour, known as unga increased by 31%, milk by 12% and sugar by 21%. These increases drove up inflation to 11.5%(Okiror, 2017). <a>The opposition used soaring food prices and the high cost of living to discredit the government.</a> Many blamed president Kenyatta for failing to plan, mitigate and respond to the effects of the drought. The government later responded by <a>introducing subsidies and tariff-free imports on staple foods like milled corn.</a>
                        </div>

                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">what solutions have been tried?</div>
                        <div id="paragraph">There is not much anyone can do to stop droughts. Many have tried to solve one aspectpect of droughts. For example the Government of Kenya <a>added regulations on food prices in times of droughts,</a> introduced subsidies and tariff-free imports on some staple crops. Due to the increase in droughts The President of Kenya declared the drought a national disaster and has called for international support.
                        </div>
                        <div id="paragraph">The United Nations agencies and their partners are helping the Kenyan Government respond to <a>food and water shortages that have hit several parts of the country</a> as a result of a prolonged dry spell, which has been particularly severe in areas inhabited by livestock keepers. Assistance includes <a>delivery of water, food aid and supplementary feeding for children.</a> UN efforts of support include dispatching 12,000 cartons of ready to use therapeutic foods for the severely-malnourished children(UN News, 2017). Although a difference is being made with the help of the UN, the issue is far from over. <a>The UN cannot sustainably keep up its food supply efforts and Kenya will have to find a better solution.</a>
                        </div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                            <img src="./imgs/kenya/.jpg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="cause">

                        <div id="heading">what needs to happen to solve the problem?
                        </div>
                        <div id="paragraph">In the short term the government needs to <a>step in and manage their resources.</a> The first step would be to figure out which communities have been most devastated by the droughts. Forcing stricter restrictions on non-essential water use is crucial to <a>having a large water reserve for droughts,</a> along with improving efficiency standards in buildings, making sure that all water is being put to good use. <a>Maintenance and repair programs on distribution infrastructure</a> to decrease the amount of leaks and disruptions in the water distribution process.

                        </div>

                        <div id="paragraph">For the long term innovative ideas need to be created in order to mitigate the effects of a drought. In the agricultural standpoint there is crop engineering. Although there has been backlash over the years from GMOs, in a high risk situation they might be the answer. <a>Food production is a crucial part of keeping the population alive.</a> However, droughts affect productivity and create food insecurity. Crop engineering can be used to <a>tweak the genetics of existing crops to help them increase their yield</a> and provide them with better resistance to drought. A research project from Realizing Increased Photosynthetic Efficiency(RIPE) has successfully improved corps in the way they use water, up to 25% more efficiently(PHYS.ORG). Although 25% may not seem like a lot, when it's come to agriculture, <a>it could mean hundreds of liters.</a></div>

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