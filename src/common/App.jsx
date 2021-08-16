import React from 'react';
import Header from './Header';
import SessionDay from '../schedule/SessionDay';
import Partner from '../partners/Partner';
import Hub from '../hubs/Hub';
import sessions from '../schedule/sessions';
import partners from '../partners/partners';



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
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
        break;
      case 'partners':
        pageView = partners.map(partner => <Partner key={partner.id} partner={partner} />)
        break;
      case 'hubs':
        pageView = <Hub />
        break;
      default:
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
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
