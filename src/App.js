import React from 'react';
import Header from './common/Header';
import SessionDay from './schedule/SessionDay';
import Partner from './partners/Partner';
import Hub from './hubs/Hub';

const sessionDays = [
  {
    date: '8/31/2021',
    display: 'Tuesday, 31 August'
  },
  {
    date: '9/1/2021',
    display: 'Wednesday, 1 September'
  },
  {
    date: '9/2/2021',
    display: 'Thursday, 2 September'
  },
  {
    date: '9/3/2021',
    display: 'Friday, 3 September'
  },
  {
    date: '8/14/2021',
    display: 'Saturday, 14 August'
  }
]

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
        pageView = sessionDays.map(day => <SessionDay key={day.date} date={day.date} display={day.display} />)
        break;
      case 'partners':
        pageView = <Partner />
        break;
      case 'hubs':
        pageView = <Hub />
        break;
      default:
        pageView = <SessionDay />
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
