import React from 'react';
import Header from './Header';
import SessionDay from '../schedule/SessionDay';
import Partner from '../partners/Partner';
import Region from '../hubs/Region';
import Hub from '../hubs/Hub';
import sessions from '../schedule/sessions';
import partners from '../partners/partners';
import hubs from '../hubs/hubsResponse';
import store from '../redux/store';
import {connect} from 'react-redux';
import navClick from '../redux/actions/navClick';
import hubClick from '../redux/actions/hubClick';
import Loading from './Loading';

const mapStateToProps = (state) => {
  return {
    view: state.view,
    hub: state.hub
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavClick: (view) => {
      store.dispatch(navClick(view))
      store.dispatch(hubClick('all'))
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(event) {
    this.props.handleNavClick(event.target.innerHTML.toLowerCase());
  }

  render() {
    console.log(this.props.view);
    let pageView = '';
    switch(this.props.view){
      case 'loading': 
        pageView = <Loading />
        break;
      case 'schedule':
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
        break;
      case 'partners':
        pageView = partners.map(partner => <Partner key={partner.id} partner={partner} />)
        break;
      case 'hubs':
        pageView = hubs.map(region => <Region key={region.region} region={region}/>)
        break;
      case 'hub':
        pageView = <Hub hub={this.props.hub} />
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
