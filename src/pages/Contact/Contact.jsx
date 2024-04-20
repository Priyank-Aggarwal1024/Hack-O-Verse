import React, { useRef } from 'react';
import '../../styles/Contact.css'
import { useNavigate } from 'react-router-dom';
function Contact(props) {
    const contact = useRef()
    const submitHandler = (e) => {
        // e.preventDefault();
        const navigate = useNavigate();
        navigate("/")
    }
    // contact.current.scrollTo(0, 0)
    return (
        <>
            <section className="contact" id="contact" ref={contact}>
                <div className="container">
                    <div className="heading text-center">
                        <h2>Contact <span> Us </span></h2>
                        <p>
                            Reach out to us anytime and we'll happily answer your questions
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="title">
                                <h3>Contact detail</h3>
                                <p>For further queries please fill this form and send now.</p>
                            </div>
                            <div className="contact-third">
                                <div className="content" style={{ backgroundColor: "white" }}>
                                    <div className="info">
                                        <i className="fas fa-mobile-alt"></i>
                                        <h4 className="d-inline-block">
                                            PHONE :
                                            <br />
                                            <span>+1.555.555.5555</span>
                                        </h4>
                                    </div>
                                    <div className="info">
                                        <i className="far fa-envelope"></i>
                                        <h4 className="d-inline-block">
                                            EMAIL :
                                            <br />
                                            <span>support@wfl.com</span>
                                        </h4>
                                    </div>
                                    <div className="info">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h4 className="d-inline-block">
                                            ADDRESS :<br />
                                            <span
                                            ><p>
                                                    <span>19th KM Stone, </span> NH-09 GHAZIABAD(U.P)
                                                </p></span
                                            >
                                        </h4>
                                    </div>
                                </div>
                                <div className="">
                                    <form method="POST" action="https://formspree.io/f/xvoearqr" onSubmit={submitHandler}>
                                        <div className="row">
                                            <div className="w-full">
                                                <input
                                                    type="text"
                                                    className="form-control bg-slate-400 w-full"
                                                    placeholder="Name"
                                                    name="Username"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="email"
                                                    className="form-control bg-slate-400 w-full"
                                                    placeholder="Email"
                                                    name="Email"
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input
                                                    type="text"
                                                    className="form-control bg-slate-400 w-full"
                                                    placeholder="Subject"
                                                    name="Subject"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control bg-slate-400 w-full"
                                                rows="5"
                                                id="comment"
                                                placeholder="Message"
                                                name="Queries"
                                            ></textarea>
                                        </div>
                                        <button className="btn btn-block" type="submit">Send Now!</button>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;