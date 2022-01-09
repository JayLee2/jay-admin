import React, { useContext } from 'react';
import AppContext from '@/context';

const Project = () => {
  const { state, dispatch } = useContext(AppContext);
  return <div>项目管理的内容</div>;
};

export default Project;
