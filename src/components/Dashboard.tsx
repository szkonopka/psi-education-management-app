import React, { Component } from 'react';
import Menu from './Menu';
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
    Route
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
                        <Route path="/ministerial-outcomes">
                            <LearningOutcomeList 
                                outcomes={GetMockedMinisterialLearningOutcomes()}
                                outcomesName="Ministerialne efekty kształcenia"
                                outcomesPath="/ministerial-outcomes"
                            />
                        </Route>
                        <Route path="/degree-course-outcomes">
                            <LearningOutcomeList 
                                outcomes={GetMockedDegreeCourseLearningOutcomes()}
                                outcomesName="Kierunkowe efekty kształcenia"
                                outcomesPath="/degree-course-outcomes"
                            />
                        </Route>
                        <Route path="/subject-outcomes">
                            <LearningOutcomeList 
                                outcomes={GetMockedSubjectLearningOutcomes()}
                                outcomesName="Przedmiotowe efekty kształcenia"
                                outcomesPath="/subject-outcomes"
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