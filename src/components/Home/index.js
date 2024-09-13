import {Component} from 'react'
import JobItem from '../JobItem'
import Header from '../Header'
import Job from '../Job'
import Pagination from '../Pagination/paginationa'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
}
  

class Home extends Component{
    state={apiStatus: apiStatusConstants.initial,jobsList:[],primaryDetailsMainList:[],currentPage:1,JobsPerPage:2}
    componentDidMount() {
        this.getAllJobs()
    }

    onSubmitSuccess = data => {
        
          
        
        const updatedJobList = data.results.map(each => ({
            
            id: each.id,

        
            title:each.title,
            primaryDetails:each.primary_details,
            
            companyName:each.company_name,
            jobRole:each.job_role,
            jobCategory:each.job_category,
            salaryMax:each.salary_max,
            salaryMin:each.salary_min,
            openingsCount:each.openings_count,
            otherDetails:each.other_details,
            jobHours:each.job_hours,
            whatsappNo:each.whatsapp_no,
            content:each.content,
            
        }))
      

       
        
    
        this.setState({
          jobsList: updatedJobList,
          
          apiStatus: apiStatusConstants.success,
          
          searchInput: '',
        })
    
       
    }

    getAllJobs = async () => {
        this.setState({apiStatus: apiStatusConstants.inProgress})
        //const jwtToken = Cookies.get('jwt_token')
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
    
    renderJobList = () => {
        
        const {jobsList,JobsPerPage,currentPage} = this.state
        const newJoblist=jobsList
        const lastPostIndex=currentPage * JobsPerPage;
        const firstPostIndex =lastPostIndex - JobsPerPage;
        const currentPosts=newJoblist.slice(firstPostIndex,lastPostIndex)
        console.log(currentPage)
    
        return (
          <ul className="jobs-list-cont">
            
            {currentPosts.map(eachItem => {
                
                if(eachItem.id===undefined){
                    return ""

                }
                else{
                    return <JobItem jobDetails={eachItem} key={eachItem.id} />

                }
              
            })}
          </ul>
        )
    }

    renderJob=()=>{
        const {jobsList} = this.state
        console.log(jobsList)


        return(
            <Job job={jobsList}/>
        )



    }
    clicking = page=> {
        this.setState({currentPage:page})
        console.log(page)
    }
    render(){
        const {jobsList,JobsPerPage,currentPage} = this.state
        console.log(jobsList)

        

        
        return(
            <div>
                <Header />
                
                <div>{this.renderJobList()}</div>
                <div><Pagination totalJobs={jobsList.length}
                JobsPerPage={JobsPerPage} clicking={this.clicking}
    
                currentPage={currentPage}/></div>
                
                
            </div>
        )
    }
}

export default Home