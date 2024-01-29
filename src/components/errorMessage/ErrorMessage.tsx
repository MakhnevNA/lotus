import { Component } from "react";
import img from "../../assets/Images/error/error.gif";

class ErrorMessage extends Component {
    render() {
        return (
            <img
                style={{
                    display: "block",
                    width: "250px",
                    height: "250px",
                    objectFit: "contain",
                    margin: "0 auto",
                }}
                src={img}
                alt="errorMessage"
            />
        );
    }
}

export default ErrorMessage;
