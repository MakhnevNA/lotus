import { Component } from "react";
import "./listItem.css";
import { IItemRequest } from "../../types/Item";

interface IListItemProps {
    data: IItemRequest;
}

class ListItem extends Component<IListItemProps> {
    render() {
        const { name } = this.props.data;
        return (
            <li className="List__item">
                <div className="List__item-content">
                    <span className="List__item-name">{name}</span>
                </div>
            </li>
        );
    }
}

export default ListItem;
