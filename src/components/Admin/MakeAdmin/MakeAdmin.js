import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import PanelHeader from '../PanelHeader/PanelHeader';
import AllAdmins from './AllAdmins';
const MakeAdmin = () => {
    const [adminData, setAdminData] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const adminData = {
                name: data.name,
                email:data.email,
                role:data.role
        }

        fetch('https://arcane-reef-18482.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(adminData)
        })
        .then(res=>{
            console.log(res);
        })
        e.target.reset();
        console.log(data);
    }
    return (
        <section className="container pt-5">
             <PanelHeader header={"Make Admin"}></PanelHeader>
            <div className="row">
                <div className="col-md-4 pt-3 mb-5">
                  <form  onSubmit={handleSubmit(onSubmit)}>
                  <input name="name" type="text" className="form-control mb-3" placeholder="Name" {...register("name")} required />
                    <input name="email" type="email" className="form-control mb-3" placeholder="email" {...register("email")} required />
                    <div class="form-group">
                    <label for="exampleFormControlSelect1">Admin Role</label>
                        <select class="form-control" name="role" {...register("role")}>
                            <option>Admin</option>
                            <option>Moderator</option>
                            <option>Editor</option>
                        </select>
                    </div>

                    <input className="brand-btn-secondary" type="submit" value="Make Admin"/>
                  </form>
                </div>
                <div className="col-md-8">
                   <AllAdmins></AllAdmins>

                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;