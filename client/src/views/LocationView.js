import React from 'react';
import {fetchApartmentFilteredByLocation} from "../actions/apartmentFilteredByLocationActions";
import {connect} from "react-redux";
import ApartmentTileView from "./ApartmentTileView";


export class LocationView extends React.Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    const { locationId } = params;
    // console.log(locationId)
    this.props.fetchApartmentFilteredByLocation(locationId);
  }

  render() {
    const { apartmentsByLocation } = this.props;
    // console.log(this.props)
    // console.log(apartmentsByLocation)
    if (!Object.keys(apartmentsByLocation).length) {
      return <div>Loading...</div>
    }

    // console.log(apartment)
    // let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];
    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div className="view-apartment-list">
            {apartmentsByLocation.map((item, index) => (
                <ApartmentTileView key={index} apartment={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.apartmentFilteredByLocation)
  return ({
    apartmentsByLocation: state.apartmentFilteredByLocation.apartmentsByLocation
  })
};

export default connect(mapStateToProps, {fetchApartmentFilteredByLocation})(LocationView)
