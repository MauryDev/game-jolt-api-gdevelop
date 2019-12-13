(function () {
    var tools = (function () {
        var hexcase = 0; function hex_md5(a) { return rstr2hex(rstr_md5(str2rstr_utf8(a))) } function hex_hmac_md5(a, b) { return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a), str2rstr_utf8(b))) } function md5_vm_test() { return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72" } function rstr_md5(a) { return binl2rstr(binl_md5(rstr2binl(a), a.length * 8)) } function rstr_hmac_md5(c, f) { var e = rstr2binl(c); if (e.length > 16) { e = binl_md5(e, c.length * 8) } var a = Array(16), d = Array(16); for (var b = 0; b < 16; b++) { a[b] = e[b] ^ 909522486; d[b] = e[b] ^ 1549556828 } var g = binl_md5(a.concat(rstr2binl(f)), 512 + f.length * 8); return binl2rstr(binl_md5(d.concat(g), 512 + 128)) } function rstr2hex(c) { try { hexcase } catch (g) { hexcase = 0 } var f = hexcase ? "0123456789ABCDEF" : "0123456789abcdef"; var b = ""; var a; for (var d = 0; d < c.length; d++) { a = c.charCodeAt(d); b += f.charAt((a >>> 4) & 15) + f.charAt(a & 15) } return b } function str2rstr_utf8(c) { var b = ""; var d = -1; var a, e; while (++d < c.length) { a = c.charCodeAt(d); e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0; if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) { a = 65536 + ((a & 1023) << 10) + (e & 1023); d++ } if (a <= 127) { b += String.fromCharCode(a) } else { if (a <= 2047) { b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63)) } else { if (a <= 65535) { b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63)) } else { if (a <= 2097151) { b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63)) } } } } } return b } function rstr2binl(b) { var a = Array(b.length >> 2); for (var c = 0; c < a.length; c++) { a[c] = 0 } for (var c = 0; c < b.length * 8; c += 8) { a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (c % 32) } return a } function binl2rstr(b) { var a = ""; for (var c = 0; c < b.length * 32; c += 8) { a += String.fromCharCode((b[c >> 5] >>> (c % 32)) & 255) } return a } function binl_md5(p, k) { p[k >> 5] |= 128 << ((k) % 32); p[(((k + 64) >>> 9) << 4) + 14] = k; var o = 1732584193; var n = -271733879; var m = -1732584194; var l = 271733878; for (var g = 0; g < p.length; g += 16) { var j = o; var h = n; var f = m; var e = l; o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936); l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586); m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819); n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330); o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897); l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426); m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341); n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983); o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416); l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417); m = md5_ff(m, l, o, n, p[g + 10], 17, -42063); n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162); o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682); l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101); m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290); n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329); o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510); l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632); m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713); n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302); o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691); l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083); m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335); n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848); o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438); l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690); m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961); n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501); o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467); l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784); m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473); n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734); o = md5_hh(o, n, m, l, p[g + 5], 4, -378558); l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463); m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562); n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556); o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060); l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353); m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632); n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640); o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174); l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222); m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979); n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189); o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487); l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835); m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520); n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651); o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844); l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415); m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905); n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055); o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571); l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606); m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523); n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799); o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359); l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744); m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380); n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649); o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070); l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379); m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259); n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551); o = safe_add(o, j); n = safe_add(n, h); m = safe_add(m, f); l = safe_add(l, e) } return Array(o, n, m, l) } function md5_cmn(h, e, d, c, g, f) { return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d) } function md5_ff(g, f, k, j, e, i, h) { return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h) } function md5_gg(g, f, k, j, e, i, h) { return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h) } function md5_hh(g, f, k, j, e, i, h) { return md5_cmn(f ^ k ^ j, g, f, e, i, h) } function md5_ii(g, f, k, j, e, i, h) { return md5_cmn(k ^ (f | (~j)), g, f, e, i, h) } function safe_add(a, d) { var c = (a & 65535) + (d & 65535); var b = (a >> 16) + (d >> 16) + (c >> 16); return (b << 16) | (c & 65535) } function bit_rol(a, b) { return (a << b) | (a >>> (32 - b)) };
        /**
         * @param {{key: string,url: string,param: [string,string][]}} data
         * @param {{setValue: any}} message
         */
        function request(data, message) {
            var gamejolt_api_url = "https://api.gamejolt.com/api/game/v1_2";
            gamejolt_api_url = gamejolt_api_url + data.url + "?" + param(data.param)
            var request = new XMLHttpRequest();
            request.onprogress = function () {
                if (request.status === 200) {
                    let data = JSON.parse(request.responseText).response;
                    message.setValue({
                        on: true,
                        public: data
                    })
                }
            }
            gamejolt_api_url += signature(gamejolt_api_url, data._key)
            request.open("GET", gamejolt_api_url);
            request.send();
        }
        /**
         * @param {string} variable 
         */
        function toScriptVariable(variable, runtimeScene) {
            let arr_variable = variable.split(".")
            let script_variable = runtimeScene.getVariables().get(arr_variable[0]);
            let size = script_variable.length
            for (let i = 1; i < size; i++) {
                script_variable = script_variable.getChild(arr_variable[i])
            }
            return script_variable;
        }
        /**
         * @param {[string,string][]} arr
         */
        function param(arr) {
            return arr.filter(function (val) {
                return val[1] || val[1] === 0 ? true : false;
            }).map(function (val) {
                val = val.map(function (val) { return encodeURIComponent(val) });
                return val.join("=")
            }).join("&");
        }
        function signature(url, key) {
            return "&signature=" + hex_md5(url + key);
        }
        return { request: request, toScriptVariable: toScriptVariable }
    })()
    var request = tools.request;
    var toScriptVariable = tools.toScriptVariable
    /**
     * @param {string} _key
     * @param {string} _gameid
     */
    function GameJoltAPI(_key, _gameid) {
        /**
         * @type {Object<string,Message>}
         */
        var messages = {};
        function Message() {
            var private_ = {
                on = false,
                public: {
                    message: "",
                    success: "",
                    tables: [],
                    rank: "",
                    scores: [],
                    friends: [],
                    trophies: [],
                    users: [],
                    keys: []
                }
            }
            this.setValue = function (val) {
                private_.on = val.on;
                private_.public = val.public
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
            this.getValue = function () {
                return private_.public;
            }
            this.some_message = function () {
                let ret = private_.on;
                private_.on = false;
                return ret
            }
            return this
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
                return message_tools(message_id).some_message();
            },
            data_message(message_id) {
                return message_tools(message_id).getValue();
            },
            toScriptVariable: toScriptVariable,
            methods: {
                AddScoreUser: function (score, sort, table_id, username, user_token, message_id, extra_data) {
                    request({
                        url: "/scores/add/",
                        _key: _key,
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
                AddScoreGuest: function (score, sort, table_id, guest, message_id, extra_data) {
                    request({
                        url: "/scores/add/",
                        _key: _key,
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
                GetRank: function (sort, table_id, message_id) {
                    request({
                        url: "/score/get-rank/",
                        _key: _key,
                        param: [["game_id", _gameid], ["sort", sort], ["table_id", table_id]]
                    }, message_tools(message_id));
                },
                GetTables: function (message_id) {
                    request({
                        url: "/scores/tables/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid]
                        ]
                    }, message_tools(message_id))
                },
                FetchScores: function (limit, table_id, username, user_token, guest, better_than, worse_than, message_id) {
                    request({
                        url: "/scores/",
                        _key: _key,
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
                GetFriends: function (username, user_token, message_id) {
                    request({
                        url: "/friends/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                        ]
                    }, message_tools(message_id))
                },
                GetTime: function (message_id) {
                    request({
                        url: "/time/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid]
                        ]
                    }, message_tools(message_id))
                },
                AuthUser: function (username, user_token, message_id) {
                    request({
                        url: "/users/auth/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                        ]
                    }, message_tools(message_id))
                },
                FetchUsers: function (username, user_id, message_id) {
                    request({
                        url: "/users/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_id],
                        ]
                    }, message_tools(message_id))
                },
                OpenSession: function (username, user_token, message_id) {
                    request({
                        url: "/sessions/open/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                        ]
                    }, message_tools(message_id))
                },
                PingSession: function (username, user_token, status, message_id) {
                    request({
                        url: "/sessions/ping/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["status", status]
                        ]
                    }, message_tools(message_id))
                },
                CheckSession: function (username, user_token, message_id) {
                    request({
                        url: "/sessions/check/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                        ]
                    }, message_tools(message_id))
                },
                CloseSession: function (username, user_token, message_id) {
                    request({
                        url: "/sessions/close/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                        ]
                    }, message_tools(message_id))
                },
                Add_Achieved: function (username, user_token, trophy_id, message_id) {
                    request({
                        url: "/trophies/add-achieved/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["trophy_id", trophy_id]
                        ]
                    }, message_tools(message_id))
                },
                RemoveAchieved: function (username, user_token, trophy_id, message_id) {
                    request({
                        url: "/trophies/remove-achieved/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["trophy_id", trophy_id]
                        ]
                    }, message_tools(message_id))
                },
                FetchTrophies: function (username, user_token, trophy_id, achieved, message_id) {
                    request({
                        url: "/trophies/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["trophy_id", trophy_id],
                            ["achieved", achieved]
                        ]
                    }, message_tools(message_id))
                },
                SetDataStore: function (key, data, username, user_token, message_id) {
                    request({
                        url: "/data-store/set/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["key", key],
                            ["data", data]
                        ]
                    }, message_tools(message_id))
                },
                UpdateDataStore: function (key, username, user_token, operation, value, message_id) {
                    request({
                        url: "/data-store/update/",
                        _key: _key,
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
                RemoveDataStore: function (key, username, user_token, message_id) {
                    request({
                        url: "/data-store/remove/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["key", key]
                        ]
                    }, message_tools(message_id))
                },
                FetchDataStore: function (key, username, user_token, message_id) {
                    request({
                        url: "/data-store/",
                        _key: _key,
                        param: [
                            ["game_id", _gameid],
                            ["username", username],
                            ["user_token", user_token],
                            ["key", key]
                        ]
                    }, message_tools(message_id))
                },
                GetKeysDataStore: function (pattern, username, user_token, message_id) {
                    request({
                        url: "/data-store/get-keys/",
                        _key: _key,
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
    window.GameJoltAPI = GameJoltAPI;
})()
