import { Component } from "react";
import ListItem from "../listItem/ListItem";
import { IItemRequest } from "../../types/Item";
import "./list.css";

interface IListProps {
    data: IItemRequest[];
    text: string;
}

class List extends Component<IListProps> {
    render() {
        const { data, text } = this.props;

        return (
            <ul className="List">
                {data
                    .filter((item) =>
                        item.name.toLowerCase().includes(text.toLowerCase())
                    )
                    .map((item: IItemRequest) => {
                        return <ListItem data={item} key={item.name} />;
                    })}
            </ul>
        );
    }
}

export default List;
