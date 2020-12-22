import React from 'react';
import SveikinimasListComponent from '../components/SveikinimasListComponent';
import axios from 'axios';


class SveikinimasListContainer extends React.Component{

    constructor(props){

        super(props);
        this.state= {sveikinimai: []};
        
    }

    componentDidMount(){

        axios.get("http://localhost:8081/Elbromistafalso-ap")
        .then((response) => {

            this.setState({sveikinimai :response.data})

        })
        .catch((error) => {

            console.log(error);
        })

        

        

    }

    render(){

        return(<SveikinimasListComponent sveikinimai={this.state.sveikinimai}/>)
    }
}

export default SveikinimasListContainer