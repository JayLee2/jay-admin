const dev = {
  apiDomain: 'http://localhost:3000',
  loginDomain: 'http://uni-login.xiaoniangao.cn',
};

const prod = {
  apiDomain: 'http://localhost:3000',
  loginDomain: 'http://uni-login.xiaoniangao.cn',
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
