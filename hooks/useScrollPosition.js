function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		function handleScroll() {
			setScrollPosition({
				y: Math.round(window.scrollY),
				x: Math.round(window.scrollX),
			});
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}
