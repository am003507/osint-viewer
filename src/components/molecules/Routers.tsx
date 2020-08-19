import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UnknownPage } from '@/pages';

const Routers: React.FC = () => {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" component={DashboardPage} />
        <Route exact path="/ioc/list" component={IocListPage} />
        <Route exact path="/ioc/:iocId" component={IocInfoPage} />
        <Route exact path="/report/list" component={ReportListPage} /> */}
        <Route component={UnknownPage} />
      </Switch>
    </div>
  );
};

export default Routers;
