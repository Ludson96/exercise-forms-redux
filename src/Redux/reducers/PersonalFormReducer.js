const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const PERSONAL_FORM_SUBMIT = 'PERSONAL FORM';

const personalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM_SUBMIT:
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      cpf: action.value.cpf,
      address: action.value.address,
      city: action.value.city,
      uf: action.value.uf,
    };
  default:
    return state;
  }
};

export default personalFormReducer;
