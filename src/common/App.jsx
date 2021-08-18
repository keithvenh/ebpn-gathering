import React from 'react';
import Header from './Header';
import SessionDay from '../schedule/SessionDay';
import Partner from '../partners/Partner';
import Region from '../hubs/Region';
import sessions from '../schedule/sessions';
import partners from '../partners/partners';
import hubs from '../hubs/hubsResponse';
import store from '../store';

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    handleNavClick: (view) => {
      dispatch()
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'loading'
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
        pageView = hubs.map(region => <Region key={region.region} region={region}/>)
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
