import React, { FC } from 'react';
import classNames from 'classnames';
import './index.less';
import { Button } from 'antd';

const Header: FC = () => {
  return (
    <div className={classNames('header')}>
      <div className={classNames('headerTitle')}>标签管理平台</div>
      <Button type="link" className={classNames('loginBtn')}>
        登录
      </Button>
    </div>
  );
};

export default Header;
