import { Component } from "react";
import "./inputText.css";

interface IInputTextProps {
    onChangeText: (value: string) => void;
    text: string;
}

class InputText extends Component<IInputTextProps> {
    render() {
        const { text, onChangeText } = this.props;

        return (
            <div className="Search__filter">
                <input
                    className="Search__filter-input"
                    type="text"
                    placeholder="Поиск"
                    value={text}
                    onChange={(e) => onChangeText(e.target.value)}
                />
            </div>
        );
    }
}

export default InputText;
