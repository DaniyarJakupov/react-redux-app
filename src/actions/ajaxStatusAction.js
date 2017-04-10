export const BEGIN_AJAX_CALLS = "BEGIN_AJAX_CALLS";
export const AJAX_CALL_ERROR = 'AJAX_CALL_ERROR';

export function beginAjaxCall() {
  return {
    type: BEGIN_AJAX_CALLS
  };
}

export function ajaxCallError() {
  return {
    type: AJAX_CALL_ERROR
  };
}
