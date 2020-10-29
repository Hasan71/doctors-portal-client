import React from 'react';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import Flouride from '../../../images/flouride.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {

    const serviceData = [
        {
            name: 'Flouride Treatment',
            img: Flouride
        },
        {
            name: 'Cavity Filling',
            img: Cavity
        },
        {
            name: 'Teeth Whitening',
            img: Whitening
        }
    ]

    return (
        <section className="services-container mt-5">
                <div className="text-center" >
                    <h1 style={{color:'#1CC7C1', fontSize:'20px'}}>OUR SERVICES</h1>
                    <h2 style={{color:'#3A4256'}}>Services We Provide</h2>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                        }
                    </div>
                </div>
        </section>
        
        
    );
};

export default Services;