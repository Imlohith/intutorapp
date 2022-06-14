import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home          = lazy(() => import('./home/home'));
const Dashboard1          = lazy(() => import('./home/dashboard1'));
const Billing          = lazy(() => import('./home/billing'));
const TutorInfo          = lazy(() => import('./home/tutorInfo'));
const TutorList          = lazy(() => import('./home/tutorList'));


const Student          = lazy(() => import('./student/student'));

const Login         = lazy(() => import('./login/login'));
const ParentLogin  = lazy(() => import('./login/parentLogin'));
const SignUp        = lazy(() => import('./login/signUp'));
const OTP           = lazy(() => import('./otp/otp'));
const Cancel        = lazy(() => import('./cancel/cancel'));
const Success       = lazy(() => import('./success/success'));

const Subject1        = lazy(() => import('./subject/subject1'));
const Subject2        = lazy(() => import('./subject/subject2'));
const Subject3        = lazy(() => import('./subject/subject3'));
const Subject4        = lazy(() => import('./subject/final'));

const Request        = lazy(() => import('./request/request'));

//dashboard
const Dashboard     = lazy(() => import('./dashboard/dashboard'));
const Classes       = lazy(() => import('./dashboard/classes/classes'));
const Classes1       = lazy(() => import('./dashboard/classes1/classes'));
const Schedule      = lazy(() => import('./dashboard/schedule/schedule'));
const Assignments   = lazy(() => import('./dashboard/assignment/assignments'));
const Credits       = lazy(() => import('./dashboard/credits/credits'));
const Trasaction    = lazy(() => import('./dashboard/trasaction/trasaction'));
const InviteTeacher = lazy(() => import('./dashboard/invite-teacher/inviteTeacher'));
const InviteParent  = lazy(() => import('./dashboard/invite-parent/inviteParent'));
const Setting       = lazy(() => import('./dashboard/setting/profileDetails'));


//main routs
const page = '/parent-student';

//page routes
const routes = [
  {
    path: page,
    exact: true,
    main: () => <Login />
  },
  {
    path: page+"/home",
    exact: true,
    main: () => <Home />
  },
  {
    path: page+"/dashboard-1",
    exact: true,
    main: () => <Dashboard1 />
  },
  {
    path: page+"/billing",
    exact: true,
    main: () => <Billing />
  },
  {
    path: page+"/tutor-info",
    exact: true,
    main: () => <TutorInfo />
  },
  {
    path: page+"/tutor-list",
    exact: true,
    main: () => <TutorList />
  },
  {
    path: page+"/student",
    exact: true,
    main: () => <Student />
  },
  {
    path: page+"/parent-login",
    exact: true,
    main: () => <ParentLogin />
  },
  {
    path: page+"/sign-up",
    exact: true,
    main: () => <SignUp />
  },
  {
    path: page+"/otp",
    exact: true,
    main: () => <OTP />
  },
  {
    path: page+"/cancel",
    exact: true,
    main: () => <Cancel />
  },
  {
    path: page+"/success",
    exact: true,
    main: () => <Success />
  },
  {
    path: page+"/subject-1",
    exact: true,
    main: () => <Subject1 />
  },
  {
    path: page+"/subject-2",
    exact: true,
    main: () => <Subject2 />
  },
  {
    path: page+"/subject-3",
    exact: true,
    main: () => <Subject3 />
  },
  {
    path: page+"/subject-final",
    exact: true,
    main: () => <Subject4 />
  },
  {
    path: page+"/request",
    exact: true,
    main: () => <Request />
  },
  {
    path: page+"/dashboard",
    exact: true,
    main: () => <Dashboard />
  },
  {
    path: page+"/classes",
    exact: true,
    main: () => <Classes />
  },
  {
    path: page+"/classes-1",
    exact: true,
    main: () => <Classes1 />
  },
  {
    path: page+"/schedule",
    exact: true,
    main: () => <Schedule />
  },
  {
    path: page+"/assignments",
    exact: true,
    main: () => <Assignments />
  },
  {
    path: page+"/credits",
    exact: true,
    main: () => <Credits />
  },
  {
    path: page+"/transaction",
    exact: true,
    main: () => <Trasaction />
  },
  {
    path: page+"/invite-teacher",
    exact: true,
    main: () => <InviteTeacher />
  },
  {
    path: page+"/invite-parent",
    exact: true,
    main: () => <InviteParent />
  },
  {
    path: page+"/setting",
    exact: true,
    main: () => <Setting />
  }
];

export default function SidebarExample() {
  return (
    <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
    </Router>
  );
}
