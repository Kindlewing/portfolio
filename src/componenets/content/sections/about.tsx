import styles from '../styles/about.module.css';

const About = () => {
	return (
		<section
			className={styles.about}
			id="about"
		>
			<p className={styles.aboutHeader}> About me </p>
			<p className={styles.aboutText}>
				I graduated in 2022 from Gordon College with a Bachelor of
				Science degree in Computer Science. I'm currently working as a
				software engineer for Automatic Distributors, a distribution
				center for powersport parts. In my free time, I enjoy rock
				climbing, hiking, and working on programming projects.
			</p>
		</section>
	);
};

export { About };
