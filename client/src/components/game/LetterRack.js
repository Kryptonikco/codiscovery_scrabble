import React from "react";

import LetterTile from "./LetterTile";

const LETTER_SIZE = 50;

export default class LetterRack extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            letters: []
        }
    }

    componentDidMount() {
        this.getNewLetters();
    }

    getNewLetters() {
        const {
            letters
        } = this.state;

        const newLetters = letters;

        while (newLetters.length < 7) {
            const asciiNumber = this.getRandomInt(65, 90);
            const letter = String.fromCharCode(asciiNumber);
            newLetters.push(letter);
        }

        this.setState({
            letters: newLetters
        })
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {

        const {
            letters
        } = this.state;
        const PADDING = 5;
        const rackWidth = LETTER_SIZE * 7 + PADDING * 2;
        const rackHeight = LETTER_SIZE;

        return (
            <div
                style={{
                    opacity: this.props.disabled ? 0.4 : 1,
                    marginBottom: 20
                }}>
                <h3>Player {this.props.player}</h3>
                <div
                    style={{
                        backgroundColor: "#905000",
                        width: rackWidth,
                        height: rackHeight,
                        paddingLeft: PADDING
                    }}>
                    {letters.map((letter, index) => {
                        return (
                            <LetterTile
                                key={index}
                                disabled={this.props.disabled}
                                letter={letter}
                                size={LETTER_SIZE} />
                        );
                    })}
                </div>
            </div>
        );
    }


}