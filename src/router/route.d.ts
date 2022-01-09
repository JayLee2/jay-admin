import { FC } from 'react';

export interface Route {
    path?: string,
    exact?: boolean,
    routes?: Route[],
    component?: FC,
    name?: string,
    hidden?: true,
}