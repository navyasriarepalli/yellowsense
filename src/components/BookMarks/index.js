import BookMarkContext from "../../Context/BookMarkContext"
import JobItem from "../JobItem"
import Header from "../Header"
import './index.css'

const MyBookMarks = () => {
    
    return (
      <div className="bookmarj-main">
        <Header/>
        <BookMarkContext.Consumer>
          {value => {
            const {BookMarkList} = value
            return (
              <div className='book-bg'>
                <h1 className="biik-head">Bookmarked Jobs</h1>
                {BookMarkList.length === 0 ? (
                  <div className="book-cont">
                  <p>No Bookmarkes added</p>
                  </div>
                ) : (
                  <div className="book-cont-2">
                    <ul>
                    {BookMarkList.map(eachItem => (
                      <JobItem jobDetails={eachItem} key={eachItem.id} />
                    ))}
                  </ul>
                  
                  </div>
                  
                )}
              </div>
            )
          }}
        </BookMarkContext.Consumer>
        
      </div>
    )
  }
  
  export default MyBookMarks