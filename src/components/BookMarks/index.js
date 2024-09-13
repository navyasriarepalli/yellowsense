import BookMarkContext from "../../Context/BookMarkContext"
import JobItem from "../JobItem"
import Header from "../Header"

const MyBookMarks = () => {
    
    return (
      <>
        <Header/>
        <BookMarkContext.Consumer>
          {value => {
            const {BookMarkList} = value
            return (
              <div>
                <h1 >Bookmarked Jobs</h1>
                {BookMarkList.length === 0 ? (
                  <p>No Favourites</p>
                ) : (
                  <ul>
                    {BookMarkList.map(eachItem => (
                      <JobItem jobDetails={eachItem} key={eachItem.id} />
                    ))}
                  </ul>
                )}
              </div>
            )
          }}
        </BookMarkContext.Consumer>
        
      </>
    )
  }
  
  export default MyBookMarks