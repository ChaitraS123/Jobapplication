import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddApplication from './AddApplication'
import DashBoard from './DashBoard'

const App = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
      .then((response) => {
        console.log('response', response.data)
        const result = response.data.filter((el) => {
          return el.status === "applied"
        })
        setJobs(result)
      })

  }, [])

  const addjob = (job) => {
    setJobs([...jobs, job])
  }
  const editjob = (job) => {
    const res = jobs.map((el) => {
      if (el._id === job._id) {
        return { ...el, ...job }
      }
      else {
        return { ...el }
      }
    })
    setJobs(res)
  }

  return (
    <div>


      <AddApplication addjob={addjob} />
      <DashBoard jobs={jobs} editjob={editjob} />


    </div>)
}
export default App
