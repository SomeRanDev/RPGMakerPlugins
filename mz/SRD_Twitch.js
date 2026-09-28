/*:
 * @target MV MZ
 * @plugindesc Provides Twitch integration services to your RPG Maker MV/MZ game.
 * @author SomeRanDev
 * @url https://someran.dev
 *
 * @param Client ID
 * @desc The client ID of your Twitch application. Create one here:
 * https://dev.twitch.tv/console/apps
 * @default
 *
 * @param Redirect Port
 * @desc The port used for the local host to collect the OAuth token. Feel free to keep it as default.
 * @default 1234
 *
 * @param Permissions Required
 * @type select[]
 * @option Bot
 * @value user:bot
 * @option Edit User
 * @value user:edit
 * @option Edit User Broadcast
 * @value user:edit:broadcast
 * @option Read Blocked Users
 * @value user:read:blocked_users
 * @option Manage Blocked Users
 * @value user:manage:blocked_users
 * @option Read User Broadcast
 * @value user:read:broadcast
 * @option Read Chat
 * @value user:read:chat
 * @option Manage Chat Color
 * @value user:manage:chat_color
 * @option Read Email
 * @value user:read:email
 * @option Read Emotes
 * @value user:read:emotes
 * @option Read Follows
 * @value user:read:follows
 * @option Read Moderated Channels
 * @value user:read:moderated_channels
 * @option Read User Subscriptions
 * @value user:read:subscriptions
 * @option Read Whispers
 * @value user:read:whispers
 * @option Manage Whispers
 * @value user:manage:whispers
 * @option Write Chat
 * @value user:write:chat
 * @option Read Extension Analytics
 * @value analytics:read:extensions
 * @option Read Game Analytics
 * @value analytics:read:games
 * @option Read Bits
 * @value bits:read
 * @option Channel Bot
 * @value channel:bot
 * @option Manage Ads
 * @value channel:manage:ads
 * @option Read Ads
 * @value channel:read:ads
 * @option Manage Broadcast
 * @value channel:manage:broadcast
 * @option Read Charity
 * @value channel:read:charity
 * @option Manage Clips
 * @value channel:manage:clips
 * @option Run Commercials
 * @value channel:edit:commercial
 * @option Read Editors
 * @value channel:read:editors
 * @option Manage Extensions
 * @value channel:manage:extensions
 * @option Read Goals
 * @value channel:read:goals
 * @option Read Guest Star
 * @value channel:read:guest_star
 * @option Manage Guest Star
 * @value channel:manage:guest_star
 * @option Read Hype Train
 * @value channel:read:hype_train
 * @option Manage Moderators
 * @value channel:manage:moderators
 * @option Read Polls
 * @value channel:read:polls
 * @option Manage Polls
 * @value channel:manage:polls
 * @option Read Predictions
 * @value channel:read:predictions
 * @option Manage Predictions
 * @value channel:manage:predictions
 * @option Manage Raids
 * @value channel:manage:raids
 * @option Read Redemptions
 * @value channel:read:redemptions
 * @option Manage Redemptions
 * @value channel:manage:redemptions
 * @option Manage Schedule
 * @value channel:manage:schedule
 * @option Read Stream Key
 * @value channel:read:stream_key
 * @option Read Subscribers
 * @value channel:read:subscriptions
 * @option Manage Videos
 * @value channel:manage:videos
 * @option Read VIPs
 * @value channel:read:vips
 * @option Manage VIPs
 * @value channel:manage:vips
 * @option Moderate Channel
 * @value channel:moderate
 * @option Edit Clips
 * @value clips:edit
 * @option Manage Clips as Editor
 * @value editor:manage:clips
 * @option Read Moderation Data
 * @value moderation:read
 * @option Moderator: Send Announcements
 * @value moderator:manage:announcements
 * @option Moderator: Manage AutoMod Messages
 * @value moderator:manage:automod
 * @option Moderator: Read AutoMod Settings
 * @value moderator:read:automod_settings
 * @option Moderator: Manage AutoMod Settings
 * @value moderator:manage:automod_settings
 * @option Moderator: Read Banned Users
 * @value moderator:read:banned_users
 * @option Moderator: Manage Banned Users
 * @value moderator:manage:banned_users
 * @option Moderator: Read Blocked Terms
 * @value moderator:read:blocked_terms
 * @option Moderator: Manage Blocked Terms
 * @value moderator:manage:blocked_terms
 * @option Moderator: Read Chat Messages
 * @value moderator:read:chat_messages
 * @option Moderator: Manage Chat Messages
 * @value moderator:manage:chat_messages
 * @option Moderator: Read Chat Settings
 * @value moderator:read:chat_settings
 * @option Moderator: Manage Chat Settings
 * @value moderator:manage:chat_settings
 * @option Moderator: Read Chatters
 * @value moderator:read:chatters
 * @option Moderator: Read Followers
 * @value moderator:read:followers
 * @option Moderator: Read Guest Star
 * @value moderator:read:guest_star
 * @option Moderator: Manage Guest Star
 * @value moderator:manage:guest_star
 * @option Moderator: Read Moderators
 * @value moderator:read:moderators
 * @option Moderator: Read Shield Mode
 * @value moderator:read:shield_mode
 * @option Moderator: Manage Shield Mode
 * @value moderator:manage:shield_mode
 * @option Moderator: Read Shoutouts
 * @value moderator:read:shoutouts
 * @option Moderator: Manage Shoutouts
 * @value moderator:manage:shoutouts
 * @option Moderator: Read Suspicious Users
 * @value moderator:read:suspicious_users
 * @option Moderator: Manage Suspicious Users
 * @value moderator:manage:suspicious_users
 * @option Moderator: Read Unban Requests
 * @value moderator:read:unban_requests
 * @option Moderator: Manage Unban Requests
 * @value moderator:manage:unban_requests
 * @option Moderator: Read VIPs
 * @value moderator:read:vips
 * @option Moderator: Read Warnings
 * @value moderator:read:warnings
 * @option Moderator: Manage Warnings
 * @value moderator:manage:warnings
 * @desc The permissions your game requests from the player's Twitch account.
 * @default ["user:read:chat", "user:write:chat", "channel:read:redemptions", "user:bot"]
 *
 * @param Auto Connect on Start
 * @type boolean
 * @default true
 *
 * @param Disable No-Focus Pause
 * @type boolean
 * @default true
 *
 * @param On Message Common Event
 * @type common_event
 * @desc The common event called for every message sent in chat. Note: only one common event will run at a time.
 * @default 0
 *
 * @param On Message Code Eval
 * @type multiline_string
 * @desc The code called for every message sent in chat.
 * @default
 *
 * @param Redeems
 * @type struct<RedeemData>[]
 * @default []
 *
 * @param Command Prefix
 * @desc The prefix used to discern a message is a command.
 * @default !
 *
 * @param On Command Common Event
 * @type common_event
 * @desc The common event called when a command is run. Note: only one common event will run at a time.
 * @default 0
 *
 * @param On Command Code Eval
 * @type multiline_string
 * @desc The code called for every command sent in chat.
 * @default
 *
 * @param Variable w/ Message
 * @type variable
 * @desc Stores the message (or command) for what triggered the Twitch common event. Contains redeem text input if it exists.
 * @default 0
 *
 * @param Variable w/ User Name
 * @type variable
 * @desc Stores the display name of the user that triggered the Twitch common event (by sending message or triggered redeem).
 * @default 0
 *
 * @param Variable w/ User ID
 * @type variable
 * @desc Stores the ID of the user that triggered the Twitch common event (by sending message or triggered redeem).
 * @default 0
 *
 * @param Variable w/ API Response
 * @type variable
 * @desc Stores the actual JSON response for the event that triggered the Twitch common event.
 * @default 0
 *
 * @command Send Message
 * @desc Send a chat message from your account to Twitch.
 *
 * @arg Message
 * @type text
 * @default
 *
 * @command Raw Twitch API Request
 * @desc Perform an authenticated request. Named parameters become query string (GET) or JSON body (POST/PUT/PATCH).
 *
 * @arg URL
 * @type text
 * @default https://api.twitch.tv/helix/
 *
 * @arg Method
 * @type select
 * @option GET
 * @option POST
 * @option PUT
 * @option PATCH
 * @option DELETE
 * @default GET
 *
 * @arg Parameters
 * @type note
 * @default {}
 *
 * @command Connect to Twitch
 * @desc Manually connects to Twitch and requests the player to login/approve permissions for your app.
 *
 * @command Disconnect from Twitch
 * @desc Disconnects from Twitch manually.
 *
 * @command Force Token Refresh
 * @desc Manually refresh the access token.
 *
 * @help
 * ============================================================================
 *                   SomeRanDev's Twitch Integration Plugin
 *                                  v1.0.0
 * ============================================================================
 *
 * This is a plugin for Twitch integration in RPG Maker MV and MZ! It let's
 * you run common events and code that react to messages, commands, and redeems
 * from your own OR a player's Twitch stream.
 *
 * For example, you can add a button to let a player connect their Twitch
 * account to the game and have things happen based on chatters' messages
 * or redeems.
 *
 * OR you could create an RPG Maker-based VTuber overlay that uses RPG Maker
 * systems to display chat messages in your own custom interface.
 *
 *
 * ============================================================================
 *  How to Create Twitch Application
 * ============================================================================
 *
 * For your Twitch integration to work no matter what, you must first
 * register an "application" on the Twitch website for you to do anything with
 * the Twitch API (including anything with this plugin)!
 *
 * No worries though, it's very simple:
 *
 * =======
 * Step 1 |
 * =======
 * Go to https://dev.twitch.tv/console/apps.
 *
 * =======
 * Step 2 |
 * =======
 * Click the button that says "+ Register Your Application".
 *
 * =======
 * Step 3 |
 * =======
 * On the new page, give your application a name!
 * This can be anything, you could just make it your game's name.
 *
 * =======
 * Step 4 |
 * =======
 * Set the "Redirect Port" to "https://localhost:YOUR_REDIRECT_PORT".
 * But replace "YOUR_REDIRECT_PORT" with the port you have in your
 * plugin parameters.
 *
 * By default Redirect Port is 1234, so you would probably set it to:
 * https://localhost:1234
 *
 * =======
 * Step 5 |
 * =======
 * Set a category (probably "Game Integration").
 * I'm not sure if this matters at all. XD
 *
 * =======
 * Step 6 |
 * =======
 * Set "Client Type" to "Public"
 *
 * =======
 * Step 7 |
 * =======
 * Click "Create"!
 *
 *
 * ============================================================================
 *  How to get your Client ID
 * ============================================================================
 * 
 * Okay! Now you've created your application! Now we just need to get the
 * client ID and put it in this plugin's plugin parameters!
 *
 * Do do that, on the Twitch page with your application listed, click "Manage"
 * on your new application.
 *
 * Then simply copy the "Client ID" and paste into the "Client ID" plugin
 * parameter in this plugin!
 *
 * Now you're good to go!!
 *
 *
 * ============================================================================
 *  Reacting to Twitch Chat Messages
 * ============================================================================
 *
 * You can set a Common Event to play whenever a message is sent to the
 * player's Twitch chat. Simply set it in the "On Message Common Event"
 * plugin parameter.
 *
 * To see what the message said or who sent it, assign the "Variable w/ X"
 * plugin parameters. These will make it so that variable will contain that
 * data within the Common Event running in response to a Twitch Event.\
 *
 * ========
 * ! NOTE !
 * ========
 * Please note you CANNOT reliably access that variable data outside of the
 * Common Event triggered from a Twitch event. If you'd like to store a message
 * or Twitch user, please copy it to a separate variable to make sure the
 * plugin doesn't change it when the Twitch event happens again.
 *
 *
 * ============================================================================
 *  Reacting to Twitch Redeems
 * ============================================================================
 *
 * To react to a Twitch redeem, add it as a redeem in the "Redeems" plugin
 * parameter. The redeem MUST be created manually by the streamer using the
 * Twitch integration and the name MUST match exactly.
 *
 * Once the redeem exists, you can assign a separate Common Event or code to
 * run every time the redeem is redeemed. You can use the same "Variable w/ X"
 * variables to get the user that triggered the redeem!
 *
 *
 * ============================================================================
 *  Terms of Use
 * ============================================================================
 *
 * https://someran.dev/rpgmaker/terms/
 *
 * ============================================================================
 *  End of Help File
 * ============================================================================
 *
 * https://someran.dev
 * https://someran.dev/rpgmaker
 *
 * I livestreamed the development of this plugin, check me out on Twitch!
 * https://twitch.tv/SomeRanDev
 *
 * Or follow me on BlueSky!
 * https://bsky.app/profile/someran.dev (active gamedev posts maybe)
 *
 *
 * Until next time,
 *   ~ SomeRanDev
 */

