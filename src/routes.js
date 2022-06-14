import React, { Component, Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Logo from './assets/img/logo-1.jpg'

const Start = lazy(() => import('./component/home'));

//Parent Studnet component
const Home = lazy(() => import('./component/parent-student/home/home'));
const Dashboard1 = lazy(() => import('./component/parent-student/home/dashboard'));
const Billing = lazy(() => import('./component/parent-student/home/billing'));
const TutorInfo = lazy(() => import('./component/parent-student/home/tutorInfo'));
const TutorList = lazy(() => import('./component/parent-student/home/tutorList'));


const Student = lazy(() => import('./component/parent-student/student/student'));

const Login = lazy(() => import('./component/parent-student/login/login'));
const ParentLogin = lazy(() => import('./component/parent-student/login/parentLogin'));
const SignUp = lazy(() => import('./component/parent-student/login/signUp'));
const OTP = lazy(() => import('./component/parent-student/otp/otp'));
const Cancel = lazy(() => import('./component/parent-student/cancel/cancel'));
const Success = lazy(() => import('./component/parent-student/success/success'));

const Subject1 = lazy(() => import('./component/parent-student/subject/subject1'));
const Subject2 = lazy(() => import('./component/parent-student/subject/subject2'));
const Subject3 = lazy(() => import('./component/parent-student/subject/subject3'));
const Subject4 = lazy(() => import('./component/parent-student/subject/final'));

const Request = lazy(() => import('./component/parent-student/request/request'));

const Dashboard = lazy(() => import('./component/parent-student/dashboard/dashboard'));
const Classes = lazy(() => import('./component/parent-student/dashboard/classes/classes'));
const ClassesJoin = lazy(() => import('./component/parent-student/dashboard/classesJoin/classes'));
const Schedule = lazy(() => import('./component/parent-student/dashboard/schedule/schedule'));
const Assignments = lazy(() => import('./component/parent-student/dashboard/assignment/assignments'));
const Credits = lazy(() => import('./component/parent-student/dashboard/credits/credits'));
const Trasaction = lazy(() => import('./component/parent-student/dashboard/trasaction/trasaction'));
const InviteTeacher = lazy(() => import('./component/parent-student/dashboard/invite-teacher/inviteTeacher'));
const InviteParent = lazy(() => import('./component/parent-student/dashboard/invite-parent/inviteParent'));
const Setting = lazy(() => import('./component/parent-student/dashboard/setting/profileDetails'));

//tutot compnonent
const TutorLogin = lazy(() => import('./component/tutor/login/login'));
const TutorDashboard = lazy(() => import('./component/tutor/dashboard/dashboard'));

const TutorRequirement = lazy(() => import('./component/tutor/dashboard/allRequirement'));
const TutorClasses = lazy(() => import('./component/tutor/dashboard/classes'));
const TutorSubject = lazy(() => import('./component/tutor/dashboard/subject'));
const TutorSchedule = lazy(() => import('./component/tutor/dashboard/schedule'));
const TutorAssignment = lazy(() => import('./component/tutor/dashboard/assignment'));
const TutorEarning = lazy(() => import('./component/tutor/dashboard/earning'));
const TutorUpgrade = lazy(() => import('./component/tutor/dashboard/upgradeMemberShip'));
const TutorInviteTeacher = lazy(() => import('./component/tutor/dashboard/inviteTeacher'));
const TutorInviteParent = lazy(() => import('./component/tutor/dashboard/inviteParent'));
const TutorHelpCenter = lazy(() => import('./component/tutor/dashboard/helpCenter'));

const CreateClass = lazy(() => import('./component/tutor/dashboard/createClass'));
const TutorSignUp = lazy(() => import('./component/tutor/dashboard/tutorSignUp'));
const TutorSignUpPage = lazy(() => import('./component/tutor/dashboard/signUp'));
const OtpPage = lazy(() => import('./component/tutor/dashboard/otp'));

export default class RoutComponent extends Component {
    render() {

        const parentPage = '/parent-student';
        const tutorPage = '/tutor';

        return (
            <>
                <Suspense fallback={
                    <div style={{ textAlign: 'center', padding: '100px' }}>
                        <img alt="images" src={Logo} height="100px"></img>
                        <h3><i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em' }}></i></h3>
                    </div>
                }>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Start}></Route>

                            {/* Parent Student */}

                            <Route exact path={parentPage + '/'} render={props => (<> <Login {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/home'} render={props => (<> <Home {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/dashboard-1'} render={props => (<> <Dashboard1 {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/billing'} render={props => (<> <Billing {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/tutor-info'} render={props => (<> <TutorInfo {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/tutor-list'} render={props => (<> <TutorList {...props} /> </>)}></Route>

                            <Route exact path={parentPage + '/student'} render={props => (<> <Student {...props} /> </>)}></Route>

                            <Route exact path={parentPage + '/parent-login'} render={props => (<> <ParentLogin {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/sign-up'} render={props => (<> <SignUp {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/otp'} render={props => (<> <OTP {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/cancel'} render={props => (<> <Cancel {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/success'} render={props => (<> <Success {...props} /> </>)}></Route>

                            <Route exact path={parentPage + '/subject-1'} render={props => (<> <Subject1 {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/subject-2'} render={props => (<> <Subject2 {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/subject-3'} render={props => (<> <Subject3 {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/subject-final'} render={props => (<> <Subject4 {...props} /> </>)}></Route>

                            <Route exact path={parentPage + '/request'} render={props => (<> <Request {...props} /> </>)}></Route>

                            <Route exact path={parentPage + '/dashboard'} render={props => (<> <Dashboard {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/classes'} render={props => (<> <Classes {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/classes-1'} render={props => (<> <ClassesJoin {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/schedule'} render={props => (<> <Schedule {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/assignments'} render={props => (<> <Assignments {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/credits'} render={props => (<> <Credits {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/transaction'} render={props => (<> <Trasaction {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/invite-teacher'} render={props => (<> <InviteTeacher {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/invite-parent'} render={props => (<> <InviteParent {...props} /> </>)}></Route>
                            <Route exact path={parentPage + '/setting'} render={props => (<> <Setting {...props} /> </>)}></Route>

                            {/* Tutor */}
                            <Route exact path={tutorPage + '/'} render={props => (<> <TutorLogin {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/dashboard'} render={props => (<> <TutorDashboard {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/all-requirement'} render={props => (<> <TutorRequirement {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/classes'} render={props => (<> <TutorClasses {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/subject'} render={props => (<> <TutorSubject {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/schedule'} render={props => (<> <TutorSchedule {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/assignment'} render={props => (<> <TutorAssignment {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/earning'} render={props => (<> <TutorEarning {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/upgrade-membership'} render={props => (<> <TutorUpgrade {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/invite-teacher'} render={props => (<> <TutorInviteTeacher {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/invite-parent'} render={props => (<> <TutorInviteParent {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/help-center'} render={props => (<> <TutorHelpCenter {...props} /> </>)}></Route>

                            <Route exact path={tutorPage + '/create-class'} render={props => (<> <CreateClass {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/tutor-sign-up'} render={props => (<> <TutorSignUp {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/sign-up'} render={props => (<> <TutorSignUpPage {...props} /> </>)}></Route>
                            <Route exact path={tutorPage + '/tutor-otp'} render={props => (<> <OtpPage {...props} /> </>)}></Route>
                        </Switch>
                    </Router>
                </Suspense>
            </>
        );
    }
}