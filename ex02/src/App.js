import React, { Component } from "react";

class App extends Component {
    setMyStorage = () => {
        document.cookie = "Year=2021";
        localStorage.setItem("Paragon", "yes, but Arena first");
        sessionStorage.setItem("frontend", "React");
    };

    getMyStorage = () => {
        let cookieVal = document.cookie.substr(
            document.cookie.search("=") + 1,
            document.cookie.length
        );

        let myCookieData = cookieVal;
        let myLocalStorageData = localStorage.getItem("Paragon");
        let mySessionStorageData = sessionStorage.getItem("frontend");

        return [myCookieData, myLocalStorageData, mySessionStorageData];
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.setMyStorage}>SetStorage</button>
                <button onClick={this.getMyStorage}>GetStorage</button>
            </div>
        );
    }
}

export default App;
