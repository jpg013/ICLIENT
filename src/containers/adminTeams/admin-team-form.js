import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ClearIcon from '../../icons/clear.icon';
import classNames from 'classnames';
import './admin-team-form.css';

class AdminTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: undefined,
      errors: []
    };
  }

  removeInputFocus() {
    if (!this.state.formRef) return;
    this.state.formRef.querySelectorAll('.addTeamForm-formField').forEach(cur => cur.classList.remove('addTeamForm-formField_active'));
  }

  addInputFocus(e) {
    this.removeInputFocus();
    e.target.parentElement.classList.add('addTeamForm-formField_active');
  }

  renderErrors() {
    return this.state.errors.map(cur => <span>{cur}</span>)
  }

  onSubmit() {
    this.setState({
      errors: []
    });

    const name = this.state.formRef.querySelector("#add-team-form-name").value;
    const neo4jConnection = this.state.formRef.querySelector("#add-team-form-connection").value;
    const neo4jAuth = this.state.formRef.querySelector("#add-team-form-auth").value;
    const imageURL = this.state.formRef.querySelector("#add-team-image-url").value;

    if (!name.trim() || !neo4jConnection.trim() || !neo4jAuth.trim() || !imageURL.trim()) {
      return this.setState({ errors: ['Please fill out all required fields'] });
    }

    const data = { name, neo4jConnection, neo4jAuth, imageURL};

    if (this.props.data) {
      data.id = this.props.data.get('id');
    }

    const formType = data.id ? 'updateTeam' : 'addTeam';
    this.props.submitHandler(formType, data);
  }

  render() {
    const setFormRef = el => {
      if (!el || this.state.formRef) return;
      this.setState({formRef: el});
    }

    const getBtnClassNames = () => {
      return classNames('addTeamForm-actionBtn', {'addTeamForm-actionBtn_submitting': this.props.status === 'submitting'});
    }

    const getDefaultNameVal = () => this.props.data ? this.props.data.get('name') : '';
    const getDefaultConnectionVal = () => this.props.data ? this.props.data.get('neo4jConnection') : '';
    const getDefaultAuthVal = () => this.props.data ? this.props.data.get('neo4jAuth') : '';
    const getDefaultImageUrl = () => this.props.data ? this.props.data.get('logoURL') : '';
    const getFormTitle = () => this.props.data ? `Edit Team ${this.props.data.get('name')}` : 'Create a New Team';

    return (
      <div>
        <div className="addTeamForm-header">
          <div className="addTeamForm-header_title">{getFormTitle()}</div>
          <div className="addTeamForm-header_subTitle">{!this.props.data && 'Complete the form below to create a new team'}</div>
          <div className="addTeamForm-header_close" onClick={this.props.closeHandler}>
            <ClearIcon size={24} className="addTeamForm-header_closeIcon" />
          </div>
        </div>
        <div className="addTeamForm-form" ref={input => setFormRef(input)}>
          <div className="addTeamForm-errors">{this.renderErrors()}</div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-name" className="addTeamForm-formField_label">Team Name</label>
            <input defaultValue={getDefaultNameVal()} id="add-team-form-name" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="addTeamForm-formField_input" placeholder="Team Name" />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-connection" className="addTeamForm-formField_label">Connection String</label>
            <input defaultValue={getDefaultConnectionVal()} id="add-team-form-connection" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="addTeamForm-formField_input" placeholder="Neo4j Connection String" />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-auth" className="addTeamForm-formField_label">Auth String</label>
            <input defaultValue={getDefaultAuthVal()} id="add-team-form-auth" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="addTeamForm-formField_input" placeholder="Neo4j Auth String" />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-image-url" className="addTeamForm-formField_label">Team Image URL</label>
            <input defaultValue={getDefaultImageUrl()} id="add-team-image-url" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="addTeamForm-formField_input" placeholder="Image URL" />
            <div className="addTeamForm-formField_indicator"></div>
          </div>
        </div>
        <div className="addTeamForm-actions">
          <div className={getBtnClassNames()} onClick={() => this.onSubmit()}>Submit</div>
        </div>
      </div>
    );
  }
}

AdminTeamForm.propTypes = {
  closeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  model: PropTypes.object.isRequired
}

export default AdminTeamForm;
