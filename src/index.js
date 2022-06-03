import React from "react";
import ReactDOM from "react-dom";
import "./styles/app.css";
import App from "./App";
import {
	AuthProvider,
	VideosProvider,
	HistoryProvider,
	LikedProvider,
	WatchlaterProvider,
	PlaylistProvider,
	ThemeProvider,
	ProfileProvider,
	NavProvider,
} from "./context";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastPortal } from "components";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<VideosProvider>
					<HistoryProvider>
						<WatchlaterProvider>
							<PlaylistProvider>
								<LikedProvider>
									<ThemeProvider>
										<NavProvider>
											<App />
											<ToastPortal />
										</NavProvider>
									</ThemeProvider>
								</LikedProvider>
							</PlaylistProvider>
						</WatchlaterProvider>
					</HistoryProvider>
				</VideosProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