/*~struct~RedeemData:
 * @param Redeem Name
 * @type text
 * @desc The EXACT title of the channel point reward you want to react to.
 *
 * @param On Redeem Common Event
 * @type common_event
 * @default 0
 * @desc The common event called when the redeem is executed. Note: only one common event will run at a time.
 *
 * @param On Redeem Code Eval
 * @type multiline_string
 * @desc The code ran when the redeem is executed. This runs instantly and may be better for simplier tasks than common events.
 */

// ------------
// TODOS:
// ------------
// - Connect to twitch manually through title button
// - generate redeems
// - modify redeems
// - filter broardcaster plugin parameters.

var SRD = SRD || {};
SRD.Twitch = SRD.Twitch || {};

(function(_) {

"use strict";

// ---

function parseJsonSafely(text, defaultValue) {
	try {
		return JSON.parse(text);
	} catch(_) {
		return defaultValue === undefined ? text : defaultValue;
	}
}

// ---

const parameters = PluginManager.parameters("SRD_Twitch");

_.clientId = String(parameters["Client ID"] || "");
_.redirectPort = parseInt(parameters["Redirect Port"] || "1234");
_.permissionsRequired = parseJsonSafely(String(parameters["Permissions Required"] || "[]"), []);
_.autoConnect = parameters["Auto Connect on Start"] === "true";
_.disableNoFocusPause = parameters["Disable No-Focus Pause"] === "true";

_.onMessageCommonEventId = parseInt(parameters["On Message Common Event"] || "0");
_.onMessageCodeEval = String(parameters["On Message Code Eval"] || "");
_.commandPrefix = String(parameters["Command Prefix"] || "");
_.onCommandCommonEventId = Number(parameters["On Command Common Event"] || 0);
_.onCommandCodeEval = String(parameters["On Command Code Eval"] || "");

_.messageVariableId = parseInt(parameters["Variable w/ Message"] || "0");
_.userNameVariableId = parseInt(parameters["Variable w/ User Name"] || "0");
_.userIDVariableId = parseInt(parameters["Variable w/ User ID"] || "0");
_.apiResponseVariableId = parseInt(parameters["Variable w/ API Response"] || "0");

// ---

// Parse redeem mappings
_.redeems = {};
const redeemDataList = parseJsonSafely(parameters["Redeems"] || "[]", []);
for(const redeemDataString of redeemDataList) {
	const redeemData = parseJsonSafely(redeemDataString, {});
	const name = String(redeemData["Redeem Name"] || "");
	const commonEvent = parseInt(redeemData["On Redeem Common Event"] || "0");
	const codeEval = String(redeemData["On Redeem Code Eval"] || "");
	if(name) {
		_.redeems[name] = {
			commonEvent: commonEvent,
			codeEval: codeEval
		};
	}
}

// ------------------------------------------------------------------
// * accessToken
// ------------------------------------------------------------------

let accessToken = null;

// ------------------------------------------------------------------
// * TwitchManager
// ------------------------------------------------------------------

class TwitchManager {
	static ws = null;
	static reconnectWs = null;
	static sessionId = null;
	static isRefreshing = false;
	static broadcasterId = null;
	static ensureAuthQueue = [];
	static localHostServer = null;
	static authRandomizedState = null;
	static cancelRefreshTimer = null;
	static reconnectTimer = null;
	static validateTimer = null;

	// Plugin is desktop-only for now
	static canPluginRun() {
		return !!_.clientId && Utils.isNwjs();
	}

	static isWebSocketActive() {
		if(TwitchManager.ws) {
			if(TwitchManager.ws.readyState === WebSocket.OPEN || TwitchManager.ws.readyState === WebSocket.CONNECTING) {
				return true;
			}
		}
		return false;
	}

	static connect() {
		if(TwitchManager.isWebSocketActive()) {
			return;
		}

		TwitchManager.ensureAuth(function() {
			if(TwitchManager.isWebSocketActive()) {
				return;
			}
			TwitchManager.ws = TwitchManager.openWebSocket("wss://eventsub.wss.twitch.tv/ws");
			if(!TwitchManager.validateTimer) {
				TwitchManager.validateTimer = setInterval(TwitchManager.checkToken, 3_600_000); // 1 hour
			}
		});
	}

	static openWebSocket(url) {
		const ws = new WebSocket(url);

		ws.onopen = function() {
			console.log("Websocket opened");
		};

		ws.onclose = function(ev) {
			console.log("Websocket closed ", ev.code, ev.reason);

			if(ws === TwitchManager.reconnectWs) {
				TwitchManager.reconnectWs = null;
			}
			if(ws !== TwitchManager.ws) {
				return;
			}

			TwitchManager.ws = null;
			TwitchManager.sessionId = null;

			// Connection unused, reconnect in 10 seconds.
			if(ev.code !== 4003 && !TwitchManager.reconnectTimer) {
				TwitchManager.reconnectTimer = setTimeout(function() {
					TwitchManager.reconnectTimer = null;
					TwitchManager.connect();
				}, 5000);
			}
		};

		ws.onerror = function(err) {
			console.warn("Websocket error", err);
		};

		ws.onmessage = function(ev) {
			TwitchManager.onSocketMessage(ws, ev);
		};

		return ws;
	}

	static onSocketMessage(ws, ev) {
		if(ws !== TwitchManager.ws && ws !== TwitchManager.reconnectWs) {
			return;
		}

		const msg = parseJsonSafely(ev.data, null);
		if(msg === null) {
			return;
		}

		const type = msg.metadata && msg.metadata.message_type;
		console.log("WS message: ", type);

		switch(type) {
			case "session_welcome": {
				TwitchManager.sessionId = msg.payload.session.id;

				console.log("TwitchManager.sessionId: ", TwitchManager.sessionId);

				if(ws === TwitchManager.reconnectWs) {
					const oldWs = TwitchManager.ws;
					TwitchManager.ws = ws;
					TwitchManager.reconnectWs = null;
					if(oldWs) {
						oldWs.close();
					}
				} else {
					TwitchManager.subscribeToEvents();
				}

				break;
			}
			case "session_keepalive": {
				break;
			}
			case "session_reconnect": {
				if(TwitchManager.reconnectWs) {
					TwitchManager.reconnectWs.close();
				}
				TwitchManager.reconnectWs = TwitchManager.openWebSocket(msg.payload.session.reconnect_url);
				break;
			}
			case "notification": {
				TwitchManager.handleNotification(msg);
				break;
			}
			case "revocation": {
				console.warn("Subscription revoked", msg.payload);
				break;
			}
		}
	}

	static ensureAuth(callback) {
		if(!TwitchManager.canPluginRun()) {
			return;
		}
		if(TwitchManager.isRefreshing || !accessToken) {
			TwitchManager.ensureAuthQueue.push(callback);
			TwitchManager.refreshAccessToken();
			return;
		}
		if(TwitchManager.broadcasterId) {
			callback();
			return;
		}
		TwitchManager.validateToken(function(isValid) {
			if(isValid) {
				callback();
			} else if(!accessToken) {
				TwitchManager.ensureAuth(callback);
			}
		});
	}

	static refreshAccessToken() {
		if(TwitchManager.isRefreshing) {
			return false;
		}
		if(!TwitchManager.canPluginRun()) {
			return false;
		}

		TwitchManager.isRefreshing = true;
		TwitchManager.authRandomizedState = require("crypto").randomBytes(16).toString("hex");

		const localHostServer = require("http").createServer(function(req, res) {
			TwitchManager.onLocalHostServerAccessed(req, res);
		});
		localHostServer.on("error", function(e) {
			console.warn("Token refresh exception", e);
			TwitchManager.cancelRefresh();
		});
		localHostServer.listen(_.redirectPort, "127.0.0.1", function() {
			TwitchManager.openBrowser(TwitchManager.getAuthorizeUrl());
		});

		TwitchManager.localHostServer = localHostServer;

		// If it takes too long, give up?
		TwitchManager.cancelRefreshTimer = setTimeout(TwitchManager.cancelRefresh, 300000);

		return true;
	}

	static onLocalHostServerAccessed(req, res) {
		const url = new URL(req.url, TwitchManager.getRedirectUri());
		if(url.pathname === "/") {
			TwitchManager.generateBrowserResponse(res, 200, "<script>location.replace(\"/token?\" + (location.hash.length > 1 ? location.hash.substring(1) : location.search.substring(1)));</script>");
			return;
		}
		if(url.pathname !== "/token") {
			TwitchManager.generateBrowserResponse(res, 400, "Invalid request.");
			return;
		}
		if(url.searchParams.get("state") !== TwitchManager.authRandomizedState) {
			TwitchManager.generateBrowserResponse(res, 400, "State does not match.");
			return;
		}

		const token = url.searchParams.get("access_token");
		if(!token) {
			TwitchManager.generateBrowserResponse(res, 200, "Could not connect to Twitch. You can close this window and try again?");
			console.warn("Token refresh failed", url.searchParams.get("error"), url.searchParams.get("error_description"));
			TwitchManager.cancelRefresh();
			return;
		}

		TwitchManager.generateBrowserResponse(res, 200, "Connected to Twitch! You can close this window and return to the game.");
		TwitchManager.closeServer();
		accessToken = token;
		TwitchManager.broadcasterId = null;
		TwitchManager.saveTokens();
		TwitchManager.validateToken(function(isValid, status, text) {
			TwitchManager.isRefreshing = false;
			if(isValid) {
				TwitchManager.processQueue();
			} else {
				console.warn("Token refresh failed", status, text);
				TwitchManager.ensureAuthQueue = [];
			}
		});
	}

	static generateBrowserResponse(res, status, body) {
		res.writeHead(status, {
			"Content-Type": "text/html; charset=utf-8",
			"Connection": "close"
		});
		res.end("<!DOCTYPE html><html><head><title>Twitch</title></head><body>" + body + "</body></html>");
	}

	static cancelRefresh() {
		TwitchManager.closeServer();
		TwitchManager.isRefreshing = false;
		TwitchManager.ensureAuthQueue = [];
	}

	static closeServer() {
		if(TwitchManager.cancelRefreshTimer) {
			clearTimeout(TwitchManager.cancelRefreshTimer);
			TwitchManager.cancelRefreshTimer = null;
		}
		if(TwitchManager.localHostServer) {
			TwitchManager.localHostServer.close();
			TwitchManager.localHostServer = null;
		}
	}

	static openBrowser(url) {
		if(!TwitchManager.canPluginRun()) {
			console.warn("SRD_TWitch.js only works on desktop games.");
			return;
		}
		const gui = typeof nw !== "undefined" ? nw : require("nw.gui");
		gui.Shell.openExternal(url);
	}

	static getRedirectUri() {
		return "http://localhost:" + _.redirectPort;
	}

	static getAuthorizeUrl() {
		const params = new URLSearchParams();
		params.append("response_type", "token");
		params.append("client_id", _.clientId);
		params.append("redirect_uri", TwitchManager.getRedirectUri());
		params.append("scope", _.permissionsRequired.join(" "));
		params.append("state", TwitchManager.authRandomizedState);
		return "https://id.twitch.tv/oauth2/authorize?" + params.toString();
	}

	static validateToken(callback) {
		const token = accessToken;
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "https://id.twitch.tv/oauth2/validate");
		xhr.setRequestHeader("Authorization", "OAuth " + token);
		xhr.onload = function() {
			const data = parseJsonSafely(xhr.responseText);
			const isValid = xhr.status === 200 && !!data && data.client_id === _.clientId && TwitchManager.hasScopes(data.scopes);
			if(isValid) {
				TwitchManager.broadcasterId = String(data.user_id);
			} else if((xhr.status === 200 || xhr.status === 401) && accessToken === token) {
				TwitchManager.deleteToken();
			}
			callback(isValid, xhr.status, xhr.responseText);
		};
		xhr.onerror = function() {
			callback(false, 0, "");
		};
		xhr.send();
	}

	static hasScopes(scopes) {
		const grantedScopes = scopes || [];
		return _.permissionsRequired.every(function(scope) {
			return grantedScopes.includes(scope);
		});
	}

	static checkToken() {
		if(!accessToken || TwitchManager.isRefreshing) {
			return;
		}
		TwitchManager.validateToken(function(isValid) {
			if(!isValid && !accessToken) {
				TwitchManager.disconnect();
				TwitchManager.connect();
			}
		});
	}

	static deleteToken() {
		accessToken = null;
		TwitchManager.broadcasterId = null;
		TwitchManager.saveTokens();
	}

	static getStorageKey() {
		return "SRD_Twitch_" + _.clientId;
	}

	static loadTokens() {
		try {
			accessToken = localStorage.getItem(TwitchManager.getStorageKey()) || null;
		} catch(e) {
			accessToken = null;
		}
	}

	static saveTokens() {
		try {
			if(accessToken) {
				localStorage.setItem(TwitchManager.getStorageKey(), accessToken);
			} else {
				localStorage.removeItem(TwitchManager.getStorageKey());
			}
		} catch(e) {}
	}

	// Execute all the queued things we couldn't do before.
	static processQueue() {
		const ensureAuthQueue = TwitchManager.ensureAuthQueue;
		TwitchManager.ensureAuthQueue = [];
		for(const callback of ensureAuthQueue) {
			callback();
		}
	}

	static authRequest(url, method, body, callback, isRetry) {
		TwitchManager.ensureAuth(function() {
			const token = accessToken;
			const xhr = new XMLHttpRequest();
			xhr.open(method, url);
			xhr.setRequestHeader("Client-ID", _.clientId);
			xhr.setRequestHeader("Authorization", "Bearer " + token);
			if(body) {
				xhr.setRequestHeader("Content-Type", "application/json");
			}
			xhr.onload = function() {
				if(xhr.status === 401 && !isRetry) {
					if(accessToken === token) {
						TwitchManager.deleteToken();
					}
					TwitchManager.authRequest(url, method, body, callback, true);
					return;
				}
				if(callback) {
					callback(xhr.status, parseJsonSafely(xhr.responseText));
				}
			};
			xhr.onerror = function() {
				if(callback) {
					callback(0, null);
				}
			};
			xhr.send(body);
		});
	}

	static subscribeToEvents() {
		if(!TwitchManager.sessionId) {
			return;
		}

		const subscriptions = [];

		if(_.permissionsRequired.includes("channel:read:redemptions")) {
			subscriptions.push({
				type: "channel.channel_points_custom_reward_redemption.add",
				version: "1",
				condition: { broadcaster_user_id: TwitchManager.broadcasterId }
			});
		}

		if(_.permissionsRequired.includes("user:read:chat")) {
			subscriptions.push({
				type: "channel.chat.message",
				version: "1",
				condition: {
					broadcaster_user_id: TwitchManager.broadcasterId,
					user_id: TwitchManager.broadcasterId
				}
			});
		}

		// TODO: add more subscriptions based on permissions???


		for(const sub of subscriptions) {
			const body = {
				type: sub.type,
				version: sub.version,
				condition: sub.condition,
				transport: {
					method: "websocket",
					session_id: TwitchManager.sessionId
				}
			};

			TwitchManager.authRequest("https://api.twitch.tv/helix/eventsub/subscriptions", "POST", JSON.stringify(body), function(status, data) {
				if(status >= 200 && status < 300) {
					console.log("Subscribed to ", sub.type);
				} else {
					console.warn("Subscribe failed", sub.type, data);
				}
			});
		}
	}

	static handleNotification(msg) {
		const subType = msg.metadata.subscription_type;
		const event = msg.payload.event;

		if(subType === "channel.channel_points_custom_reward_redemption.add") {
			const title = (event.reward && event.reward.title) || "";
			const user = event.user_name || event.user_login || "";
			const input = event.user_input || "";

			const redeem = _.redeems[title];
			if(!redeem) {
				console.log("No redeem exists:", title);
				return;
			}

			if(redeem.commonEvent > 0) {
				$gameTemp.reserveCommonEvent(redeem.commonEvent, input || title, user, event.user_id, event);
			}
			TwitchManager.runCode(redeem.codeEval, input || title, user, event.user_id, event);
		} else if(subType === "channel.chat.message") {
			const text = (event.message && event.message.text) || "";
			const user = event.chatter_user_name || event.chatter_user_login || "";
			const isCommand = !!_.commandPrefix && text.startsWith(_.commandPrefix);

			if(_.onMessageCommonEventId > 0) {
				$gameTemp.reserveTwitchCommonEvent(_.onMessageCommonEventId, text, user, event.chatter_user_id, event);
			}
			if(isCommand && _.onCommandCommonEventId > 0) {
				$gameTemp.reserveTwitchCommonEvent(_.onCommandCommonEventId, text, user, event.chatter_user_id, event);
			}

			TwitchManager.runCode(_.onMessageCodeEval, text, user, event.chatter_user_id, event);
			if(isCommand) {
				TwitchManager.runCode(_.onCommandCodeEval, text, user, event.chatter_user_id, event);
			}
		}
	}

	

	// TODO: cache as function and document variables??
	static runCode(code, message, userName, userId, event) {
		if(code) {
			eval(code);
		}
	}

	static disconnect() {
		if(TwitchManager.reconnectTimer) {
			clearTimeout(TwitchManager.reconnectTimer);
			TwitchManager.reconnectTimer = null;
		}
		if(TwitchManager.validateTimer) {
			clearInterval(TwitchManager.validateTimer);
			TwitchManager.validateTimer = null;
		}
		if(TwitchManager.reconnectWs) {
			const reconnectWs = TwitchManager.reconnectWs;
			TwitchManager.reconnectWs = null;
			reconnectWs.close();
		}
		if(TwitchManager.ws) {
			const ws = TwitchManager.ws;
			TwitchManager.ws = null;
			ws.close();
		}
		TwitchManager.sessionId = null;
		TwitchManager.cancelRefresh();
	}

	// Sends a chat message from connected Twitch account
	static sendChatMessage(message) {
		if(!message) {
			return;
		}

		TwitchManager.ensureAuth(function() {
			const body = {
				broadcaster_id: TwitchManager.broadcasterId,
				sender_id: TwitchManager.broadcasterId,
				message: String(message).substring(0, 500)
			};

			TwitchManager.authRequest("https://api.twitch.tv/helix/chat/messages", "POST", JSON.stringify(body), function(status, data) {
				if(status === 200) {
					console.log("SendMessage result", data);
				} else {
					console.log("SendMessage failed", status, data);
				}
			});
		});
	}

	// Just sends a raw API all for advanced users
	static arbitraryTwitchAPICall(url, method, paramsObj) {
		method = (method || "GET").toUpperCase();
		let finalUrl = url;
		let body = null;

		if(method === "GET" || method === "DELETE") {
			const qs = new URLSearchParams();
			for(const [k, v] of Object.entries(paramsObj || {})) {
				qs.append(k, v);
			}
			const q = qs.toString();
			if(q) {
				finalUrl += (finalUrl.includes("?") ? "&" : "?") + q;
			}
		} else {
			body = JSON.stringify(paramsObj || {});
		}

		TwitchManager.authRequest(finalUrl, method, body, function(status, data) {
			if(status === 0) {
				console.log("ERROR: Request failed");
				return;
			}

			if(_.apiResponseVariableId > 0) {
				$gameVariables.setValue(_.apiResponseVariableId, typeof data === "string" ? data : JSON.stringify(data));
			}
		});
	}
}

// ---

// ------------------------------------------------------------------
// * TwitchCommonEvent
// ------------------------------------------------------------------

class TwitchCommonEvent {
	commonEventId = 0;
	message = "";
	userName = "";
	userId = "";
	response = null;

	constructor(commonEventId, message, userName, userId, response) {
		this.commonEventId = commonEventId;
		this.message = message;
		this.userName = userName;
		this.userId = userId;
		this.response = response;
	}

	initializeVariables() {
		if(_.messageVariableId > 0) {
			$gameVariables.setValue(_.messageVariableId, this.message);
		}
		if(_.userNameVariableId > 0) {
			$gameVariables.setValue(_.userNameVariableId, this.userName);
		}
		if(_.userIDVariableId > 0) {
			$gameVariables.setValue(_.userIDVariableId, this.userId);
		}
		if(_.apiResponseVariableId > 0) {
			$gameVariables.setValue(_.apiResponseVariableId, this.response);
		}
	}
}

// ---

// ------------------------------------------------------------------
// * Game_Temp
// ------------------------------------------------------------------

_.Game_Temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_.Game_Temp_initialize.apply(this, arguments);
	this._twitchCommonEventQueue = [];
};

