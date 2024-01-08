import { useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';

type useSwipeProps = {
	minIndex: number;
	maxIndex: number;
	initialIndex?: number;
};

type useSwipeReturnTypes = {
	current: number;
	setCurrent: (index: number) => void;
	handlers: SwipeableHandlers;
	handlePrevious: () => void;
	handleNext: () => void;
};

export const useSwipe = ({
	minIndex,
	maxIndex,
	initialIndex = 0,
}: useSwipeProps): useSwipeReturnTypes => {
	const [current, setCurrent] = useState(initialIndex);

	function handleNext() {
		if (current === maxIndex) return;

		setCurrent(current + 1);
	}

	function handlePrevious() {
		if (current === minIndex) return;

		setCurrent(current - 1);
	}

	const config = {
		delta: 10,
		preventScrollOnSwipe: false,
		trackTouch: true,
		trackMouse: false,
		rotationAngle: 0,
		swipeDuration: Infinity,
		touchEventOptions: { passive: true },
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => handleNext(),
		onSwipedRight: () => handlePrevious(),
		...config,
	});

	return { current, setCurrent, handlers, handlePrevious, handleNext };
};
