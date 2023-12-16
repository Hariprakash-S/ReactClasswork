import React, { Component } from 'react'

export default class erb1 extends Component {
    state={hasError:false}
    static getDerivedStateFormError(error){
        return{
            hasError:true
        }
    }
  render() {
  if(this.state.hasError===true){
    return<h1>smtg wnt wrng</h1>
  }
  return this.children.props;
  }
}
