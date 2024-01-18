/* eslint-disable */
export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === 'string') {
            this._name = name;
        }
        if (typeof length === 'number') {
            this._length = length;
        }
        if (Array.isArray(students)) {
            this._students = students;
        }
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        }
    }


    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength === 'number') {
            this._length = newLength;
        }
    }


    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (Array.isArray(newStudents)) {
            this._students = newStudents;
        }
    }
}
