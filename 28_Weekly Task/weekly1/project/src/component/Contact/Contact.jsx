import React from "react";
import imageContact from "../../asset/img/image-contact.png";
import gambar1 from "../../asset/img/gambar1.png";
import gambar2 from "../../asset/img/gambar2.png";

const TextField = ({label, name, value, handleChange, wWidth}) => (
    <div className="d-flex flex-column mt-3">   
        <label htmlFor={name} className="fs-5 mb-2 text-dark fw-semibold">{label}</label>
        <input type="text" className="form-control-lg form-control" onChange={(ev)=>handleChange(ev.currentTarget.value)} name={name} id={name} />
    </div>
)

const TextAreaField = ({label, name, value, handleChange, wWidth}) => (
    <div className="d-flex flex-column mt-3">   
        <label htmlFor={name} className="fs-5 mb-2 text-dark fw-semibold">{label}</label>
        <textarea type="text" className="form-control-lg form-control" id="exampleFormControlTextarea1" rows="3" onChange={(ev)=>handleChange(ev.currentTarget.value)} name={name} id={name} />
    </div>
)

const Contact = () => {
    return(
        <div className="mt-5 mb-2">  
            <img src={gambar1} className="ps-5 position-absolute" alt="" />
            <div className="container pt-5">
                <div className="text-center">
                    <h4 className="text-primary">Contact</h4>
                    <h2 className="text-primary fw-bold">Contact us if you are interested in <span className="text-success">collaborating</span></h2>
                </div>
                <div className="d-flex mt-3 justify-content-center align-items-center">
                    <div className="d-flex">
                        <img src={imageContact} width="500" alt="" />
                    </div>
                    <div className="flex-fill">
                        <div className="d-flex flex-row">
                            <div className="w-50 me-5">
                                <TextField label="First Name"/>
                            </div>
                            <div className="w-50">
                                <TextField label="Last Name"/>
                            </div>
                        </div>
                        <TextField label="Email"/>
                        <TextAreaField label="What can we help you with ?"/>
                    </div>
                </div>
            </div>
            <img src={gambar2} className="pb-5 pe-5 position-absolute" style={{ right:'0', top:1200}} alt="" />
        </div>
    )
}

export default Contact;