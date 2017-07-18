import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Bookshelf from './Bookshelf'

class BookLibrary extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <Header />
          <Bookshelf
            shelfName="Currently reading"
          />
          <Bookshelf
            shelfName="Want to read"
           />
          <Bookshelf
            shelfName="Read"
           />
          <div className="open-search">
            <Link to="/search" />
          </div>
        </div>
      </div>
    )
  }
}

export default BookLibrary
