import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif => <li><img src={gif['images']['downsized']['url']} alt="" /></li>)}
                </ul>
            </div>
        )
    }
}
