import React from 'react';
import Nav from '../Nav/Nav';
import Pages from '../Pages/Pages';
import { PAGE } from '../constants';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE.HOME
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage = (pageName) => {
    this.setState({
      currentPage: pageName,
    })
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
      <header className="container">
        <div>
          <Nav
          currentPage={currentPage}
          changePage={this.changePage}
          />
          <Pages currentPage={currentPage} />
        </div>
      </header>
    </div>
    );
  }
};

export default App;
