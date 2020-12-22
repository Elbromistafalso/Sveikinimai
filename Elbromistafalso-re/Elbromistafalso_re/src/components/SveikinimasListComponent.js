import React from 'react';
import Proptypes from 'prop-types';
import SveikinimasCardComponent from './SveikinimasCardComponent';

let SveikinimasListComponent = (props) => {

    let sveikinimaiCards = props.sveikinimai.map(sveikinimas => {

        return(
            <SveikinimasCardComponent
            tekstas = {sveikinimas.tekstas}
            paveiksliukas = {sveikinimas.paveiksliukas}
            vardas = {sveikinimas.vardas}
            pavarde = {sveikinimas.pavarde}
            />
        )


    });

return (<div className="row">{sveikinimaiCards}</div>)

}

SveikinimasListComponent.propTypes = {

    sveikinimai: Proptypes.array.isRequired
}

export default SveikinimasListComponent