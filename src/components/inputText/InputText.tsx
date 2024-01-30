import { Component } from "react";
import "./inputText.css";

interface IInputTextProps {
    updateData: (value: string) => void;
    text: string;
    loading: boolean;
}

class InputText extends Component<IInputTextProps> {
    render() {
        const { text, loading } = this.props;

        const notAllowed = loading === true ? "not-allowed" : "";
        const disabled = loading === true ? true : false;

        return (
            <div className="Search__filter">
                <input
                    className={`Search__filter-input ${notAllowed}`}
                    type="text"
                    placeholder="Поиск"
                    value={text}
                    onChange={(e) => this.props.updateData(e.target.value)}
                    disabled={disabled}
                />
            </div>
        );
    }
}

export default InputText;
