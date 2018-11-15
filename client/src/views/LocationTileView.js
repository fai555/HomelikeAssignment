import React from 'react';
import Link from 'react-router-dom/Link';


export default class LocationTileView extends React.Component {

  render() {
    let {location :{_id, title} } = this.props;

    
    return (
      <Link key={_id} to={`/locations/${_id}`}>
        <h4>
          {title}
        </h4>
      
      </Link>
    )
  }
}
