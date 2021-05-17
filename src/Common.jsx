import React from 'react';
import web1 from './images/image1.png'
import web2 from './images/image2.png'
import {NavLink} from 'react-router-dom';

const Common = (props) =>{
    return <>
    <section id='header' className=''>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10 mx-auto '>
                    <div className='row vh-90  d-flex align-items-center justify-content-center'>
                    <div className='col-md-6 pt-lg-0 order-lg-1  d-flex flex-column '>
                        <h1 className='mt-3'>
                            {props.name} <br/> <strong className='color color-change'>{props.text}</strong>
                        </h1>
                        <p className='mt-3'>
                             We are the team talented developer making websites
                        </p>
                        <div className='mt-3'>
                            <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 pt-2 pl-5 order-1 order-lg-2 header-img  d-flex justify-content-center text-wrap'>
                    <img src={web1} className='img-fluid animated' alt='Common img1'/>
                    <img src={web2} className='img-fluid animated' alt='Common img2'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Common;