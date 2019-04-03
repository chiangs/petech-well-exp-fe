import React from 'react';
import css from './UserInfo.module.css';

const userInfo = () => {
	return (
		<section className={css.UserInfo}>
			<box-icon
				type="solid"
				name="user-circle"
				className={css.UserInfo__Icon}
			/>
			<p className={css.UserInfo__NameDisplay}>Navn Navnesen</p>
		</section>
	);
};

export default userInfo;
