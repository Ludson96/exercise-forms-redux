const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const PROFESSIONAL_FORM_SUBMIT = 'PROFESSIONAL FORM';

const professionalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM_SUBMIT:
    return {
      ...state,
      curriculum: action.value.curriculum,
      job: action.value.job,
      description: action.value.description,
    };
  default:
    return state;
  }
};

export default professionalFormReducer;
