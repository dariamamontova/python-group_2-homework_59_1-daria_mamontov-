import React, {Component} from 'react';

class MovieAddForm extends Component {

    render() {
        return (<form className="addTaskForm">
            <input type="text" name="text" value={this.props.text} onChange={this.props.onChangeInput}/>
            <button className="btn btn-danger" disabled={this.props.isAddButtonDisabled} type="submit"
                    onClick={this.props.onAddMovie}>Add new
            </button>
        </form>
        )
    }
}
export default MovieAddForm;