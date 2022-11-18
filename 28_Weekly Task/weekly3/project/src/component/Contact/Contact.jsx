import React, { useEffect, useState } from "react";
import imageContact from "../../asset/img/image-contact.png";
import gambar1 from "../../asset/img/gambar1.png";
import gambar2 from "../../asset/img/gambar2.png";
import "./Contact.css"
import toast, { Toaster } from 'react-hot-toast';

const TextField = ({ label, name, value, handleChange }) => (
    <div className="d-flex flex-column mt-3">
        <label htmlFor={name} className="fs-5 mb-2 text-dark fw-semibold">{label}</label>
        <input type="text" className="form-control-lg form-control" onChange={(ev) => handleChange(name, ev.currentTarget.value)} name={name} id={name} required />
    </div>
)

const TextAreaField = ({ label, name, value, handleChange }) => (
    <div className="d-flex flex-column mt-3">
        <label htmlFor={name} className="fs-5 mb-2 text-dark fw-semibold">{label}</label>
        <textarea type="text" className="form-control-lg form-control" rows="3" onChange={(ev) => handleChange(name, ev.currentTarget.value)} name={name} id={name} required />
    </div>
)

const Contact = () => {

    const [itemData, setItemData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        help: "",
    });

    useEffect(() => {
        setItemData(itemData);
    }, [itemData])

    const handleChangeItem = (label, newValue) => {
        setItemData({
            ...itemData,
            [label]: newValue
        })
        // console.log(label,newValue);
    }

    const handleSubmit = () => {
        if (itemData.firstName === "" || itemData.lastName === "" || itemData.email === "" || itemData.help === "") {
            toast.error('Input gagal !');
        } else {
            // toast.success('Perhitungan patungan berhasil !');
            alert(
                'nama : ' + itemData.firstName + ' ' + itemData.lastName +
                '\nemail : ' + itemData.email +
                '\nhelp : ' + itemData.help)
            toast.success('Input data berhasil !');
            setItemData({
                firstName: "",
                lastName: "",
                email: "",
                help: "",
            });
        }
    }

    console.log(itemData);
    return (
        <div className="mt-5 pb-5" id="contact">
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
                    <form className="flex-fill">
                        <div className="d-flex flex-row">
                            <div className="w-50 me-5">
                                <TextField label="First Name" name="firstName" handleChange={handleChangeItem} />
                            </div>
                            <div className="w-50">
                                <TextField label="Last Name" name="lastName" handleChange={handleChangeItem} />
                            </div>
                        </div>
                        <TextField label="Email" name="email" handleChange={handleChangeItem} />
                        <TextAreaField label="What can we help you with ?" name="help" handleChange={handleChangeItem} />
                        <button onClick={handleSubmit} className="btn btn-primary btn-lg w-25 mt-4">Submit</button>
                    </form>
                </div>
            </div>
            <img src={gambar2} className="pe-5 position-absolute" style={{ right: '0' }} alt="" />
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    )
}

export default Contact;