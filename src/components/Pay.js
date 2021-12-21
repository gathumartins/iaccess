import React from 'react';
import { ImArrowRight } from 'react-icons/im';
import * as paystyles from './Pay.module.css'

function Pay() {
    return (
        <div className={`${paystyles.payCont}`}>
            <div className={`${paystyles.payTop}`}>
                <div className={paystyles.payHead}>
                    <h6>DONATE VIA MPESA</h6>
                    <div className={paystyles.selectCur}>
                        CURRENCY:
                        <div className={`dropdown ${paystyles.currencyList}`}>
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">KES
                            </button>
                            <ul className={`dropdown-menu ${paystyles.curDrop}`} aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="/">KES</a></li>
                                <li><a className="dropdown-item" href="/">USD</a></li>
                                <li><a className="dropdown-item" href="/">GBP</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form action="POST" className={paystyles.mpesaForm}>
                    <div className={`${paystyles.resourcesFilter}`}>
                        <label className={`${paystyles.filCont}`}>
                            <span className={`${paystyles.filterLabel}`}>100 KES</span>
                            <input type="radio" name="radio" />
                            <span className={`${paystyles.resFilter}`}></span>
                        </label>
                        <label className={`${paystyles.filCont}`}>
                            <span className={`${paystyles.filterLabel}`}>100 KES</span>
                            <input type="radio" name="radio" />
                            <span className={`${paystyles.resFilter}`}></span>
                        </label>
                        <label className={`${paystyles.filCont}`}>
                            <span className={`${paystyles.filterLabel}`}>500 KES</span>
                            <input type="radio" name="radio" />
                            <span className={`${paystyles.resFilter}`}></span>
                        </label>
                        <label className={`${paystyles.filCont}`}>
                            <span className={`${paystyles.filterLabel}`}>1000 KES</span>
                            <input type="radio" name="radio" />
                            <span className={`${paystyles.resFilter}`}></span>
                        </label>
                    </div>
                    <h3>OR</h3>
                    <label htmlFor="amount" className={`mb-4 ${paystyles.amount}`}>
                        <input type="number" name="amount" id="amount" className="form-control" min="50" required />
                    </label>
                    <div className={`mb-4 ${paystyles.names}`}>
                        <label htmlFor="firstName" className={paystyles.amount}>
                            <input type="text" name="firstName" id="firstName" className="form-control" />
                        </label>
                        <label htmlFor="lastName" className={paystyles.amount}>
                            <input type="text" name="lastName" id="lastName" className="form-control" />
                        </label>
                    </div>
                    <label htmlFor="amount" className={`mb-4 ${paystyles.amount}`}>
                        <input type="tel" name="phone" id="phone" className="form-control" required />
                    </label>
                    <label htmlFor="amount" className={`mb-4 ${paystyles.anonymCheck}`}>
                        <input type="checkbox" name="anonymity" id="anonymity" /> <span>Make donation anonymous</span>
                    </label>
                    <div className="d-grid">
                        <button className={`bnt ${paystyles.mpesaBtn}`} type="submit">DONATE VIA MPESA <ImArrowRight /></button>
                    </div>
                </form>
                <h3>OR</h3>
            </div>
            <div className={`${paystyles.payBtm}`}>
                <div className="d-grid">
                    <button className={paystyles.payPalBtn}>DONATE VIA PAYPAL <ImArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Pay;
