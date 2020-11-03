import React, {Component} from "react";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import ReactTooltip from "react-tooltip";

import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
import "../../assets/stylesheets/CountryPages/ToolTips.css"

class Brazil extends Component {

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
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown"><div id="title-brazil">Amazon Species Extinction</div></ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading">the problem</div>
                <div id="paragraph-jakarta">Models suggest that by the year 2050, temperatures in the Amazon will increase by 2–3°C. At the same time, a decrease in rainfall during dry months will lead to widespread drying. There are serious consequences to these changes. Projected increases of temperatures and decreased rainfall during already dry months could result in longer and perhaps more severe droughts, along with substantial changes in seasonality.
</div>          <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/brazil/problem.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                </ScrollAnimation>
   
                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">who caused the problem</div>

                    <div id="paragraph-jakarta">Over time, global climate change and more deforestation will likely lead to increased temperatures and changing rain patterns in the Amazon, which will undoubtedly affect the region’s forests, water availability, biodiversity, agriculture, and human health. Due to rapid changes in the climate thousands of species in the Amazon will be near extinct.

                    </div>

                    <div id="paragraph-jakarta">Human intervention is also a cause of this problem. Increased trade of already endangered species is putting the entire ecosystem at risk, along with over exploitation of the rain  forest and its resources. The tragedy of commons, is also at play. The Amazon has many individual users, acting independently according to their own self-interest. The Amazon is another sacred place that humans have turned into a source of income. Where profit is seen as a greater benefit than the health of the rain forest.

                    </div>
                    
                    <ScrollAnimation afterAnimatedIn={this.test} animateOnce animateIn="animate__fadeInUp">
                    <video id="my-video" ref="vidRef" muted="muted" loop>
                    <source src={require('../../assets/videos/amazon.webm')} type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <div className="play" >Deforestation in the Amazon</div>

                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">
                    <div id="heading">who are the stakeholders?</div>

                    <div id = "paragraph-jakarta" >The indigenous people whose homes are going to be lost are being directly impacted by Species Extinction, they rely heavily on these species for food and income. Activists involved in helping protect the land are fighting at the political level to create regulation to protect the forest from human intervention. Also the Government which relies on the Amazon for income is being forced to look elsewhere for more stable resources and farmers who sell resources found in the forest to the external markets. The resources found in Amazon are shipped world-wide, putting every external market at risk.

</div>



                    
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">social impacts</div>
                    <div id="paragraph-jakarta">The indigenous people living in the forest are losing their home. A population that has just started to increase is at the risk of losing their home. The drying of the rainforest will destroy cultures preserved for hundreds of years. With reduced forests, people are less able to benefit from the natural resources these ecosystems provide. This can lead to increased poverty and forced migrations.
The changing forest will impact lives worldwide. Many oils and midactions come from the Amazon, putting the entire global industry at risk. This will force them to utilize more synthetic materials in medications that do not have the same benefits as natural ones. </div>                   

<ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/brazil/stake.jpg')}/>
                        <figcaption></figcaption>
                    </ScrollAnimation>
                    </ScrollAnimation>


                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">economic impacts</div>
                    <div id="paragraph-jakarta">There is clear evidence that the Amazon is a money maker, contributing $8.2 billion to Brazil’s economy alone. Without it and its resources, Brazil is losing a good part of its GDP. Not only is the Amazon filled with resources, it is also self-sufficient, making it a stable source of income if properly taken care of. This figure does not mention the illegal trade of species that is worth about $23 billion annually(Lehmacher, 2016). There is no figure estimating species trade from the Amazon, as most trade is done underground without any traces. Although this trade is illegal, it is taken from the forest. 
</div>                   

                    
                </ScrollAnimation>

                <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">environmental impacts</div>
                    <div id="paragraph-jakarta">The Amazon is one of the most diverse areas of the world. 10% of the world's species live in the Amazon(Daly, 2019). The Amazon works like a chain, from smaller animals to bigger, from leaf eating animals to meat eating predators. This chain is crucial to the health of the amazon. Even if one species of animal, or plant, is lost due to the changing temperature, the entire Amazon will have to suffer. 
</div>
                    <div id="paragraph-jakarta">With decrease in rainfall, the rivers of the Amazon are put at risk. Researchers claim that one possible disastrous impact is a change in nutrient input into streams and rivers(World Wide Fund for Nature, 2006). This would change the chemistry of the rivers, putting stress on wildlife, and decreasing the population of fish.
</div>

                    <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/brazil/envir.png')}/>
                        <figcaption>longer dry seasons in the Amazon.</figcaption>
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what solutions have been tried?</div>
                    <div id="paragraph-jakarta">There is nothing we can do to stop Species Extinction from natural causes. But activists are putting focus on human factors that are adding to the effects of climate change. Focusing on human-based deforestrations and resource exploitation. The government of Brazil has put in laws to help protect the Amazon from human interference. Agreements like the Convention on International Trade in Endangered Species of Wild Fauna and Flora(CITES) are being used to govern species trade. CITES is currently protecting 37,000 species of animals and plants(CITES, 2015).
</div>
                    <div id="paragraph-jakarta">On the other hand the Paris Agreement is tackling climate change and temperature increase world wide. Attempting to slow down the effects of climate change in the entire world. Although this would be a great achievement, it will be at the cost of thousands of species. By the time everyone meets their emission goals we will have lost many important species.
</div>
                        <ScrollAnimation animateOnce animateIn="animate__fadeInUp">
                        <img src={require('../../assets/imgs/brazil/tried.png')}/>
                        <figcaption></figcaption>
                        
                    </ScrollAnimation>
                    </ScrollAnimation>

                    <ScrollAnimation className="cause" animateOnce animateIn="animate__fadeIn">

                    <div id="heading">what needs to happen to solve the problem?
                    </div>
                    <div id="paragraph-jakarta">In my opinion everyone is responsible for the species extinction in the Amazon. Even without direct human interference, indirect impact through climate change  will still eventually lead to the extinction of thousands of species. Besides focusing on the solutions for climate change, the Amazon needs to be protected from human intervention. Brazil must go full force in protecting the Amazon, calling on special forces to handle illegal usage of resources and governing trade.
                    </div>

                    <div id="paragraph-jakarta">They should also teach about sustainability in their schools, along with indeginous cultures that occupy the land. Teaching the new generation, will ensure sustainability is a concern moving forward. As the tragedy of the common became more frequent, Brazil must find a way to share the Amazon without an individual's greed. This can be done through Green Subsidies or of Taxes for using the resources of the amazon.
</div>

                </ScrollAnimation>

            </div>

        </div>
        );
    }
}

export default Brazil;