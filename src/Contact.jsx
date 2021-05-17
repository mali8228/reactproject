import React, { useState } from 'react';

const Contact = () =>{
    const [data, setData] = useState({
        fullname : '',
        phone: '',
        email:'',
        msg: '',
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;

        setData((preVal)=>{
            return {
            ...preVal,
            [name] : value
        }
    })
        
    }

    function formSubmit(e){
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone number is ${data.phone}.My email is ${data.email}.`)
    }
        
    return <>

    <div className='my-5'>
        <h1 className='text-center'>Contact US</h1>
    </div>
    <div className='conatiner contact-div'>
        <div className='row'>
            <div className='col-md-5 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1" 
                name='fullname'
                value={data.fullname}
                onChange= {inputEvent}
                placeholder="Enter your name" 
                required/>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input 
                type="number"
                class="form-control"
                id="exampleFormControlInput1" 
                name='phone'
                value={data.phone}
                onChange= {inputEvent}
                placeholder="mobile number" 
                required/>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input 
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name='email'
                value={data.email}
                onChange= {inputEvent}
                placeholder="name@example.com" 
                required/>
                </div>

                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mesage</label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3" 
                name='msg'
                value={data.msg}
                onChange= {inputEvent}
                placeholder='msg'
                required></textarea>
                </div>

                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
}

export default Contact;