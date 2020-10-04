import React from 'react';



  class App extends React.Component {
    render(){
      return (
       <div>
       <header/>
       <content/>
       
       </div>
      );
    }
  }
  
  class header extends react.Component{
    render(){
      return(
        <div>
        <h1> header </h1>
        </div>
        );
      
    }
  }
  
class content extends react.Component{
  render(){
    return(
      <div>
      <h2> content {1+1+1}</h2>
      </div>
      );
  }
}  
  
  
  export default App;
  
  
  
  
  
  