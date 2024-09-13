import { Component } from "react";
import Header from "../Header";
import './index.css'
//import New from '../NewPage'


class Job extends Component{
    state={ID:"",job:[],pm:[]}

    componentDidMount() {
        this.getAllJobs()
        
    }
    onSubmitSuccess = data => {

        const {ID}=this.state 

        
        
        console.log(ID)

        
        
        const updatedJobDetails = data.results.filter(each =>each.id==ID)
        
        

       

    
        this.setState({
          job: updatedJobDetails[0],
          pm:updatedJobDetails[0].primary_details
          
        })
    
       
    }

    getAllJobs = async () => {
        //this.setState({apiStatus: apiStatusConstants.inProgress})
        //const jwtToken = Cookies.get('jwt_token')
        const {match} = this.props
        const {params} = match
        const {id} = params
        

        this.setState({ID:id})
        const apiUrl = `https://testapi.getlokalapp.com/common/jobs`
        const options = {
            method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json()

        if (response.ok === true) {
            this.onSubmitSuccess(data)
            
        } else {
            console.log(false)
        }
        

        
    }

    


    
    render(){

        
        const {job}=this.state
        const {pm}=this.state 
        

        
        
        
        
        
        return(
            
            <div className="job-main-cont">
                <Header />
                <div className="job-main-cont-2">
                    <div className="job-mini-cont">
                        <h1>JOB TITLE : {job.title}</h1>
                        <p>Job Role: {job.job_role}</p>
                        
                        
                        <p>Qualification : {pm.Qualification}</p>
                        <p>No of Openings: {job.openings_count}</p>
                        <p>Salary : {pm.Salary}</p>
                        <p>Expericence: {pm.Experience}</p>
                        <p>Work Location: {pm.Place}</p>
                        <p>Job Category: {job.job_category}</p>
                        <p>Contact us through Whatsapp_No : {job.whatsapp_no}</p>

                    </div>
                </div>
                
                
                
            </div>
            

        )
    }
}

export default Job