import React from "react";

export default class LetterTile extends React.Component {
    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    fontSize: 30,
                    display: "inline-block"
                }}>
                {this.props.letter}
            </div>
        );
    }
}