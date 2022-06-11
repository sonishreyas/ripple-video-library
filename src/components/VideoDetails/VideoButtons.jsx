import { addToLikedHandler, removeFromLikedHandler } from "utils";
import { useLiked } from "context";
import { Link } from "react-router-dom";

const LikeButton = ({ videoId, btnType }) => {
	const { likedDispatch } = useLiked();
	return (
		<>
			{btnType === "add" && (
				<button
					onClick={(e) => addToLikedHandler(e, videoId, likedDispatch)}
					className="cursor-pointer outline-btn p-5 b-radius-2 text-bold m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
				>
					<span className="wishlist-icon">
						<i className="fa-regular fa-thumbs-up social"></i>
					</span>
					<p>Like</p>
				</button>
			)}
			{btnType === "remove" && (
				<button
					onClick={(e) => removeFromLikedHandler(e, videoId, likedDispatch)}
					className="cursor-pointer outline-btn p-5 b-radius-2 text-bold m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1 outline-btn-active"
				>
					<span className="wishlist-icon">
						<i className="fa-solid fa-thumbs-up social"></i>
					</span>
					<p>Liked</p>
				</button>
			)}
			{btnType === "redirect" && (
				<Link
					to="/auth"
					state={{ from: { pathname: `/videos/${videoId}` } }}
					className="no-link-decoration cursor-pointer outline-btn p-5 b-radius-2 text-bold m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
				>
					<span className="wishlist-icon">
						<i className="fa-regular fa-thumbs-up social"></i>
					</span>
					<p>Like</p>
				</Link>
			)}
		</>
	);
};

export { LikeButton };
