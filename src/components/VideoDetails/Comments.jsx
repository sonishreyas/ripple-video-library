import { useAuth, useVideos } from "context";
import { useState } from "react";
import { addCommentHandler } from "utils";
import { v4 as uuid } from "uuid";

const Comments = ({ comments, videoId }) => {
	const { authState } = useAuth();
	const initial =
		authState?.firstName[0]?.toUpperCase() +
		authState?.lastName[0]?.toUpperCase();
	const [showButtons, setShowButton] = useState(false);
	const [focus, setFocus] = useState(false);
	const [newComment, setNewComment] = useState("");
	const { setFilteredVideosData, videosData } = useVideos();
	const handleFocus = () => {
		if (focus) {
			setFocus(false);
			!newComment?.length && setShowButton(false);
		} else {
			setFocus(true);
			setShowButton(true);
		}
	};

	const handleDismissComment = () => {
		setNewComment("");
		setShowButton(false);
	};
	const handleValueChange = (e) => setNewComment(e.target.value);

	const handleAddComment = (e) => {
		addCommentHandler(e, videoId, setFilteredVideosData, videosData, {
			initials: initial,
			name: authState?.firstName + authState?.lastName,
			comment: newComment,
			_id: uuid(),
		});
		setNewComment("");
		setShowButton(false);
	};
	return (
		<ul>
			<li className="no-list form-heading text-bold py-5">Comments</li>
			{authState.token && (
				<li className="no-list">
					<div className="flex-row justify-content-start align-center">
						<div>
							<p className="avatar b-radius-circle avatar-text flex-row justify-content-center align-center m text-bold">
								{initial}
							</p>
						</div>

						<div className="card-content w-100">
							<div
								className={`input-container flex-column m-5 w-100 h-auto ${
									focus || newComment?.length ? "focused" : ""
								}`}
								key="new-comment-input"
							>
								<input
									id="new-comment"
									className="textbox-content p-5"
									type="text"
									name="newComments"
									onChange={handleValueChange}
									value={newComment}
									onFocus={handleFocus}
									onBlur={handleFocus}
								/>
								<label
									htmlFor="newComments"
									className="textbox-label comment-label m-0 px-1"
								>
									Add a comment
								</label>
							</div>
							{showButtons && (
								<div className="flex-row justify-content-end flex-gap-1">
									<button
										className="cursor-pointer outline-btn p-2 b-radius-2 text-bold"
										type="button"
										onClick={handleDismissComment}
									>
										Cancel
									</button>
									<button
										className="cursor-pointer primary-btn p-2 b-radius-2 text-bold"
										type="button"
										onClick={handleAddComment}
									>
										Comment
									</button>
								</div>
							)}
						</div>
					</div>
				</li>
			)}
			{comments?.length &&
				comments?.map(({ _id, name, initials, comment }) => (
					<li className="no-list" key={_id}>
						<div className="flex-row justify-content-start align-center">
							<div>
								<p className="avatar b-radius-circle avatar-text flex-row justify-content-center align-center m text-bold">
									{initials}
								</p>
							</div>
							<div className="card-content p-5 pb-0">
								<p className="h5 text-bold">{name}</p>
								<p className="py-1">{comment}</p>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
};

export { Comments };
