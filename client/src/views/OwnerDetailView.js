import React from 'react';

export default class OwnerDetailView extends React.Component {
  render() {
    let {owner} = this.props;
    
    return (
      <React.Fragment>
        <div>{owner.profile.firstName +" "+owner.profile.lastName}</div>
        <div>{owner.profile.role}</div>
        <div>{owner.email}</div>
      </React.Fragment>

    )
  }
}
