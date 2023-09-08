import styles from './content.module.css';

const Home = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroHeader}>
				<h1 className={styles.heroTitle}> Hudson Finn </h1>
				<p className={styles.heroSubtitle}> Software Engineer </p>
			</div>
		</section>
	);
};

export { Home };
