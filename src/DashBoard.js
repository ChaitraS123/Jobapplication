import React, { useState } from 'react'
import FrontEnd from './Front'
import Node from './Node'
import Mean from './Mean'
import Fullstack from './Full'


const DashBoard = (props) => {
    const { jobs, editjob } = props
    const [frontend, setfrontend] = useState(false)
    const [node, setNode] = useState(false)
    const [mean, setMean] = useState(false)
    const [fullstack, setFullstack] = useState(false)

    const frontendjobs = jobs.filter((el) => {
        return el.jobTitle === "Front-End Developer"
    })

    const nodejsjobs = jobs.filter((el) => {
        return el.jobTitle === "Node.js Developer"
    })
    const meanjobs = jobs.filter((el) => {
        return el.jobTitle === "MEAN Stack Developer"
    })

    const fullstackjobs = jobs.filter((el) => {
        return el.jobTitle === "FULL Stack Developer"
    })
    console.log("Dash board jobs", frontendjobs)


    const frontendToggle = () => {
        setfrontend(true)
        setNode(false)
        setMean(false)
        setFullstack(false)
    }
    const nodetoggle = () => {
        setNode(true)
        setMean(false)
        setFullstack(false)
        setfrontend(false)
    }
    const meantoggle = () => {
        setNode(false)
        setMean(true)
        setFullstack(false)
        setfrontend(false)

    }
    const fullstacktoggle = () => {
        setNode(false)
        setMean(false)
        setFullstack(true)
        setfrontend(false)


    }


    return (
        <div>
            <h2>ADMIN DASHBOARD</h2>
            <button className="btn btn-outline-primary" onClick={frontendToggle}>Front End Developer</button>
            <button className="btn btn-outline-primary" onClick={nodetoggle}>Node js Developer</button>
            <button className="btn btn-outline-primary" onClick={meantoggle}>MEAN Stack Developer</button>
            <button className="btn btn-outline-primary" onClick={fullstacktoggle}>Full stack Developer</button>


            {frontend && <FrontEnd jobs={frontendjobs} editjob={editjob} />}
            {node && <Node jobs={nodejsjobs} editjob={editjob} />}
            {mean && <Mean jobs={meanjobs} editjob={editjob} />}
            {fullstack && <Fullstack jobs={fullstackjobs} editjob={editjob} />}



        </div>
    )
}
export default DashBoard