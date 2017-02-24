import { REQUEST_SUBJECTS, RECEIVE_SUBJECTS } from './types';
import fetch from 'isomorphic-fetch'

export const fetchSubjects = () => {
  return (dispatch, getState) => {
    dispatch(requestSubjects);
    fetch('/api/subject')
      .then(resp => resp.json())
      .then(resp => dispatch(receiveSubjects(resp.subjects)));
  }
}

const requestSubjects = () => {
  return {
    type: REQUEST_SUBJECTS
  }
}

const receiveSubjects = subjects => {
  return {
    type: RECEIVE_SUBJECTS,
    payload: subjects
  }
}
