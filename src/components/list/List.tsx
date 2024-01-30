import { Component } from "react";
import ListItem from "../listItem/ListItem";
import InputText from "../inputText/InputText";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import RequestService from "../../services/RequestService";
import debounce from "../../utils/debounce";
import { IAppState, IItemRequest } from "../../types/Item";
import "./list.css";

class List extends Component {
    state: IAppState = {
        data: [],
        text: "",
        loading: true,
        error: false,
    };

    RequestService = new RequestService();

    componentDidMount() {
        this.RequestService.request(`https://swapi.dev/api/people`)
            .then((data) => this.onDataLoadedSucces(data))
            .catch((error) => {
                this.onDataError;
                console.error("Error fetching data:", error);
            });
    }

    onDataLoadedSucces = (data: IItemRequest) => {
        this.setState({
            data,
            loading: false,
        });
    };
    onDataError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    onDataLoading = () => {
        this.setState({
            loading: true,
        });
    };

    updateData = (value: string) => {
        this.setState({
            text: value,
        });
        this.searchDebounced(value);
    };

    search = (value: string) => {
        this.setState({
            loading: true,
        });
        this.RequestService.request(
            `https://swapi.dev/api/people/?search=${value}`
        )
            .then((data) => {
                this.onDataLoadedSucces(data);
            })
            .catch(() => {
                this.onDataError;
            });
    };

    searchDebounced = debounce((value: string) => this.search(value), 500);

    render() {
        const { data, text, loading, error } = this.state;

        const items = (
            <>
                <ul className="List">
                    {data.map((item: IItemRequest) => {
                        return <ListItem data={item} key={item.name} />;
                    })}
                </ul>
            </>
        );

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <>
                <InputText
                    updateData={this.updateData}
                    text={text}
                    loading={loading}
                />
                {errorMessage}
                {spinner}
                {content}
            </>
        );
    }
}

export default List;
