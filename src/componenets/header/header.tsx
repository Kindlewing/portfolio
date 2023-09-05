import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLogoContainer}>
				<a className={styles.headerLogo} href="#">
					Hudson Finn
				</a>
				<p className={styles.headerSubtitle}>Web Developer</p>
			</div>
		</header>
	);
};

export { Header };
