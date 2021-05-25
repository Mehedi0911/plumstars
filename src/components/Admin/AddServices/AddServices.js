import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ServiceList from './ServiceList';
import PanelHeader from '../PanelHeader/PanelHeader';
const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data, e) => {
        data.date = new Date().toDateString();
        const serviceData = {
            title: data.title,
            price: data.price,
            description: data.description,
            imgURL: imageURL,
            uploadDate: data.date
        }

        //adding products to database....
        const url = 'https://arcane-reef-18482.herokuapp.com/addServices'

        if (imageURL !== null) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(serviceData)
            })
                .then(res => {
                    console.log("server side response", res);
                })
            e.target.reset();
            setImageURL(null);
        }

        else (alert('Image is not uploaded'))
        console.log(serviceData);

    };

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'd5dd157c9b69b49e9027a5a5ad62a42d');
        imageData.append('image', event.target.files[0]);
        console.log(event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.url);
                console.log('Image Uploaded', res.data.data.url);
            })
            .catch(err => {
                console.log(err.message);
            })
    }


    return (
        <section className="container pt-5">
           
            <div className="addServiceForm">
                <div>
                <h5 className="mb-3 brand-text">Add Service</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="title" type="text" className="form-control mb-3" placeholder="Product Name" {...register("title")} required />
                        <input name="price" type="text" className="form-control  mb-3" placeholder="Product Price" {...register("price")} required />
                        <textarea name="description" class="form-control  mb-3" rows="3" placeholder="Description" {...register("description")} required></textarea>
                        <input onChange={handleImageUpload} name="image" type="file" className="mb-3" required /> <br />
                        <input className="brand-btn-secondary" type="submit" value="ADD" />
                    </form>
                </div>
            
            </div>
        </section>
    );
};

export default AddServices;