import React, { lazy, ReactNode } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
const Login = lazy(() => import("../pages/Login"));
const Main = lazy(() => import("../pages/Main"));
const Profile = lazy(() => import("../pages/Profile"));
const lazyLoad = (Comp: ReactNode) => {
    return (
        <React.Suspense fallback={<div>loading</div>}>
          {Comp}
        </React.Suspense>
    );
}
interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
};
interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
};
export const rootRouter = [
    {
		path: "/",
		element: lazyLoad(<Main/>)
	},
	{
		path: "/login",
		element: lazyLoad(<Login/>),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		path: "/profile",
		element: lazyLoad(<Profile/>),
		meta: {
			requiresAuth: true,
			title: "个人中心",
			key: "profile"
		}
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
  ];