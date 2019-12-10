import { request,toScriptVariable } from "./tools/index.js";
/**
 * @param {string} _key
 * @param {string} _gameid
 */
export default GameJoltAPI;
function GameJoltAPI(_key, _gameid) {
    /**
     * @type {Object<string,Message>}
     */
    var messages = {};
    class Message {
        constructor() {
            this.on = false;
            this.public = {
                message: "",
                success: "",
                tables: [],
                rank: "",
                scores: [],
                friends: [],
                trophies: [],
                users: [],
                keys: []
            };
        }
        set setValue(val) {
            this.on = val.on;
            this.public = val.public
        }
        get setValue() {
            return undefined;
        }
        /**
         * @typedef {{id: string,name: string,description: string,primary: string}[]} Tables
         * @typedef {{extra_data: string,guest: string,score: string,sort: string,stored: string,stored_timestamp: number,user:string,user_id:string}[]} Scores
         * @typedef {{friend_id: string}[]} Friends
         * @typedef {{id:string,type:string,username:string,avatar_url:string,signed_up:string,signed_up_timestamp:number,last_logged_in:string,last_logged_in_timestamp:number,status:string,developer_name:string,developer_website:string,developer_description:string}[]} Users
         * @typedef {{achieved: string,description: string,difficulty: string,id: string,image_url: string,title: string}[]} Trophies
         * @typedef {{key:string}[]} Keys
         */
        /**
         * @returns {{success: string,message: string,data: string | number,keys: Keys,trophies: Trophies,users: Users,tables: Tables,rank: string,scores: Scores,friends: Friends,timestamp:number,timezone:string,year:string,month:string,day:string,hour:string,minute:string,second:string}}
         */
        get getValue() {
            return this.public;
        }
        get some_message() {
            let ret = this.on;
            this.on = false;
            return ret
        }
    }
    var message_tools = (message_id) => {
        let _message_id = message_id || message_id === 0 ? "@" + message_id : "";
        if (messages[_message_id] === undefined) {
            messages[_message_id] = new Message();
        }
        return messages[_message_id]
    }
    return {
        some_message(message_id) {
            return message_tools(message_id).some_message;
        },
        data_message(message_id) {
            return message_tools(message_id).getValue;
        },
        toScriptVariable,
        methods: {
            AddScoreUser(score, sort, table_id, username, user_token, message_id, extra_data) {
                request({
                    url: "/scores/add/",
                    _key,
                    param: [
                        ["score", score],
                        ["sort", sort],
                        ["table_id", table_id],
                        ["username", username],
                        ["user_token", user_token],
                        ["extra_data", extra_data],
                        ["game_id", _gameid]
                    ]
                }, message_tools(message_id));
            },
            AddScoreGuest(score, sort, table_id, guest, message_id, extra_data) {
                request({
                    url: "/scores/add/",
                    _key,
                    param: [
                        ["score", score],
                        ["sort", sort],
                        ["table_id", table_id],
                        ["guest", guest],
                        ["extra_data", extra_data],
                        ["game_id", _gameid]
                    ]
                }, message_tools(message_id));
            },
            GetRank(sort, table_id, message_id) {
                request({
                    url: "/score/get-rank/",
                    _key,
                    param: [["game_id", _gameid], ["sort", sort], ["table_id", table_id]]
                }, message_tools(message_id));
            },
            GetTables(message_id) {
                request({
                    url: "/scores/tables/",
                    _key,
                    param: [
                        ["game_id", _gameid]
                    ]
                }, message_tools(message_id))
            },
            FetchScores(limit, table_id, username, user_token, guest, better_than, worse_than, message_id) {
                request({
                    url: "/scores/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["limit", limit],
                        ["table_id", table_id],
                        ["username", username],
                        ["user_token", user_token],
                        ["guest", guest],
                        ["better_than", better_than],
                        ["worse_than", worse_than]
                    ]
                }, message_tools(message_id))
            },
            GetFriends(username, user_token, message_id) {
                request({
                    url: "/friends/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                    ]
                }, message_tools(message_id))
            },
            GetTime(message_id) {
                request({
                    url: "/time/",
                    _key,
                    param: [
                        ["game_id", _gameid]
                    ]
                }, message_tools(message_id))
            },
            AuthUser(username, user_token, message_id) {
                request({
                    url: "/users/auth/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                    ]
                }, message_tools(message_id))
            },
            FetchUsers(username, user_id, message_id) {
                request({
                    url: "/users/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_id],
                    ]
                }, message_tools(message_id))
            },
            OpenSession(username, user_token, message_id) {
                request({
                    url: "/sessions/open/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                    ]
                }, message_tools(message_id))
            },
            PingSession(username, user_token, status, message_id) {
                request({
                    url: "/sessions/ping/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["status", status]
                    ]
                }, message_tools(message_id))
            },
            CheckSession(username, user_token, message_id) {
                request({
                    url: "/sessions/check/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                    ]
                }, message_tools(message_id))
            },
            CloseSession(username, user_token, message_id) {
                request({
                    url: "/sessions/close/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                    ]
                }, message_tools(message_id))
            },
            Add_Achieved(username, user_token, trophy_id, message_id) {
                request({
                    url: "/trophies/add-achieved/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["trophy_id", trophy_id]
                    ]
                }, message_tools(message_id))
            },
            RemoveAchieved(username, user_token, trophy_id, message_id) {
                request({
                    url: "/trophies/remove-achieved/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["trophy_id", trophy_id]
                    ]
                }, message_tools(message_id))
            },
            FetchTrophies(username, user_token, trophy_id, achieved, message_id) {
                request({
                    url: "/trophies/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["trophy_id", trophy_id],
                        ["achieved", achieved]
                    ]
                }, message_tools(message_id))
            },
            SetDataStore(key, data, username, user_token, message_id) {
                request({
                    url: "/data-store/set/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["key", key],
                        ["data", data]
                    ]
                }, message_tools(message_id))
            },
            UpdateDataStore(key, username, user_token, operation, value, message_id) {
                request({
                    url: "/data-store/update/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["key", key],
                        ["value", value],
                        ["operation", operation]
                    ]
                }, message_tools(message_id))
            },
            RemoveDataStore(key, username, user_token, message_id) {
                request({
                    url: "/data-store/remove/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["key", key]
                    ]
                }, message_tools(message_id))
            },
            FetchDataStore(key, username, user_token, message_id) {
                request({
                    url: "/data-store/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["key", key]
                    ]
                }, message_tools(message_id))
            },
            GetKeysDataStore(pattern, username, user_token, message_id) {
                request({
                    url: "/data-store/get-keys/",
                    _key,
                    param: [
                        ["game_id", _gameid],
                        ["username", username],
                        ["user_token", user_token],
                        ["pattern", pattern]
                    ]
                }, message_tools(message_id))
            }
        }
    }
}
GameJoltAPI.info = {
    get username() {
        return (!this.isGuest) ? location.search.split("&")[0].split("=")[1] : ""
    },
    get user_token() {
        return (!this.isGuest) ? location.search.split("&")[1].split("=")[1] : ""
    },
    get game_id() {
        return this.IsOriginFromCDN ? location.href.split("/")[7] : ""
    },
    get isGuest() {
        return !(this.IsOriginFromCDN && location.search);
    },
    get IsOriginFromCDN() {
        return (location.origin === "https://b-cdn.gamejolt.net");
    }
}