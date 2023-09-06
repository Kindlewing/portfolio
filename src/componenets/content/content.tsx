import styles from './content.module.css';

const Content = () => {
	return (
		<main>
			<section
				className={styles.homeContent}
				id="about"
			>
				<p className={styles.aboutHeading}> About me </p>
			</section>
		</main>
	);
};

export { Content };
