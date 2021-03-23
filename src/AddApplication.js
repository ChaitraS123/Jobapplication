import React from 'react'
import axios from 'axios'
import Form from './Form'


const AddApplication = (props) => {
    const { addjob } = props

    const formsubmit = (data) => {
        axios.post("http://dct-application-form.herokuapp.com/users/application-form", data)
            .then((response) => {
                const result = response.data
                addjob(result)
            })
    }
    return (<div>
        <Form formsubmit={formsubmit} />

    </div>)
}
export default AddApplication