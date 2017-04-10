// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {BEGIN_AJAX_CALLS} from '../actions/ajaxStatusAction';
import {AJAX_CALL_ERROR} from '../actions/ajaxStatusAction';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) === '_SUCCESS';
}

export default function authorReducer(state = initialState.numAjaxCallsInProgress, action) {
  if(action.type === BEGIN_AJAX_CALLS) {
    return state + 1;
  } else if(action.type === AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}

