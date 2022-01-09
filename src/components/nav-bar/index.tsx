import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import './index.less';
import { Route } from '@/router/route';
import classNames from 'classnames';

interface NavBarProps {
  routes: Route[];
}

interface RouteProps {
  route: Route;
  key?: string;
}

const { SubMenu } = Menu;

const RenderMenuItem: FC<RouteProps> = (props) => {
  const { route } = props;
  return (
    <Menu.Item key={route.path}>
      <Link to={route.path}>{route.name}</Link>
    </Menu.Item>
  );
};

const RenderSubMenu: FC<RouteProps> = (props) => {
  const { route, key } = props;
  const { name, routes } = route;
  return (
    <SubMenu key={key} title={name}>
      {routes &&
        routes.map((r, i) => {
          return (
            <Menu.Item key={r.path}>
              <Link to={r.path}>{r.name}</Link>
            </Menu.Item>
          );
        })}
    </SubMenu>
  );
};

const NavBar: FC<NavBarProps> = (props) => {
  console.log(props, '111ppp');
  const { routes } = props;
  return (
    <div className={classNames('asideWrap')}>
      <Menu mode="inline" className={classNames('aside')}>
        {routes.map((route, index) => {
          if (route.hidden) return;
          {
            return route.path
              ? RenderMenuItem({ route })
              : RenderSubMenu({ route, key: String(index) });
          }
        })}
      </Menu>
    </div>
  );
};

export default NavBar;
