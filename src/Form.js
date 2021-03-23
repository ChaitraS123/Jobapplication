import React, { useState } from 'react'
import validator from 'validator';

const Form = (props) => {
    const { formsubmit } = props
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [experience, setExperience] = useState('')
    const [job, setJob] = useState('')
    const [skills, setSkills] = useState('')
    const [formerrors, setErrors] = useState({})
    const errors = {}
    const jobs = ['Front-End Developer', 'Node.js Developer', 'MEAN Stack Developer', 'FULL Stack Developer']
    const handleChange = (e) => {

        const attr = e.target.name;
        if (attr === 'name') {
            setName(e.target.value)
        }
        else if (attr === 'email') {
            setEmail(e.target.value)
        }
        else if (attr === 'phone') {
            setPhone(e.target.value)
        }
        else if (attr === 'experience') {
            setExperience(e.target.value)
        }
        else if (attr === 'skills') {
            setSkills(e.target.value)
        }

    }
    const handleJobChange = (e) => {
        console.log(e.target.value)
        setJob(e.target.value)
    }
    const runValidations = () => {//name
        if (name.trim().length === 0) {
            errors.name = 'name cannot be empty'
        }

        if (!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
        if (phone.trim().length === 0) {
            errors.phone = 'number cannot be empty'
        }
        if (experience.trim().length === 0) {
            errors.experience = 'experience cannot be empty'
        }
        if (skills.trim().length === 0) {
            errors.skills = 'skills cannot be empty'
        }
        if (job.trim().length === 0) {
            errors.job = 'jobs cannot be empty'
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        runValidations()
        if (Object.keys(errors).length === 0) {
            setErrors({})
            const formData = {

                name: name,
                email: email,
                phone: phone,
                experience: experience,
                jobTitle: job,
                skills: skills

            }
            formsubmit(formData)
            console.log('form data', formData)
            setName('')
            setEmail('')
            setPhone('')
            setExperience('')
            setJob('')
            setSkills('')
        } else {

            setErrors(errors)
        }

    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Apply For the job</h2>
            <form onSubmit={handelSubmit}>
                <div className="form-group row mb-3">

                    <label className="col-sm-2 col-form-label"> Full Name</label>
                    <div className="col-sm-6">
                        <input type="text" value={name} placeholder="Enter your name" className="form-control" name="name" onChange={handleChange} /><br />
                        {formerrors.name ? <span style={{ color: 'red', marginTop: '2px', fontSize: '12px' }} >{formerrors.name}</span> : ''}
                    </div><br />

                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Email Address</label>
                    <div className="col-sm-6">
                        <input type="text" value={email} placeholder="Enter valid email address" className="form-control" name="email" onChange={handleChange} /><br />
                        {formerrors.email ? <span style={{ color: 'red', fontSize: '12px' }} >{formerrors.email}</span> : ''}
                    </div>

                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Contact Number</label>
                    <div className="col-sm-6">
                        <input type="text" value={phone} placeholder="Enter your contact number" className="form-control" name="phone" onChange={handleChange} /><br />
                        {formerrors.phone ? <div style={{ color: 'red', fontSize: '12px' }} >{formerrors.phone}</div> : ''}
                    </div>

                </div>


                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Apply for the job</label>
                    <div className="col-sm-6">
                        <select value={job} className="form-control" onChange={handleJobChange}>
                            <option value=''>--select--</option>
                            {jobs.map((el, i) => {
                                return <option key={i} value={el}>{el}</option>
                            })}
                        </select><br />

                    </div>
                </div>



                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Experience</label>
                    <div className="col-sm-6">
                        <input type="text" value={experience} placeholder="Experience in years" className="form-control" name="experience" onChange={handleChange} /><br />
                        {formerrors.experience ? <div style={{ color: 'red', fontSize: '12px' }} >{formerrors.experience}</div> : ''}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Skills</label>
                    <div className="col-sm-6">

                        <input type="text" value={skills} placeholder="skills" className="form-control" name="skills" onChange={handleChange} /><br />
                        {formerrors.skills ? <div style={{ color: 'red', fontSize: '12px' }} >{formerrors.skills}</div> : ''}
                    </div>
                </div>




                <input type="submit" className="btn btn-primary" value='send application' />

            </form>

        </div>

    )
}
export default Form;