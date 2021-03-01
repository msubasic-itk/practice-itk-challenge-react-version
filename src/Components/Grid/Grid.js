import React, { Component } from 'react';
import axios from '../../axios-instance';
import GridItem from './Grid-item';
import './grid.scss';

class grid extends Component {
    state = {
        offices: null
    }

    componentDidMount() {
        axios.get('https://itk-exam-api.herokuapp.com/api/offices')
        .then(response => {
            this.setState({offices: response.data});
            console.log(this.state.offices);
        })
    };

    render() { 
        // const forRendering = this.offices ?
        //                         this.offices.map(office => <GridItem key={office.id} officeData={office}/>) :
        //                         <p>Fatching baby</p>;

        return (
            <div className='container-component-grid'>
                {this.state.offices ?
                    <div className='container-div-grid'>
                        {this.state.offices.map(office => <GridItem key={office.id} officeData={office}/>)} 
                    </div>    :
                    <p>Fatching baby</p>
                }
            </div>
        );
    }
}
 
export default grid;
