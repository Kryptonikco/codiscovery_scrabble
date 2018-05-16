import React from "react";

import LetterTile from "./LetterTile";

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

        return (
            <div>
                {letters.map((letter, index) => {
                    return (
                        <LetterTile letter={letter} />
                    );
                })}
            </div>
        );
    }


}