import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useFiles = () => {
	const location = useLocation();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const queryParams = new URLSearchParams(location.search);
				const queryParamValue = queryParams.get("fileName");

				if (queryParamValue) {
					const secondResponse = await fetch(
						`http://localhost:3002/files/data?fileName=${queryParamValue}`
					);
					if (!secondResponse.ok) {
						throw new Error(
							"Failed to fetch data from the second API"
						);
					}
					const secondApiData = await secondResponse.json();

					setData([secondApiData]);
				} else {
					const response = await fetch(
						"http://localhost:3002/files/data"
					);
					if (!response.ok) {
						throw new Error(
							"Failed to fetch data from the first API"
						);
					}
					const firstApiData = await response.json();
					setData(firstApiData);
				}

				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
	}, [location.search]);

	return { data, loading, error };
};
