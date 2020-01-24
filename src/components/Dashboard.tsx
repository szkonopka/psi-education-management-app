import React, { Component } from 'react';
import Menu from './Menu';
import { Navigation } from './Navigation';
import { 
    GetMockedSubjects, 
    GetMockedDegreeCourseLearningOutcomes, 
    GetMockedMinisterialLearningOutcomes, 
    GetMockedSubjectLearningOutcomes 
  } from '../mocks/MockedObjects';
import './Dashboard.css';
import { SubjectList } from './SubjectList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SidePanel from './SidePanel';
import LearningOutcomeList from './LearningOutcomeList';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div className="dashboard row">
                    <Menu/>
                    <Switch>
                        <Route path="/subjects">
                            <SubjectList subjectList={GetMockedSubjects()}/>
                        </Route>
                        <Route path="/outcomes">
                            <LearningOutcomeList 
                                degreeCourseLearningOutcomes={GetMockedDegreeCourseLearningOutcomes()}
                                ministerialLearningOutcomes={GetMockedMinisterialLearningOutcomes()}
                                subjectLearningOutcomes={GetMockedSubjectLearningOutcomes()}
                            />
                        </Route>
                    </Switch>
                    <SidePanel/>
                </div>
            </Router>
        )
    }
};

export default Dashboard;