_.Game_Temp_clearCommonEventReservation = Game_Temp.prototype.clearCommonEventReservation;
Game_Temp.prototype.clearCommonEventReservation = function() {
	_.Game_Temp_clearCommonEventReservation.apply(this, arguments);
	this._twitchCommonEventQueue.length = 0;
};

Game_Temp.prototype.reserveTwitchCommonEvent = function(commonEventId, message, userName, userId, response) {
	this._twitchCommonEventQueue.push(new TwitchCommonEvent(commonEventId, message, userName, userId, response));
};

Game_Temp.prototype.retrieveTwitchCommonEvent = function() {
	return this._twitchCommonEventQueue.shift();
};

Game_Temp.prototype.isTwitchCommonEventReserved = function() {
	return this._twitchCommonEventQueue.length > 0;
};

// ---

// ------------------------------------------------------------------
// * Game_Interpreter
// ------------------------------------------------------------------

_.Game_Interpreter_setupReservedCommonEvent = Game_Interpreter.prototype.setupReservedCommonEvent;
Game_Interpreter.prototype.setupReservedCommonEvent = function() {
	const commonEventStarted = _.Game_Interpreter_setupReservedCommonEvent.apply(this, arguments);
	if(commonEventStarted) {
		return true;
	}

	if($gameTemp.isTwitchCommonEventReserved()) {
		const twitchCommonEvent = $gameTemp.retrieveTwitchCommonEvent();
		const commonEvent = $dataCommonEvents[twitchCommonEvent.commonEventId];
		if(twitchCommonEvent && commonEvent) {
			twitchCommonEvent.initializeVariables();
			this.setup(commonEvent.list);
			return true;
		}
	}

	return false;
};

