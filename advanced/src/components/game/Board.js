import React from "react";


import BoardTile from "./BoardTile";

const TILE_SIZE = 50;
const TILE_PER_LINE = 15;

class Board extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            grid: this.getGrid()
        };
    }

    getGrid() {
        const horTileNumber = TILE_PER_LINE;
        const verTileNumber = TILE_PER_LINE;

        const grid = [];

        const gridMap = this.getGridMap();

        for (let ver = 0; ver < verTileNumber; ver++) {
            grid[ver] = [];
            for (let hor = 0; hor < horTileNumber; hor++) {
                const tyleId = `${hor}-${ver}`;
                const type = gridMap[tyleId] || "base";
                console.log("tyleId", tyleId);
                console.log("type", type);
                grid[ver][hor] = {
                    size: TILE_SIZE,
                    type,
                    x: hor,
                    y: ver
                };
                // // center
                // if (hor === 7 && ver === 7) {
                //     grid[ver][hor].type = "center";
                // }
                // // wt
                // if (
                //     (hor === 0 && ver === 0) ||
                //     (hor === 7 && ver === 0) ||
                //     (hor === 14 && ver === 0) ||
                //     (hor === 0 && ver === 7) ||
                //     (hor === 14 && ver === 7) ||
                //     (hor === 0 && ver === 14) ||
                //     (hor === 7 && ver === 14) ||
                //     (hor === 14 && ver === 14) 
                // ) {
                //     grid[ver][hor].type = "wt";
                // }
            }
        }

        return grid;
    }

    getGridMap() {
        return {
            "7-7": "wd",
            "0-0": "wt",
            "7-0": "wt",
            "14-0": "wt",
            "0-7": "wt",
            "14-7": "wt",
            "0-14": "wt",
            "7-14": "wt",
            "14-14": "wt",
            "3-0": "ld",
            "11-0": "ld",
            "6-2": "ld",
            "8-2": "ld",
            "0-3": "ld",
            "7-3": "ld",
            "14-3": "ld",
            "2-6": "ld",
            "6-6": "ld",
            "8-6": "ld",
            "12-6": "ld",
            "3-7": "ld",
            "11-7": "ld",
            "2-8": "ld",
            "6-8": "ld",
            "8-8": "ld",
            "12-8": "ld",
            "0-11": "ld",
            "7-11": "ld",
            "14-11": "ld",
            "6-12": "ld",
            "8-12": "ld",
            "3-14": "ld",
            "11-14": "ld",
            "5-1": "lt",
            "9-1": "lt",
            "1-5": "lt",
            "5-5": "lt",
            "9-5": "lt",
            "13-5": "lt",
            "1-9": "lt",
            "5-9": "lt",
            "9-9": "lt",
            "13-9": "lt",
            "5-13": "lt",
            "9-13": "lt",
            "1-1": "wd",
            "13-1": "wd",
            "2-2": "wd",
            "12-2": "wd",
            "3-3": "wd",
            "11-3": "wd",
            "4-4": "wd",
            "10-4": "wd",
            "4-10": "wd",
            "10-10": "wd",
            "3-11": "wd",
            "11-11": "wd",
            "2-12": "wd",
            "12-12": "wd",
            "1-13": "wd",
            "13-13": "wd",
        }
    }

    render() {
        const {
            grid
        } = this.state;
        const boardSize = TILE_PER_LINE * TILE_SIZE;
        const PADDING = 3;
        return (
            <div style={{
                backgroundColor: "green",
                padding: PADDING,
                width: boardSize + PADDING * 2,
                height: boardSize + PADDING * 2,
            }}>
            <div
                style={{
                    backgroundColor: "green",
                    width: boardSize,
                    height: boardSize,
                }}>
                {grid.map((line, horIndex) => {
                    return line.map((el, verIndex) => {
                        return <BoardTile key={`${horIndex}-${verIndex}`} {...el} />
                    })
                })}
            </div>
            </div>
        );
    }
}

export default Board;