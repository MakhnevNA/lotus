import { Component } from "react";
import Header from "./components/header/Header";
import InputText from "./components/inputText/InputText";
import List from "./components/list/List";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import Spinner from "./components/spinner/Spinner";
import RequestService from "./services/onRequest";
import { IAppState, IItemRequest } from "./types/Item";

class App extends Component {
    state: IAppState = {
        data: [],
        text: "",
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.RequestService.onRequest("https://swapi.dev/api/people")
            .then((data: IItemRequest) => {
                this.onDataLoaded;
                this.setState({
                    data: data,
                });
            })
            .catch(this.onDataError)
            .finally(this.onDataLoaded);
    }

    RequestService = new RequestService();

    onChangeText = (value: string) => {
        this.setState({
            text: value,
        });
    };

    onDataLoaded() {
        this.setState({
            loading: false,
        });
    }
    onDataError() {
        this.setState({
            error: true,
        });
    }

    render() {
        const { data, text, loading, error } = this.state;

        const items = (
            <>
                <InputText onChangeText={this.onChangeText} text={text} />{" "}
                <List data={data} text={text} />
            </>
        );

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        return (
            <>
                <Header />
                <main
                    className={`main ${
                        loading === true || error === true
                    } ? flex : ''`}
                >
                    {errorMessage}
                    {spinner}
                    {content}
                </main>
            </>
        );
    }
}

export default App;
