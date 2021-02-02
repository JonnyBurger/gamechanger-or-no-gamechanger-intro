import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Title = styled.div`
	font-family: Bangers;
	font-size: 80px;
`;

const Label = styled.span<{
	color1: string;
	color2: string;
	text: string;
}>`
	background: -webkit-linear-gradient(
		${(props) => props.color1},
		${(props) => props.color2}
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 2px white;
	position: relative;
	&:before {
		content: '${(props) => props.text}';
		position: absolute;
		left: 0;
		z-index: 0;
		-webkit-background-clip: none;
		text-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
	}
`;

const GameChangerMain: React.FC<{
	color1: string;
	color2: string;
	text: string;
}> = ({text, color1, color2}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const makeProgressFromFrame = (f: number) =>
		spring({
			config: {
				damping: 2,
				mass: 0.1,
				stiffness: 10,
				overshootClamping: false,
			},
			fps: videoConfig.fps,
			from: 0,
			to: 1,
			frame: f,
		});

	const gameChangerProgress = makeProgressFromFrame(frame - 5);

	return (
		<div
			style={{
				flex: 1,
				background: 'transparent',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Title
				style={{
					fontSize: videoConfig.height / 5,
					textAlign: 'center',
					width: '100%',
				}}
			>
				<Label
					color1={color1}
					color2={color2}
					text={text}
					style={{
						display: 'inline-block',
						transform: `scale(${gameChangerProgress})`,
						paddingRight: videoConfig.width / 100,
					}}
				>
					{text}
				</Label>
			</Title>
		</div>
	);
};

export default GameChangerMain;
