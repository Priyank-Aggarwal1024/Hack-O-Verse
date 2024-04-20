import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col col-md-4">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col col-md-4">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contributions</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Our team</a></li>

                            </ul>
                        </div>

                        <div class="footer-col col-md-4">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}