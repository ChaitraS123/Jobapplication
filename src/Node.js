import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';

const Node = (props) => {
    const { jobs, editjob } = props


    const viewDetails = (id) => {
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${id}`)
            .then((response) => {
                const result = response.data

                swal(`Name-${result.name}\n Email-${result.email}\n Phone-${result.phone}\n Skills-${result.skills}    `)

            })

    }
    const shortlist = (id) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, { status: 'shortlisted' })
            .then((response) => {
                editjob(response.data)

            })
    }
    const reject = (id) => {
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`, { status: 'rejected' })
            .then((response) => {
                editjob(response.data)

            })

    }
    return (
        <div>
            {jobs.length === 0 ? <h3>No jobs found</h3> :
                <div>
                    <h3>Node JS developers</h3>
                    <p>List of candidates applied for Node js job </p>
                    <table border="1" className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Technical Skills</th>
                                <th>Experience</th>
                                <th>Applied Date</th>
                                <th>View Details</th>
                                <th>Update Application Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((el) => {
                                return <tr key={el._id}>
                                    <td>{el.name}</td>
                                    <td>{el.skills}</td>
                                    <td>{el.experience}</td>
                                    <td>{el.createdAt}</td>
                                    <td><button className="btn btn-primary" onClick={() => { viewDetails(el._id) }}>view</button></td>

                                    <td>{el.status === "shortlisted" ? <button className="btn btn-success">shortlisted</button> :
                                        el.status === "rejected" ? <button className="btn btn-danger">rejected</button> :
                                            <div>
                                                <button className="btn btn-success" onClick={() => {
                                                    shortlist(el._id)
                                                }}>shortlist</button><button className="btn btn-danger" onClick={() => {
                                                    reject(el._id)
                                                }}>reject</button>
                                            </div>
                                    }</td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            }

        </div >
    )
}
export default Node