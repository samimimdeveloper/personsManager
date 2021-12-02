import React, { Component } from "react";
import Persons from "./components/person/persons";
import Person from './components/person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 1, fullname: "حسین شجاعی " },
      { id: 2, fullname: "یاسر زمانیان" },
      { id: 3, fullname: " منصور نقی زاده" },
    ],

    showPersons: false,
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    console.log(this.state.showPersons);
  };
  handleDeletPerson = (id) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filteredPersons });
  };
  handleNameChange= (event,id) =>{
    const {persons :allPersons} =this.state;

    const personIndex=allPersons.findIndex(p => p.id === id);
    const person=allPersons[personIndex];
    person.fullname=event.target.value;

    const persons=[...allPersons];
    persons[personIndex]=person;
    this.setState({persons})


  }

  render() {
    const { persons, showPersons } = this.state;
    const styles = {
      textAlign: "center",
    };

    const buttonStyles = {
      fontFamily: "Yekan",
      padding: "1em",
      backgroundColor: "pink",
    };

    let person = null;

    if (showPersons) {
      person = (
        <Persons persons={persons} personDelet={this.handleDeletPerson}
        personChange ={this.handleNameChange} />
      );
    }

    return (
      <div style={styles}>
        <h2>مدیریت کننده اشخاص</h2>

        <h4>.تعداد افراد {persons.length} نفر می باشد </h4>
        <hr />
        {person}
        <button onClick={this.handleShowPerson} style={buttonStyles}>
          عدم/نمایش اشخاص
        </button>
      </div>
    );
  }
}

export default App;
