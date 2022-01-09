import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { mapRoute } from '@/router';
import { Route } from '@/router/route';
import NavBar from '@/components/nav-bar';
import Header from '@/components/header';
import './index.less';
import classNames from 'classnames';

interface LayoutProp {
  routes: Route[];
}

const Layout: FC<LayoutProp> = (props) => {
  console.log('参数', props);
  return (
    <div>
      <Header></Header>
      <div className="layout">
        <NavBar routes={props.routes} />
        <div className={classNames('content')}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
