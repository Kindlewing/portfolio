import { AriaLinkOptions, useLink } from 'react-aria';
import { ReactNode, useRef } from 'react';
import styles from './header.module.css';

interface Props extends AriaLinkOptions {
	href: string;
	target?: string;
	children?: ReactNode;
}

const NavLink = (props: Props) => {
	const ref = useRef(null);
	let { linkProps } = useLink(props, ref);

	return (
		<a
			{...linkProps}
			className={styles.headerNavLink}
			ref={ref}
			href={props.href}
			target={props.target}
		>
			{props.children}
		</a>
	);
};

export { NavLink };
