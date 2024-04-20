import pic1 from '../assets/smog.png'
import pic3 from '../assets/cough.jpeg'
import pic4 from '../assets/mortal.jpg'
import pic5 from '../assets/change.jpeg'
import pic6 from '../assets/dam.jpeg'
import pic7 from '../assets/acid.jpeg'
import '../Efects.css'


function Effect() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <center>
                        <h1 style={{ color: "blue", fontSize: "40px" }}><b>Bad Effects of Poor AQI </b></h1>
                    </center>
                </div>
            </div>
            <div className='nod'>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <p ><center>
                            Poor Air Quality Index (AQI) poses a significant threat to both human health and the environment. High levels of air pollution are linked to a range of respiratory and cardiovascular problems, including asthma exacerbation and increased risk of heart attacks and strokes. Moreover, bad AQI reduces visibility, creating haze or smog that impairs vision and poses risks for transportation safety. Environmental damage is also a concern, as pollutants harm ecosystems, reduce biodiversity, and contribute to climate change. The economic costs of poor AQI are substantial, including healthcare expenses, decreased productivity, and damage to crops and infrastructure. Addressing air quality issues requires urgent action to reduce emissions from various sources, promote cleaner energy alternatives, and implement policies to safeguard public health and the environment.</center></p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4 info-card">
                        <center> <div className="card1">
                            <img src={pic1} />
                            <div className="info">
                                <h1>Loss in visibility </h1>
                                <p>
                                    oss of visibility due to poor air quality is a common phenomenon, especially in areas with high levels of air pollution. Here's how bad air quality can lead to reduced visibility
                                </p>

                            </div>
                        </div></center>
                    </div>

                    <div className="col-md-4 info-card">
                        <center><div className="card1">
                            <img src={pic3} />
                            <div className="info">
                                <h1>Health Issues</h1>
                                <p> Poor air quality can lead to a variety of health problems, ranging from mild irritation to severe respiratory and cardiovascular issues. Common health effects include:
                                </p>

                            </div>
                        </div>
                        </center>
                    </div>
                    <div className="col-md-4 info-card">
                        <center><div className="card1">
                            <img src={pic4} />
                            <div className="info">
                                <h1>Mortality:</h1>
                                <p>

                                </p>High levels of air pollution, particularly in densely populated urban areas, can contribute to premature mortality. This is often due to the exacerbation of respiratory and cardiovascular conditions, as well as increased susceptibility to infections.

                            </div>
                        </div>
                        </center>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <center>
                    </center>
                </div>
            </div>
            <div className='nod'>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <p ><center>
                            Poor Air Quality Index (AQI) poses a significant threat to both human health and the environment. High levels of air pollution are linked to a range of respiratory and cardiovascular problems, including asthma exacerbation and increased risk of heart attacks and strokes. Moreover, bad AQI reduces visibility, creating haze or smog that impairs vision and poses risks for transportation safety. Environmental damage is also a concern, as pollutants harm ecosystems, reduce biodiversity, and contribute to climate change. The economic costs of poor AQI are substantial, including healthcare expenses, decreased productivity, and damage to crops and infrastructure. Addressing air quality issues requires urgent action to reduce emissions from various sources, promote cleaner energy alternatives, and implement policies to safeguard public health and the environment.</center></p>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4 info-card">
                        <center> <div className="card1">
                            <img src={pic5} />
                            <div className="info">
                                <h1>Climate Change  </h1>
                                <p>
                                    These changes are primarily driven by human activities, such as burning fossil fuels, deforestation, and industrial processes, which release greenhouse gases like carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O) into the atmosphere.</p>

                            </div>
                        </div></center>
                    </div>

                    <div className="col-md-4 info-card">
                        <center><div className="card1">
                            <img src={pic6} />
                            <div className="info">
                                <h1>Damage to Infrastructure </h1>
                                <p> Air quality index (AQI) measures the quality of air in a specific location and provides information about how polluted or clean the air is. Poor air quality, often indicated by a high AQI, can indeed cause damage to infrastructure
                                </p>

                            </div>
                        </div>
                        </center>
                    </div>
                    <div className="col-md-4 info-card">
                        <center><div className="card1">
                            <img src={pic7} />
                            <div className="info">
                                <h1>Acid Rain</h1>
                                <p>

                                </p>Acid rain is a type of environmental pollution that occurs when sulfur dioxide (SO2) and nitrogen oxides (NOx), primarily emitted from industrial activities and vehicle exhaust, react with water vapor, oxygen, and other chemicals in the atmosphere to form sulfuric acid (H2SO4) and nitric acid (HNO3)

                            </div>
                        </div>
                        </center>
                    </div>

                </div>

            </div>

        </>
    );
}
export default Effect