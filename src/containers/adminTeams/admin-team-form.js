import React, { PropTypes, Component } from 'react';
import { is, Map } from 'immutable';
import { isModelValid } from '../../services/teams.service';
import { updateAdminDockModel } from '../../actions/admin-dock.actions';
import ClearIcon from '../../icons/clear.icon';
import ErrorIcon from '../../icons/error.icon';
import LoadingSpinner from '../../components/loadingSpinner/loading-spinner';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import './admin-team-form.css';

class AdminTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: undefined,
      model: props.model
    };
  }

  componentWillReceiveProps(props) {
    this.setState({model: props.model});
    if (props.model.get('state') === 'pristine') {
      setTimeout(() => {
        this.props.closeHandler();
      }, 1000);
    }
  }

  removeInputFocus() {
    if (!this.state.formRef) return;
    this.state.formRef.querySelectorAll('.addTeamForm-formField').forEach(cur => cur.classList.remove('addTeamForm-formField_active'));
  }

  addInputFocus(e) {
    this.removeInputFocus();
    e.target.parentElement.classList.add('addTeamForm-formField_active');
  }

  onSubmit() {
    if (!isModelValid(this.state.model)) return;
    this.props.submitHandler(this.state.model);
  }

  render() {
    const setFormRef = el => {
      if (!el || this.state.formRef) return;
      this.setState({formRef: el});
    }

    const isFormValid = () => isModelValid(this.state.model);
    const isFormSubmitting = () => this.state.model.get('state') === 'persisting';
    const isFormSuccess = () => this.state.model.get('state') === 'pristine';

    const getBtnClassNames = () => {
      return classNames(
        'addTeamForm-actionBtn',
        {'addTeamForm-actionBtn_disabled': !isFormValid()},
        {'addTeamForm-actionBtn_submitting': isFormSubmitting() || isFormSuccess()
      });
    }

    const getDefaultNameVal = () => '';
    const getDefaultConnectionVal = () => '';
    const getDefaultAuthVal = () => '';
    const getDefaultImageUrl = () => '';

    const getFormTitle = () => this.state.model.get('tmpId') ? 'Create a new team' : this.state.model.get('name');
    const getFormSubtitle = () => this.state.model.get('tmpId') ? 'Complete the form below to create a new team' : null;

    const updateModel = update => {
      const updatedModel = this.state.model.merge(Map(Object.assign({}, update)));
      this.setState({model: updatedModel});
    }
    const renderBtnLoading = () => isFormSubmitting() || isFormSuccess() ? ( <div className="addTeamForm-actionBtn_loading"><LoadingSpinner success={isFormSuccess()}/></div> ) : undefined;

    const renderError = () => {
      return (
        <div className="addTeamForm-error" key="addTeamForm-errorTransitionkey">
          <div className="addTeamForm-error_icon"><ErrorIcon /></div>
          <span className="addTeamForm-error_text">{this.props.error}</span>
        </div>
      )
    }

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
          <ReactCSSTransitionGroup
            transitionName="fadeIn"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={300}>
            {this.props.error && renderError()}
          </ReactCSSTransitionGroup>

          <div className="addTeamForm-formField">
            <label htmlFor="add-team-form-name" className="addTeamForm-formField_label">Team Name</label>
            <input
              defaultValue={getDefaultNameVal()}
              id="add-team-form-name"
              onBlur={e => this.removeInputFocus(e)}
              onFocus={e => this.addInputFocus(e)}
              onChange={e => updateModel({name: e.target.value})}
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
              onChange={e => updateModel({neo4jConnection: e.target.value})}
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
              onChange={e => updateModel({neo4jAuth: e.target.value})}
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
              onChange={e => updateModel({imageURL: e.target.value})}
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
  model: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default AdminTeamForm;
