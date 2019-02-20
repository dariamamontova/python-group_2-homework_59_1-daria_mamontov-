import React, {Component} from 'react';
import Movie from '../../components/Movie/Movie';
import MovieAddForm from '../../components/MovieAddForm/MovieAddForm'

class WatchList extends Component {
    state = {
        watchList: [
            {id: 1, text: 'From dusk till dawn'},
            {id: 2, text: 'Back to the future'},
            {id: 3, text: 'Amelie'}
        ],

        currentMovie: {text: ''},
};


    removeMovie = (id) => {
        let movieId = this.state.watchList.findIndex(movie => {
            return movie.id === id;
        });

        const watchList = [...this.state.watchList];
        watchList.splice(movieId, 1);

        this.setState({
            ...this.state,
            watchList
        });
    };

    changeMovieInput = (event) => {
        let value = event.target.value;
        let currentMovie = {
            ...this.state.currentMovie,
            text: value
        };
        this.setState({
            ...this.state,
            currentMovie
        });
    };

    changeMovie = (id, event) => {
        console.log(event);

        let movieId = this.state.watchList.findIndex(movie => {
            return movie.id === id;
        });

        let movie = {
            ...this.state.watchList[movieId],
            text: event.target.value
        };

        let watchList = [...this.state.watchList];
        watchList[movieId] = movie;

        this.setState({
            ...this.state,
            watchList
        })
    };

    addMovie = (event) => {
        event.preventDefault();
        let movie = {...this.state.currentMovie};
        const now = new Date();
        movie.id = now.getTime();
        let watchList = [...this.state.watchList, movie];
        this.setState({
            ...this.state,
            watchList,
            currentMovie: {
                text: ''
            }
        });
    };

    isAddButtonDisabled = () => {
       return this.state.currentMovie.text === '';
};

    render() {
        return (
            <div className="App container">
                <div className="my-5">
                    <MovieAddForm
                        task={this.state.currentMovie}
                        onChangeInput={this.changeMovieInput}
                        onAddMovie={this.addMovie}
                        isAddButtonDisabled={this.isAddButtonDisabled()}
                    />
                </div>
                <div>
                {this.state.watchList.map((movie) => {
                        return <Movie
                            key={movie.id}
                            text={movie.text}
                            onRemoveMovie={() => this.removeMovie(movie.id)}
                            onChangeMovie={(event) => this.changeMovie(movie.id, event)}>
                        </Movie>;
                    })}
                </div>
            </div>
        );
    }
}

export default WatchList;