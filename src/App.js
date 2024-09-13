import { Component } from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Job from './components/Job';
import MyBookMarks from './components/BookMarks';
import BookMarkContext from './Context/BookMarkContext';


class App extends Component {
  state = {BookMarkList: []}

  onToggleBookmark = jobDetails => {
    const {BookMarkList} = this.state
    const isAlreadyExist = BookMarkList.some(
      eachItem => eachItem.id === jobDetails.id,
    )

    if (isAlreadyExist === true) {
      this.setState(prevState => ({
        BookMarkList: prevState.BookMarkList.filter(
          eachBook => eachBook.id !== jobDetails.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        BookMarkList: [...prevState.BookMarkList, jobDetails],
      }))
    }
  }

  render() {
    const {BookMarkList} = this.state

    return (
      <BookMarkContext.Provider
        value={{
          BookMarkList,
          onToggleBookmark: this.onToggleBookmark,
        }}
      >
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/jobs/:id" component={Job} />
          <Route exact path="/bookmark" component={MyBookMarks} />
          
        </Switch>
        </BrowserRouter>
      </BookMarkContext.Provider>
    )
  }
}

export default App
