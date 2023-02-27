import { useEffect, useState } from 'react';

export function useFetch(url) {
	const [fetchState, setFetchState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const doFetch = async () => {
		setFetchState({ ...fetchState, isLoading: true });
		try {
			const response = await fetch(url);
			const data = await response.json();
			setFetchState({ data, isLoading: false, hasError: null });
		} catch (error) {
			setFetchState({ data: [], isLoading: false, hasError: error });
		}
	};

	useEffect(() => {
		doFetch();
	}, [url]);

	return {
		data: fetchState.data,
		isLoading: fetchState.isLoading,
		hasError: fetchState.hasError,
	};
}
