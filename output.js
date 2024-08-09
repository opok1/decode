//Fri Aug 09 2024 12:08:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    sign: R,
    getToken: D,
    checkCk: E,
    getCookies: W,
    getUserInfo: G,
    validateCarmeWithType: n,
    checkCarmeCount: g,
    tryCatchPromise: U
  } = require("./common.js"),
  a = require("request"),
  {
    wait: Q
  } = require("./common"),
  M = 6,
  H = process.env.ELE_CARME;
let r = 0,
  l = 0,
  h = 0,
  y;
const v = require("crypto");
function k(f) {
  const e = v.createHash("md5").update(f).digest("hex");
  return e;
}
function w(f) {
  return Object.values(f).length === 0;
}
async function B(V) {
  const x1 = {
      authority: "shopping.ele.me",
      accept: "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      origin: "https://r.ele.me",
      pragma: "no-cache",
      referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      cookie: V
    },
    x2 = {
      actId: "20221207144029906162546384",
      collectionId: "20230224114656384938530468",
      componentId: "20230224114825216373367998",
      bizScene: "game_center",
      bizCode: "LOTTERY",
      longitude: "120.21993197500706",
      latitude: "30.178378857672215",
      asac: "2A232091VOX6SPEQYH6RG4",
      extParams: "{\"bizType\":\"LOTTERY\"}",
      ua: "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=",
      umidtoken: "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0="
    },
    x3 = new Date().getTime(),
    x4 = 12574478;
  var x5 = "data=" + encodeURIComponent(JSON.stringify(x2));
  const x6 = D(V),
    x7 = x6.split("_")[0],
    x8 = await R(x7 + "&" + x3 + "&" + x4 + "&" + JSON.stringify(x2), H),
    x9 = {
      url: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + x3 + "&sign=" + x8 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
      method: "POST",
      headers: x1,
      body: x5
    };
  return U(xx => {
    a(x9, async (xp, xZ, xc) => {
      if (!xp && xZ.statusCode === 200) {
        try {
          const xu = JSON.parse(xc);
          if (w(xu.data.data)) {
            console.log(xu.ret[0]);
            xx(false);
          } else {
            if (xu.data.data.errorMsg) {
              console.log(xu.data.data.errorMsg);
            } else {
              let xP = xu.data.data.sendRightList[0];
              const xF = xP.materialInfo.description + xP.materialInfo.title;
              console.log(xF);
            }
            xx(xu);
          }
        } catch (xf) {
          xx(false);
        }
      } else {
        xx(false);
      }
    });
  });
}
async function K(F) {
  const V = await E(F),
    i = {
      authority: "mtop.ele.me",
      accept: "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      asac: "2A21607NIIT1ND5C4YXJ6C",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      origin: "https://tb.ele.me",
      pragma: "no-cache",
      referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
      cookie: V,
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    e = new Date().getTime(),
    x0 = 12574478,
    x1 = {
      bizScene: "game_center",
      asac: "2A21607NIIT1ND5C4YXJ6C",
      umidtoken: "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + e
    };
  var x2 = "data=" + encodeURIComponent(JSON.stringify(x1));
  const x3 = D(V),
    x4 = x3.split("_")[0],
    x5 = await R(x4 + "&" + e + "&" + x0 + "&" + JSON.stringify(x1), H),
    x6 = {
      url: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.6.1&appKey=" + x0 + "&t=" + e + "&sign=" + x5 + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141",
      method: "POST",
      headers: i,
      body: x2
    };
  return U(x7 => {
    a(x6, async (x8, x9, xx) => {
      if (!x8 && x9.statusCode == 200) {
        const xp = JSON.parse(xx);
        xp.data.errorMsg ? console.log(xp.data.errorMsg) : console.log("签到成功");
        x7(xp);
      } else {
        x7(null);
      }
    });
  });
}
async function t(f) {
  const e = {
      bizScene: "LIANLIANKAN",
      bizMethod: "login",
      bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    x0 = await T(f, e);
  return x0.data.token + "_" + x0.data.openId;
}
async function q(i, e) {
  const x3 = {
      gameId: null,
      token: e
    },
    x4 = JSON.stringify(x3);
  const x6 = {
      bizScene: "LIANLIANKAN",
      bizMethod: "startGameV2",
      bizParam: x4,
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    x7 = await T(i, x6);
  if (x7.bizErrorMsg != "success") {
    console.log(x7.bizErrorMsg);
    return null;
  }
  return x7.data.gameCode;
}
async function d(x0, x1, x2) {
  const x5 = {
    name: "page_view",
    obj: {}
  };
  x5.obj.sname = "GameExp";
  x5.obj.level = x2;
  const x7 = {
      eventInfos: [x5],
      gameId: null,
      token: "_0x79d754"
    },
    x8 = JSON.stringify(x7);
  const xx = {
      bizScene: "LIANLIANKAN",
      bizMethod: "reportLog",
      bizParam: x8,
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    xp = await T(x0, xx, 2);
  if (xp.bizErrorMsg != "success") {
    console.log(xp.bizErrorMsg);
    return null;
  }
  return xp.data.gameCode;
}
async function L(x0, x1, x2) {
  const x4 = {
    sname: "ReviveExp",
    failurereason: 0,
    droptimes: x2
  };
  const x5 = {
    name: "page_view",
    obj: x4
  };
  const x7 = {
      eventInfos: [x5],
      gameId: null,
      token: "_0x79d754"
    },
    x8 = JSON.stringify(x7);
  const xx = {
      bizScene: "LIANLIANKAN",
      bizMethod: "reportLog",
      bizParam: x8,
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    xp = await T(x0, xx);
  if (xp.bizErrorMsg != "success") {
    console.log(xp.bizErrorMsg);
    return null;
  }
  return xp.data.gameCode;
}
async function m(x0, x1, x2) {
  const x5 = {
    name: "page_view",
    obj: {}
  };
  x5.obj.sname = "GameFailExp";
  x5.obj.failurereason = 0;
  x5.obj.irise = 1;
  x5.obj.droptimes = x2;
  const x7 = {
      eventInfos: [x5],
      gameId: null,
      token: "_0x79d754"
    },
    x8 = JSON.stringify(x7);
  const xx = {
      bizScene: "LIANLIANKAN",
      bizMethod: "reportLog",
      bizParam: x8,
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    xp = await T(x0, xx);
  if (xp.bizErrorMsg != "success") {
    console.log(xp.bizErrorMsg);
    return null;
  }
  return xp.data.gameCode;
}
async function o(V, i, e, x0) {
  const x2 = new Date().getTime();
  let x3 = x2 - y;
  r = x3;
  console.log(x3);
  const x4 = "Game[" + x0 + "]-" + e + "|" + i + x3,
    x5 = await k(x4);
  const x7 = {
      gameCode: i,
      passLevelTime: x3,
      sign: x5,
      gameId: null,
      token: e
    },
    x8 = JSON.stringify(x7);
  const xx = {
      bizScene: "LIANLIANKAN",
      bizMethod: "settlement",
      bizParam: x8,
      longitude: 108.2048221292035,
      latitude: 22.678892108345327
    },
    xp = await T(V, xx, x2);
  if (xp.bizErrorMsg != "success") {
    console.log(xp.bizErrorMsg);
    return null;
  }
  return xp.data.lastLevelId;
}
async function T(f, V, i = 0) {
  const x1 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: f,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  let x2 = new Date().getTime(),
    x3 = 12574478;
  l = x2;
  i == 2 && h == 0 && (y = l, h++);
  i != 0 && i != 2 && (x2 = i);
  var x4 = "data=" + encodeURIComponent(JSON.stringify(V));
  let x5 = D(f),
    x6 = x5.split("_")[0],
    x7 = await k(x6 + "&" + x2 + "&" + x3 + "&" + JSON.stringify(V), H);
  const x8 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + x2 + "&sign=" + x7 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: x1,
    body: x4
  };
  return U(x9 => {
    a(x8, async (xx, xp, xZ) => {
      if (!xx && xp.statusCode == 200) {
        try {
          const xc = JSON.parse(xZ);
          _0x25dc12 = JSON.parse(xc.data.data);
          x9(_0x25dc12);
        } catch (xu) {
          console.log(xZ);
          x9(null);
        }
      } else {
        x9(null);
      }
    });
  });
}
async function N(V, i, e = 0) {
  console.log("发放中...");
  const x2 = {
    Host: "shopping.ele.me",
    "x-ltraffic-src": "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D",
    "x-eleme-requestid": "ADEA5439FE8340A29040F669FCAD4C31|1723137437692",
    "x-sid": "2e43b42b3e13e4d2a765e9791d7365aae",
    "x-uid": "2214541497400",
    "x-nettype": "UNKNOWN",
    "x-server-ip": "180.76.0.0",
    "x-pv": "6.3",
    "x-nq": "5G",
    "x-features": "1051",
    "x-app-conf-v": "0",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    cookie: V,
    "x-bx-version": "6.6.240501.37153015",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_11.11.88",
    "x-app-ver": "11.11.88",
    "x-c-traceid": "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376810241131437",
    "x-elder-mode": "0",
    "x-pgi-requestid": "5bce4caf-e493-4d94-b68c-4777ff0dc0c1",
    "x-umt": "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0",
    "x-utdid": "Zoq5ZZVQvj0DADRgLoZBLSGu",
    "c-launch-info": "3,0,1723137437680,1723134439818,1",
    asac: "2A23C08X4VP4SVOKFBKCA9",
    "x-appkey": "24895413",
    "x-falco-id": "696f8c1075a344b79b195d11edf7cf0d",
    "x-page-url": "https%3A%2F%2Fr.ele.me%2Flinkgame%2Findex.html%3FnavType%3D3%26longitude%3D106.4976118505001%26latitude%3D26.36270485818386%26spm%3Da13.b_activity_kb_m71293.0.0",
    "x-page-name": "me.ele.component.webcontainer.view.AppUCWebActivity",
    "x-sufei-token": "BO_vGx8i1dIwhdHRl8VKN2L4dQH5lEO2iI4LbwF8bt5lUY5SCWX2BzIG1wZIFhsu",
    "accept-encoding": "gzip"
  };
  const x4 = {
    url: "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_7yZ26hu1JwalIpn%2FcX%2BzfziRWkHYEHsdZmVqXeA2%2FwYUa%2B8bCP0ArVl3I6Gh%2F%2FZqmRdRrj4AjAJUfG%2B3oLrJivFwm63Kg7PpjAsW6VXjHIaMutgOxAOWOcPl6%2BqCMhOSEcqmPAKdCuKLfw1IsX1w%2Bl%2BAitNeCtzTcBQ62VSinUDNlE9u6PyJ%2BIfTDJ%2Fu%2B7iQoXsnE8Y5xIk%2BLbShF5csC%2FOseW6sXYruCygJZUPaB%2FObURmlJ66Ne%2FH2dG6q5NW4r9zMwQ%2FGbRggiD25B5UCTpZV6%2BAaUeFtkfv86LPF3q%2FbM8a%2BoPlvNIDknTIqiitKdpzIFAvRHD9E3KV13DG8ImkGu8bUXyoE9fuAmQc%2BwGlBGEXZ%2BObQTCFMfCxFIOlkP8ReaaqbxN7eAygPPlXq2w%3D%3D&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeLevel2%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23FQbKI49pzzZ5Rzo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvovDRS%5C%2Flp1zzXdEnDgOYFrxvok%2B93Etzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxM02fd3BsbH8OILZ0aO2lkui2X0mlpYazDcLV2eDFT1D2zTJGth%5C%2Fzcl9XXeHM62zzDzbV1h%5C%2FlQzzm8c3IWO1z2ry2X8%2Bl6TIzPxiE%2B5jwFrx2DD38phqfAbbD183lp1zzcFiVBYYN7Yl2Ic%2BV3g%5C%2FWQrbOXMCv9Y2zIriVXl%5C%2FbQrzeWV3EBcQzFzb2%2BBnlk1zzm1VV2lBUzxL2PoO0tTczbri21U30GOzJPDuV2QSLQrx2DD3lthq9Mdu2oOGlpTzzDxkV2Q8%2Bkxx2mwKV6hqzzxy2XlxU6J8x8rbVXl%5C%2FEQrz2DD3VphqyrDC2OMkUpsxzDzb8uV%5C%2FQRtz2mQ%5C%2Fnph%5C%2FzzzbE18%2BC5kJFDzEV1hqMr%2BzqIc3ZpY6zcOi2XU3lGrxzDaEE%2BQmnFrz2DD3vphqzzzb2O8%2BuEKxzIDZIOJqlbzzXPc3yS1Kz2DcL283lpOzEPriVWo%5C%2FjMzzh8P%2BVtg%5C%2Fznzi22yMv9hrz8riVXl%5C%2FbzrzLxn3EF1%2BzFrb22eulpTzMUnfVPnWMbrz2DoXUtg9ZQzh2183ltMzHDrbrZctvC1x2PD3VRcFznzi2ci7lpTzzDoWV2QltS2z7PH%2BVtg%5C%2Fzd%2Bi2mwelEQxzPrbVXl5TzxQwDo7YphqzzoD2XM6lYFz78riV2E%5C%2Fl8sx2KK%2BppTkxFri22U30GOzXNXVVABBUbrz2Do3E3gBaMrbi2Y4lp1zz3%2BiVCHqszDRLDc3Vtg%5C%2Fzbrb22I2e3fzbPzlVOGgqbrx2DD39thq%2BB3b2zwW8ubxzDzbNh7%5C%2FCfDHXDzZr6h%5C%2FzFzbQO8%2B1kFzF8riVXl%5C%2FyQrzU%5C%2Fc3t3EtzFSp23VRleuz4DogV2l%5C%2FlQx22PzXwrSLzLsv2X84lpGdzPzgVB4%5C%2FCQrx2PD3VX83zKdioul3tlrxzPzbVZVqlQziXPxpB3h%5C%2FzzzbR28%2BYHszSPriV2E%5C%2FlM2x2DsFr369zQri22U31KrzZNeiVZJtlzro2IoXUtgb4zzzL183l6TzAIrbUl0%5C%2FvGzD2PD3VtgtzFzb22UdlpG%5C%2FMI2b%5C%2FnJqlQzz2nj%2BV%2BxmFzDM11Y4lp1zz4FiVFU%5C%2FDf%2BzoDK%2BVtluzDbi2rG4GNBAz8riVXl%5C%2FTFrzhcc8sIbJzFrS2XUblpYRzHObVf4ulFrz2DDy936aFHRb2DSJlpTcx8xIV25HPNrx2Hc%2BVthqzzxb2XedvvtxzK2VV2lqlQxA2PzGKZSXz3TV2X8%2Bl66KzPzPEAq%5C%2FvhFd2Pc4V6kuzFDU2XKoZfFxzPFbVu4qlNyx0Pc3ttnFzFzb2m01lQ2xk0rbXUoqlQzz2%2BD%2BVdzFprzba2KDl6TzzD%2BiVXl%5C%2Fl5Tx2DxlttTAxQri22U36gXz34ObBrWqlQzz2%2BN%2BV%2BXaFQzY2O83U3TzHPrbsoW%5C%2FlUFx2PD3V%5C%2F7hzmdb9sl3n5MxzPzbVj4qlsMxa8D3P3EtzFzb2HPylMAxmDDrV1hqMbfzQPc3XtYRzL2V2X8%2Bl66xzPDJEP8qv7To2Pc3VtkFzFzu2xbRl8zrzPrbVXUIOQrz2QgGGHmijDapVrMn%5C%2F2I4jearIkM%2BIXKnqdqAtmQHpN6GrWj6F166bAdG8P3RYEV0xlyEiFLyn1TeFc78jJ4XXbeYkL0ea5XSsKKr8y2yHKuDJvJARVs%5C%2F8BXIYBZJ5RySEZGsQzgenKYPJw0QvCi3j8%2BhHS07aFcCMone5VD2rGPehDRDCyQFz7CnoDj%5C%2F2v8DL3Fp3o3hVjzbjy03B9P5IJWXjLwo%5C%2FAnAuXRI1njUveHm7P5Bz7Y1EAhKcxjQNma6t7pwE%5C%2FPKsyfMXKZSx8WI5mOUN%5C%2F%5C%2FAWEwDMfTuopNbNsYHmwpF%5C%2FIpDE1ZfqkqbQtkehGj%5C%2FhQxsWGn3waqTVjTGE8p3LAjStn778J4Qqicih%2BkHC9phvSLeUyuth3iiJE6c1w0pV%2Bt11OG0DzgT78WUbyI52Z7gNENLWbbDK0Oo2HzywJgLByqQXH%5C%2F1sD4NKSE%5C%2F%2BEZEkqU%5C%2FXuZlkua60ceFO8AqWPvN%5C%2FirmQ0gqs1tzKxg6LFyW%2Bil2JtElAQpqbDzEFc8adLjU%5C%2FzTesWAyrNT3C9XCBWa9JkUQBlE0AFDvHxeKDIhl2kFrtlnnDS8d276hlAp839hySd3MxhChdiZEYGyuYEXozQM60YXdScAOIZAB5D0L49iQq3psw02A9Shm6MiEVf0DYXvG7N%5C%2FmhlA0yJn24ezP7LOxeis%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9",
    method: "GET",
    headers: x2
  };
  return U(x5 => {
    a(x4, async (x6, x7, x8) => {
      if (!x6 && x7.statusCode == 200) {
        try {
          const x9 = JSON.parse(x8);
          _0x25dc12 = JSON.parse(x9.data.data);
          x5(_0x25dc12);
        } catch (xx) {
          console.log(x8);
          x5(null);
        }
      } else {
        x5(null);
      }
    });
  });
}
async function C(V, i, e = 0) {
  console.log("已发放...");
  const x2 = {
    Host: "shopping.ele.me",
    "x-ltraffic-src": "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D",
    "x-sid": "2e43b42b3e13e4d2a765e9791d7365aae",
    "x-uid": "2214541497400",
    "x-nettype": "UNKNOWN",
    "x-server-ip": "180.76.0.0",
    "x-pv": "6.3",
    "x-nq": "5G",
    "x-features": "1051",
    "x-app-conf-v": "0",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    cookie: V,
    "x-bx-version": "6.6.240501.37153015",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_11.11.88",
    "x-app-ver": "11.11.88",
    "x-c-traceid": "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376820242131437",
    "x-elder-mode": "0",
    "x-pgi-requestid": "d8d11dce-3ab2-48a6-8fdb-c0207e660902",
    "x-umt": "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0",
    "x-utdid": "Zoq5ZZVQvj0DADRgLoZBLSGu",
    "c-launch-info": "3,0,1723137437682,1723134439818,1",
    asac: "2A23C08X4VP4SVOKFBKCA9",
    "x-appkey": "24895413",
    "x-falco-id": "12d348ab6b414fb3887df15a233d651e",
    "x-page-url": "https%3A%2F%2Fr.ele.me%2Flinkgame%2Findex.html%3FnavType%3D3%26longitude%3D106.4976118505001%26latitude%3D26.36270485818386%26spm%3Da13.b_activity_kb_m71293.0.0",
    "x-page-name": "me.ele.component.webcontainer.view.AppUCWebActivity",
    "x-sufei-token": "BHBwBYRP4sfbEL78fNjdAnltSjzCuVQDI_vkwmrB2UueJJHPEsgBkhkTeGvjiwzb",
    "accept-encoding": "gzip"
  };
  const x4 = {
    url: "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_e%2BzbQ%2FZQwkxbgEEcvzOoeRqNbdJ07LYgNhrNzku0o%2Fzil8ScM4wjQiER4i%2FOXvnxj4IFjggxqVJTyJhKHkWlMrm1MvumBNTH244akkm2xOXwbMBCweqJfmood679mFYoLb0kJEY7LsQ4vw1%2BEDdcD3%2Fz%2FRvgpNuyPNwU9rGYvlZx8ksbt0NGo%2FnkbaDkt1Uf41a5IBApFuDMQwS1xnXtLYLOinEMznQR3otqacwNDKoDhdDKqpcRTqG1ZEjuHaPVo6GzrvmjWqK436n3Xn17gCsSE6FSSl1%2FxzIi3il4jfxrCQPi1mO3jEzilTlS6AlRzP%2FoSEsQVfrj4arlCF8PAMj0Ee2c4bi4LSaBscAQ%2F5rPvPDWhF4lQ537bDB1v0Yg&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeAll%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23mM2KIJ7szzZg3zo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvoJDRASlp1zzXdEnDgOYFrx12jc7pEtzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxS02fd3BsbH8OILZ0aO2lkui0yKMlpTrzIrbL8%5C%2FqxQrxoPdoFt6zOsOi2Xlbdyuz58QiVXl%5C%2FlQ2x2DD3VtoZzzPe2OM%2BUpsxzDzb7Yh%5C%2FvSrz9PK%2BVtg%5C%2Fzrui238rlMFxzPrbVXUB0bzE6PzEi3luzFzb2%2Bmole1z00rbxF%5C%2FqlQzz2%2B8%2BVHODFzok2X8%2Bl66mzPxZVXM5%2BbrxLDK353hqRCrbIXkKlpMzzcFiVWo%5C%2F2Qrz08K%2BVtg%5C%2Fzdzi2D971kKlz8riVXl%5C%2FTFrzJPdpm3TYzQri22U309szWDFb%5C%2FlVqlbzz2rD%2BV3g%5C%2Fzz%2Bi2xyRHDOzs8fiV2E%5C%2FlMFx2r1jwpTESbri2XU3l1zxzHxb20m%5C%2F%5C%2Fz2x2PhKEJCMz%2BsiT1lvlpTzzDxNV2EA3Srzirj%2BV3g%5C%2Fzx%2Bi22U3l6Mxzo5bozh%5C%2Fmbux2PD3VRY%5C%2FzxsxX2M3DFMxzPrSVfoqlQD62xW3EZzfzFrb22l6lp1rgwrbPf7qlQzz2%2Bk%2BV3paFzDx2O83l6TzMPriVAYqYbDsmDc%2BV3g%5C%2FAFrbAs7HtnuxzP2bVjCql9QzXIoETphqzzxN2Xl6lphyz8riVXl%5C%2F7zrzNcn4EeLFzFrb22lqlp11zDDEV2lqlbzz%5C%2FIc3gq%5C%2FvRbri22U3VXQzsDoBVPmqlQrz2DD096TuzWObsXILlp1zzcFiVqTRcboBLDc%2BV3g%5C%2FFzrbLDRvlQsozPrbVXUs7FogXCY3d3Jjzzzb22kKl6TdzDsiVFE%5C%2Fqz%2Bz%2BDw%2BVtg%5C%2FzDbi2mQ4vGk2ySXiV2E%5C%2FlEXx2Hm3ZGk%5C%2Fvz2i2X8%2Bl1MxzdQvVuhqlQzz2cI%2BVHBnz4SV2X8dMpLAzPDOVBn%5C%2Fszrx2DD35thqyfzcX2MwU3Sxz8rb8%2Bv%5C%2Fuzzk2HD%2BVthqzzoo2Xesvb3zzob0V2l%5C%2FlQDA2Pc37LYq1zri2XU3lGsxzdtVVZEqlQrz2Do4EpgfvFzbdOY4lp1zzdTiVusPfQDw2Ic%2BV6ltAFrbChc5WMbxzPzbVtJqlyjIXDztn6hqzzzb2O8%2Bl6TzDDrbMbotl%5C%2Frn2Pc3VtgGzFx4aTl3KgbozPrbVXUhNbDzXzBKES3zzFrI2XUylphozASbwdJqlQzz2nY%2BVx3P4QDCL183U6OzmPrbdxZAAFoK28c%2BV3g%5C%2FHzrbdue7vGkSxIriI1E%5C%2FvFrzxPxsBt6qzFri22U3vG1z8ccGE%2BQtnbrx2Pc3U3hqpzo02XePl3MxzDzbQTm%5C%2FBfDjXDzG43h%5C%2FzbzbX18%2BKWbKzzOiV2lBUQxK2PxSLPXvz4bN2X8%2Bl6TMzPD3VnjqvN1o2Pc3Vtk4zFDJXoyGleuKzPzbVXlulFzz2DDPS6g%5C%2Fkb2bYOamlp1zznbiVB0epqrO2Pc3VtkrzFxLJ%2BhKtCuxzPuvVjWqlVUr2Do9Y3hqzzxe2XMTv5yzzKzIV2l%5C%2FlQzN2PxzFAZfz%2BfV2X8%2Bl6T9zPzHEKo%5C%2FDQ2x2P82I2Y4zKQiR1M%5C%2Fl3MxzDzbE%2Bl%5C%2FfroiXPz8%2Bth%5C%2FzzzbB18%2BXUKAzPD%5C%2FIXVqlbzzlPc%2BVD%2B4kqPI1wba7X53xl82VUpji2Jpo20oiliCyCPTD7BJqZrUJfK4%5C%2FXdZquSVwqs1GbtGu1FD5KK43fxaT07EUc23qJIRpjswLmoVi%2B9PLPVvz7GhewXhnT0U2N0MBTwRR%2BMqB%2Bz46ZENS7e9sLe1WwsVK89LaYSxy6z56uXQIxKfpqQ0FyGurzHe5QQ0v8LTbIWfmWFEq1Ub2c9RVwYfsX7MUcIAbleZeCccXNxUp96PIYMswQHkN%2BeqEibwsmIYJCjhAslMV7LA3coSRzuS1sPY37vlefTebpd4nzhBOm7KIIe7fn17FskrAnJvO%2Bn%5C%2FpqkwvkTzBrkZERJtkPDOduKnP24bUqWXUa3EEFvZ6gFpSa4qGZCzeBB%5C%2FfGEtxJesCu72tWtYA6IA%5C%2FYOWP9VyVFsE4CGZ95CrbZpRQIeFh3ILdYIMspTHeToBG1uzV%2BmTINkl9CizN7yGSc7COYWzYn%2BxN9OW7hmo4h7L6tVcLPI5N8wv%2BbbUC2Vz1oZVDpHJ%2BdZPyy28Pm5zZCdQFdvL%2BQsjVY0WD53ZIatccZH0iPyPgggn3992Wn%5C%2FXmN4TAwsN1iMckz%5C%2Fwxr4nP%2BnqMuD3ghsuimIt5kg6Ei1s2lD%5C%2Fo99Rhm00m%2BTq%5C%2FcN%2BIO4y0m5llcPU3MbgFXsJhyuOBaOd8KHNQ7czp30oMzM%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9",
    method: "GET",
    headers: x2
  };
  return U(x5 => {
    a(x4, async (x7, x8, x9) => {
      if (!x7 && x8.statusCode == 200) {
        try {
          const xx = JSON.parse(x9);
          _0x25dc12 = JSON.parse(xx.data.data);
          x5(_0x25dc12);
        } catch (xp) {
          console.log(x9);
          x5(null);
        }
      } else {
        x5(null);
      }
    });
  });
}
async function Y(F, f, V) {
  let e = await q(F, f);
  if (e) {
    let x1 = await d(F, f, 1);
    console.log("延迟10秒");
    await Q(10);
    console.log("再延迟15秒");
    await Q(15);
    x1 = await L(F, f, 1);
    console.log("再延迟15秒就稳了");
    await Q(15);
    _0x10e546 = await o(F, e, f, V);
    if (_0x10e546 == 3) {
      console.log("玩连连看领取300乐园币成功，进入饿了么记录查看");
    } else {
      _0x10e546 == 2 ? console.log("只过了第二关，重新运行一遍脚本就能成功") : console.log("本次运行不正常，但我运行时能成功");
    }
  }
  return;
}
async function O(f) {
  const e = {
      bizScene: "WATER_SORT",
      bizParam: "{\"type\":\"login\"}",
      bizMethod: "login"
    },
    x0 = await T(f, e);
  return x0;
}
async function s(f) {
  const e = {
      bizScene: "WATER_SORT",
      bizParam: "{\"type\":\"gameSuccess\"}",
      bizMethod: "gameSuccess"
    },
    x0 = await T(f, e);
  return x0;
}
async function A(f, V) {
  const x0 = {
      bizScene: "WATER_SORT",
      bizParam: "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + V + "\",\"type\":1}}",
      bizMethod: "getPassPrize"
    },
    x1 = await T(f, x0);
  return x1;
}
async function b(F) {
  const V = await O(F),
    i = V.passConf,
    e = [];
  for (let x3 of Object.values(i)) {
    e.push(x3.passNum);
  }
  var x0 = await s(F),
    x1 = x0.info.todayPass,
    x2 = 0;
  while (x1 <= e[e.length - 1]) {
    x0 = await s(F);
    x1 = x0.info.todayPass;
    console.log("欢乐倒水第" + x1 + "关闯关成功");
    if (e.includes(x1)) {
      x2 = e.indexOf(x1) + 1;
      const x4 = await A(F, x2);
      console.log("获得：" + x4.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function z() {
  await n(H, 1);
  const f = W();
  for (let V = 0; V < f.length; V++) {
    r = 0;
    l = 0;
    h = 0;
    y = 0;
    const i = f[V];
    if (!i) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let e = await E(i, V);
        if (!e) {
          continue;
        }
        let x0 = await G(e);
        if (!x0.username) {
          console.log("第", V + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const x1 = x0.user_id;
        await g(H, x1, M);
        console.log("******开始【饿了么账号", V + 1, "】", x0.username, "*********");
        console.log("开始签到");
        await K(e);
        console.log("防止黑号延时3-4秒");
        await Q(I(3, 4));
        console.log("开始抽奖");
        await B(e);
        console.log("防止黑号延时3-4秒");
        await Q(I(3, 4));
        console.log("开始倒水");
        await b(e);
        console.log("防止黑号延时10-15秒");
        await Q(I(10, 15));
      } catch (x2) {
        console.log(x2);
      }
    }
  }
  process.exit(0);
}
!(async () => {
  await z();
})().catch(F => {
  j.log(F);
}).finally(() => {
  j.done({});
});
function I(f, V) {
  return Math.floor(Math.random() * (V - f + 1) + f);
}
function J(F, f) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class i {
    constructor(e) {
      this.env = e;
    }
    send(e, x0 = "GET") {
      e = "string" == typeof e ? {
        url: e
      } : e;
      let x1 = this.get;
      "POST" === x0 && (x1 = this.post);
      return new Promise((x2, x3) => {
        x1.call(this, e, (x4, x5, x6) => {
          x4 ? x3(x4) : x2(x5);
        });
      });
    }
    get(e) {
      return this.send.call(this.env, e);
    }
    post(e) {
      return this.send.call(this.env, e, "POST");
    }
  }
  return new class {
    constructor(e, x0) {
      this.name = e;
      this.http = new i(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, x0);
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
    toObj(e, x0 = null) {
      try {
        return JSON.parse(e);
      } catch {
        return x0;
      }
    }
    toStr(e, x0 = null) {
      try {
        return JSON.stringify(e);
      } catch {
        return x0;
      }
    }
    getjson(e, x0) {
      let x1 = x0;
      const x2 = this.getdata(e);
      if (x2) {
        try {
          x1 = JSON.parse(this.getdata(e));
        } catch {}
      }
      return x1;
    }
    setjson(e, x0) {
      try {
        return this.setdata(JSON.stringify(e), x0);
      } catch {
        return !1;
      }
    }
    getScript(e) {
      return new Promise(x0 => {
        const x1 = {
          url: e
        };
        this.get(x1, (x2, x3, x4) => x0(x4));
      });
    }
    runScript(e, x0) {
      return new Promise(x1 => {
        let x2 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        x2 = x2 ? x2.replace(/\n/g, "").trim() : x2;
        let x3 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        x3 = x3 ? 1 * x3 : 20;
        x3 = x0 && x0.timeout ? x0.timeout : x3;
        const [x4, x5] = x2.split("@"),
          x6 = {
            url: "http://" + x5 + "/v1/scripting/evaluate",
            body: {
              script_text: e,
              mock_type: "cron",
              timeout: x3
            },
            headers: {
              "X-Key": x4,
              Accept: "*/*"
            }
          };
        this.post(x6, (x7, x8, x9) => x1(x9));
      }).catch(x1 => this.logErr(x1));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          x0 = this.path.resolve(process.cwd(), this.dataFile),
          x1 = this.fs.existsSync(e),
          x2 = !x1 && this.fs.existsSync(x0);
        if (!x1 && !x2) {
          return {};
        }
        {
          const x3 = x1 ? e : x0;
          try {
            return JSON.parse(this.fs.readFileSync(x3));
          } catch (x4) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          x0 = this.path.resolve(process.cwd(), this.dataFile),
          x1 = this.fs.existsSync(e),
          x2 = !x1 && this.fs.existsSync(x0),
          x3 = JSON.stringify(this.data);
        x1 ? this.fs.writeFileSync(e, x3) : x2 ? this.fs.writeFileSync(x0, x3) : this.fs.writeFileSync(e, x3);
      }
    }
    lodash_get(e, x0, x1) {
      const x2 = x0.replace(/\[(\d+)\]/g, ".$1").split(".");
      let x3 = e;
      for (const x4 of x2) if (x3 = Object(x3)[x4], void 0 === x3) {
        return x1;
      }
      return x3;
    }
    lodash_set(e, x0, x1) {
      return Object(e) !== e ? e : (Array.isArray(x0) || (x0 = x0.toString().match(/[^.[\]]+/g) || []), x0.slice(0, -1).reduce((x2, x3, x4) => Object(x2[x3]) === x2[x3] ? x2[x3] : x2[x3] = Math.abs(x0[x4 + 1]) >> 0 == +x0[x4 + 1] ? [] : {}, e)[x0[x0.length - 1]] = x1, e);
    }
    getdata(e) {
      let x0 = this.getval(e);
      if (/^@/.test(e)) {
        const [, x1, x2] = /^@(.*?)\.(.*?)$/.exec(e),
          x3 = x1 ? this.getval(x1) : "";
        if (x3) {
          try {
            const x4 = JSON.parse(x3);
            x0 = x4 ? this.lodash_get(x4, x2, "") : x0;
          } catch (x5) {
            x0 = "";
          }
        }
      }
      return x0;
    }
    setdata(e, x0) {
      let x1 = false;
      if (/^@/.test(x0)) {
        const [, x2, x3] = /^@(.*?)\.(.*?)$/.exec(x0),
          x4 = this.getval(x2),
          x5 = x2 ? "null" === x4 ? null : x4 || "{}" : "{}";
        try {
          const x6 = JSON.parse(x5);
          this.lodash_set(x6, x3, e);
          x1 = this.setval(JSON.stringify(x6), x2);
        } catch (x7) {
          const x8 = {};
          this.lodash_set(x8, x3, e);
          x1 = this.setval(JSON.stringify(x8), x2);
        }
      } else {
        x1 = this.setval(e, x0);
      }
      return x1;
    }
    getval(e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(e) : this.isQuanX() ? $prefs.valueForKey(e) : this.isNode() ? (this.data = this.loaddata(), this.data[e]) : this.data && this.data[e] || null;
    }
    setval(e, x0) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(e, x0) : this.isQuanX() ? $prefs.setValueForKey(e, x0) : this.isNode() ? (this.data = this.loaddata(), this.data[x0] = e, this.writedata(), !0) : this.data && this.data[x0] || null;
    }
    initGotEnv(e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      e && (e.headers = e.headers ? e.headers : {}, void 0 === e.headers.Cookie && void 0 === e.cookieJar && (e.cookieJar = this.ckjar));
    }
    get(e, x0 = () => {}) {
      e.headers && (delete e.headers["Content-Type"], delete e.headers["Content-Length"]);
      const x2 = {
        "X-Surge-Skip-Scripting": !1
      };
      const x3 = {
        hints: !1
      };
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (e.headers = e.headers || {}, Object.assign(e.headers, x2)), $httpClient.get(e, (x4, x5, x6) => {
        !x4 && x5 && (x5.body = x6, x5.statusCode = x5.status);
        x0(x4, x5, x6);
      })) : this.isQuanX() ? (this.isNeedRewrite && (e.opts = e.opts || {}, Object.assign(e.opts, x3)), $task.fetch(e).then(x4 => {
        const {
            statusCode: x5,
            statusCode: x6,
            headers: x7,
            body: x8
          } = x4,
          x9 = {
            status: x5,
            statusCode: x6,
            headers: x7,
            body: x8
          };
        x0(null, x9, x8);
      }, x4 => x0(x4))) : this.isNode() && (this.initGotEnv(e), this.got(e).on("redirect", (x4, x5) => {
        try {
          if (x4.headers["set-cookie"]) {
            const x6 = x4.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            x6 && this.ckjar.setCookieSync(x6, null);
            x5.cookieJar = this.ckjar;
          }
        } catch (x7) {
          this.logErr(x7);
        }
      }).then(x4 => {
        const {
            statusCode: x5,
            statusCode: x6,
            headers: x7,
            body: x8
          } = x4,
          x9 = {
            status: x5,
            statusCode: x6,
            headers: x7,
            body: x8
          };
        x0(null, x9, x8);
      }, x4 => {
        const {
          message: x5,
          response: x6
        } = x4;
        x0(x5, x6, x6 && x6.body);
      }));
    }
    post(e, x0 = () => {}) {
      const x2 = {
        "X-Surge-Skip-Scripting": !1
      };
      if (e.body && e.headers && !e.headers["Content-Type"] && (e.headers["Content-Type"] = "application/x-www-form-urlencoded"), e.headers && delete e.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (e.headers = e.headers || {}, Object.assign(e.headers, x2));
        $httpClient.post(e, (x3, x4, x5) => {
          !x3 && x4 && (x4.body = x5, x4.statusCode = x4.status);
          x0(x3, x4, x5);
        });
      } else {
        const x3 = {
          hints: !1
        };
        if (this.isQuanX()) {
          e.method = "POST";
          this.isNeedRewrite && (e.opts = e.opts || {}, Object.assign(e.opts, x3));
          $task.fetch(e).then(x4 => {
            const {
                statusCode: x5,
                statusCode: x6,
                headers: x7,
                body: x8
              } = x4,
              x9 = {
                status: x5,
                statusCode: x6,
                headers: x7,
                body: x8
              };
            x0(null, x9, x8);
          }, x4 => x0(x4));
        } else {
          if (this.isNode()) {
            this.initGotEnv(e);
            const {
              url: x4,
              ...x5
            } = e;
            this.got.post(x4, x5).then(x6 => {
              const {
                  statusCode: x7,
                  statusCode: x8,
                  headers: x9,
                  body: xx
                } = x6,
                xp = {
                  status: x7,
                  statusCode: x8,
                  headers: x9,
                  body: xx
                };
              x0(null, xp, xx);
            }, x6 => {
              const {
                message: x7,
                response: x8
              } = x6;
              x0(x7, x8, x8 && x8.body);
            });
          }
        }
      }
    }
    time(e, x0 = null) {
      const x1 = x0 ? new Date(x0) : new Date();
      let x2 = {
        "M+": x1.getMonth() + 1,
        "d+": x1.getDate(),
        "H+": x1.getHours(),
        "m+": x1.getMinutes(),
        "s+": x1.getSeconds(),
        "q+": Math.floor((x1.getMonth() + 3) / 3),
        S: x1.getMilliseconds()
      };
      /(y+)/.test(e) && (e = e.replace(RegExp.$1, (x1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let x3 in x2) new RegExp("(" + x3 + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? x2[x3] : ("00" + x2[x3]).substr(("" + x2[x3]).length)));
      return e;
    }
    msg(e = F, x0 = "", x1 = "", x2) {
      const x3 = x4 => {
        if (!x4) {
          return x4;
        }
        if ("string" == typeof x4) {
          return this.isLoon() ? x4 : this.isQuanX() ? {
            "open-url": x4
          } : this.isSurge() ? {
            url: x4
          } : void 0;
        }
        if ("object" == typeof x4) {
          if (this.isLoon()) {
            let x5 = x4.openUrl || x4.url || x4["open-url"],
              x6 = x4.mediaUrl || x4["media-url"];
            const x7 = {
              openUrl: x5,
              mediaUrl: x6
            };
            return x7;
          }
          if (this.isQuanX()) {
            let x8 = x4["open-url"] || x4.url || x4.openUrl,
              x9 = x4["media-url"] || x4.mediaUrl;
            const xx = {
              "open-url": x8,
              "media-url": x9
            };
            return xx;
          }
          if (this.isSurge()) {
            let xp = x4.url || x4.openUrl || x4["open-url"];
            const xZ = {
              url: xp
            };
            return xZ;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, x0, x1, x3(x2)) : this.isQuanX() && $notify(e, x0, x1, x3(x2))), !this.isMuteLog) {
        let x4 = ["", "==============📣系统通知📣=============="];
        x4.push(e);
        x0 && x4.push(x0);
        x1 && x4.push(x1);
        console.log(x4.join("\n"));
        this.logs = this.logs.concat(x4);
      }
    }
    log(...e) {
      e.length > 0 && (this.logs = [...this.logs, ...e]);
      console.log(e.join(this.logSeparator));
    }
    logErr(e, x0) {
      const x1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      x1 ? this.log("", "❗️" + this.name + ", 错误!", e.stack) : this.log("", "❗️" + this.name + ", 错误!", e);
    }
    wait(e) {
      return new Promise(x0 => setTimeout(x0, e));
    }
    done(e = {}) {
      const x0 = new Date().getTime(),
        x1 = (x0 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + x1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(e);
    }
  }(F, f);
}
const j = new J("饿了么乐园币");