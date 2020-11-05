import React, {Component} from "react";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class China extends Component {

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

    render() {
        return (
            <div >

            <div id="outer">
                <div id="inner">
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-china">China's Melting Glaciers</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-jakarta">Glaciers all around  the world are melting.The global average surface temperature has increased by 0.3-0.6 degrees Celsius since the 19th century, the average increase in China within the same time period was 0.5-0.8 degrees Celsius. The rising temperatures in China have created many challenges for China and is most significant in the Himalayan Mountain region. Researches at the Center for Mountain Ecosystem Studies, concluded that the air temperature of the Tibetan Plateau is now increasing at the rate of 0.3 degrees Celsius every ten years, drastically faster than the global average(Lai, 2009).
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/china/problem.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-jakarta">The rapid increase in temperature has a direct impact on glaciers. Naturally, as the temperature increases the glaciers melt. The consequences of the 4 degree temperature rise can be catastrophic, triggering rapid melting of glaciers on a global scale. It is clear that climate change is the leading cause of increased temperatures and it is also clear that humans are the ones that are increasing the rate of climate change. As our population grows, so do our demands. Even though we understand the effects of fossil fuel usage, we simply do not have the means to produce one hundred percent of our event from renewables. Problems like this are hard to solve and in the meantime their effects are the leading cause of global temperature change, leading to China’s Melting Glaciers.

                    </div>
                    
                    
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-jakarta" >People who live close to the mountains are subject to rapid change in their surroundings. The increase in water, will create landisdes, and large scale funding. These people will be forced to migrate to other areas, or the larger cities. Economically, those who use the resource around the mountain are at risk. Farmers in rural areas are at risk of the fields being flooded and houses being destroyed(Desseto, 2019). As the melting of glaciers start to have effects on the cities, the government will be put into a tough spot, trying to find ways to limit flooding and destruction of property. This can set them back billions, trying to retrofit structures to withstand the changing environment.

</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/china/stake.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>



                    
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">social impacts</div>
                    <div id="paragraph-jakarta">The Himalayan glaciers are crucial to many countries, they feed ten of the world's most important river systems, including the Ganges, Indus, Yellow, Mekong and Irrawaddy, and directly or indirectly supply billions of people with food, energy, clean air and incomes(McMarth). Researchers are concerned that the melting of these glaciers may not just hurt those who live in the mountain ranges but also the 1.65 billion people living down the rivers. All people living nears the major rivers could see increased flooding and destruction of crops. As the waters in these rivers rise, they also become more violent, destroying major bridges and putting those who cross, at a risk.
</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/china/social.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                    </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-jakarta">Glaciers melting in the Himalayas could lead to the overflow of 200 glacial lakes and produce large-scale flooding and mudslides in mountainous areas. These mudslides destroy roads, high ways and make travel dangerous. In 2004 a mudslide destroyed major high ways and bridges. Although there is no figure on the amount of money spent to fix, we can estimate that it would be in the millions. As these landslides became more common, so did the expense to repair them. The rapid melting of glaciers is also a benefit to the economy.The melting ice can be used to generate hydroelectric power. The increase of water in the river creates faster flow of water and therefore creates more energy overall(Dosseto, 2019). This energy does not harm the environment but it is a small benefit in the larger problem.
</div>                   

                    
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-jakarta">The melting glaciers help mitigate the effects of a drought. As droughts become more harsh, the glaciers melt and sustain the rivers. It is unlikely that this can go on forever, as the global temperature increases and droughts run longer, there will be no ice left and therefore no water left. The aquatic ecosystems that go for hundreds of kilometers through the rivers, will dry out. For months at a time, lakes and rivers along the Himalayan path will be dry, this creates a large shock in the ecosystem, even though wildlife down the river will have water, they will have to adapt to lower fish population and nutrients.
</div>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-jakarta">There is not much anyone can do to stop the melting of glaciers, like other natural disasters there are ways to mitigate the damage. The National Meteorological Administration, closely observes all glaciers in the Himalayan Mountains. This includes, taking samples of ice to understand the composition and depth of the ice to predict future rates of melting ice. This is not a solution for the problem, but rather a way to understand the problem and look for solutions.
</div>
                    <div id="paragraph-jakarta">Most issues of Climate Change rely on the temperature of the earth. The Paris Agreement is one of the most important agreements created to help with this. All nations being affected by the Melting Glaciers have signed the Paris Agreement, this includes China, India and Pakistan. To decrease their emissions China has an emission trading scheme (ETS), which can be compared to the Carbon Tax. It is essentially a carbon market where emitters can buy and sell emission credits. By putting a price on emissions, China is able to decrease them and charge those who abuse them.
</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/china/tried.jpg')}/>
                        <figcaption></figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-jakarta">No matter how much we try, the Glaciers are going to melt. What we need to do is slow the rate at which they melt. Although China is working hard to cut its carbon emissions, in part to meet Paris Agreement targets. There is more that can be done. China needs to enforce Green Energy, by promoting electric cars and create subsidies to those who use them. Although Carbon Emissions need to be decreased everywhere, they especially need to be decreased around ice masses. The emissions emitted can be pushed by wind and travel to glaciers. This creates a black coat on top of them, further increasing the rate of melting. Another approach would be to create dams on the mountains. By capturing all the water being released by the melt, it can be frozen next season. This would not damage any ecosystem but would cost billions on these massive mountains. The main 
</div>
<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/china/solution.jpg')}/>
                        <figcaption>Redesigned by Pavitar Saini, 2020. Credit: The Guardian. Source: The Hindu Kush Himalaya Assessment</figcaption>
                        
                    </ScrollAnimation>


                </ScrollAnimation>

            </div>

        </div>
        );
    }
}

export default China;