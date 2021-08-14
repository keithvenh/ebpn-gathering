import React from 'react';
import Header from './common/Header';
import Date from './schedule/Date';
import Partner from './partners/Partner';
import Hub from './hubs/Hub';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'schedule'
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(event) {
    this.setState({
      view: event.target.innerHTML.toLowerCase()
    })
  }

  render() {
    let pageView = '';
    switch(this.state.view){
      case 'schedule':
        pageView = <Date />
        break;
      case 'partners':
        pageView = <Partner />
        break;
      case 'hubs':
        pageView = <Hub />
        break;
      default:
        pageView = <Date />
    };

    return (
      <div className="App">
  
        <Header view={this.state.view} navClick={this.handleNavClick}/>

        {pageView}
  
      </div>
    );

  }
}

export default App;
