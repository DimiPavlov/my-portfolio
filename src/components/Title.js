import React, { Component } from "react";
import "./Title.scss"

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    _onMouseMove = (e) => {
        const width = this.refs.titleContainer.clientWidth;
        const height = this.refs.titleContainer.clientHeight;
        const oX = (e.nativeEvent.offsetX/width) * 100;
        const oY = (e.nativeEvent.offsetY/height) * 100;

        this.setState({
            x: oX,
            y: oY
        })
    }

    _onMouseLeave = () => {

        this.setState({
            x: 0,
            y: 0
        })   
    }

    render() {
        const {text} = this.props;
        const {x, y} = this.state;
        const maskStyle = {
            "--maskX": x,
            "--maskY": y
        }

        return (
            <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                onMouseLeave={this._onMouseLeave}
                ref="titleContainer"
                style={maskStyle}
            >
                <div className="titleWrapper">
                    <h1>{text}</h1>
                </div>
                <div className="titleWrapper cloneWrapper">
                    <h1>{text}</h1>
                </div>
            </div>
        )
    }

}

export default Title