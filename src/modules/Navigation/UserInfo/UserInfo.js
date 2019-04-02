import React from 'react';
import css from './UserInfo.module.css';

const userInfo = () => {
	return (
		<section className={css.UserInfo}>
			<div className={css.UserInfo__Icon}>
				<box-icon type="solid" name="user-circle" />
			</div>
			<p className={css.UserInfo__NameDisplay}>Navn Navnesen</p>
		</section>
	);
};

export default userInfo;
