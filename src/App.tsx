import { Component } from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main className={`main `}>
                    <List />
                </main>
            </>
        );
    }
}

export default App;
