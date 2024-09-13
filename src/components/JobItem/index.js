import './index.css'
import {useHistory, withRouter} from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import BookMarkContext from '../../Context/BookMarkContext';


const JobItem=props=>{
    const {jobDetails}=props
    const {title,companyName,id,
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
        <BookMarkContext.Consumer>
            {value => {
                const {onToggleBookmark, BookMarkList} = value
                const isChecked = BookMarkList.find(eachItem => eachItem.id === id)

                const onChangeBookmark = () => {
                    onToggleBookmark(jobDetails)
                    
                }
            
                return(
                    <li className='main-list-cont' > 
                        <div onClick={onChangeBookmark}>
                        
                        {isChecked ?  (<FaBookmark />):(<FaRegBookmark />)}</div>
        
                    
                        <p>Company Name:{companyName}</p>
                        <h1>Job title:{title}</h1>
                        <p>Company Name:{companyName}</p>
                        <p>Job Role: {jobRole}</p>
                        <p>Job Category: {jobCategory}</p>
                        <p>No of Openings: {openingsCount}</p>
                
                        <p>Job Type: {jobHours}</p>
                        
                        <p>Salary: {salaryMin} to {salaryMax}</p>
                        <p>whatsapp No: {whatsappNo}</p>
                        <button type="btn" className='btn-item' onClick={onClickJob}>View More</button>
                        
                        
                    </li>
                )
            }}
        </BookMarkContext.Consumer>
    )
}

export default withRouter(JobItem)