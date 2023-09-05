import styles from './content.module.css';

const Content = () => {
	return (
		<main className={styles.mainContent}>
			<section
				className={styles.about}
				id="about"
			>
				<p className={styles.aboutHeading}> About me </p>
			</section>
		</main>
	);
};

export { Content };
