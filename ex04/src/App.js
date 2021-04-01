import React, { Component } from "react";

class App extends Component {
    setLocalStorage = () => {
        localStorage.setItem("Arena", "Selection Month");
    };
    getLocalStorage = () => {
        let myLocalStorageData = localStorage.getItem("Arena");
        return myLocalStorageData;
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.setLocalStorage}>SetLocalStorage</button>
                <button onClick={this.getLocalStorage}>GetLocalStorage</button>
            </div>
        );
    }
}

export default App;
