import React, {Component} from 'react';

class Movie extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Movie] ShouldUpdate');
        return nextProps.text !== this.props.text
    }

    render() {
        console.log('movie render');
        return (
            <div className="card w-75 d-inline-block border-secondary align-center my-2 pt-3 text-secondary">
                <p><input
                    type="text"
                    value={this.props.text}
                    onChange={this.props.onChangeMovie}
                />
                    <a href='#' className="ml-4 text-danger" onClick={this.props.onRemoveMovie}>
                        <i className="fas fa-trash-alt"></i>
                    </a>
                </p>
            </div>
        )
    }
}

export default Movie;