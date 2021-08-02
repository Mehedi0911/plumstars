import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import TechniciansTable from './TechniciansTable';
import PanelHeader from '../PanelHeader/PanelHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const AddTechnician = () => {
    const [techImageURL, setTechImageURL] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const techData = {
            name: data.name,
            details: data.details,
            imgURL : techImageURL,
            dataAppointed: new Date().toDateString()
        }
        if(techImageURL!== null){
            fetch('https://arcane-reef-18482.herokuapp.com/addTechnicians',{
                method: 'POST',
                headers:{'content-type' : 'application/json'},
                body: JSON.stringify(techData)
            })
            .then(res =>{
                console.log('server side response', res);
            })
            e.target.reset();
            setTechImageURL(null);
        }
        console.log(data);
    }

    const handleImageUpload = (event) => {
        const imgData = new FormData()
        imgData.set('key', 'd5dd157c9b69b49e9027a5a5ad62a42d');
        imgData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(res => {
            setTechImageURL(res.data.data.url);
            console.log(res.data.data.url);
        
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <section className="container pt-5">
            <PanelHeader header={"Add Technician"}></PanelHeader>
            <div className="row">
                <div className="col-md-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" className="form-control mb-3" placeholder="Technician Name" {...register("name")} required />
                    <textarea name="details" class="form-control  mb-3" rows="3" placeholder="Details" {...register("details")} required></textarea>
                    {/* <input onChange={handleImageUpload} name="image" type="file" className="mb-3" required /> <br /> */}
                    <div class="upload-btn-wrapper">
                            <button className="upload-btn mb-3 mr-5"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Image</button>
                            <input onChange={handleImageUpload} onChange={handleImageUpload} type="file" name="image"  required/>
                    </div><br />
                    <input className="brand-btn-secondary" type="submit" value="Appoint" />
                </form>
                </div>
                <div className="col-md-8">
                    <TechniciansTable></TechniciansTable>
                </div>
            </div>
        </section>
    );
};

export default AddTechnician;