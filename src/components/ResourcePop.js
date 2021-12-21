import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { ImArrowDown } from "react-icons/im";
import * as modalStyles from './ResourcePop.module.css';


function ResourcePop() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog modal-fullscreen`}>
                <div className={`modal-content ${modalStyles.popBody}`}>
                    <div className="container-fluid container-fluid-sm container-fluid-md container-lg">
                        <div className={`modal-header ${modalStyles.popHeader}`}>
                            <div className={`${modalStyles.popInn} ${modalStyles.popInnHead}`}>
                                <div className={`${modalStyles.popHeadIn}`}>
                                    <div className={`${modalStyles.popTitle}`}>
                                        <h1 className="modal-title" id="exampleModalLabel">Modal title</h1>
                                    </div>
                                    <div className={`${modalStyles.downLink}`}>
                                        <a href="https://www.just.edu.jo/~mqais/CIS99/PDF/Ch.01_Introduction_%20to_computers.pdf" download="Introduction to Computers" target="_blank" rel="noreferrer">download material <ImArrowDown /></a>
                                    </div>
                                </div>
                            </div>
                            <div className={`text-center ${modalStyles.modalClose}`} data-bs-dismiss="modal" aria-label="Close"><IoCloseSharp /></div>
                        </div>
                        <div className={`modal-body ${modalStyles.popUpBOut}`}>
                            <div className={`${modalStyles.popInn} ${modalStyles.popInnB}`}>
                                { }
                            </div>
                            <div className={`${modalStyles.shareIcons}`}>
                                <div className={`${modalStyles.shareTop}`}>
                                    <h6>Share</h6>
                                </div>
                                <ul className={`${modalStyles.shareBtns}`}>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${modalStyles.popFooter}`}>
                            <div className={`${modalStyles.popInn}`}>
                                <div className={`${modalStyles.relatedResHead}`}>
                                    <h1>INFOGRAPHICS</h1>
                                    <a href="/">VIEW MORE INFOGRAPHICS</a>
                                </div>
                                <article className={`${modalStyles.relatedRes}`}>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcePop
