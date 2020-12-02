import { ComponentType, LazyExoticComponent } from 'react';

export enum AppRoutes {
  assets = 'assets',
  vulnerabilities = 'vulnerabilities',
  dashboard = 'dashboard',
  profile = 'profile',
  login = 'login',
}

export interface AppRoute {
  key: AppRoutes;
  path: string;
  isDefault?: boolean;
  component: LazyExoticComponent<ComponentType<any>>;
}
