import React, { Component } from 'react';
import './App.css';



// creating context
const MyContext = React.createContext();

// then create a provider component 
class MyProvider extends Component {
    
    state = {
      name: 'Imran',
      age: 31,
      cool: true
    }

    render(){
        return (
                <MyContext.Provider value={{
                  state: this.state,
                  growAYearOlder : () =>  this.setState({
                     age: this.state.age + 1
                  })
                }}>
                    {this.props.children}
                </MyContext.Provider>
          )
    }
}


const Family = props => (

      <div className='family' >
          <Person />
       </div>
)




 class Person extends React.Component {

      render(){
            return (

                  <MyContext.Consumer>
                    {(context) => (
                      <React.Fragment>
                        <p>Age:{context.state.age}</p>
                        <p>Name: {context.state.name}</p>
                        <button onClick={context.growAYearOlder}>Update Age</button>
                      </React.Fragment>
                      )}
                  </MyContext.Consumer>
              )
      }
}


export default class App extends React.Component {

    

     render(){

               return (
                        <MyProvider>
                               <div>
                                  <p>I am the app</p>
                                  <Family />
                                </div>
                        </MyProvider>
                 )
     }
}