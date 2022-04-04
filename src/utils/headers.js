const HEADERS = {
	headers: {
		Accept: "*/*",
		authorization: localStorage.getItem("token"),
	},
};

export { HEADERS };
