import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization, AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles';

const AccountPage = () => (
	<AuthUserContext.Consumer>
		{(authUser) => (
			<div>
				<h1>Account Page: {authUser.email}</h1>
				<PasswordForgetForm />
				<PasswordChangeForm />
			</div>
		)}
	</AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
