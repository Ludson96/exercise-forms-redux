import store from '../store';

const PERSONAL_FORM_SUBMIT = 'PERSONAL FORM';
const PROFESSIONAL_FORM_SUBMIT = 'PROFESSIONAL FORM';

export const personalInformation = (value) => (
  store.dispatch({
    type: PERSONAL_FORM_SUBMIT,
    value,
  })
);

export const professionalInformation = (value) => (
  store.dispatch({
    type: PROFESSIONAL_FORM_SUBMIT,
    value,
  })
);
