import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.stateReset();
  };
  handleLicenceChange = event => {
    this.setState({ licence: event.currentTarget.checked });
  };
  stateReset = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleChange}
          />
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}
