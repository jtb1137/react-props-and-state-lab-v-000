import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petData = this.props.pets.map(pet => {
      return (
        <Pet 
          pet = {pet}
          onAdoptPet = {this.props.onAdoptPet}
          isAdopted = {this.props.adoptedPets.includes(pet.id)}
        />
      )
    })
    
    return (
      <div className="ui cards">
        {petData}
      </div>
    );
  }
}

export default PetBrowser;
