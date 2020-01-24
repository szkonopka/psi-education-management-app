import React, { Component } from 'react';
import Subject from '../models/Subject';
import './SubjectList.css';
import './SubjectItem.css';

type SubjectsProps = {
    subjectList: Subject[]
};

type SubjectItemProps = {
    subject: Subject
}

export const SubjectItem = ({subject}: SubjectItemProps) => {
    return (
        <li className="subjects__subject-item">
            <h5>{subject.code}</h5>
            <h4>{subject.polishName}</h4>
            <ul className="subjects__subject-item__stats">
                <li>ECTS <span className="label">{subject.ectsSum}</span> </li>
                <li>CNPS <span className="label">{subject.cnpsSum}</span></li>
                <li>ZZU <span className="label">{subject.zzuSum}</span></li>
                <li>{subject.courses ? subject.courses.length : "Brak kursów"}</li>
            </ul>
        </li>
    );
};

export const SubjectList = ({subjectList}: SubjectsProps) => {
    const subjects = subjectList.map((subject) => <SubjectItem subject={subject}/> );
    return (
        <div className="subjects">
            <h1 className="section-header">Przedmioty</h1>
            <ul className="row subjects-list">{subjects}</ul>
        </div>
        
    );
};