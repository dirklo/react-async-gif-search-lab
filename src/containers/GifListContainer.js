import React, { Component } from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    render() {
        return (
            <div>
                <GifList gifs={this.props.gifs} />
            </div>
        )
    }
}
