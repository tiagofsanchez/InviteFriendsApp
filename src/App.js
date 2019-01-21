import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import FetchRandom from './util/FetchRandom'
import { UserSearchList } from './components/UserSearchList';
import { UserSelectedList } from './components/UserSelectedList';


class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      loading: true,
      personas: [],
      personasSelected: [],
    }

    this.onAdd=this.onAdd.bind(this);

  }


  componentDidMount() {
    FetchRandom.users()
      .then(friends => this.setState({ personas: friends, loading: false }))
  };

  //will add your friend into the new list that the user will used to contact them after selecting
  onAdd(person) {
    let newPersonasSelected = this.state.personasSelected;
    if (this.state.personasSelected.find(friend => friend.login.uuid === person.login.uuid )) {
      return;
    } else {
      newPersonasSelected.push(person);
      this.setState({personasSelected : newPersonasSelected});
    }
  };


  render() {

    const { personas, loading , personasSelected } = this.state;
    
    return (
      <div className="App">

        <div className="SearchBar" >

        </div>
        
        <div className="SearchList">
          
          {loading ?
            <div >loading...</div>
            :
            <UserSearchList personas={ personas } add={ this.onAdd } />
            
          }
        </div>
        <div className = "SelectedList" >
          {/* <UserSelectedList personasSelected={ personasSelected } /> */}
        </div>
      
      </div>
    );
  }
}

export default App;
