import styles from './header.module.css';
import { NavLink } from './navLink';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLogoContainer}>
				<a
					className={styles.headerLogo}
					href="#"
				>
					Hudson
				</a>
			</div>
			<nav>
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
