import React from 'react';
import Header from './Header';
import SessionDay from '../schedule/SessionDay';
import Partner from '../partners/Partner';
import Region from '../hubs/Region';
import sessions from '../schedule/sessions';
import partners from '../partners/partners';
import hubs from '../hubs/hubsResponse';
import store from '../redux/store';
import {connect} from 'react-redux';
import {NAV_CLICK} from '../redux/actionTypes';
import navClick from '../redux/actions/navClick';

const mapStateToProps = (state) => {
  console.log("IN App.Map state to props");
  console.log(state);
  return {
    view: state.view,
    hub: state.hub || 'all'
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavClick: (view) => {
      console.log("In App.mapDispatchTopProps.handleNavClick");
      store.dispatch(navClick(view))
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(event) {
    console.log("Link Has Been Clicked with value: " + event.target.innerHTML.toLowerCase());
    this.props.handleNavClick(event.target.innerHTML.toLowerCase());
  }

  render() {
    console.log("IN APP RENDER METHOD");
    let pageView = '';
    switch(this.props.view){
      case 'schedule':
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
        break;
      case 'partners':
        pageView = partners.map(partner => <Partner key={partner.id} partner={partner} />)
        break;
      case 'hubs':
        pageView = this.props.hub === "all" && hubs.map(region => <Region key={region.region} region={region}/>)
        break;
      default:
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
    };

    return (
      <div className="App">
  
        <Header view={this.props.view} navClick={this.handleNavClick}/>

        {pageView}
  
      </div>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
