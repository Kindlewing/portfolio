import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import { NavBar } from './navigation';
import { useState } from 'react';

const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const [hamburgerClicked, setHamburgerClicked] = useState(false);

	return (
		<header className={styles.header}>
			<a
				className={styles.logo}
				href="#"
			>
				HFNN
			</a>
			<nav>
				<input
					type="checkbox"
					className={styles.checkbox}
					onClick={() => {
						setShowSidebar(!showSidebar);
						setHamburgerClicked(!hamburgerClicked);
					}}
					id="hamburger"
				/>
				<label
					data-hamburgerclicked={hamburgerClicked}
					htmlFor="hamburger"
					className={styles.hamburger}
				>
					<FontAwesomeIcon icon={faBars} />
				</label>
				<NavBar showSidebar={showSidebar} />
			</nav>
		</header>
	);
};

export { Header };
