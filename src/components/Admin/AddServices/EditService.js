import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
const EditService = ({ serviceToEdit, setCanEdit }) => {
    const [imageURL, setImageURL] = useState(null);
    const [editedServiceData, setEditedServiceData] = useState({
        title: serviceToEdit.title,
        price: serviceToEdit.price,
        description: serviceToEdit.description,
        imgURL: serviceToEdit.imgURL
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //    console.log(editedServiceData);
        setCanEdit(false)
        fetch(`https://arcane-reef-18482.herokuapp.com/updateService/${serviceToEdit._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(editedServiceData)
        })
            .then(res => res.json())
            .then(result => {
                // console.log('Updated Successfully');
            })
    }

 


    const handleBlur = (e) => {

        if (e.target.name === 'title') {
            const newServiceData = { ...editedServiceData };
            newServiceData.title = e.target.value;
            setEditedServiceData(newServiceData)
        }
        if (e.target.name === 'price') {
            const newServiceData = { ...editedServiceData };
            newServiceData.price = e.target.value;
            setEditedServiceData(newServiceData)

        }
        if (e.target.name === 'description') {
            const newServiceData = { ...editedServiceData };
            newServiceData.description = e.target.value;
            setEditedServiceData(newServiceData)

        }

    }



    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'd5dd157c9b69b49e9027a5a5ad62a42d');
        imageData.append('image', event.target.files[0]);
        // console.log(event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                const newServiceData = { ...editedServiceData };
                newServiceData.imgURL = res.data.data.url;
                setEditedServiceData(newServiceData)
                setImageURL(res.data.data.url);
                // console.log('Image Uploaded', res.data.data.url);
            })
            .catch(err => {
                console.log(err.message);
            })


    }

    return (
        <div className="addServiceForm m-auto w-75">
            <div>
                <h5 className="mb-3 brand-text">Edit Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <input onBlur={handleBlur} Value={serviceToEdit.title} name="title" type="text" className="form-control  mb-3 mr-3" placeholder="Product Price" required />
                        <input onBlur={handleBlur} Value={serviceToEdit.price} name="price" type="text" className="form-control  mb-3" placeholder="Product Price" required />
                    </div>
                    <div className="">
                        <textarea onBlur={handleBlur} defaultValue={serviceToEdit.description} name="description" class="form-control mb-3 mr-5" rows="7" placeholder="Description" required></textarea>
                        <div class="upload-btn-wrapper">
                            <button className="upload-btn mb-3 mr-5"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Image</button>
                            <input onChange={handleImageUpload} type="file" name="image"/>
                        </div><br />
                        {/* <input onChange={handleImageUpload} style={{ height: "30px" }} name="image" type="file" className="mb-3 bg-dark" /> <br /> */}
                    </div>
                    <input className="brand-btn-secondary" type="submit" value="Update" />
                </form>
            </div>

        </div>
    );
};

export default EditService;