import React, { PropTypes, Component } from 'react';
import { is } from 'immutable';
import { isModelValid } from '../../services/teams.service';
import ClearIcon from '../../icons/clear.icon';
import LoadingSpinner from '../../components/loadingSpinner/loading-spinner';
import classNames from 'classnames';
import './admin-team-form.css';

class AdminTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: undefined,
      errors: [],
      updatedModel: props.persistedModel
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
    if (!isModelValid(this.state.updatedModel)) return;
    const updatedModel = this.state.updatedModel.set('state', 'persisting');
    // Reset Errors
    this.setState({
      errors: [],
      updatedModel
    });
    this.props.submitHandler(updatedModel);
  }

  render() {
    const setFormRef = el => {
      if (!el || this.state.formRef) return;
      this.setState({formRef: el});
    }

    const isFormValid = () => isModelValid(this.state.updatedModel);
    const isFormSubmitting = () => this.state.updatedModel.get('state') === 'persisting';
    const isFormPristine = () => is(this.props.persistedModel, this.state.updatedModel);

    const getBtnClassNames = () => {
      return classNames(
        'addTeamForm-actionBtn',
        {'addTeamForm-actionBtn_disabled': isFormPristine() || !isFormValid()},
        {'addTeamForm-actionBtn_submitting': isFormSubmitting()
      });
    }

    const getDefaultNameVal = () => '';
    const getDefaultConnectionVal = () => '';
    const getDefaultAuthVal = () => '';
    const getDefaultImageUrl = () => '';

    const getFormTitle = () => this.props.persistedModel.get('state') === 'new' ? 'Create a new team' : this.props.persistedModel.get('name');
    const getFormSubtitle = () => this.props.persistedModel.get('state') === 'new' ? 'Complete the form below to create a new team' : null;
    const handleNameChange = val => this.setState({updatedModel: this.state.updatedModel.set('name', val)});
    const handleConnectionChange = val => this.setState({updatedModel: this.state.updatedModel.set('neo4jConnection', val)});
    const handleAuthChange = val => this.setState({updatedModel: this.state.updatedModel.set('neo4jAuth', val)});
    const handleImageUrlChange = val => this.setState({updatedModel: this.state.updatedModel.set('imageURL', val)});

    const renderBtnLoading = () => isFormSubmitting() ? ( <div className="addTeamForm-actionBtn_loading"><LoadingSpinner /></div> ) : undefined;

    return (
      <div>
        <div className="addTeamForm-header">
          <div className="addTeamForm-header_title">{getFormTitle()}</div>
          <div className="addTeamForm-header_subTitle">{getFormSubtitle()}</div>
          <div className="addTeamForm-header_close" onClick={this.props.closeHandler}>
            <ClearIcon size={24} className="addTeamForm-header_closeIcon" />
          </div>
        </div>
        <div className="addTeamForm-form" ref={input => setFormRef(input)}>
          <div className="addTeamForm-errors">{this.renderErrors()}</div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-name" className="addTeamForm-formField_label">Team Name</label>
            <input
              defaultValue={getDefaultNameVal()}
              id="add-team-form-name"
              onBlur={e => this.removeInputFocus(e)}
              onFocus={e => this.addInputFocus(e)}
              onChange={e => handleNameChange(e.target.value)}
              readOnly={isFormSubmitting()}
              className="addTeamForm-formField_input"
              placeholder="Team Name"
              />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-connection" className="addTeamForm-formField_label">Connection String</label>
            <input
              defaultValue={getDefaultConnectionVal()}
              id="add-team-form-connection"
              onBlur={e => this.removeInputFocus(e)}
              onFocus={e => this.addInputFocus(e)}
              onChange={e => handleConnectionChange(e.target.value)}
              className="addTeamForm-formField_input"
              readOnly={isFormSubmitting()}
              placeholder="Neo4j Connection String"
              />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-auth" className="addTeamForm-formField_label">Auth String</label>
            <input
              defaultValue={getDefaultAuthVal()}
              id="add-team-form-auth"
              onBlur={e => this.removeInputFocus(e)}
              onFocus={e => this.addInputFocus(e)}
              onChange={e => handleAuthChange(e.target.value)}
              className="addTeamForm-formField_input"
              readOnly={isFormSubmitting()}
              placeholder="Neo4j Auth String"
              />
            <div className="addTeamForm-formField_indicator"></div>
          </div>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-image-url" className="addTeamForm-formField_label">Team Image URL</label>
            <input
              defaultValue={getDefaultImageUrl()}
              id="add-team-image-url"
              onBlur={e => this.removeInputFocus(e)}
              onFocus={e => this.addInputFocus(e)}
              onChange={e => handleImageUrlChange(e.target.value)}
              className="addTeamForm-formField_input"
              readOnly={isFormSubmitting()}
              placeholder="Image URL"
              />
            <div className="addTeamForm-formField_indicator"></div>
          </div>
        </div>
        <div className="addTeamForm-actions">
          <div className={getBtnClassNames()} onClick={() => this.onSubmit()}>
            {renderBtnLoading()}
            <span className="addTeamForm-actionBtn_submitText">Submit</span>
          </div>
        </div>
      </div>
    );
  }
}

AdminTeamForm.propTypes = {
  closeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  persistedModel: PropTypes.object.isRequired
}

export default AdminTeamForm;
