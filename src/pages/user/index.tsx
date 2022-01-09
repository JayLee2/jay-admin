import React, { useContext } from 'react';
import AppContext from '@/context';
import { getUserInfoApi } from '@/request/api/user';

const User = () => {
  const { state, dispatch } = useContext(AppContext);

  const getUserInfo = () => getUserInfoApi({ id: 2 });
  return (
    <div>
      用户管理的内容啊啊啊！！！{state.user.userName}
      <button onClick={() => getUserInfo()}>获取用户</button>
    </div>
  );
};

export default User;
