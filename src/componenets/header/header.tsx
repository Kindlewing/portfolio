import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';
import { NavLink } from './navLink';

const Header = () => {
	return (
		<header className={styles.header}>
			<a
				className={styles.headerLogo}
				href="#"
			>
				Hudson
			</a>
			<nav>
				<input
					type="checkbox"
					className={styles.checkbox}
					id="hamburger"
				/>
				<label
					htmlFor="hamburger"
					className={styles.hamburger}
				>
					<FontAwesomeIcon icon={faBars} />
				</label>
				<ul className={styles.headerNavLinks}>
					<li>
						<NavLink href="#about">About</NavLink>
					</li>
					<li>
						<NavLink href="#projects">Projects</NavLink>
					</li>

					<li>
						<NavLink href="#education">Education</NavLink>
					</li>
					<li>
						<NavLink href="#contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export { Header };
