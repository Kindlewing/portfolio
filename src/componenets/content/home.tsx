import styles from './content.module.css';

const Home = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroHeader}>
				<h1 className={styles.heroTitle}> Hudson Finn </h1>
				<p className={styles.heroSubtitle}> Full-stack Developer </p>
				<div className={styles.heroButtons}>
					<button className={styles.heroButton}>Contact me</button>
					<button className={styles.heroButton}>My work</button>
				</div>
			</div>
		</section>
	);
};

export { Home };
