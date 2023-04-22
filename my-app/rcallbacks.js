class Comp extends React.Component {
  
    constructor(props) {
      super(props);
      
      this.state = {
        bgColor: this.props.bgColorProp // callback passed as prop from parent
      }
    }
    
      render() {
      
      setTimeout(function(){ 
        
        this.setState({
          bgColor: this.state.bgColor('yellow') // initiate callback func, specify color as arg!
        });
        
      }.bind(this), 1000);
      
          return (
              <div className="lorem">
  
          <div className="ipsum">
            <p>{this.props.propOne}</p>
          </div>			
      
              </div>
          )
      }
  }
  
  class App extends React.Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        bodyBgColor: '#e2e2e2'
      }
      
    }
    
    lorem(arg) {
      
        this.setState({
          bodyBgColor: arg
        });
  
    }
  
      render() {
      
      var divStyle = {
        backgroundColor: this.state.bodyBgColor,
        padding: '10px'
      };
      
      console.log(divStyle)
  
          return (
              <div style={divStyle}>
          <Comp propOne="hello world" bgColorProp={this.lorem.bind(this)} />
              </div>
          )
      }
  }
  
  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );