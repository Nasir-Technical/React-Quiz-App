function Button(props) {
    console.log(props);
    return (
  
      <button onClick={props.click}
      className={props.className ? props.className : "but"}
      >{props.label}</button>
    )
  };
  
  
  
  
  export default Button