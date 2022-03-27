import { useState, useEffect } from "react";

const useVideosDataHook = () => {
	const [videosData, setVideosData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/videos`);
				console.log(response);	
				setVideosData(response.json().videos);
			} catch (error) {
				console.log(error);
			}
		})()
	},[]);
	return videosData;
};

export {useVideosDataHook}; 