// ---

// ------------------------------------------------------------------
// * Scene_Boot
// ------------------------------------------------------------------

if(_.autoConnect) {
	_.Scene_Boot_start = Scene_Boot.prototype.start;
	Scene_Boot.prototype.start = function() {
		_.Scene_Boot_start.apply(this, arguments);
		TwitchManager.connect();
	};
}

// ---

// ------------------------------------------------------------------
// * SceneManager
// ------------------------------------------------------------------

if(_.disableNoFocusPause) {
	SceneManager.isGameActive = function() {
		return true;
	};
}

// ---

// ------------------------------------------------------------------
// MZ Plugin Commands
// ------------------------------------------------------------------

if(Utils.RPGMAKER_NAME === "MZ") {
	PluginManager.registerCommand("SRD_Twitch", "Send Message", args => {
		TwitchManager.sendChatMessage(args.Message);
	});
	PluginManager.registerCommand("SRD_Twitch", "Raw Twitch API Request", args => {
		let params = {};
		try {
			const parsed = JSON.parse(args.Parameters || "{}");
			params = typeof parsed === "string" ? JSON.parse(parsed || "{}") : parsed;
		} catch(e) {
			console.warn("Raw Twitch API Request params JSON parse error", e);
		}
		TwitchManager.arbitraryTwitchAPICall(args.URL, args.Method, params);
	});
	PluginManager.registerCommand("SRD_Twitch", "Connect to Twitch", TwitchManager.connect);
	PluginManager.registerCommand("SRD_Twitch", "Disconnect from Twitch", TwitchManager.disconnect);
	PluginManager.registerCommand("SRD_Twitch", "Force Token Refresh", TwitchManager.refreshAccessToken);
}

