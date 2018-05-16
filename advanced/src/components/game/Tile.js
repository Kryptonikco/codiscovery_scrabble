import React from "react";

export default class Tile extends React.Component {
    render() {
        const PADDING = 1;
        const colorMap = {
            "base": "white",
            "ld": "#6cf",
            "lt": "#06f",
            "wd": "#f9f",
            "wt": "red",
            "center": "#ffc14d"
        };
        return (
            <div
                style={{
                    padding: PADDING,
                    display: "inline-block",
                }}>
                <div style={{
                    width: this.props.size - PADDING * 2,
                    height: this.props.size - PADDING * 2,
                    textAlign: "center",
                    backgroundColor: colorMap[this.props.type],
                    color: colorMap[this.props.type],
                    userSelect: "none"
                }}>
                    {this.props.type}
                </div>
            </div>
        );
    }
}