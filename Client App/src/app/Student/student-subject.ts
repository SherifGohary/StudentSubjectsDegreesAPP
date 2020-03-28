import {Student} from './student';
import {Subject} from './subject';
export class StudentSubject {
    constructor(public StID?:number,
        public SubID?:number,
        public Degree?:number,
        public Student?:Student,
        public Subject?:Subject
        ){}
}
