import React from 'react';
import axios from 'axios' 

const api = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

export default class Newsearch extends React.Component {
    constructor (props) {
        super(props);
        /*
        this.items = [
            'soham',
            'nishant',
            'aditi',
            'mondal',
            'deb',
            'debo',
            'disappointment',
        ];
        */

        this.items = [];

        this.prodID = new Map();
        this.prodNames = [];



        this.state = {
            suggestions: []
            
        };

        api.get('/')
            .then(res => {
                this.items = res.data
                for(var i = 0; i < res.data.length; i++) {
                    this.prodNames.push(res.data[i].name);
                    this.prodID.set(res.data[i].name, res.data[i]._id);
                }

            })


 
        
    }
 
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.prodNames.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions }));
    }
 
    renderSuggestions(){
        const {suggestions} = this.state;
        if (suggestions === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <a href={"/product/" + this.prodID.get(item)}><li>{item}</li></a>)}
            </ul>
        )
    }
 
    render() {
        return (
            <div className="container search-icon-home">
                <i className="material-icons search-home">search</i>

                <input placeholder = " Search here.." onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}
