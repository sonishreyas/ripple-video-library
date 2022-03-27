import { useState, useEffect } from "react";

const useCategoriesDataHook = () => {
	const [categoriesData, setCategoriesData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/categories`);
				console.log(response);	
				setCategoriesData(response.json().categories);
			} catch (error) {
				console.log(error);
			}
		})()
	},[]);
	return categoriesData;
};

export {useCategoriesDataHook}; 