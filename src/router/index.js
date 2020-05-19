import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { getUserInfo } from '@/store/actions'
import { connect } from 'react-redux'
import Login from '@/view/login'
import App from '@/App'

class Router extends Component {
  render() {
    const { token, role, getUserInfo } = this.props 
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          {/* <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              } else {
                if (role) {
                  // return <Layout />;
                } else {
                  // getUserInfo(token).then(() => <Layout />);
                }
              }
            }}
          /> */}
        </Switch>
      </HashRouter>
    )
  }
}

export default connect(state => state.user, { getUserInfo })(Router)


