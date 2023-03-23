import React, { Component } from 'react'

export class PicsItem extends Component {
    

  render() {
    let {title,author,imageUrl,url} = this.props;
    return (
      <div className ="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{author}</p>
    <a rek = "noreferrer" href= {url} className="btn btn-sm btn-dark">More Details</a>
  </div>
</div>
</div>
    )
  }
}

export default PicsItem
