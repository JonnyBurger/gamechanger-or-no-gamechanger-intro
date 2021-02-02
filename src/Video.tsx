import {Composition} from 'remotion';
import './index.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				lazyComponent={() => import('./GameChanger')}
				width={1920 * 2}
				height={1080 * 2}
				fps={30}
				durationInFrames={2 * 30}
			/>
			<Composition
				id="GameChanger"
				lazyComponent={() => import('./GameChanger/gamechanger')}
				width={1920 * 2}
				height={1080 * 2}
				fps={30}
				durationInFrames={2 * 30}
				defaultProps={{
					color1: '#fa4b00',
					color2: '#e0a82b',
					text: 'Game Changer',
				}}
			/>
			<Composition
				id="NoGameChanger"
				lazyComponent={() => import('./GameChanger/gamechanger')}
				width={1920 * 2}
				height={1080 * 2}
				fps={30}
				durationInFrames={2 * 30}
				defaultProps={{
					color1: '#0089ff',
					color2: '#0089ff',
					text: 'No Game Changer',
				}}
			/>
		</>
	);
};
