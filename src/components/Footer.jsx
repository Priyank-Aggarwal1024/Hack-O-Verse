import React, { useEffect } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaWind } from 'react-icons/fa'
export default function Footer({ main }) {
    useEffect(() => {
        main.current.scrollTo(0, 0)
    })

    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <div className="footer-logo flex justify-center">
                        <FaWind size={32} className="text-blue-800" />
                    </div>

                    <p className="footer-links">
                        <Link to="/dashboard"> Dashboard </Link>

                        <Link to="/search"> Search </Link>

                        <Link to="/faq"> FAQ </Link>

                        <Link to="/info"> Information </Link>

                        <Link to="/dodonts"> Do's & Dont's </Link>
                        <Link to="/contact"> Contact us </Link>
                        <Link to="/search"> Login </Link>
                    </p>

                    <p className="footer-company-name">Waste Facility Locator © 2024</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <p><span>19th KM Stone, </span> NH-09 GHAZIABAD(U.P)</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><Link to="/" href="mailto:support@company.com">support@aqi.com</Link></p>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Our Company developed a AQI Dashboard. Which shows Analytical data also.
                    </p>

                    <div className="footer-icons">
                        <Link to="/" ><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="/" ><i className="fa-brands fa-twitter"></i></Link>
                        <Link to="/" ><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to="/" ><i className="fa-brands fa-github"></i></Link>
                    </div>
                </div>
            </footer>



        </>
    )
}