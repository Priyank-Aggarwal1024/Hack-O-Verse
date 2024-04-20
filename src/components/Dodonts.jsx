import React from 'react'
import './dot.css'
export default function Dodonts() {
    return (
        <>
            <div className="dodont">
                <div className="container">
                    <h1 className="eve " style={{ color: "blue" }}><center><b>DO's And DON'Ts</b></center></h1>
                </div>
                <br />
                <br />
                <br />
                <div className="timeline">
                    <div className="container1 left">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Do's</h2>
                            <p> Keep track of the Air Quality Index (AQI) in your area. Use reliable sources such as government websites or air quality monitoring apps.</p>
                        </div>
                    </div>
                    <div className="container1 right">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}> Dont's</h2>
                            <p>
                                Avoid Outdoor Exercise: Avoid outdoor activities that involve heavy exertion when pollution levels are high.</p>
                        </div>
                    </div>

                    <div className="container1 left">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>DO's</h2>
                            <p>Limit outdoor activities, especially during times when the air quality is unhealthy.</p>
                        </div>
                    </div>
                    <div className="container1 right">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Dont's</h2>
                            <p>

                                Don't Use Harmful Cleaning Products: Avoid using harsh chemicals or strong cleaning products that can release harmful fumes indoors.</p>
                        </div>
                    </div>

                    <div className="container1 left">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}> Do's</h2>
                            <p>Don't Contribute to Outdoor Pollution: Reduce your carbon footprint by conserving energy and reducing, reusing, and recycling materials..
                            </p>
                        </div>
                    </div>
                    <div className="container1 right">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Dont's</h2>
                            <p>

                                Don't Use Harmful Cleaning Products: Avoid using harsh chemicals or strong cleaning products that can release harmful fumes indoors.</p>
                        </div>
                    </div>
                    <div className="container1 left">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}> Do's</h2>
                            <p>Promote Awareness: Educate others about the importance of reducing air pollution and its impact on health and the environment.
                            </p>
                        </div>
                    </div>
                    <div className="container1 right">
                        <div className="content">
                            <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Dont's</h2>
                            <p>

                                Avoid Idling Your Vehicle: Turn off your engine if you're parked and waiting for more than a minute, as idling contributes to unnecessary emissions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}