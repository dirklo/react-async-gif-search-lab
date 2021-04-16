import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            inputText: ""
        }
    }

    handleInput = (e) => {
        this.setState({inputText: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleData(this.state.inputText);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleInput} value={this.state.inputText}></input>
                <button>Search</button>
            </form>
        )
    }
}
