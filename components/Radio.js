import React from 'react';

class Radio extends React.Component {

  render() {
    let name = this.props.name;
    let type = this.props.type;
    let url = `/radio/${name}-${type}.png`
    let alt = `${url}-${type}.png`
    let changeType;
    if (this.props.type === "cake") {
      changeType = this.props.changeCake
    } else {
      changeType = this.props.changeIcing
    }

    return (
      <div className="radio">
        <label className={`${name}-${type} inputcard`} >
          <input id={`${name}-${type}`} type="radio" value={`${name}-${type}`}
            checked={name === type}
            onChange={changeType} />
           <img src={url} alt={alt}/>
        </label>
      </div>
    )
  }

}



export default Radio;
