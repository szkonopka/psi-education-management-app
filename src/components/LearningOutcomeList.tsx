import React from 'react';
import DegreeCourseLearningOutcome from '../models/DegreeCourseLearningOutcome';
import SubjectLearningOutcome from '../models/SubjectLearningOutcome';
import MinisterialLearningOutcome from '../models/MinisterialLearningOutcome';
import LearningOutcome from '../models/LearningOutcome';
import { LearningOutcomeTypeToString } from '../models/LearningOutcome';
import './LearningOutcomeList.css';

type LearningOutcomeSection = {
    name: string;
    list: LearningOutcome[];
};

type LearningOutcomesProps = {
    degreeCourseLearningOutcomes: DegreeCourseLearningOutcome[];
    ministerialLearningOutcomes: MinisterialLearningOutcome[];
    subjectLearningOutcomes: SubjectLearningOutcome[];
};

type LearningOutcomeProps = {
    learningOutcome: LearningOutcome;
}

const LearningOutcomeItem = ({learningOutcome}: LearningOutcomeProps) => {
    return (
        <li className="subjects__subject-item row">
            <h5>{learningOutcome.symbol}</h5>
            <h4>{LearningOutcomeTypeToString(learningOutcome.type)}</h4>
            <h4>{learningOutcome.description}</h4>
        </li>
    );
};

const LearningOutcomeSection = ({name, list}: LearningOutcomeSection) => {
    const outcomes = list.map((outcome) => <LearningOutcomeItem learningOutcome={outcome}/>)
    return (
        <div className="subjects">
            <h2>{name}</h2>
            <ul>{outcomes}</ul>
        </div>
    );
};

const LearningOutcomeList = ({
        degreeCourseLearningOutcomes, 
        ministerialLearningOutcomes, 
        subjectLearningOutcomes} : LearningOutcomesProps) => {
    return (
        <div className="learning-outcomes">
            <h1 className="section-header">Efekty kształcenia</h1>
            <LearningOutcomeSection
                name="Ministerialne efekty uczenia"
                list={ministerialLearningOutcomes}
            />
            <LearningOutcomeSection
                name="Kierunkowe efekty uczenia"
                list={degreeCourseLearningOutcomes}
            />
            <LearningOutcomeSection
                name="Przedmiotowe efekty uczenia"
                list={subjectLearningOutcomes}
            />
        </div>
    );
};

export default LearningOutcomeList;