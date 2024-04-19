import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PricingCard from "../component/PricingCard";

export const Pricing = () => {
    const { store, actions } = useContext(Context);
    return <>
    
    <PricingCard />

    
    </>
};
{/* <div className="container text-center">
            <div className="instructions">
                <div className="hero">
                    <h1>The Skillswap Plans</h1>
                </div>
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-4">
                            <div className="card the-card">
                                <div className="cardback">
                                    <div className="pt-5 pb-5"><h1>Free memebers</h1></div>
                                    <div className="cardinfo">
                                    <p><i class="fa-solid fa-check"></i> Learn for free all you want</p>
                                    <p><i class="fa-solid fa-check"></i> Limited to 3 '1 on 1' sessions per each 1 on 1 session that the user teached</p>

                                    </div>
                                    <div>
                                    <button type="button" class="pagar">Create Free Account</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="cardback">
                                <div className="pt-5 pb-5">
                                    <h1>Monthly</h1>
                                </div>
                                <div className="cardinfo">
                                <p><i class="fa-solid fa-check"></i> All features of the free plan</p>
                                <p><i class="fa-solid fa-check"></i> No requirement to teach sessions to receive learning sessions</p>
                                </div>
                                <div>
                                <button type="button" class="pagar"><i class="fa-solid fa-dollar-sign"></i> 9.99 / Monthly</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="cardback">
                                <div className="pt-5 pb-5">
                                    <h1>Life time</h1>
                                </div>
                                <div className="cardinfo">
                                <p><i class="fa-solid fa-check"></i> All features of the monthly plan</p>
                                <p><i class="fa-solid fa-check"></i> Keep acces forever with only 1 payment at a discounted price</p>
                                </div>
                                <div>
                                <button type="button" class="pagar"><i class="fa-solid fa-dollar-sign"></i> 99.9-199 / One Time Only</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



        </div> */}