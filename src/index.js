import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
	RegisterProvider,
	LoginProvider,
	AuthProvider,
	VideosProvider,
	HistoryProvider,
	LikedProvider,
	WatchlaterProvider,
	PlaylistProvider,
	ThemeProvider,
} from "./context";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<RegisterProvider>
				<LoginProvider>
					<AuthProvider>
						<VideosProvider>
							<HistoryProvider>
								<WatchlaterProvider>
									<PlaylistProvider>
										<LikedProvider>
											<ThemeProvider>
												<App />
											</ThemeProvider>
										</LikedProvider>
									</PlaylistProvider>
								</WatchlaterProvider>
							</HistoryProvider>
						</VideosProvider>
					</AuthProvider>
				</LoginProvider>
			</RegisterProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
