import React, { Component } from "react";
import Persons from "./components/person/persons";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { ToastContainer, toast } from "react-toastify";
// import Person from "./components/person/Person";
class App extends Component {
  state = {
    persons: [],
    person: "",
    showPersons: true,
  };

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    console.log(this.state.showPersons);
  };
  handleDeletPerson = (id) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filteredPersons });

    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];

    toast.error(`${person.fullname} با موفقیت حذف شد ,`, {
      position: "bottom-left",
      closeOnClick: true,
    });
  };
  handleNameChange = (event, id) => {
    const { persons: allPersons } = this.state;

    const personIndex = allPersons.findIndex((p) => p.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;

    const persons = [...allPersons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  handleNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.person
    };
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
      toast.success("شخص جدید اضافه شد .", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };

  render() {
    const { persons, showPersons } = this.state;
    // const styles = {
    //   textAlign: "center",
    // };

    let person = null;

    let badgeStyle = [];
    if (persons.length >= 3) badgeStyle.push("badge-success");
    if (persons.length <= 2) badgeStyle.push("badge-warning");
    if (persons.length <= 1) badgeStyle.push("badge-danger");

    if (showPersons) {
      person = (
        <Persons
          persons={persons}
          personDelet={this.handleDeletPerson}
          personChange={this.handleNameChange}
        />
      );
    }

    return (
      <div className="rtl text-center">
        <div className="alert alert-info">
          <h2>مدیریت کننده اشخاص</h2>
        </div>
        <h5 className="alert alert-light">
          تعداد افراد
          <span className={`badge badge-pill  ${badgeStyle.join(" ")}`}>
            {persons.length}
          </span>
          نفر می باشد
        </h5>
        <hr />
        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(evevnt) => evevnt.preventDefault()}
          >
            <div className="input-group w-25">
              <input
                type="text"
                placeholder="ساخت شخص جدید"
                className="form-control"
                onChange={this.setPerson}
                value={this.state.person}
              />
              <div className="input-group-prepend">
                {" "}
                <button
                  type="submit"
                  onClick={this.handleNewPerson}
                  className="btn btn-success fa fa-plus-square"
                />
              </div>
            </div>
          </form>
        </div>
        <button
          onClick={this.handleShowPerson}
          className={showPersons ? "btn btn-info" : "btn btn-danger"}
        >
          نمایش اشخاص
        </button>
        {person}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
