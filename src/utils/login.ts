import Cookie from 'js-cookie';
import config from '@/config/env';

export const isLogin = () => {
  return Cookie.get('login_xng_ticket');
};

export const adminInfo = () => {
  return {
    id: Cookie.get('login_xng_uid'),
    nickName: Cookie.get('login_xng_nick_name'),
    userName: Cookie.get('login_xng_user_name'),
  };
};

export const login = () => {
  const loginUrlParams = new URLSearchParams('');
  loginUrlParams.append('redirect_url', window.location.href);
  window.location.href = `${config.loginDomain}?${loginUrlParams.toString()}`;
};

export const logout = () => {
  Cookie.remove('login_xng_uid', { domain: '.xiaoniangao.cn' });
  Cookie.remove('login_xng_ticket', { domain: '.xiaoniangao.cn' });
  Cookie.remove('login_xng_nick_name', { domain: '.xiaoniangao.cn' });

  login();
};
