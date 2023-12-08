import React from 'react';

function About() {
    return (
        <div className="about-container">
            <h2>About Tarifa Travel</h2>
            <div>
                <img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/phev20oen3tmj15cwqzk" alt="" />
            </div>
            <p>
                Welcome to Tarifa Travel, your go-to source for all things related to
                exploring Tarifa, Spain. Whether you're a seasoned traveler or a first-time
                visitor, our goal is to provide you with valuable information to make your
                Tarifa experience memorable.
            </p>
            <p>
                At Tarifa Travel, we believe in the power of travel to inspire and connect
                people. Our team of passionate travelers is dedicated to sharing insights,
                tips, and recommendations to help you make the most of your time in Tarifa.
            </p>

            <div className="accordion">
                <div className="accordion-item">
                    <input type="checkbox" id="about-faq1" className="accordion-item-checkbox" />
                    <label htmlFor="about-faq1" className="accordion-item-label">
                        What are the must-visit beaches in Tarifa?
                    </label>
                    <div className="accordion-item-content">
                        <p>
                            Tarifa boasts some of the most beautiful beaches in Spain. Don't miss
                            Playa de los Lances and Playa de Valdevaqueros for their pristine sands
                            and ideal conditions for water sports.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <input type="checkbox" id="about-faq2" className="accordion-item-checkbox" />
                    <label htmlFor="about-faq2" className="accordion-item-label">
                        What water sports activities are popular in Tarifa?
                    </label>
                    <div className="accordion-item-content">
                        <p>
                            Tarifa is a paradise for water sports enthusiasts. Kiteboarding and
                            windsurfing are particularly popular, thanks to the strong and consistent
                            winds that grace the region.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <input type="checkbox" id="about-faq3" className="accordion-item-checkbox" />
                    <label htmlFor="about-faq3" className="accordion-item-label">
                        Can you recommend local restaurants in Tarifa?
                    </label>
                    <div className="accordion-item-content">
                        <p>
                            Absolutely! Tarifa offers a variety of dining options. Try Casa Paco for
                            authentic Spanish cuisine or dine with a view at the beachfront
                            restaurants along the Paseo de la Alameda.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
