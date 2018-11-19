import React from 'react';
import {connect} from 'react-redux';
import {fetchApartmentFilteredByLocation} from "../actions/apartmentFilteredByLocationActions";
import LocationTileView from "./LocationTileView";

class SearchView extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location : ""
    }
  }
  componentWillMount() {
    let {location} = this.state;
    this.props.fetchApartmentFilteredByLocation(location);
  }

  onChangeLocation = (event)=>{
    let location = event.target.value;
    this.setState({location})
    this.props.fetchApartmentFilteredByLocation(location);
  }
  

  render() {
    let {location} = this.state;

    const { apartmentsByLocation } = this.props;

    console.log(location);
    
    // if (!Object.keys(apartmentsByLocation).length) {
    //   return <div>Loading...</div>
    // }


    // // console.log(this.props)
    // if (!Object.keys(apartmentsByLocation).length) {
    //     return <div>Loading...</div>
    // }

    return (
      <div className="container-list container-lg clearfix">
        <div className="col-12 float-left">
          <div>
          <input
            value={location}
            onChange={this.onChangeLocation}
            className="search-box" 
            type="text" 
            name="search" 
            placeholder="Search by location..."/>

            {/* {apartmentsByLocation.items.map((item, index) => (
                <LocationTileView key={index} location={item} />
            ))} */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsByLocation: state.apartmentFilteredByLocation.apartmentsByLocation
});

export default connect(mapStateToProps, {fetchApartmentFilteredByLocation})(SearchView)


// import React from 'react';
// import {fetchApartmentFilteredByLocation} from "../actions/apartmentFilteredByLocationActions";
// import {connect} from "react-redux";


// export class SearchView extends React.Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       location: ""
//     }

//   }

//   componentDidMount() {
//     // const { match: { params } } = this.props;
//     // const { locationId } = params;
//     // console.log(locationId)
//     // this.props.fetchApartmentFilteredByLocation(locationId);
//   }

//   render() {
//     // const { apartmentsByLocation } = this.props;
//     // console.log(this.props)
//     // console.log(apartmentsByLocation)
//     // if (!Object.keys(apartmentsByLocation).length) {
//     //   return <div>Loading...</div>
//     // }

//     // console.log(apartment)
//     // let image = 'http://localhost:5000/images/apartments/' + apartment.images[0];
//     return (
//       <div className="container-list container-lg clearfix">
//         <div className="col-12 float-left">
//           <input className="search-box" type="text" name="search" placeholder="Search by location..."/>
//           {/* <div className="view-apartment-list">
//             {apartmentsByLocation.map((item, index) => (
//                 <ApartmentTileView key={index} apartment={item} />
//             ))}
//           </div> */}
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   // console.log(state.apartmentFilteredByLocation)
//   return ({
//     apartmentsByLocation: state.apartmentFilteredByLocation.apartmentsByLocation
//   })
// };

// export default connect(mapStateToProps, {fetchApartmentFilteredByLocation})(SearchView)


