import React from 'react';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

class SearchBar extends React.Component{

    state = {term:""};

    onFormSubmit= (event)=>{
        console.log('form submitted');
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){

        return (<div className="ui segment">   
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label> Image Search </label>
                    <input type="text" 
                    value={this.state.term} 
                    onChange={e=>this.setState({term: e.target.value})} />
                </div>
            </form>
            </div>);
    }
}

export default SearchBar;