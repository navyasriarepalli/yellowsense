import './index.css'
import {useHistory, withRouter} from 'react-router-dom'
//import Job from '../Job'
//import {BsFillStarFill} from 'react-icons/bs'

const JobItem=props=>{
    const {jobDetails}=props
    const {title,companyName,
        jobRole,
        jobCategory,
        salaryMax,
        salaryMin,
        openingsCount,
        jobHours,
        whatsappNo}=jobDetails
    const history = useHistory()
    const onClickJob = () => {
        const {jobDetails} = props
        const {id} = jobDetails
    
        history.push( `/jobs/${id}` )
        
    }
      
    return(
        <li className='main-list-cont' onClick={onClickJob}> 
            <p>Company Name:{companyName}</p>
            <h1>Job title:{title}</h1>
            <p>Company Name:{companyName}</p>
            <p>Job Role: {jobRole}</p>
            <p>Job Category: {jobCategory}</p>
            <p>No of Openings: {openingsCount}</p>
    
            <p>Job Type: {jobHours}</p>
            
            <p>Salary: {salaryMin} to {salaryMax}</p>
            <p>whatsapp No: {whatsappNo}</p>
            
        </li>
    )
}

export default withRouter(JobItem)