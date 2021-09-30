import React, { useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Partners.css';

function Partners() {
    useEffect(() => {
        let items = document.querySelectorAll('.carousel .carousel-item')

        items.forEach((el) => {
            const minPerSlide = 4
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    }, [])

    return (
        <div className="container text-center my-3 partnersCont">
            <div className="row mx-auto my-auto justify-content-center partners">
                <h1 className="mt-5">Our  partners <span className="speHead">.</span></h1>
                <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/rutger.jpg" className="img-fluid" alt="Rutgers Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/srhr.jpg" className="img-fluid" alt="Srhr Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/ideo.jpg" className="img-fluid" alt="Ideo Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/rutger.jpg" className="img-fluid" alt="Rutgers Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/srhr.jpg" className="img-fluid" alt="Srhr Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="./imgs/ideo.jpg" className="img-fluid" alt="Ideo Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                        <FaAngleLeft className="myArrows" />
                    </a>
                    <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                        <FaAngleRight className="myArrows" />
                    </a>
                </div>
                <div className="btn btn-large my-5 doMore">Help us do more</div>
            </div>
        </div>
    )
}

export default Partners;
