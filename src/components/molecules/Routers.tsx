import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnknownPage, DashBoardPage, ReportBoardPage, IocBoardPage } from '@/pages';

const Routers: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={DashBoardPage} />
        <Route exact path="/ioc/list" component={IocBoardPage} />
        {/* <Route exact path="/ioc/:iocId" component={IocInfoPage} /> */}
        <Route exact path="/report/list" component={ReportBoardPage} />
        <Route component={UnknownPage} />
      </Switch>
    </div>
  );
};

export default Routers;
