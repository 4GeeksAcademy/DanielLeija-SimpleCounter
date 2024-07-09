import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faClock } from '@fortawesome/free-solid-svg-icons'



const DisplayComponent = (props) => {

    return (
        <div> 
          <span> <FontAwesomeIcon icon={faClock} /></span>&nbsp;&nbsp;
          <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>&nbsp;:&nbsp;
          <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
          <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp; 
          <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>&nbsp;:&nbsp;
        </div>
    )

}
export default DisplayComponent;