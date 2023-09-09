import { NavLink } from './navLink';
import styles from './header.module.css';

interface Props {
	showSidebar: boolean;
}

const NavBar = (props: Props) => {
	return (
		<ul
			className={styles.primaryNavBar}
			data-showsidebar={props.showSidebar}
		>
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
	);
};

export { NavBar };
