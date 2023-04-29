import { useState } from 'react';
import styles from './Flash.module.css';
interface Props {
	children?: React.ReactNode;
}
const Flash: React.FC<Props> = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);

	const gradient = `linear-gradient(111deg,
       rgba(2,0,36,0) 30%,
     rgba(255,255,255,0.15) 69%,
      rgba(255,255,255,0) 69%)`;
	const handleHover = () => {
		if (isHovered) return;
		setIsHovered(true);
		setTimeout(() => {
			setIsHovered(false);
		}, 700);
	};

	return (
		<div className='relative w-full h-full' onPointerOver={handleHover}>
			{children}
			<div className='relative w-full h-full overflow-hidden'>
				<div
					className={`${
						isHovered ? styles.flashEffect : ''
					} 'absolute w-full h-full top-0 left-0 -translate-x-full ease-in-out'`}
					style={{
						backgroundImage: gradient,
					}}></div>
			</div>
		</div>
	);
};

export default Flash;
