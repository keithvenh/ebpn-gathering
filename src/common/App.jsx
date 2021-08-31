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
import Footer from './Footer';
import Resources from '../resources/Resources';

const mapStateToProps = (state) => {
  return {
    view: state.view,
    hub: state.hub,
    displayLoading: true
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
      // case 'loading': 
      //   pageView = <Loading />
      //   setTimeout(() => this.props.handleNavClick('schedule'), 4000);
      //   break;
      case 'schedule':
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
        break;
      case 'partners':
        pageView = partners.map(partner => <Partner key={partner.id} partner={partner} />)
        break;
      case 'ywam':
        pageView = hubs.map(region => <Region key={region.region} region={region}/>)
        break;
      case 'hub':
        pageView = <Hub hub={this.props.hub} />
        break;
      case 'resources':
        pageView = <Resources />
        break;
      default:
        pageView = sessions.map(day => <SessionDay key={day.date} date={day.date} display={day.display} sessions={day.sessions}/>)
    };

    return (
      <div className="App">
  
        <Header view={this.props.view} navClick={this.handleNavClick}/>

        <div className='page-container'>
          <div className='page-view'>

            {pageView}

          </div>
        </div>
        <Footer />
  
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
