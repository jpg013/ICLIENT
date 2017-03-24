import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { fetchTeams } from '../../actions/admin.actions';
import ClearIcon from '../../icons/clear.icon';
import classNames from 'classnames';
import './user-form.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: undefined,
      errors: [],
      selectedTeam: undefined,
      selectedRole: undefined,
      btnState: undefined
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
    if (this.props.userModel.get('state') === 'new') return;
    // set the selected team and role
    this.setState({
      selectedTeam: this.props.userModel.get('team')._id,
      selectedRole: this.props.userModel.get('role')
    });
  }

  componentWillReceiveProps(nextProps) {
    const prevModelState = this.props.userModel.get('state');
    const nextModelState = nextProps.userModel.get('state');
    if (prevModelState === nextModelState) return;
    let btnState;
    switch(nextModelState) {
      case 'new':
        btnState = 'normal';
        break;
      case 'persisting':
        btnState = 'loading';
        break;
      case 'clean':
        btnState = 'success';
        break;
    }
    this.setState({ btnState });
  }

  removeInputFocus() {
    if (!this.state.formRef) return;
    this.state.formRef.querySelectorAll('.userForm-formField').forEach(cur => cur.classList.remove('userForm-formField_active'));
  }

  addInputFocus(e) {
    this.removeInputFocus();
    e.target.parentElement.classList.add('userForm-formField_active');
  }

  renderErrors() {
    return this.state.errors.map(cur => <span>{cur}</span>)
  }

  validateCreateFields(data) {
    return (data.firstName.trim() && data.lastName.trim() && data.email.trim() && data.password.trim());
  }

  validateEditFields(data) {
    return true;
  }

  onSubmit() {
    this.setState({ errors: [] });
    const firstName = this.state.formRef.querySelector("#user-form-first-name").value;
    const lastName = this.state.formRef.querySelector("#user-form-last-name").value;
    const email = this.state.formRef.querySelector("#user-form-email").value;
    const password = this.state.formRef.querySelector("#user-form-password").value;
    const teamId = this.state.selectedTeam;
    const role = this.state.selectedRole || 'user';

    const data = { firstName, lastName, email, password, teamId, role };

    const isCreating = this.props.userModel.get('state') === 'new';

    const isValid = isCreating ? this.validateCreateFields(data) : this.validateEditFields(data);

    if (!isValid) {
      return this.setState({ errors: ['Please fill out all required fields'] });
    }

    const updatedModel = this.props.model.merge(Map(data));
    this.props.submitHandler(updatedModel);
  }

  render() {
    const setFormRef = el => {
      if (!el || this.state.formRef) return;
      this.setState({formRef: el});
    }

    const getBtnClassNames = () => {
      return classNames(
        'userForm-actionBtn',
        'actionItem',
        {'userForm-actionBtn_loading': this.state.btnState === 'loading'},
        {'userForm-actionBtn_success': this.state.btnState === 'success'}
      );
    }

    const getTeamOptions = () => {
      const defaultOptions = [(<option key="choose team" value="Choose Team" disabled>Choose Team</option>)];
      if (this.props.teamList.size === 0) return defaultOptions;
      const teamSelectOptions = this.props.teamList.map(cur => <option key={cur.get('id')} value={cur.get('id')}>{cur.get('name')}</option>).toArray();
      return this.state.selectedTeam ? teamSelectOptions : defaultOptions.concat(teamSelectOptions);
    }

    const handleTeamSelectChange = val => this.setState({selectedTeam: val});
    const getTitle = () => this.props.userModel.get('state') === 'new' ? <span>Create a new user</span> : <span>Edit {this.props.userModel.get('email')}</span>;
    const getDefaultEmailValue = () => this.props.userModel.get('state') === 'new' ? '' : this.props.userModel.get('email');
    const getDefaultFirstnameValue = () => this.props.userModel.get('state') === 'new' ? '' : this.props.userModel.get('firstName');
    const getDefaultLastnameValue = () => this.props.userModel.get('state') === 'new' ? '' : this.props.userModel.get('lastName');

    return (
      <div>
        <div className="userForm-header">
          <div className="userForm-header_title">{getTitle()}</div>
          <div className="userForm-header_close" onClick={this.props.closeHandler}>
            <ClearIcon size={24} className="userForm-header_closeIcon" />
          </div>
        </div>
        <div className="userForm-form" ref={input => setFormRef(input)}>
          <div className="userForm-errors">{this.renderErrors()}</div>

          <div className="userForm-formField">
            <label htmlFor="user-form-email" className="userForm-formField_label userForm-formFieldRequired_label">Email</label>
            <input defaultValue={getDefaultEmailValue()} id="user-form-email" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="userForm-formField_input" placeholder="Email" />
            <div className="userForm-formField_indicator"></div>
          </div>

          <div className="userForm-formField">
            <label htmlFor="user-form-password" className="userForm-formField_label userForm-formFieldRequired_label">Password</label>
            <input type="password" id="user-form-password" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="userForm-formField_input" placeholder="Password" />
            <div className="userForm-formField_indicator"></div>
          </div>

          <div className="userForm-formField">
            <label htmlFor="user-form-first-name" className="userForm-formField_label userForm-formFieldRequired_label">First Name</label>
            <input defaultValue={getDefaultFirstnameValue()} id="user-form-first-name" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="userForm-formField_input" placeholder="First Name" />
            <div className="userForm-formField_indicator"></div>
          </div>

          <div className="userForm-formField">
            <label htmlFor="user-form-last-name" className="userForm-formField_label userForm-formFieldRequired_label">Last Name</label>
            <input defaultValue={getDefaultLastnameValue()} id="user-form-last-name" onBlur={e => this.removeInputFocus(e)} onFocus={e => this.addInputFocus(e)} className="userForm-formField_input" placeholder="Last Name" />
            <div className="userForm-formField_indicator"></div>
          </div>

          <div className="userForm-formField">
            <label htmlFor="user-form-team" className="userForm-formField_label userForm-formFieldRequired_label">Team</label>
            <select
              onChange={e => handleTeamSelectChange(e.target.value)}
              id="user-form-team"
              value={this.state.selectedTeam ? this.state.selectedTeam : 'Choose Team'}
              className="userForm-formField_select"
              >
              {getTeamOptions()}
            </select>
            <div className="userForm-formField_indicator"></div>
          </div>

          <div className="userForm-formField">
            <label htmlFor="user-form-roles" className="userForm-formField_label">Role</label>
            <div className="userForm-roles">
              <div className="userForm-role">
                <div className="regularCheckbox">
          	  		<input
                    type="checkbox"
                    value="sys-admin"
                    id="sys-admin-role-checkbox"
                    name="sys-admin-role-checkbox"
                    checked={this.state.selectedRole === 'sys-admin'}
                    onChange={() => this.setState({selectedRole: 'sys-admin'})}
                    />
          		  	<label htmlFor="sys-admin-role-checkbox"></label>
                  <span className="userform-role_label">Sys Admin</span>
          	  	</div>
              </div>

              <div className="userForm-role">
                <div className="regularCheckbox">
          	  		<input
                    type="checkbox"
                    id="team-admin-role-checkbox"
                    name="team-admin-role-checkbox"
                    checked={this.state.selectedRole === 'team-admin'}
                    onChange={() => this.setState({selectedRole: 'team-admin'})}
                    />
          		  	<label htmlFor="team-admin-role-checkbox"></label>
                  <span className="userform-role_label">Team Admin</span>
          	  	</div>
              </div>
            </div>
          </div>

        </div>
        <div className="userForm-actions">
          <div className={getBtnClassNames()} onClick={() => this.onSubmit()}>Submit</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teamList: state.getIn(['admin', 'teams', 'list']),
    userModel: state.getIn(['slider', 'model'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams())
  }
}

const ConnectedUserForm = connect(mapStateToProps, mapDispatchToProps)(UserForm);

UserForm.propTypes = {
  closeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  model: PropTypes.object,
  teams: PropTypes.object
}

export default ConnectedUserForm;
