import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { personalForm, professionalForm } = this.props;
    console.log(this.props);
    // Recupere as informações do seu estado criado no Redux
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {personalForm.name}
        </div>
        <div>
          Email:
          {personalForm.email}
        </div>
        <div>
          CPF:
          {personalForm.cpf}
        </div>
        <div>
          Endereço:
          {personalForm.address}
        </div>
        <div>
          Cidade:
          {personalForm.city}
        </div>
        <div>
          Estado:
          {personalForm.uf}
        </div>
        <div>
          Currículo:
          {professionalForm.curriculum}
        </div>
        <div>
          Cargo:
          {professionalForm.job}
        </div>
        <div>
          Descrição do cargo:
          {professionalForm.description}
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalForm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
  }).isRequired,
  professionalForm: PropTypes.shape({
    description: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  personalForm: state.personalFormReducer,
  professionalForm: state.professionalFormReducer,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
