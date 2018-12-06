import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Landing from 'pages/Landing/Loadable';
import Newsletter from 'pages/Newsletter/Loadable';
import NotFound from 'pages/NotFound/Loadable';

class RootComponent extends PureComponent {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(RootComponent);
