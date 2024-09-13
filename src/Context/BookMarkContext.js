import React from 'react'

const BookMarkContext = React.createContext({
  BookMarkList: [],
  onToggleBookmark: () => {},
})

export default BookMarkContext