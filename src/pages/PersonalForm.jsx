import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { personalInformation } from '../Redux/actions';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

   handleChangeSubmit = () => {
     const { history } = this.props;
     personalInformation(this.state);
     history.push('/professionalform');
   }

   render() {
     const { name, email, cpf, address, city, uf } = this.state;
     const ufList = [
       'Rio de Janeiro',
       'Minas Gerais',
       'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
     return (
       <fieldset>
         <Input
           label="Nome: "
           type="text"
           onChange={ this.handleChange }
           value={ name }
           name="name"
           required
         />
         <Input
           label="Email: "
           type="text"
           onChange={ this.handleChange }
           value={ email }
           name="email"
           required
         />
         <Input
           label="Cpf: "
           type="text"
           onChange={ this.handleChange }
           value={ cpf }
           name="cpf"
           required
         />
         <Input
           label="Endereço: "
           type="text"
           onChange={ this.handleChange }
           value={ address }
           name="address"
           required
         />
         <Input
           label="Cidade: "
           type="text"
           onChange={ this.handleChange }
           name="city"
           value={ city }
         />
         <Select
           defaultOption="Selecione"
           onChange={ this.handleChange }
           value={ uf }
           label="Estado: "
           id="uf"
           name="uf"
           options={ ufList }
         />
         <Button
           type="button"
           label="Enviar"
           onClick={ this.handleChangeSubmit }
         />
       </fieldset>
     );
   }
}

PersonalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PersonalForm;
