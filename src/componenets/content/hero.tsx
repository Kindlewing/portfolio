import styles from './hero.module.css';

const Hero = () => {
	return (
		<section id="hero">
			<div className={styles.heroHeader}>
				<h1 className={styles.heroTitle}> Hudson Finn </h1>
				<p className={styles.heroSubtitle}>Full-stack developer</p>
				<div className={styles.heroButtonContainer}>
					<button className={styles.heroButton}>Contact me</button>
					<button className={styles.heroButton}>My work</button>
				</div>
			</div>
		</section>
	);
};

export { Hero };
