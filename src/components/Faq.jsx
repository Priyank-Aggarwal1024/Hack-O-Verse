import React from 'react';
import '../Faq.css'
function Faq(props) {
    return (
        <>
            <div className="faq-heading text-blue-900 fw-bolder text-center">
                Frequently Asked Questions
            </div>
            <div className="faq">
                <div className="accordian">
                    <div className="content-box">
                        <label for="ques-1" className="label">
                            <span> What is the current Air Quality Index (AQI) in New Delhi ?</span>
                            <input type="checkbox" name="ques-1" id="ques-1" />
                            <div className="content">
                                <p>The real-time air quality in New Delhi is 283 (UNHEALTHY) AQI now. This was last updated 5 minutes ago </p>
                            </div>
                        </label>

                    </div>
                    <div className="content-box">
                        <label for="ques-2" className="label">
                            <span> What is the current concentration of PM2.5 in New Delhi?</span>
                            <input type="checkbox" name="ques-2" id="ques-2" />
                            <div className="content" >
                                <p>The current concentration of PM2.5 in New Delhi is 117 (µg/m³). The World Health Organisation (WHO) recommends 15 µg/m³ as the threshold concentration of PM2.5 for 24 hrs mean. Currently, the concentration is 4.68 times the recommended limit.</p>
                            </div>
                        </label>

                    </div>
                    <div className="content-box">
                        <label for="ques-3" className="label">
                            <span> What season is the worst air quality in New Delhi?</span>
                            <input type="checkbox" name="ques-3" id="ques-3" />
                            <div className="content">
                                <p>Generally, the air quality at New Delhi starts deteriorating in late October. The winters are the worst-hit season in terms of air pollution.</p>
                            </div>
                        </label>

                    </div>
                    <div className="content-box">
                        <label for="ques-4" className="label">
                            <span>When was the best air quality at New Delhi in the last 24 hrs?</span>
                            <input type="checkbox" name="ques-4" id="ques-4" />
                            <div className="content">
                                <p>The best air quality index was 98 on 2024-04-14.</p>
                            </div>
                        </label>

                    </div>
                    <div className="content-box">
                        <label for="ques-5" className="label">
                            <span>Should I take care before going outdoor when New Delhi AQI is very high?</span>
                            <input type="checkbox" name="ques-4" id="ques-4" />
                            <div className="content">
                                <p>You should wear a good N95 mask when you go outdoor in New Delhi until the AQI is improving upto moderate range.</p>
                            </div>
                        </label>

                    </div>
                    <div className="content-box">
                        <label for="ques-6" className="label">
                            <span>Primary causes of outdoor and indoor air pollution in New Delhi?</span>
                            <input type="checkbox" name="ques-4" id="ques-4" />
                            <div className="content">
                                <p>The primary causes of outdoor air pollution are solid, liquid particles called aerosols & gase from vehicles emissions, construction activities, factories, burning stubble & fossil fuels and wildfire, etc.</p>
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;