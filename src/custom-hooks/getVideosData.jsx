import { useState, useEffect } from "react";
import axios from "axios";

const useVideosDataHook = () => {
	const [videosData, setVideosData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/videos`);
				setVideosData(response.data.videos);
			} catch (error) {
				console.log(error);
			}
		})()
	},[]);
	return videosData;
};

export {useVideosDataHook}; 