// ------------------------------------------------------------------
// MV Plugin Commands
// ------------------------------------------------------------------

if(Utils.RPGMAKER_NAME === "MV") {
	_.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_.Game_Interpreter_pluginCommand.apply(this, arguments);

		if(command !== "SRD_Twitch" && command !== "Twitch") {
			return;
		}

		const commandKind = (args[0] || "").toLowerCase();
		if(commandKind === "sendmessage" || commandKind === "send") {
			TwitchManager.sendChatMessage(args.slice(1).join(" "));
		} else if(commandKind === "apicall") {
			const url = args[1];
			const method = args[2] || "GET";
			const params = parseJsonSafely(args.slice(3).join(" ") || "{}", {});
			TwitchManager.arbitraryTwitchAPICall(url, method, params);
		} else if(commandKind === "connect") {
			TwitchManager.connect();
		} else if(commandKind === "disconnect") {
			TwitchManager.disconnect();
		} else if(commandKind === "refreshtoken") {
			TwitchManager.refreshAccessToken();
		}
	};
}

// ---

TwitchManager.loadTokens();

// ---

// ------------------------------------------------------------------
// Exports
// ------------------------------------------------------------------
window.TwitchManager = TwitchManager;
window.TwitchCommonEvent = TwitchCommonEvent;

})(SRD.Twitch);
