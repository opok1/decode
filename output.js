//Tue Sep 10 2024 02:38:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("益禾堂"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request");
let notifyStr = "";
var ua = "";
(async () => {
  const _0x21e277 = checkVersion("yht.js", "1a2575e4ec5d9b83ace25f02327a17eb");
  let _0x197a87 = [];
  _0x21e277 && (_0x197a87 = _0x21e277.split(","));
  const _0x4ebdbe = process.env.yht_ck,
    _0x485e10 = process.env.yht_showinviteId;
  if (!_0x4ebdbe) {
    logAndNotify("请先设置环境变量 yht_ck");
    return;
  }
  const _0x2f4017 = !!_0x485e10;
  let _0x2441f9 = _0x4ebdbe.replaceAll("&", "\n").split("\n");
  for (let _0x407df2 = 0; _0x407df2 < _0x2441f9.length; _0x407df2++) {
    ua = generateUserAgent();
    const _0x11f39f = _0x2441f9[_0x407df2],
      _0x2e4e08 = await sendGetRequest("https://webapi.qmai.cn/web/catering/crm/personal-info", _0x11f39f);
    if (!_0x2e4e08.data.status) {
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x2e4e08.data.data.mobilePhone + "🧐");
    const _0x3aa58b = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture", _0x11f39f, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x3aa58b.data.status) {
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 开启种树成功");
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 userId=【" + _0x3aa58b.data.data.userId + "】");
    } else {
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 忽略此提示【" + _0x3aa58b.data.message + "】");
    }
    const _0x3a5147 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/taskInfo", _0x11f39f, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    logAndNotify("账号【" + (_0x407df2 + 1) + "】 被助力次数:【" + _0x3a5147.data.data.dailyInviteNum + "】");
    for (const _0x303893 of _0x197a87) {
      const _0x59f4d5 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/userHelp", _0x11f39f, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5",
        inviteUserId: _0x303893
      });
      if (_0x59f4d5.data.status) {
        _0x2f4017 ? logAndNotify("账号【" + (_0x407df2 + 1) + "】 【" + _0x303893 + "】 助力成功") : logAndNotify("账号【" + (_0x407df2 + 1) + "】 助力成功");
      } else {
        if (_0x2f4017) {
          logAndNotify("账号【" + (_0x407df2 + 1) + "】 【" + _0x303893 + "】 助力失败: " + _0x59f4d5.data.message);
        } else {
          logAndNotify("账号【" + (_0x407df2 + 1) + "】 助力失败: " + _0x59f4d5.data.message);
        }
        if (_0x59f4d5.data.message === "今日助力次数已达上限") {
          break;
        }
      }
    }
    const _0x268566 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo", _0x11f39f, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      }),
      _0x18328a = _0x268566.data.data.nurtureStageVo;
    logAndNotify("账号【" + (_0x407df2 + 1) + "】 剩余肥料【" + _0x18328a.nutrientRemaining + "】");
    for (let _0x6f8f39 = 0; _0x6f8f39 < _0x18328a.nutrientRemaining; _0x6f8f39++) {
      const _0x2f2903 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient", _0x11f39f, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      _0x2f2903.data.status ? logAndNotify("账号【" + (_0x407df2 + 1) + "】 施肥【" + (_0x6f8f39 + 1) + "】次成功") : logAndNotify("账号【" + (_0x407df2 + 1) + "】 施肥【" + (_0x6f8f39 + 1) + "】次失败");
    }
    const _0x117b92 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/stageInfo", _0x11f39f, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x117b92.data.status) {
      const _0x4f53b9 = _0x117b92.data.data;
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 当前是【" + _0x4f53b9.name + "】, 再施肥【" + (_0x4f53b9.upgradeThreshold - _0x4f53b9.nutrientUsed) + "】次 成为【" + _0x4f53b9.nextName + "】");
    }
    const _0x4e6b5b = new Date().getDay();
    if (_0x4e6b5b === 2) {
      const _0x1c9240 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/receive/takePartInReceive", _0x11f39f, {
        activityId: "1038508490954362881",
        timestamp: "",
        signature: "",
        qzGtd: "",
        gdtVid: "",
        data: "",
        version: 1,
        appid: "wx4080846d0cec2fd5"
      });
      if (_0x1c9240.data.status) {
        logAndNotify("账号【" + (_0x407df2 + 1) + "】 领卷成功");
      } else {
        logAndNotify("账号【" + (_0x407df2 + 1) + "】 领卷失败，可以忽略: " + _0x1c9240.data.message);
      }
    }
    const _0x5bd34f = await sendPostRequest("https://webapi.qmai.cn/web/catering/crm/coupon/list", _0x11f39f, {
      pageNo: 1,
      pageSize: 1000,
      useStatus: 0,
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x5bd34f.data.status) {
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 优惠卷总数量: " + _0x5bd34f.data.data.totalNum);
      for (const _0x5d108e of _0x5bd34f.data.data.data) {
        logAndNotify("账号【" + (_0x407df2 + 1) + "】 优惠卷: " + _0x5d108e.title + " 有效期【" + _0x5d108e.expireDesc + "】");
      }
    } else {
      logAndNotify("账号【" + (_0x407df2 + 1) + "】 获取优惠卷失败: " + _0x5bd34f.data.message);
    }
  }
})().catch(_0x5ecbc4 => {
  logAndNotify(_0x5ecbc4);
}).finally(() => {
  sendNotify("益禾堂", notifyStr);
  $.done();
});
async function sendPostRequest(_0x244946, _0x3db74a, _0x21b872) {
  await delay(1000);
  const _0x27f91a = {
      "Qm-From": "wechat",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
      "User-Agent": ua
    },
    _0x16861e = {
      ..._0x27f91a,
      ...{
        "Qm-User-Token": _0x3db74a
      }
    },
    _0x47e312 = axios.create({
      headers: _0x16861e
    });
  return _0x47e312.post(_0x244946, _0x21b872);
}
async function sendGetRequest(_0x54e765, _0xb62865) {
  await delay(1000);
  const _0x3f2eac = {
      "Qm-From": "wechat",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
      "User-Agent": ua
    },
    _0x12352a = {
      ..._0x3f2eac,
      ...{
        "Qm-User-Token": _0xb62865
      }
    },
    _0x48d36b = axios.create({
      headers: _0x12352a
    });
  return _0x48d36b.get(_0x54e765);
}
function logAndNotify(_0xa9ee8f) {
  1;
  $.log(_0xa9ee8f);
  notifyStr += _0xa9ee8f;
  notifyStr += "\n";
}
function delay(_0x43b33d) {
  return new Promise(_0x751fc0 => setTimeout(_0x751fc0, _0x43b33d));
}
function Env(_0x3f1e8c, _0x279b78) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x112e45 {
    constructor(_0x73755b) {
      this.env = _0x73755b;
    }
    send(_0x1c6007, _0x2b4a1d = "GET") {
      _0x1c6007 = "string" == typeof _0x1c6007 ? {
        url: _0x1c6007
      } : _0x1c6007;
      let _0x33da91 = this.get;
      "POST" === _0x2b4a1d && (_0x33da91 = this.post);
      return new Promise((_0x5323f4, _0x4945f4) => {
        _0x33da91.call(this, _0x1c6007, (_0x424d8a, _0x51912c, _0x4c9a95) => {
          _0x424d8a ? _0x4945f4(_0x424d8a) : _0x5323f4(_0x51912c);
        });
      });
    }
    get(_0x309cd0) {
      return this.send.call(this.env, _0x309cd0);
    }
    post(_0x4846d4) {
      return this.send.call(this.env, _0x4846d4, "POST");
    }
  }
  return new class {
    constructor(_0x22effc, _0x861dd) {
      this.name = _0x22effc;
      this.http = new _0x112e45(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x861dd);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x210d45, _0x57ce92 = null) {
      try {
        return JSON.parse(_0x210d45);
      } catch {
        return _0x57ce92;
      }
    }
    toStr(_0x27ac8c, _0x459361 = null) {
      try {
        return JSON.stringify(_0x27ac8c);
      } catch {
        return _0x459361;
      }
    }
    getjson(_0x49217c, _0x4abd1c) {
      let _0x1010d9 = _0x4abd1c;
      const _0xe55336 = this.getdata(_0x49217c);
      if (_0xe55336) {
        try {
          _0x1010d9 = JSON.parse(this.getdata(_0x49217c));
        } catch {}
      }
      return _0x1010d9;
    }
    setjson(_0x1299b2, _0x3a6ba4) {
      try {
        return this.setdata(JSON.stringify(_0x1299b2), _0x3a6ba4);
      } catch {
        return !1;
      }
    }
    getScript(_0x442943) {
      return new Promise(_0x361355 => {
        this.get({
          url: _0x442943
        }, (_0x15b3f4, _0x554f3f, _0x5b0c6e) => _0x361355(_0x5b0c6e));
      });
    }
    runScript(_0x4e438f, _0x19f290) {
      return new Promise(_0x4e6bfd => {
        let _0xab2981 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0xab2981 = _0xab2981 ? _0xab2981.replace(/\n/g, "").trim() : _0xab2981;
        let _0x1da6fb = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x1da6fb = _0x1da6fb ? 1 * _0x1da6fb : 20;
        _0x1da6fb = _0x19f290 && _0x19f290.timeout ? _0x19f290.timeout : _0x1da6fb;
        const [_0xc85774, _0x507764] = _0xab2981.split("@"),
          _0x1e0cb0 = {
            url: "http://" + _0x507764 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x4e438f,
              mock_type: "cron",
              timeout: _0x1da6fb
            },
            headers: {
              "X-Key": _0xc85774,
              Accept: "*/*"
            }
          };
        this.post(_0x1e0cb0, (_0x48ec26, _0x21a46b, _0x52964d) => _0x4e6bfd(_0x52964d));
      }).catch(_0x65c616 => this.logErr(_0x65c616));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5a2c3b = this.path.resolve(this.dataFile),
          _0x332b77 = this.path.resolve(process.cwd(), this.dataFile),
          _0xcfdc8f = this.fs.existsSync(_0x5a2c3b),
          _0x18f93b = !_0xcfdc8f && this.fs.existsSync(_0x332b77);
        if (!_0xcfdc8f && !_0x18f93b) {
          return {};
        }
        {
          const _0x5e0df3 = _0xcfdc8f ? _0x5a2c3b : _0x332b77;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5e0df3));
          } catch (_0x5c124a) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3c3eae = this.path.resolve(this.dataFile),
          _0x512824 = this.path.resolve(process.cwd(), this.dataFile),
          _0x5c80f3 = this.fs.existsSync(_0x3c3eae),
          _0xd602eb = !_0x5c80f3 && this.fs.existsSync(_0x512824),
          _0x51687e = JSON.stringify(this.data);
        _0x5c80f3 ? this.fs.writeFileSync(_0x3c3eae, _0x51687e) : _0xd602eb ? this.fs.writeFileSync(_0x512824, _0x51687e) : this.fs.writeFileSync(_0x3c3eae, _0x51687e);
      }
    }
    lodash_get(_0x1d70df, _0x3a832e, _0x53f244) {
      const _0x1ef002 = _0x3a832e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xe5fc3d = _0x1d70df;
      for (const _0x275e9d of _0x1ef002) if (_0xe5fc3d = Object(_0xe5fc3d)[_0x275e9d], void 0 === _0xe5fc3d) {
        return _0x53f244;
      }
      return _0xe5fc3d;
    }
    lodash_set(_0x2c38d3, _0x438462, _0x2327e6) {
      return Object(_0x2c38d3) !== _0x2c38d3 ? _0x2c38d3 : (Array.isArray(_0x438462) || (_0x438462 = _0x438462.toString().match(/[^.[\]]+/g) || []), _0x438462.slice(0, -1).reduce((_0x5d754c, _0x1e1c02, _0x1a2d5b) => Object(_0x5d754c[_0x1e1c02]) === _0x5d754c[_0x1e1c02] ? _0x5d754c[_0x1e1c02] : _0x5d754c[_0x1e1c02] = Math.abs(_0x438462[_0x1a2d5b + 1]) >> 0 == +_0x438462[_0x1a2d5b + 1] ? [] : {}, _0x2c38d3)[_0x438462[_0x438462.length - 1]] = _0x2327e6, _0x2c38d3);
    }
    getdata(_0x234b9a) {
      let _0x42f216 = this.getval(_0x234b9a);
      if (/^@/.test(_0x234b9a)) {
        const [, _0xed265c, _0x2ef4e4] = /^@(.*?)\.(.*?)$/.exec(_0x234b9a),
          _0x5d503b = _0xed265c ? this.getval(_0xed265c) : "";
        if (_0x5d503b) {
          try {
            const _0xd6c334 = JSON.parse(_0x5d503b);
            _0x42f216 = _0xd6c334 ? this.lodash_get(_0xd6c334, _0x2ef4e4, "") : _0x42f216;
          } catch (_0x250e52) {
            _0x42f216 = "";
          }
        }
      }
      return _0x42f216;
    }
    setdata(_0x545983, _0x5cf6f4) {
      let _0x34cf66 = !1;
      if (/^@/.test(_0x5cf6f4)) {
        const [, _0x227863, _0x23eee1] = /^@(.*?)\.(.*?)$/.exec(_0x5cf6f4),
          _0x4370f5 = this.getval(_0x227863),
          _0x3fe269 = _0x227863 ? "null" === _0x4370f5 ? null : _0x4370f5 || "{}" : "{}";
        try {
          const _0x116892 = JSON.parse(_0x3fe269);
          this.lodash_set(_0x116892, _0x23eee1, _0x545983);
          _0x34cf66 = this.setval(JSON.stringify(_0x116892), _0x227863);
        } catch (_0x3df03d) {
          const _0x2a9dff = {};
          this.lodash_set(_0x2a9dff, _0x23eee1, _0x545983);
          _0x34cf66 = this.setval(JSON.stringify(_0x2a9dff), _0x227863);
        }
      } else {
        _0x34cf66 = this.setval(_0x545983, _0x5cf6f4);
      }
      return _0x34cf66;
    }
    getval(_0x4ac74a) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x4ac74a) : this.isQuanX() ? $prefs.valueForKey(_0x4ac74a) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4ac74a]) : this.data && this.data[_0x4ac74a] || null;
    }
    setval(_0x1d441b, _0x180032) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1d441b, _0x180032) : this.isQuanX() ? $prefs.setValueForKey(_0x1d441b, _0x180032) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x180032] = _0x1d441b, this.writedata(), !0) : this.data && this.data[_0x180032] || null;
    }
    initGotEnv(_0x7b040e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x7b040e && (_0x7b040e.headers = _0x7b040e.headers ? _0x7b040e.headers : {}, void 0 === _0x7b040e.headers.Cookie && void 0 === _0x7b040e.cookieJar && (_0x7b040e.cookieJar = this.ckjar));
    }
    get(_0x172012, _0x3ba57d = () => {}) {
      _0x172012.headers && (delete _0x172012.headers["Content-Type"], delete _0x172012.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x172012.headers = _0x172012.headers || {}, Object.assign(_0x172012.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x172012, (_0x169547, _0x43ef91, _0x22cb42) => {
        !_0x169547 && _0x43ef91 && (_0x43ef91.body = _0x22cb42, _0x43ef91.statusCode = _0x43ef91.status);
        _0x3ba57d(_0x169547, _0x43ef91, _0x22cb42);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x172012.opts = _0x172012.opts || {}, Object.assign(_0x172012.opts, {
        hints: !1
      })), $task.fetch(_0x172012).then(_0x593333 => {
        const {
          statusCode: _0x459999,
          statusCode: _0x4150ad,
          headers: _0x481c63,
          body: _0x129fed
        } = _0x593333;
        _0x3ba57d(null, {
          status: _0x459999,
          statusCode: _0x4150ad,
          headers: _0x481c63,
          body: _0x129fed
        }, _0x129fed);
      }, _0x525135 => _0x3ba57d(_0x525135))) : this.isNode() && (this.initGotEnv(_0x172012), this.got(_0x172012).on("redirect", (_0x50b48a, _0x1adb27) => {
        try {
          if (_0x50b48a.headers["set-cookie"]) {
            const _0x54a093 = _0x50b48a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x54a093 && this.ckjar.setCookieSync(_0x54a093, null);
            _0x1adb27.cookieJar = this.ckjar;
          }
        } catch (_0x456d33) {
          this.logErr(_0x456d33);
        }
      }).then(_0x49f458 => {
        const {
          statusCode: _0x5efe6d,
          statusCode: _0x3784fd,
          headers: _0x14eff4,
          body: _0x1e4a93
        } = _0x49f458;
        _0x3ba57d(null, {
          status: _0x5efe6d,
          statusCode: _0x3784fd,
          headers: _0x14eff4,
          body: _0x1e4a93
        }, _0x1e4a93);
      }, _0x3fa332 => {
        const {
          message: _0x261355,
          response: _0x1d63ff
        } = _0x3fa332;
        _0x3ba57d(_0x261355, _0x1d63ff, _0x1d63ff && _0x1d63ff.body);
      }));
    }
    post(_0x356057, _0x4ac63e = () => {}) {
      if (_0x356057.body && _0x356057.headers && !_0x356057.headers["Content-Type"] && (_0x356057.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x356057.headers && delete _0x356057.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x356057.headers = _0x356057.headers || {}, Object.assign(_0x356057.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x356057, (_0x2c7de5, _0x2957d2, _0x3d303a) => {
          !_0x2c7de5 && _0x2957d2 && (_0x2957d2.body = _0x3d303a, _0x2957d2.statusCode = _0x2957d2.status);
          _0x4ac63e(_0x2c7de5, _0x2957d2, _0x3d303a);
        });
      } else {
        if (this.isQuanX()) {
          _0x356057.method = "POST";
          this.isNeedRewrite && (_0x356057.opts = _0x356057.opts || {}, Object.assign(_0x356057.opts, {
            hints: !1
          }));
          $task.fetch(_0x356057).then(_0x3bf87c => {
            const {
              statusCode: _0xc016ff,
              statusCode: _0xae2ba7,
              headers: _0x1740b8,
              body: _0x103a43
            } = _0x3bf87c;
            _0x4ac63e(null, {
              status: _0xc016ff,
              statusCode: _0xae2ba7,
              headers: _0x1740b8,
              body: _0x103a43
            }, _0x103a43);
          }, _0x146d05 => _0x4ac63e(_0x146d05));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x356057);
            const {
              url: _0x185e43,
              ..._0x17d252
            } = _0x356057;
            this.got.post(_0x185e43, _0x17d252).then(_0x1617fa => {
              const {
                statusCode: _0x583cfa,
                statusCode: _0x5762da,
                headers: _0x3268d6,
                body: _0x148cd0
              } = _0x1617fa;
              _0x4ac63e(null, {
                status: _0x583cfa,
                statusCode: _0x5762da,
                headers: _0x3268d6,
                body: _0x148cd0
              }, _0x148cd0);
            }, _0xa52306 => {
              const {
                message: _0x3e3cc6,
                response: _0xa72900
              } = _0xa52306;
              _0x4ac63e(_0x3e3cc6, _0xa72900, _0xa72900 && _0xa72900.body);
            });
          }
        }
      }
    }
    time(_0x99f1fd, _0xd38995 = null) {
      const _0x231b41 = _0xd38995 ? new Date(_0xd38995) : new Date();
      let _0x284270 = {
        "M+": _0x231b41.getMonth() + 1,
        "d+": _0x231b41.getDate(),
        "H+": _0x231b41.getHours(),
        "m+": _0x231b41.getMinutes(),
        "s+": _0x231b41.getSeconds(),
        "q+": Math.floor((_0x231b41.getMonth() + 3) / 3),
        S: _0x231b41.getMilliseconds()
      };
      /(y+)/.test(_0x99f1fd) && (_0x99f1fd = _0x99f1fd.replace(RegExp.$1, (_0x231b41.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x573894 in _0x284270) new RegExp("(" + _0x573894 + ")").test(_0x99f1fd) && (_0x99f1fd = _0x99f1fd.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x284270[_0x573894] : ("00" + _0x284270[_0x573894]).substr(("" + _0x284270[_0x573894]).length)));
      return _0x99f1fd;
    }
    msg(_0x271470 = _0x3f1e8c, _0x30d902 = "", _0x22ce81 = "", _0x291243) {
      const _0x41cf0a = _0x4420ac => {
        if (!_0x4420ac) {
          return _0x4420ac;
        }
        if ("string" == typeof _0x4420ac) {
          return this.isLoon() ? _0x4420ac : this.isQuanX() ? {
            "open-url": _0x4420ac
          } : this.isSurge() ? {
            url: _0x4420ac
          } : void 0;
        }
        if ("object" == typeof _0x4420ac) {
          if (this.isLoon()) {
            let _0x3639ea = _0x4420ac.openUrl || _0x4420ac.url || _0x4420ac["open-url"],
              _0x1f93c8 = _0x4420ac.mediaUrl || _0x4420ac["media-url"];
            return {
              openUrl: _0x3639ea,
              mediaUrl: _0x1f93c8
            };
          }
          if (this.isQuanX()) {
            let _0x55f661 = _0x4420ac["open-url"] || _0x4420ac.url || _0x4420ac.openUrl,
              _0x298404 = _0x4420ac["media-url"] || _0x4420ac.mediaUrl;
            return {
              "open-url": _0x55f661,
              "media-url": _0x298404
            };
          }
          if (this.isSurge()) {
            let _0x3647ea = _0x4420ac.url || _0x4420ac.openUrl || _0x4420ac["open-url"];
            return {
              url: _0x3647ea
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x271470, _0x30d902, _0x22ce81, _0x41cf0a(_0x291243)) : this.isQuanX() && $notify(_0x271470, _0x30d902, _0x22ce81, _0x41cf0a(_0x291243))), !this.isMuteLog) {
        let _0x1c02cf = ["", "==============📣系统通知📣=============="];
        _0x1c02cf.push(_0x271470);
        _0x30d902 && _0x1c02cf.push(_0x30d902);
        _0x22ce81 && _0x1c02cf.push(_0x22ce81);
        console.log(_0x1c02cf.join("\n"));
        this.logs = this.logs.concat(_0x1c02cf);
      }
    }
    log(..._0x1200fd) {
      _0x1200fd.length > 0 && (this.logs = [...this.logs, ..._0x1200fd]);
      console.log(_0x1200fd.join(this.logSeparator));
    }
    logErr(_0xa7be8d, _0x29922f) {
      const _0x3da017 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3da017 ? this.log("", "❗️" + this.name + ", 错误!", _0xa7be8d.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xa7be8d);
    }
    wait(_0x4a7194) {
      return new Promise(_0x4f30cd => setTimeout(_0x4f30cd, _0x4a7194));
    }
    done(_0x120632 = {}) {
      const _0x4d54eb = new Date().getTime(),
        _0x1753c3 = (_0x4d54eb - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1753c3 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x120632);
    }
  }(_0x3f1e8c, _0x279b78);
}
function checkVersion(_0x47c07d, _0x3be494) {
  try {
    logAndNotify("文件md5：" + _0x3be494);
    const _0x391cf4 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x47c07d + "&fileMd5=" + _0x3be494),
      _0x2c1bfc = JSON.parse(_0x391cf4.getBody("utf8"));
    _0x2c1bfc.code === 301 ? process.exit(0) : logAndNotify(_0x2c1bfc.data);
    if (_0x2c1bfc.data2 && _0x2c1bfc.data2.inviteData) {
      return _0x2c1bfc.data2.inviteData;
    }
  } catch (_0x59b27a) {
    logAndNotify("版本检查失败:", _0x59b27a);
  }
}
function generateUserAgent() {
  return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + Math.floor(Math.random() * 8 + 7) + "." + Math.floor(Math.random() * 10) + "." + (Math.floor(Math.random() * 10000) + 10000) + " NetType/WIFI Language/zh_CN";
}