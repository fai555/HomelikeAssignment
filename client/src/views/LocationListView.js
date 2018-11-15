import React from 'react';
import {connect} from 'react-redux';
import {fetchLocationsList} from '../actions/locationsListActions';
import LocationTileView from "./LocationTileView";

class LocationListView extends React.Component {
  componentWillMount() {
    this.props.fetchLocationsList();
  }

  render() {
    let {locationsList} = this.props;

    console.log(this.props)
    if (!Object.keys(locationsList).length) {
        return <div>Loading...</div>
    }

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div>
            <h2>Available Locations</h2>
            {locationsList.items.map((item, index) => (
                <LocationTileView key={index} location={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationsList: state.locationsList.locations
});

export default connect(mapStateToProps, {fetchLocationsList})(LocationListView)
