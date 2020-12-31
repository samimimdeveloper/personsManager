import React, { Component } from "react";
import Persons from "./components/person/persons";
class App extends Component {
  state = {
    persons: [
      {id:1, firstname: "مهدی", lastname: "صمیمی" },
      {id:2, firstname: "یاسر", lastname: "زمانیان"  },
      {id:3, firstname: "منصور", lastname: "نقی زاده" },
    ],

    showPersons:false
 };
 
handleShowPerson =() =>{
    this.setState({showPersons : !this.state.showPersons});
    console.log(this.state.showPersons);
};
handleDeletPerson= id =>{
    const persons=[...this.state.persons];
    const filteredPersons=persons.filter( p=>p.id !== id);
    this.setState({persons:filteredPersons});

}
  
  render() {
    const { persons,showPersons} = this.state;
    const styles = {
      textAlign: "center",
    };

    const buttonStyles={
        fontFamily :"Yekan",
        padding:"1em",
        backgroundColor:"pink"
    };

    let person=null;

    if(showPersons){
        person = <Persons persons= {persons}
        personDelet={this.handleDeletPerson}/>

    };
 
    return (
      <div style={styles}>
                    <h2>مدیریت کننده اشخاص</h2>

          <h4>.تعداد افراد {persons.length} نفر می باشد  </h4>
          <hr/>
          {person}
          <button onClick={this.handleShowPerson} style={buttonStyles}>عدم/نمایش اشخاص</button>
      </div>
    );
  }
}

export default App;
