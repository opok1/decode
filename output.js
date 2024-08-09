//Fri Aug 09 2024 10:55:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const O = xg,
  s = xg;
(function (xr, xl) {
  const xy = xg,
    xv = xg,
    xk = xg,
    xw = xg,
    xB = xr();
  while (true) {
    try {
      const xK = -parseInt(xy(594)) / 1 * (-parseInt(xv(252)) / 2) + -parseInt(xy(536)) / 3 + parseInt(xv(558)) / 4 * (-parseInt(xy(490)) / 5) + -parseInt(xv(241)) / 6 + parseInt(xw(406)) / 7 + -parseInt(xy(606)) / 8 + parseInt(xk(615)) / 9;
      if (xK === xl) {
        break;
      } else {
        xB.push(xB.shift());
      }
    } catch (xt) {
      xB.push(xB.shift());
    }
  }
})(xQ, 448408);
const {
    sign: b,
    getToken: z,
    checkCk: I,
    getCookies: J,
    getUserInfo: j,
    validateCarmeWithType: S,
    checkCarmeCount: x0,
    tryCatchPromise: x1
  } = require("./common.js"),
  x2 = require(O(619)),
  {
    wait: x3
  } = require("./common"),
  x4 = 6,
  x5 = process.env.ELE_CARME;
let x6 = 0,
  x7 = 0,
  x8 = 0,
  x9;
function xx(xr) {
  const xh = O,
    xy = O,
    xk = {};
  xk.wuUxc = function (xB, xK) {
    return xB === xK;
  };
  const xw = xk;
  return xw[xh(356)](Object[xh(443)](xr)[xy(348)], 0);
}
async function xp(xr) {
  const xh = O,
    xy = O,
    xv = O,
    xk = O,
    xw = {
      rEvtI: function (xY, xO) {
        return xY === xO;
      },
      pvnGa: function (xY, xO) {
        return xY(xO);
      },
      kLhdp: function (xY, xO) {
        return xY + xO;
      },
      rrpry: function (xY, xO) {
        return xY(xO);
      },
      dFxeV: function (xY, xO, xs) {
        return xY(xO, xs);
      },
      NqtOO: "shopping.ele.me",
      wEpHd: xh(645),
      twtDl: xh(608),
      vuphq: xh(679),
      OtKeJ: "application/x-www-form-urlencoded",
      OhBGo: xk(280),
      tZsCM: xk(350),
      lhyoa: "20221207144029906162546384",
      BkNjk: xh(365),
      mMdAx: "game_center",
      KzYPC: xy(323),
      VIrra: xh(380),
      jvXak: xk(255),
      iHDZm: xy(550),
      dVrOG: "{\"bizType\":\"LOTTERY\"}",
      zOKLn: xk(633),
      GAWJQ: xy(395),
      wUIkY: xy(684),
      OjyMp: function (xY, xO) {
        return xY + xO;
      },
      ehSFu: function (xY, xO) {
        return xY + xO;
      },
      OIBIM: function (xY, xO) {
        return xY + xO;
      },
      JOVWp: function (xY, xO) {
        return xY + xO;
      },
      rgfvv: function (xY, xO) {
        return xY + xO;
      },
      RFHqM: function (xY, xO) {
        return xY + xO;
      },
      yWDus: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=",
      nZJKp: xy(294),
      itkhb: function (xY, xO) {
        return xY(xO);
      }
    },
    xB = {};
  xB.authority = xw[xk(520)];
  xB.accept = xw[xk(389)];
  xB[xy(433)] = xw[xh(587)];
  xB[xy(353)] = xw.vuphq;
  xB["content-type"] = xw[xk(298)];
  xB.origin = xw.OhBGo;
  xB[xv(256)] = xw[xk(705)];
  xB[xh(371)] = xw[xy(376)];
  xB.cookie = xr;
  const xK = {};
  xK.actId = xw[xv(337)];
  xK.collectionId = "20230224114656384938530468";
  xK.componentId = xw.BkNjk;
  xK[xh(680)] = xw[xk(304)];
  xK.bizCode = xw.KzYPC;
  xK.longitude = xw.VIrra;
  xK[xv(286)] = xw[xk(477)];
  xK[xh(292)] = xw.iHDZm;
  xK.extParams = xw[xh(489)];
  xK.ua = xw[xh(289)];
  xK.umidtoken = xw[xh(572)];
  const xt = xB,
    xq = xK,
    xd = new Date()[xk(245)](),
    xL = 12574478;
  var xm = xw[xy(506)](xw[xh(717)], encodeURIComponent(JSON[xy(581)](xq)));
  const xo = z(xr),
    xT = xo[xh(393)]("_")[0],
    xN = await b(xw[xy(564)](xw[xk(506)](xw.ehSFu(xw[xk(589)](xw[xk(576)](xw[xh(321)](xT, "&"), xd), "&"), xL), "&"), JSON[xk(581)](xq)), x5),
    xC = {
      url: xw.OIBIM(xw.rgfvv(xw[xh(352)](xw[xy(506)](xw[xv(264)], xd), xh(505)), xN), xh(303)),
      method: xw.nZJKp,
      headers: xt,
      body: xm
    };
  return xw[xv(656)](x1, xY => {
    const xs = {
      OUUOy: function (xA, xb) {
        const xz = xg;
        return xw[xz(320)](xA, xb);
      },
      IuueL: function (xA, xb) {
        const xz = xg;
        return xw[xz(697)](xA, xb);
      },
      Veygm: function (xA, xb) {
        const xz = xg;
        return xw[xz(506)](xA, xb);
      },
      yIQgd: function (xA, xb) {
        return xw.pvnGa(xA, xb);
      },
      cxpGx: function (xA, xb) {
        const xz = xg;
        return xw[xz(697)](xA, xb);
      },
      cXUFA: function (xA, xb) {
        return xw.rrpry(xA, xb);
      }
    };
    xw.dFxeV(x2, xC, async (xA, xb, xz) => {
      const xI = xg,
        xJ = xg,
        xj = xg,
        xS = xg;
      if (!xA && xs[xI(514)](xb.statusCode, 200)) {
        try {
          const p0 = JSON[xJ(612)](xz);
          if (xx(p0.data.data)) {
            console[xJ(696)](p0[xJ(426)][0]);
            xs[xS(700)](xY, false);
          } else {
            if (p0.data[xJ(560)][xj(355)]) {
              console[xJ(696)](p0[xj(560)].data.errorMsg);
            } else {
              let p1 = p0[xS(560)][xj(560)][xj(678)][0];
              const p2 = xs[xj(513)](p1.materialInfo.description, p1[xJ(578)][xI(670)]);
              console[xS(696)](p2);
            }
            xs.yIQgd(xY, p0);
          }
        } catch (p3) {
          xs.cxpGx(xY, false);
        }
      } else {
        xs[xI(625)](xY, false);
      }
    });
  });
}
async function xZ(xl) {
  const xy = O,
    xv = O,
    xk = O,
    xw = O,
    xB = {
      RUYRq: function (xY, xO) {
        return xY == xO;
      },
      ZqTrx: function (xY, xO) {
        return xY(xO);
      },
      gVljw: function (xY, xO) {
        return xY(xO);
      },
      HqKHh: function (xY, xO) {
        return xY(xO);
      },
      nEQOj: xy(716),
      ltcye: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      vuhju: xv(679),
      JOygl: xy(325),
      szfRV: "https://tb.ele.me",
      NKOUM: "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      CQKaI: xv(712),
      WEBjR: "2A21607NIIT1ND5C4YXJ6C",
      VSRvi: function (xY, xO) {
        return xY + xO;
      },
      ntoJG: xk(655),
      tejEn: function (xY, xO) {
        return xY + xO;
      },
      CchxP: function (xY, xO) {
        return xY(xO);
      },
      QYyqH: function (xY, xO, xs) {
        return xY(xO, xs);
      },
      fOVVv: function (xY, xO) {
        return xY + xO;
      },
      OSkDE: function (xY, xO) {
        return xY + xO;
      },
      RyIIY: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.6.1&appKey=",
      bIMUJ: xk(569),
      ifzXy: xw(505),
      iodep: "POST",
      fKvxU: function (xY, xO) {
        return xY(xO);
      }
    },
    xK = await xB[xk(469)](I, xl),
    xt = {
      authority: xB[xw(486)],
      accept: xw(645),
      "accept-language": xB.ltcye,
      asac: xv(601),
      "cache-control": xB.vuhju,
      "content-type": xB.JOygl,
      origin: xB[xw(465)],
      pragma: xB.vuhju,
      referer: xw(637),
      cookie: xK,
      "user-agent": xB.NKOUM
    },
    xq = new Date().getTime(),
    xd = 12574478,
    xL = {
      bizScene: xB.CQKaI,
      asac: xB[xk(695)],
      umidtoken: xB.VSRvi(xB[xk(479)], xq)
    };
  var xm = xB[xw(439)](xk(684), xB.CchxP(encodeURIComponent, JSON.stringify(xL)));
  const xo = xB.CchxP(z, xK),
    xT = xo[xy(393)]("_")[0],
    xN = await xB[xy(262)](b, xB[xk(339)](xB[xv(369)](xB[xk(369)](xB.OSkDE(xB[xk(369)](xT, "&"), xq) + "&", xd), "&"), JSON.stringify(xL)), x5),
    xC = {
      url: xB[xv(369)](xB[xy(369)](xB.fOVVv(xB.OSkDE(xB.VSRvi(xB[xw(339)](xB[xk(450)], xd), xB[xk(574)]), xq), xB.ifzXy), xN), xk(416)),
      method: xB[xk(562)],
      headers: xt,
      body: xm
    };
  return xB[xv(573)](x1, xY => {
    x2(xC, async (xs, xA, xb) => {
      const xz = xg,
        xI = xg;
      if (!xs && xB.RUYRq(xA.statusCode, 200)) {
        const xS = JSON.parse(xb);
        xS[xz(560)][xI(355)] ? console[xz(696)](xS[xz(560)].errorMsg) : console[xI(696)]("签到成功");
        xB.ZqTrx(xY, xS);
      } else {
        xB.gVljw(xY, null);
      }
    });
  });
}
async function xc(xr) {
  const xh = O,
    xy = O,
    xv = O,
    xt = O,
    xq = {
      dgrIn: xh(288),
      cTtqj: "login",
      UcxhA: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
      FyNsl: function (xo, xT, xN) {
        return xo(xT, xN);
      },
      dvSPq: function (xo, xT) {
        return xo + xT;
      }
    },
    xd = {};
  xd[xh(680)] = xq.dgrIn;
  xd[xh(453)] = xq.cTtqj;
  xd[xh(299)] = xq[xv(468)];
  xd[xy(239)] = 108.2048221292035;
  xd[xt(286)] = 22.678892108345327;
  const xL = xd,
    xm = await xq.FyNsl(xe, xr, xL);
  return xq.dvSPq(xq[xv(357)](xm[xy(560)][xh(493)], "_"), xm[xy(560)].openId);
}
async function xu(xr, xl) {
  const xy = O,
    xv = O,
    xk = O,
    xw = O,
    xB = {};
  xB[xy(340)] = xv(288);
  xB[xv(591)] = xk(623);
  xB.yhKPa = function (xO, xs) {
    return xO != xs;
  };
  xB.KUIeo = xv(425);
  const xK = xB,
    xm = {};
  xm[xw(414)] = null;
  xm.token = xl;
  const xo = xm,
    xT = JSON.stringify(xo),
    xN = {};
  xN[xv(680)] = xK[xw(340)];
  xN[xv(453)] = xK.uAtgS;
  xN.bizParam = xT;
  xN[xw(239)] = 108.2048221292035;
  xN.latitude = 22.678892108345327;
  const xC = xN,
    xY = await xe(xr, xC);
  if (xK[xy(610)](xY.bizErrorMsg, xK[xy(588)])) {
    console.log(xY[xy(441)]);
    return null;
  }
  return xY.data[xy(491)];
}
async function xF(P, xr, xl) {
  const xy = O,
    xv = O,
    xk = O,
    xw = O,
    xB = {};
  xB[xy(495)] = "page_view";
  xB.acHVl = xv(710);
  xB.TuJBF = xk(470);
  xB.AqCUA = xw(496);
  xB.sCheJ = function (xs, xA) {
    return xs != xA;
  };
  xB.DXeAG = xy(425);
  const xK = xB,
    xt = {};
  xt[xy(683)] = xK[xv(495)];
  xt[xv(500)] = {};
  xt[xv(500)][xv(647)] = xK[xy(501)];
  xt[xv(500)][xw(478)] = xl;
  const xq = {};
  xq[xy(580)] = [xt];
  xq.gameId = null;
  xq[xk(493)] = xK[xy(265)];
  const xd = xq,
    xL = JSON[xw(581)](xd),
    xC = {};
  xC[xy(680)] = "LIANLIANKAN";
  xC.bizMethod = xK[xw(418)];
  xC.bizParam = xL;
  xC[xv(239)] = 108.2048221292035;
  xC.latitude = 22.678892108345327;
  const xY = xC,
    xO = await xe(P, xY, 2);
  if (xK.sCheJ(xO[xv(441)], xK.DXeAG)) {
    console[xk(696)](xO.bizErrorMsg);
    return null;
  }
  return xO[xy(560)][xk(491)];
}
async function xf(P, xr, xl) {
  const xy = O,
    xv = O,
    xk = O,
    xw = O,
    xB = {
      umSNr: xy(473),
      skLgL: xv(288),
      ZwPfc: function (xN, xA, xb) {
        return xN(xA, xb);
      },
      ENupl: "success"
    },
    xK = {};
  xK.sname = xB[xy(603)];
  xK[xy(714)] = 0;
  xK[xv(378)] = xl;
  const xt = {};
  xt.name = xy(517);
  xt[xy(500)] = xK;
  const xq = {};
  xq.eventInfos = [xt];
  xq[xw(414)] = null;
  xq.token = "_0x79d754";
  const xd = xq,
    xL = JSON[xy(581)](xd),
    xm = {};
  xm[xy(680)] = xB.skLgL;
  xm[xk(453)] = xy(496);
  xm[xv(299)] = xL;
  xm[xy(239)] = 108.2048221292035;
  xm[xk(286)] = 22.678892108345327;
  const xo = xm,
    xT = await xB[xw(561)](xe, P, xo);
  if (xT.bizErrorMsg != xB.ENupl) {
    console[xw(696)](xT[xw(441)]);
    return null;
  }
  return xT.data[xv(491)];
}
async function xV(xr, xl, xh) {
  const xv = O,
    xk = O,
    xw = O,
    xB = O,
    xK = {
      OhSQh: "page_view",
      ZRHWp: "GameFailExp",
      kaSYx: "_0x79d754",
      bQNch: "LIANLIANKAN",
      lgauI: "reportLog",
      VDitq: function (xN, xC, xY) {
        return xN(xC, xY);
      },
      eQJGd: function (xN, xC) {
        return xN != xC;
      },
      naURN: "success"
    },
    xt = {};
  xt[xv(683)] = xK[xk(555)];
  xt[xk(500)] = {};
  xt[xk(500)][xv(647)] = xK[xk(677)];
  xt[xk(500)].failurereason = 0;
  xt[xk(500)][xB(498)] = 1;
  xt[xk(500)][xk(378)] = xh;
  const xq = {
    eventInfos: [xt]
  };
  xq.eventInfos = [xt];
  xq[xk(414)] = null;
  xq[xv(493)] = xK[xB(646)];
  const xd = xq,
    xL = JSON[xB(581)](xd),
    xm = {};
  xm[xk(680)] = xK[xB(295)];
  xm[xB(453)] = "reportLog";
  xm.bizParam = xL;
  xm.longitude = 108.2048221292035;
  xm[xk(286)] = 22.678892108345327;
  const xo = xm,
    xT = await xK[xk(636)](xe, xr, xo);
  if (xT[xk(441)] != xK[xB(458)]) {
    console[xw(696)](xT.bizErrorMsg);
    return null;
  }
  return xT[xB(560)][xv(491)];
}
async function xi(xr, xl, xh, xy) {
  const xk = O,
    xw = O,
    xB = O,
    xK = O,
    xt = {
      EYCRJ: function (xs, xA) {
        return xs(xA);
      },
      Nwsws: "LIANLIANKAN",
      MPUbI: xk(607),
      jHBMs: function (xs, xA, xb, xz) {
        return xs(xA, xb, xz);
      },
      hYbyk: function (xs, xA) {
        return xs != xA;
      },
      pbywB: "success"
    },
    xq = new Date()[xk(245)]();
  let xd = xq - x9;
  x6 = xd;
  const xL = xB(546) + xy + "]-" + xh + "|" + xl + xd,
    xm = await xt.EYCRJ(b, xL),
    xo = {};
  xo[xw(491)] = xl;
  xo[xw(311)] = xd;
  xo.sign = xm;
  xo[xw(414)] = null;
  xo.token = xh;
  const xT = xo,
    xN = JSON.stringify(xT),
    xC = {};
  xC.bizScene = xt.Nwsws;
  xC.bizMethod = xt[xK(373)];
  xC[xw(299)] = xN;
  xC[xk(239)] = 108.2048221292035;
  xC[xw(286)] = 22.678892108345327;
  const xY = xC,
    xO = await xt.jHBMs(xe, xr, xY, xq);
  if (xt[xK(703)](xO[xk(441)], xt.pbywB)) {
    console.log(xO[xK(441)]);
    return null;
  }
  return xO[xw(560)][xk(410)];
}
async function xe(xr, xl, xh = 0) {
  const xv = O,
    xk = O,
    xw = O,
    xB = O,
    xK = {
      ttiAk: function (xY, xO) {
        return xY == xO;
      },
      tKSSu: function (xY, xO) {
        return xY(xO);
      },
      cDIIh: function (xY, xO) {
        return xY(xO);
      },
      RKKof: function (xY, xO) {
        return xY(xO);
      },
      aTwSA: function (xY, xO, xs) {
        return xY(xO, xs);
      },
      hULLs: xv(379),
      QaFkT: xk(645),
      eVogB: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      fhCmP: xv(679),
      NGdyf: xw(325),
      TUroU: xk(350),
      lZlat: "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      inUdW: xw(474),
      ZSjKo: function (xY, xO) {
        return xY == xO;
      },
      fLLAs: function (xY, xO) {
        return xY != xO;
      },
      eMvIH: xv(684),
      mYEiA: function (xY, xO) {
        return xY(xO);
      },
      vhwGJ: function (xY, xO) {
        return xY + xO;
      },
      hZRxt: function (xY, xO) {
        return xY + xO;
      },
      etfkt: function (xY, xO) {
        return xY + xO;
      },
      QgGpA: xv(451),
      zFLJf: xw(505),
      wjfBV: xw(294)
    },
    xt = {};
  xt[xv(315)] = xK[xk(336)];
  xt[xv(343)] = xK[xv(673)];
  xt["accept-language"] = xK.eVogB;
  xt[xw(353)] = xK[xv(309)];
  xt[xB(653)] = xK.NGdyf;
  xt[xk(316)] = "https://r.ele.me";
  xt[xw(256)] = xK[xv(309)];
  xt[xw(371)] = xK[xB(247)];
  xt.cookie = xr;
  xt[xw(242)] = xK.lZlat;
  xt["user-agent"] = xK[xB(551)];
  const xq = xt;
  let xd = new Date()[xw(245)](),
    xL = 12574478;
  x7 = xd;
  xK[xw(257)](xh, 2) && x8 == 0 && (x9 = x7, x8++);
  xh != 0 && xK[xB(319)](xh, 2) && (xd = xh);
  var xm = xK.eMvIH + xK.mYEiA(encodeURIComponent, JSON[xk(581)](xl));
  let xo = xK.RKKof(z, xr),
    xT = xo[xw(393)]("_")[0],
    xN = await xK[xv(596)](b, xK[xv(681)](xK[xB(681)](xK.vhwGJ(xK.hZRxt(xK[xB(554)](xT, "&") + xd, "&"), xL), "&"), JSON.stringify(xl)), x5);
  const xC = {
    url: xK[xv(554)](xK.QgGpA + xd + xK.zFLJf + xN, xv(351)),
    method: xK.wjfBV,
    headers: xq,
    body: xm
  };
  return xK[xB(278)](x1, xY => {
    const xO = xk;
    xK[xO(596)](x2, xC, async (xs, xA, xb) => {
      const xz = xO,
        xI = xO,
        xj = xO;
      if (!xs && xK.ttiAk(xA[xz(641)], 200)) {
        try {
          const xS = JSON[xz(612)](xb);
          _0x25dc12 = JSON[xz(612)](xS[xj(560)][xI(560)]);
          xK.tKSSu(xY, _0x25dc12);
        } catch (p0) {
          xK[xj(660)](xY, null);
        }
      } else {
        xK.RKKof(xY, null);
      }
    });
  });
}
async function xX(xr, xl, xh = 0) {
  const xv = O,
    xk = O,
    xw = O,
    xB = O,
    xK = {
      NnbYY: function (xm, xo) {
        return xm == xo;
      },
      QoNXm: function (xm, xo) {
        return xm(xo);
      },
      IrdPj: function (xm, xo, xT) {
        return xm(xo, xT);
      },
      IRaqP: xv(650),
      rLJWh: "shopping.ele.me",
      wtsic: "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D",
      uPfCX: xk(702),
      FiJbS: xw(649),
      zFPBx: xw(671),
      PsxXo: xB(503),
      jgKTd: xw(318),
      qkCOI: "6.3",
      aBUXQ: xk(528),
      eGzfN: "6.6.240501.37153015",
      CpHMd: "mtop",
      pFznU: xw(690),
      mJAUL: "1551089129819%40eleme_android_11.11.88",
      ufTMe: xv(413),
      dwHDl: "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376810241131437",
      GODgt: xk(287),
      SiUpp: xk(492),
      JTDVg: xB(383),
      XUvcM: "696f8c1075a344b79b195d11edf7cf0d",
      kiFIn: xv(472),
      gCDHE: xw(253),
      WNFly: "BO_vGx8i1dIwhdHRl8VKN2L4dQH5lEO2iI4LbwF8bt5lUY5SCWX2BzIG1wZIFhsu",
      ttIds: "gzip",
      XiWDJ: xk(510),
      eoDYG: xv(652)
    };
  console[xk(696)](xK[xB(553)]);
  const xt = {};
  xt.Host = xK.rLJWh;
  xt["x-ltraffic-src"] = xK.wtsic;
  xt[xv(563)] = xK.uPfCX;
  xt[xw(622)] = xK[xk(415)];
  xt["x-uid"] = xK.zFPBx;
  xt[xw(466)] = xK[xv(301)];
  xt[xk(571)] = xK.jgKTd;
  xt[xw(314)] = xK[xw(711)];
  xt[xv(281)] = "5G";
  xt["x-features"] = xK[xw(419)];
  xt["x-app-conf-v"] = "0";
  xt[xv(653)] = "application/x-www-form-urlencoded;charset=UTF-8";
  xt.cookie = xr;
  xt["x-bx-version"] = xK[xk(417)];
  xt[xv(423)] = xK.CpHMd;
  xt[xv(526)] = xK[xk(345)];
  xt[xv(306)] = xK[xw(244)];
  xt[xv(627)] = xK[xv(436)];
  xt[xw(611)] = xK[xB(344)];
  xt["x-elder-mode"] = "0";
  xt["x-pgi-requestid"] = xK[xw(566)];
  xt[xv(504)] = "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0";
  xt[xw(509)] = "Zoq5ZZVQvj0DADRgLoZBLSGu";
  xt["c-launch-info"] = "3,0,1723137437680,1723134439818,1";
  xt[xk(292)] = xK[xw(692)];
  xt[xw(630)] = xK[xB(707)];
  xt["x-falco-id"] = xK[xv(549)];
  xt[xw(720)] = xK.kiFIn;
  xt[xk(609)] = xK[xB(377)];
  xt[xv(424)] = xK[xB(523)];
  xt["accept-encoding"] = xK[xB(404)];
  const xq = xt,
    xd = {};
  xd[xv(392)] = xK[xk(251)];
  xd[xw(691)] = xK[xw(421)];
  xd.headers = xq;
  const xL = xd;
  return xK.QoNXm(x1, xm => {
    const xT = {
      lMzWY: function (xN, xC) {
        const xY = xg;
        return xK[xY(658)](xN, xC);
      },
      uvzlB: function (xN, xC) {
        const xY = xg;
        return xK[xY(270)](xN, xC);
      }
    };
    xK.IrdPj(x2, xL, async (xN, xC, xY) => {
      const xO = xg,
        xs = xg,
        xb = xg;
      if (!xN && xT[xO(663)](xC[xO(641)], 200)) {
        try {
          const xz = JSON[xs(612)](xY);
          _0x25dc12 = JSON[xb(612)](xz.data.data);
          xT.uvzlB(xm, _0x25dc12);
        } catch (xI) {
          console[xO(696)](xY);
          xm(null);
        }
      } else {
        xT[xO(511)](xm, null);
      }
    });
  });
}
async function xR(xr, xl, xh = 0) {
  const xv = O,
    xk = O,
    xw = O,
    xB = O,
    xK = {
      jtHrc: function (xm, xo) {
        return xm(xo);
      },
      yiOtG: function (xm, xo) {
        return xm(xo);
      },
      nFwSe: function (xm, xo, xT) {
        return xm(xo, xT);
      },
      AaXgI: xv(375),
      oNFwZ: xv(626),
      mEaFf: "2e43b42b3e13e4d2a765e9791d7365aae",
      sBSfQ: xk(671),
      saAsX: xk(503),
      ztKjm: "180.76.0.0",
      RzjAw: "1051",
      YzLJw: "application/x-www-form-urlencoded;charset=UTF-8",
      WznWk: xk(648),
      LJFxE: "11.11.88",
      jkkjW: xw(565),
      JTMnx: xw(243),
      VZMRS: "Zoq5ZZVQvj0DADRgLoZBLSGu",
      lXBew: xk(654),
      rWyFi: xk(383),
      Vudhn: xB(437),
      YChPt: xw(472),
      uTCgO: xv(253),
      DjPds: xw(644),
      InClA: "gzip",
      ARikJ: xB(659),
      bhYvz: xB(652)
    };
  console.log(xK[xB(428)]);
  const xt = {};
  xt.Host = xk(379);
  xt[xw(590)] = xK.oNFwZ;
  xt[xB(622)] = xK[xw(372)];
  xt[xk(579)] = xK[xk(427)];
  xt[xv(466)] = xK.saAsX;
  xt[xB(571)] = xK.ztKjm;
  xt["x-pv"] = xw(639);
  xt[xB(281)] = "5G";
  xt[xv(661)] = xK.RzjAw;
  xt["x-app-conf-v"] = "0";
  xt["content-type"] = xK[xB(238)];
  xt[xB(497)] = xr;
  xt[xw(302)] = xK.WznWk;
  xt["f-refer"] = xk(556);
  xt[xv(526)] = xw(690);
  xt[xw(306)] = xB(522);
  xt[xv(627)] = xK[xv(538)];
  xt[xv(611)] = xK[xw(685)];
  xt[xB(600)] = "0";
  xt["x-pgi-requestid"] = xK.JTMnx;
  xt[xB(504)] = xB(666);
  xt[xw(509)] = xK[xv(595)];
  xt[xk(599)] = xK[xk(545)];
  xt[xw(292)] = xw(492);
  xt[xw(630)] = xK.rWyFi;
  xt["x-falco-id"] = xK[xw(597)];
  xt[xv(720)] = xK[xB(686)];
  xt[xw(609)] = xK[xk(250)];
  xt[xB(424)] = xK[xw(668)];
  xt[xw(459)] = xK[xv(448)];
  const xq = xt,
    xd = {
      url: xK[xk(290)]
    };
  xd.url = xK[xk(290)];
  xd[xB(691)] = xK[xv(570)];
  xd.headers = xq;
  const xL = xd;
  return xK.jtHrc(x1, xm => {
    const xT = xk;
    xK[xT(713)](x2, xL, async (xN, xC, xY) => {
      const xO = xT,
        xs = xT,
        xA = xT;
      if (!xN && xC.statusCode == 200) {
        try {
          const xz = JSON.parse(xY);
          _0x25dc12 = JSON[xO(612)](xz[xO(560)][xA(560)]);
          xK[xO(246)](xm, _0x25dc12);
        } catch (xI) {
          console[xA(696)](xY);
          xm(null);
        }
      } else {
        xK[xs(534)](xm, null);
      }
    });
  });
}
async function xD(xr, xl, xh) {
  const xv = O,
    xk = O,
    xw = O,
    xB = O,
    xK = {
      pYAru: function (xm, xo, xT, xN) {
        return xm(xo, xT, xN);
      },
      zbUXR: xv(539),
      LxAXm: "延迟13秒",
      ahgRh: function (xm, xo) {
        return xm == xo;
      },
      cjZal: xk(411),
      OqQmM: function (xm, xo, xT) {
        return xm(xo, xT);
      }
    };
  let xt = await xu(xr, xl),
    xq = await xK.pYAru(xF, xr, xl, 1);
  console[xv(696)](xK[xv(397)]);
  await x3(8);
  xq = await xK.pYAru(xf, xr, xl, 1);
  console[xv(696)](xK[xv(586)]);
  await x3(13);
  xt && (_0x10e546 = await xi(xr, xt, xl, xh), xK[xB(698)](_0x10e546, 3) ? console[xB(696)](xw(701)) : console[xw(696)](xK[xv(688)]));
  return;
}
async function xE(xr) {
  const xh = O,
    xy = O,
    xv = O,
    xw = {
      NbvRd: xh(407),
      NHDvq: xy(274),
      pTWPu: function (xq, xd, xL) {
        return xq(xd, xL);
      }
    },
    xB = {};
  xB.bizScene = xw.NbvRd;
  xB[xy(299)] = xv(382);
  xB.bizMethod = xw.NHDvq;
  const xK = xB,
    xt = await xw[xh(272)](xe, xr, xK);
  return xt;
}
async function xW(xr) {
  const xh = O,
    xy = O,
    xv = O,
    xw = {
      JMkEJ: xh(407),
      IFQdw: "{\"type\":\"gameSuccess\"}",
      fATbQ: xy(444),
      bcwFm: function (xq, xd, xL) {
        return xq(xd, xL);
      }
    },
    xB = {};
  xB.bizScene = xw[xy(598)];
  xB[xv(299)] = xw[xy(361)];
  xB[xy(453)] = xw[xh(386)];
  const xK = xB,
    xt = await xw.bcwFm(xe, xr, xK);
  return xt;
}
async function xG(xr, xl) {
  const xy = O,
    xv = O,
    xk = O,
    xw = O,
    xB = {
      EHGeE: xy(407),
      WGzhB: function (xq, xd) {
        return xq + xd;
      },
      JScPy: xy(358),
      dNAdM: "\",\"type\":1}}",
      TaXgq: function (xq, xd, xL) {
        return xq(xd, xL);
      }
    },
    xK = {
      bizScene: xB.EHGeE,
      bizParam: xB[xv(585)](xB[xy(284)], xl) + xB[xw(541)],
      bizMethod: xw(367)
    },
    xt = await xB[xk(310)](xe, xr, xK);
  return xt;
}
async function xn(xr) {
  const xh = O,
    xy = O,
    xv = O,
    xk = O,
    xw = {
      uRbrH: function (xm, xo) {
        return xm(xo);
      },
      GshCD: function (xm, xo) {
        return xm <= xo;
      },
      zcfss: function (xm, xo) {
        return xm(xo);
      },
      OSVVD: function (xm, xo) {
        return xm + xo;
      },
      uPutQ: xh(582),
      qnbbD: function (xm, xo) {
        return xm + xo;
      },
      LuBfe: function (xm, xo, xT) {
        return xm(xo, xT);
      },
      vueGQ: function (xm, xo) {
        return xm + xo;
      },
      dccet: function (xm, xo) {
        return xm + xo;
      },
      pAOlN: xh(484)
    },
    xB = await xE(xr),
    xK = xB[xy(364)],
    xt = [];
  for (let xm of Object[xy(443)](xK)) {
    xt[xk(385)](xm[xh(548)]);
  }
  var xq = await xw.uRbrH(xW, xr),
    xd = xq[xv(346)].todayPass,
    xL = 0;
  while (xw.GshCD(xd, xt[xt[xv(348)] - 1])) {
    xq = await xw[xh(432)](xW, xr);
    xd = xq[xh(346)][xy(374)];
    console.log(xw.OSVVD(xw[xv(349)](xw[xh(704)], xd), xk(535)));
    if (xt[xh(488)](xd)) {
      xL = xw[xk(276)](xt.indexOf(xd), 1);
      const xo = await xw[xh(269)](xG, xr, xL);
      console.log(xw[xy(617)](xw[xv(293)](xw[xy(333)], xo[xy(499)]), "乐园币"));
    }
  }
  console.log(xy(638));
}
function xg(P, xr) {
  const xh = xQ();
  xg = function (xy, xv) {
    xy = xy - 237;
    let xk = xh[xy];
    return xk;
  };
  return xg(P, xr);
}
async function xU() {
  const xl = O,
    xh = O,
    xy = O,
    xv = O,
    xk = {
      kJBpu: function (xB, xK, xt) {
        return xB(xK, xt);
      },
      HgazB: xl(480),
      uuyXf: function (xB, xK, xt) {
        return xB(xK, xt);
      },
      BwHIR: xh(460),
      LMfTU: function (xB, xK, xt, xq) {
        return xB(xK, xt, xq);
      },
      GDTbn: xh(363),
      QORjd: function (xB, xK) {
        return xB + xK;
      },
      MHLGr: "*********",
      RUyZJ: xl(412),
      pOfzK: function (xB, xK, xt, xq) {
        return xB(xK, xt, xq);
      },
      RArUw: function (xB, xK) {
        return xB(xK);
      },
      GtGtm: xy(675),
      kdYyS: function (xB, xK) {
        return xB(xK);
      },
      YaKwI: "防止黑号延时3-4秒",
      Rnrkl: function (xB, xK) {
        return xB(xK);
      },
      OiPLY: function (xB, xK) {
        return xB(xK);
      },
      waGzG: "开始倒水",
      tJHYr: function (xB, xK) {
        return xB(xK);
      },
      kCIPS: function (xB, xK, xt) {
        return xB(xK, xt);
      }
    };
  await xk[xv(669)](S, x5, 1);
  const xw = J();
  for (let xB = 0; xB < xw[xh(348)]; xB++) {
    const xK = xw[xB];
    if (!xK) {
      console[xl(696)](xk.HgazB);
    } else {
      try {
        let xt = await xk[xl(447)](I, xK, xB);
        if (!xt) {
          continue;
        }
        let xq = await j(xt);
        if (!xq[xv(577)]) {
          console[xh(696)]("第", xB + 1, xk.BwHIR);
          continue;
        }
        const xd = xq[xl(394)];
        await xk[xy(525)](x0, x5, xd, x4);
        console.log(xk[xh(347)], xk[xy(391)](xB, 1), "】", xq.username, xk[xl(621)]);
        x6 = 0;
        x7 = 0;
        x8 = 0;
        x9 = 0;
        console.log(xk.RUyZJ);
        const xL = await xc(xt),
          xm = xL[xh(393)]("_")[0],
          xo = xL[xv(393)]("_")[1];
        await xk[xv(689)](xD, xt, xm, xo);
        console[xy(696)](xh(462));
        await xk.RArUw(x3, xa(3, 4));
        console.log(xk[xl(531)]);
        await xk.kdYyS(xZ, xt);
        console.log(xk[xh(430)]);
        await xk[xh(438)](x3, xk[xv(669)](xa, 3, 4));
        await xk[xv(329)](xp, xt);
        console[xl(696)](xk[xl(604)]);
        await xk[xv(324)](x3, xk[xy(447)](xa, 3, 4));
        await xk[xv(699)](xn, xt);
        console[xl(696)]("防止黑号延时4-5秒");
        await x3(xk[xv(390)](xa, 4, 5));
      } catch (xT) {
        console.log(xT);
      }
    }
  }
  process[xv(643)](0);
}
!(async () => {
  await xU();
})().catch(P => {
  const xr = O;
  xH[xr(696)](P);
})[O(613)](() => {
  xH.done({});
});
function xa(xr, xl) {
  const xy = s,
    xv = O,
    xk = O,
    xw = O,
    xB = {
      PvYAi: function (xt, xq) {
        return xt + xq;
      }
    };
  xB.PvYAi = function (xt, xq) {
    return xt + xq;
  };
  xB[xy(368)] = function (xt, xq) {
    return xt * xq;
  };
  xB[xy(657)] = function (xt, xq) {
    return xt + xq;
  };
  xB[xv(275)] = function (xt, xq) {
    return xt - xq;
  };
  const xK = xB;
  return Math[xy(512)](xK[xk(399)](xK.yBOqN(Math[xw(475)](), xK[xw(657)](xK[xw(275)](xl, xr), 1)), xr));
}
function xQ() {
  const xr = ["exports", "&t=", "bhYvz", "x-server-ip", "GAWJQ", "fKvxU", "bIMUJ", "time", "ehSFu", "username", "materialInfo", "x-uid", "eventInfos", "stringify", "欢乐倒水第", "isMute", "logSeparator", "WGzhB", "LxAXm", "twtDl", "KUIeo", "OIBIM", "x-ltraffic-src", "uAtgS", "dfaHu", "cwd", "3ECzveR", "VZMRS", "aTwSA", "Vudhn", "JMkEJ", "c-launch-info", "x-elder-mode", "2A21607NIIT1ND5C4YXJ6C", "redirect", "umSNr", "waGzG", "FBEIz", "2219440lOUFSv", "settlement", "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7", "x-page-name", "yhKPa", "x-c-traceid", "parse", "finally", "post", "10144908atMsgM", "fetch", "vueGQ", "pADmd", "request", "write", "MHLGr", "x-sid", "startGameV2", "isNode", "cXUFA", "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D", "x-app-ver", "==============📣系统通知📣==============", "send", "x-appkey", "cookieJar", "mediaUrl", "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=", "setValueForKey", "path", "VDitq", "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login", "快乐倒水闯关完成", "6.3", "uwKBC", "statusCode", "@chavy_boxjs_userCfgs.httpapi_timeout", "exit", "BHBwBYRP4sfbEL78fNjdAnltSjzCuVQDI_vkwmrB2UueJJHPEsgBkhkTeGvjiwzb", "application/json", "kaSYx", "sname", "6.6.240501.37153015", "2e43b42b3e13e4d2a765e9791d7365aae", "发放中………", "getHours", "GET", "content-type", "3,0,1723137437682,1723134439818,1", "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@", "itkhb", "NDfJM", "NnbYY", "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_e%2BzbQ%2FZQwkxbgEEcvzOoeRqNbdJ07LYgNhrNzku0o%2Fzil8ScM4wjQiER4i%2FOXvnxj4IFjggxqVJTyJhKHkWlMrm1MvumBNTH244akkm2xOXwbMBCweqJfmood679mFYoLb0kJEY7LsQ4vw1%2BEDdcD3%2Fz%2FRvgpNuyPNwU9rGYvlZx8ksbt0NGo%2FnkbaDkt1Uf41a5IBApFuDMQwS1xnXtLYLOinEMznQR3otqacwNDKoDhdDKqpcRTqG1ZEjuHaPVo6GzrvmjWqK436n3Xn17gCsSE6FSSl1%2FxzIi3il4jfxrCQPi1mO3jEzilTlS6AlRzP%2FoSEsQVfrj4arlCF8PAMj0Ee2c4bi4LSaBscAQ%2F5rPvPDWhF4lQ537bDB1v0Yg&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeAll%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23mM2KIJ7szzZg3zo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvoJDRASlp1zzXdEnDgOYFrx12jc7pEtzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxS02fd3BsbH8OILZ0aO2lkui0yKMlpTrzIrbL8%5C%2FqxQrxoPdoFt6zOsOi2Xlbdyuz58QiVXl%5C%2FlQ2x2DD3VtoZzzPe2OM%2BUpsxzDzb7Yh%5C%2FvSrz9PK%2BVtg%5C%2Fzrui238rlMFxzPrbVXUB0bzE6PzEi3luzFzb2%2Bmole1z00rbxF%5C%2FqlQzz2%2B8%2BVHODFzok2X8%2Bl66mzPxZVXM5%2BbrxLDK353hqRCrbIXkKlpMzzcFiVWo%5C%2F2Qrz08K%2BVtg%5C%2Fzdzi2D971kKlz8riVXl%5C%2FTFrzJPdpm3TYzQri22U309szWDFb%5C%2FlVqlbzz2rD%2BV3g%5C%2Fzz%2Bi2xyRHDOzs8fiV2E%5C%2FlMFx2r1jwpTESbri2XU3l1zxzHxb20m%5C%2F%5C%2Fz2x2PhKEJCMz%2BsiT1lvlpTzzDxNV2EA3Srzirj%2BV3g%5C%2Fzx%2Bi22U3l6Mxzo5bozh%5C%2Fmbux2PD3VRY%5C%2FzxsxX2M3DFMxzPrSVfoqlQD62xW3EZzfzFrb22l6lp1rgwrbPf7qlQzz2%2Bk%2BV3paFzDx2O83l6TzMPriVAYqYbDsmDc%2BV3g%5C%2FAFrbAs7HtnuxzP2bVjCql9QzXIoETphqzzxN2Xl6lphyz8riVXl%5C%2F7zrzNcn4EeLFzFrb22lqlp11zDDEV2lqlbzz%5C%2FIc3gq%5C%2FvRbri22U3VXQzsDoBVPmqlQrz2DD096TuzWObsXILlp1zzcFiVqTRcboBLDc%2BV3g%5C%2FFzrbLDRvlQsozPrbVXUs7FogXCY3d3Jjzzzb22kKl6TdzDsiVFE%5C%2Fqz%2Bz%2BDw%2BVtg%5C%2FzDbi2mQ4vGk2ySXiV2E%5C%2FlEXx2Hm3ZGk%5C%2Fvz2i2X8%2Bl1MxzdQvVuhqlQzz2cI%2BVHBnz4SV2X8dMpLAzPDOVBn%5C%2Fszrx2DD35thqyfzcX2MwU3Sxz8rb8%2Bv%5C%2Fuzzk2HD%2BVthqzzoo2Xesvb3zzob0V2l%5C%2FlQDA2Pc37LYq1zri2XU3lGsxzdtVVZEqlQrz2Do4EpgfvFzbdOY4lp1zzdTiVusPfQDw2Ic%2BV6ltAFrbChc5WMbxzPzbVtJqlyjIXDztn6hqzzzb2O8%2Bl6TzDDrbMbotl%5C%2Frn2Pc3VtgGzFx4aTl3KgbozPrbVXUhNbDzXzBKES3zzFrI2XUylphozASbwdJqlQzz2nY%2BVx3P4QDCL183U6OzmPrbdxZAAFoK28c%2BV3g%5C%2FHzrbdue7vGkSxIriI1E%5C%2FvFrzxPxsBt6qzFri22U3vG1z8ccGE%2BQtnbrx2Pc3U3hqpzo02XePl3MxzDzbQTm%5C%2FBfDjXDzG43h%5C%2FzbzbX18%2BKWbKzzOiV2lBUQxK2PxSLPXvz4bN2X8%2Bl6TMzPD3VnjqvN1o2Pc3Vtk4zFDJXoyGleuKzPzbVXlulFzz2DDPS6g%5C%2Fkb2bYOamlp1zznbiVB0epqrO2Pc3VtkrzFxLJ%2BhKtCuxzPuvVjWqlVUr2Do9Y3hqzzxe2XMTv5yzzKzIV2l%5C%2FlQzN2PxzFAZfz%2BfV2X8%2Bl6T9zPzHEKo%5C%2FDQ2x2P82I2Y4zKQiR1M%5C%2Fl3MxzDzbE%2Bl%5C%2FfroiXPz8%2Bth%5C%2FzzzbB18%2BXUKAzPD%5C%2FIXVqlbzzlPc%2BVD%2B4kqPI1wba7X53xl82VUpji2Jpo20oiliCyCPTD7BJqZrUJfK4%5C%2FXdZquSVwqs1GbtGu1FD5KK43fxaT07EUc23qJIRpjswLmoVi%2B9PLPVvz7GhewXhnT0U2N0MBTwRR%2BMqB%2Bz46ZENS7e9sLe1WwsVK89LaYSxy6z56uXQIxKfpqQ0FyGurzHe5QQ0v8LTbIWfmWFEq1Ub2c9RVwYfsX7MUcIAbleZeCccXNxUp96PIYMswQHkN%2BeqEibwsmIYJCjhAslMV7LA3coSRzuS1sPY37vlefTebpd4nzhBOm7KIIe7fn17FskrAnJvO%2Bn%5C%2FpqkwvkTzBrkZERJtkPDOduKnP24bUqWXUa3EEFvZ6gFpSa4qGZCzeBB%5C%2FfGEtxJesCu72tWtYA6IA%5C%2FYOWP9VyVFsE4CGZ95CrbZpRQIeFh3ILdYIMspTHeToBG1uzV%2BmTINkl9CizN7yGSc7COYWzYn%2BxN9OW7hmo4h7L6tVcLPI5N8wv%2BbbUC2Vz1oZVDpHJ%2BdZPyy28Pm5zZCdQFdvL%2BQsjVY0WD53ZIatccZH0iPyPgggn3992Wn%5C%2FXmN4TAwsN1iMckz%5C%2Fwxr4nP%2BnqMuD3ghsuimIt5kg6Ei1s2lD%5C%2Fo99Rhm00m%2BTq%5C%2FcN%2BIO4y0m5llcPU3MbgFXsJhyuOBaOd8KHNQ7czp30oMzM%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9", "cDIIh", "x-features", "HAOFA", "lMzWY", "setval", "CoPib", "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0", "hyrAy", "DjPds", "kJBpu", "title", "2214541497400", "logs", "QaFkT", "then", "开始签到和抽奖", "OGltt", "ZRHWp", "sendRightList", "no-cache", "bizScene", "vhwGJ", "sIFJH", "name", "data=", "jkkjW", "YChPt", "1|3|6|7|5|9|10|0|8|4|2", "cjZal", "pOfzK", "openappkey%3DDEFAULT_AUTH", "method", "SiUpp", "cyCOu", "ZMsqB", "WEBjR", "log", "pvnGa", "ahgRh", "tJHYr", "IuueL", "玩连连看获得300乐园币", "ADEA5439FE8340A29040F669FCAD4C31|1723137437692", "hYbyk", "uPutQ", "vuphq", "HFpBp", "JTDVg", "饿了么乐园币", "test", "GameExp", "qkCOI", "game_center", "nFwSe", "failurereason", "ckjar", "mtop.ele.me", "wUIkY", "map", "join", "x-page-url", "lodash_set", "YzLJw", "longitude", "RayUU", "1954716CMYFMv", "x-ele-ua", "d8d11dce-3ab2-48a6-8fdb-c0207e660902", "mJAUL", "getTime", "jtHrc", "TUroU", "get", "hdzCI", "uTCgO", "XiWDJ", "492708tZkMUJ", "me.ele.component.webcontainer.view.AppUCWebActivity", "set-cookie", "30.178378857672215", "pragma", "ZSjKo", "CMGag", "RjZef", "@chavy_boxjs_userCfgs.httpapi", ", 错误!", "QYyqH", "NHiTQ", "yWDus", "TuJBF", "writeFileSync", "OdbiK", "YhVDk", "LuBfe", "QoNXm", "isNeedRewrite", "pTWPu", "getSeconds", "login", "rpckm", "qnbbD", "hints", "mYEiA", "isMuteLog", "https://r.ele.me", "x-nq", "Content-Type", "oDlnl", "JScPy", "getjson", "latitude", "5bce4caf-e493-4d94-b68c-4777ff0dc0c1", "LIANLIANKAN", "zOKLn", "ARikJ", "http", "asac", "dccet", "POST", "bQNch", "IVcGK", "replace", "OtKeJ", "bizParam", "QxyEA", "PsxXo", "x-bx-version", "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json", "mMdAx", "wait", "x-ttid", "OCivj", "DhZzW", "fhCmP", "TaXgq", "passLevelTime", "status", "muqYR", "x-pv", "authority", "origin", "Rorha", "180.76.0.0", "fLLAs", "rEvtI", "JOVWp", "dnDEL", "LOTTERY", "kdYyS", "application/x-www-form-urlencoded", "OqQmM", "bYlzp", "aEbHn", "OiPLY", "Cookie", "open-url", "cHXUA", "pAOlN", "exec", "JbzNC", "hULLs", "lhyoa", "openUrl", "VSRvi", "cAOiV", "writedata", "lwyoE", "accept", "dwHDl", "pFznU", "info", "GDTbn", "length", "OSVVD", "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0", "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0", "RFHqM", "cache-control", "setCookieSync", "errorMsg", "wuUxc", "dvSPq", "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"", "got", "string", "IFQdw", "undefined", "******开始【饿了么账号", "passConf", "20230224114825216373367998", "toString", "getPassPrize", "yBOqN", "fOVVv", "gYwgU", "referer", "mEaFf", "MPUbI", "todayPass", "已发放……", "tZsCM", "gCDHE", "droptimes", "shopping.ele.me", "120.21993197500706", "PQBQK", "{\"type\":\"login\"}", "24895413", "rgnDW", "push", "fATbQ", "catch", "isQuanX", "wEpHd", "kCIPS", "QORjd", "url", "split", "user_id", "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0=", "valueForKey", "zbUXR", "setjson", "PvYAi", "BAfjX", "uSDWY", "getMonth", "toObj", "ttIds", "opts", "339969nylAVc", "WATER_SORT", "X-Surge-Skip-Scripting", "media-url", "lastLevelId", "运气不好，重新运行一次脚本后必得奖励", "开始连连看游戏", "11.11.88", "gameId", "FiJbS", "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141", "eGzfN", "AqCUA", "aBUXQ", "isLoon", "eoDYG", "env", "f-refer", "x-sufei-token", "success", "ret", "sBSfQ", "AaXgI", "XXzXW", "YaKwI", "cron", "zcfss", "accept-language", "logErr", ".$1", "ufTMe", "12d348ab6b414fb3887df15a233d651e", "Rnrkl", "tejEn", "existsSync", "bizErrorMsg", "initGotEnv", "values", "gameSuccess", "body", "Fjwuv", "uuyXf", "InClA", "TwvTW", "RyIIY", "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=", "qnHrU", "bizMethod", "resolve", "cktough", "ZmBVt", "getMilliseconds", "naURN", "accept-encoding", "账号失效！请重新登录！！！😭", "trim", "防止黑号延时3-4秒", "yPcOX", "readFileSync", "szfRV", "x-nettype", "loaddata", "UcxhA", "HqKHh", "_0x79d754", "IVIOO", "https%3A%2F%2Fr.ele.me%2Flinkgame%2Findex.html%3FnavType%3D3%26longitude%3D106.4976118505001%26latitude%3D26.36270485818386%26spm%3Da13.b_activity_kb_m71293.0.0", "ReviveExp", "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36", "random", "timeout", "jvXak", "level", "ntoJG", " ❌无效用户信息, 请重新获取ck", "FGGYk", "setdata", "startTime", "获得：", "reduce", "nEQOj", "SQbGg", "includes", "dVrOG", "3157345vAwTjq", "gameCode", "2A23C08X4VP4SVOKFBKCA9", "token", "lodash_get", "uUlLu", "reportLog", "cookie", "irise", "goldnum", "obj", "acHVl", "getdata", "UNKNOWN", "x-umt", "&sign=", "kLhdp", "VExRL", "fyBYQ", "x-utdid", "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_7yZ26hu1JwalIpn%2FcX%2BzfziRWkHYEHsdZmVqXeA2%2FwYUa%2B8bCP0ArVl3I6Gh%2F%2FZqmRdRrj4AjAJUfG%2B3oLrJivFwm63Kg7PpjAsW6VXjHIaMutgOxAOWOcPl6%2BqCMhOSEcqmPAKdCuKLfw1IsX1w%2Bl%2BAitNeCtzTcBQ62VSinUDNlE9u6PyJ%2BIfTDJ%2Fu%2B7iQoXsnE8Y5xIk%2BLbShF5csC%2FOseW6sXYruCygJZUPaB%2FObURmlJ66Ne%2FH2dG6q5NW4r9zMwQ%2FGbRggiD25B5UCTpZV6%2BAaUeFtkfv86LPF3q%2FbM8a%2BoPlvNIDknTIqiitKdpzIFAvRHD9E3KV13DG8ImkGu8bUXyoE9fuAmQc%2BwGlBGEXZ%2BObQTCFMfCxFIOlkP8ReaaqbxN7eAygPPlXq2w%3D%3D&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeLevel2%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23FQbKI49pzzZ5Rzo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvovDRS%5C%2Flp1zzXdEnDgOYFrxvok%2B93Etzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxM02fd3BsbH8OILZ0aO2lkui2X0mlpYazDcLV2eDFT1D2zTJGth%5C%2Fzcl9XXeHM62zzDzbV1h%5C%2FlQzzm8c3IWO1z2ry2X8%2Bl6TIzPxiE%2B5jwFrx2DD38phqfAbbD183lp1zzcFiVBYYN7Yl2Ic%2BV3g%5C%2FWQrbOXMCv9Y2zIriVXl%5C%2FbQrzeWV3EBcQzFzb2%2BBnlk1zzm1VV2lBUzxL2PoO0tTczbri21U30GOzJPDuV2QSLQrx2DD3lthq9Mdu2oOGlpTzzDxkV2Q8%2Bkxx2mwKV6hqzzxy2XlxU6J8x8rbVXl%5C%2FEQrz2DD3VphqyrDC2OMkUpsxzDzb8uV%5C%2FQRtz2mQ%5C%2Fnph%5C%2FzzzbE18%2BC5kJFDzEV1hqMr%2BzqIc3ZpY6zcOi2XU3lGrxzDaEE%2BQmnFrz2DD3vphqzzzb2O8%2BuEKxzIDZIOJqlbzzXPc3yS1Kz2DcL283lpOzEPriVWo%5C%2FjMzzh8P%2BVtg%5C%2Fznzi22yMv9hrz8riVXl%5C%2FbzrzLxn3EF1%2BzFrb22eulpTzMUnfVPnWMbrz2DoXUtg9ZQzh2183ltMzHDrbrZctvC1x2PD3VRcFznzi2ci7lpTzzDoWV2QltS2z7PH%2BVtg%5C%2Fzd%2Bi2mwelEQxzPrbVXl5TzxQwDo7YphqzzoD2XM6lYFz78riV2E%5C%2Fl8sx2KK%2BppTkxFri22U30GOzXNXVVABBUbrz2Do3E3gBaMrbi2Y4lp1zz3%2BiVCHqszDRLDc3Vtg%5C%2Fzbrb22I2e3fzbPzlVOGgqbrx2DD39thq%2BB3b2zwW8ubxzDzbNh7%5C%2FCfDHXDzZr6h%5C%2FzFzbQO8%2B1kFzF8riVXl%5C%2FyQrzU%5C%2Fc3t3EtzFSp23VRleuz4DogV2l%5C%2FlQx22PzXwrSLzLsv2X84lpGdzPzgVB4%5C%2FCQrx2PD3VX83zKdioul3tlrxzPzbVZVqlQziXPxpB3h%5C%2FzzzbR28%2BYHszSPriV2E%5C%2FlM2x2DsFr369zQri22U31KrzZNeiVZJtlzro2IoXUtgb4zzzL183l6TzAIrbUl0%5C%2FvGzD2PD3VtgtzFzb22UdlpG%5C%2FMI2b%5C%2FnJqlQzz2nj%2BV%2BxmFzDM11Y4lp1zz4FiVFU%5C%2FDf%2BzoDK%2BVtluzDbi2rG4GNBAz8riVXl%5C%2FTFrzhcc8sIbJzFrS2XUblpYRzHObVf4ulFrz2DDy936aFHRb2DSJlpTcx8xIV25HPNrx2Hc%2BVthqzzxb2XedvvtxzK2VV2lqlQxA2PzGKZSXz3TV2X8%2Bl66KzPzPEAq%5C%2FvhFd2Pc4V6kuzFDU2XKoZfFxzPFbVu4qlNyx0Pc3ttnFzFzb2m01lQ2xk0rbXUoqlQzz2%2BD%2BVdzFprzba2KDl6TzzD%2BiVXl%5C%2Fl5Tx2DxlttTAxQri22U36gXz34ObBrWqlQzz2%2BN%2BV%2BXaFQzY2O83U3TzHPrbsoW%5C%2FlUFx2PD3V%5C%2F7hzmdb9sl3n5MxzPzbVj4qlsMxa8D3P3EtzFzb2HPylMAxmDDrV1hqMbfzQPc3XtYRzL2V2X8%2Bl66xzPDJEP8qv7To2Pc3VtkFzFzu2xbRl8zrzPrbVXUIOQrz2QgGGHmijDapVrMn%5C%2F2I4jearIkM%2BIXKnqdqAtmQHpN6GrWj6F166bAdG8P3RYEV0xlyEiFLyn1TeFc78jJ4XXbeYkL0ea5XSsKKr8y2yHKuDJvJARVs%5C%2F8BXIYBZJ5RySEZGsQzgenKYPJw0QvCi3j8%2BhHS07aFcCMone5VD2rGPehDRDCyQFz7CnoDj%5C%2F2v8DL3Fp3o3hVjzbjy03B9P5IJWXjLwo%5C%2FAnAuXRI1njUveHm7P5Bz7Y1EAhKcxjQNma6t7pwE%5C%2FPKsyfMXKZSx8WI5mOUN%5C%2F%5C%2FAWEwDMfTuopNbNsYHmwpF%5C%2FIpDE1ZfqkqbQtkehGj%5C%2FhQxsWGn3waqTVjTGE8p3LAjStn778J4Qqicih%2BkHC9phvSLeUyuth3iiJE6c1w0pV%2Bt11OG0DzgT78WUbyI52Z7gNENLWbbDK0Oo2HzywJgLByqQXH%5C%2F1sD4NKSE%5C%2F%2BEZEkqU%5C%2FXuZlkua60ceFO8AqWPvN%5C%2FirmQ0gqs1tzKxg6LFyW%2Bil2JtElAQpqbDzEFc8adLjU%5C%2FzTesWAyrNT3C9XCBWa9JkUQBlE0AFDvHxeKDIhl2kFrtlnnDS8d276hlAp839hySd3MxhChdiZEYGyuYEXozQM60YXdScAOIZAB5D0L49iQq3psw02A9Shm6MiEVf0DYXvG7N%5C%2FmhlA0yJn24ezP7LOxeis%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9", "uvzlB", "floor", "Veygm", "OUUOy", "dataFile", "isArray", "page_view", "assign", "slice", "NqtOO", "done", "1551089129819%40eleme_android_11.11.88", "WNFly", "headers", "LMfTU", "x-extdata", "indexOf", "1051", "substr", "abs", "GtGtm", "isSurge", "rTywu", "yiOtG", "关闯关成功", "695244OusFcj", "toStr", "LJFxE", "延迟8秒", "call", "dNAdM", "xefyk", "wFezg", "fcVKp", "lXBew", "Game[", "MzdvD", "passNum", "XUvcM", "2A232091VOX6SPEQYH6RG4", "inUdW", "OmZwt", "IRaqP", "etfkt", "OhSQh", "mtop", "RokzO", "4LSVwiH", "bHkHq", "data", "ZwPfc", "iodep", "x-eleme-requestid", "OjyMp", "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376820242131437", "GODgt", "getval"];
  xQ = function () {
    return xr;
  };
  return xQ();
}
function xM(xr, xl) {
  const xy = s,
    xv = O,
    xk = s,
    xw = O,
    xB = {
      IVcGK: function (xt, xq) {
        return xt == xq;
      },
      aEbHn: function (xt, xq) {
        return xt === xq;
      },
      TwvTW: "POST",
      cyCOu: xy(687),
      ZmBVt: function (xt, xq) {
        return xt + xq;
      },
      oDlnl: function (xt, xq) {
        return xt + xq;
      },
      CMGag: ", 开始!",
      NSRZm: "box.dat",
      Vykjh: function (xt, xq) {
        return xt != xq;
      },
      hyrAy: xv(362),
      VExRL: function (xt, xq) {
        return xt != xq;
      },
      xubgW: function (xt, xq) {
        return xt != xq;
      },
      PQBQK: xy(642),
      CrUhr: function (xt, xq) {
        return xt * xq;
      },
      yPcOX: function (xt, xq) {
        return xt + xq;
      },
      rgnDW: function (xt, xq) {
        return xt + xq;
      },
      MzdvD: "http://",
      oUeiJ: "/v1/scripting/evaluate",
      bxeni: xv(431),
      fcVKp: function (xt, xq) {
        return xt(xq);
      },
      ZLzOu: xy(635),
      QxyEA: function (xt, xq) {
        return xt && xq;
      },
      CoPib: xk(435),
      nrglZ: function (xt, xq) {
        return xt !== xq;
      },
      gLzJH: function (xt, xq) {
        return xt(xq);
      },
      gYwgU: function (xt, xq) {
        return xt - xq;
      },
      BgvyB: function (xt, xq) {
        return xt === xq;
      },
      FGGYk: "null",
      CTXJs: function (xt, xq) {
        return xt || xq;
      },
      HAOFA: function (xt, xq) {
        return xt(xq);
      },
      cHXUA: function (xt, xq) {
        return xt(xq);
      },
      bYlzp: "tough-cookie",
      IVIOO: function (xt, xq) {
        return xt === xq;
      },
      RokzO: xk(254),
      RjZef: function (xt, xq, xd, xL) {
        return xt(xq, xd, xL);
      },
      OCivj: xy(282),
      hdzCI: "Content-Length",
      YhVDk: xw(602),
      BAfjX: xw(325),
      fyBYQ: function (xt, xq) {
        return xt + xq;
      },
      fFdWM: function (xt, xq) {
        return xt + xq;
      },
      wFezg: function (xt, xq) {
        return xt == xq;
      },
      OMIrx: xy(360),
      uwKBC: "open-url",
      Fjwuv: xv(409),
      xefyk: function (xt, xq) {
        return xt(xq);
      },
      GwGeg: function (xt, xq) {
        return xt(xq);
      },
      rvyDG: xy(628),
      pADmd: function (xt, xq) {
        return xt > xq;
      },
      rTywu: function (xt, xq) {
        return xt + xq;
      },
      qnHrU: xy(261),
      dfaHu: function (xt, xq) {
        return xt + xq;
      },
      nNPSh: function (xt, xq) {
        return xt / xq;
      },
      IPwuu: ", 结束! 🕛 ",
      NEwmL: "GITHUB",
      RayUU: xy(629),
      NHiTQ: "get",
      dnDEL: xy(614),
      DhZzW: xw(624),
      muqYR: xk(388),
      OdbiK: xw(532),
      ZMsqB: "isLoon",
      OmZwt: xy(403),
      eCuMW: xv(285),
      uSDWY: xv(398),
      bHkHq: "getScript",
      JbzNC: "runScript",
      DVofA: xk(467),
      lwyoE: xy(341),
      TQgNK: xk(237),
      XXzXW: "getdata",
      FBEIz: xk(482),
      UOnQj: xk(567),
      qXQbu: xy(442),
      HFpBp: xk(575),
      rPdHV: "log",
      cDZlF: xv(434),
      oETXx: xk(305)
    };
  xB.Vykjh(xB[xk(667)], typeof process) && JSON[xv(581)](process[xy(422)])[xy(527)](xB.NEwmL) > -1 && process[xy(643)](0);
  class xK {
    constructor(xt) {
      const xq = xw;
      this[xq(422)] = xt;
    }
    [xB[xw(240)]](xt, xq = "GET") {
      const xL = xw,
        xm = xw,
        xT = xv,
        xN = {
          sIFJH: function (xY, xO) {
            return xY(xO);
          }
        };
      xt = xB[xL(296)]("string", typeof xt) ? {
        url: xt
      } : xt;
      let xC = this[xm(248)];
      xB[xm(328)](xB.TwvTW, xq) && (xC = this[xL(614)]);
      return new Promise((xY, xO) => {
        const xA = xT;
        xC[xA(540)](this, xt, (xb, xz, xI) => {
          const xJ = xA;
          xb ? xN[xJ(682)](xO, xb) : xY(xz);
        });
      });
    }
    [xB[xw(263)]](xt) {
      const xq = xy;
      return this[xq(629)].call(this[xq(422)], xt);
    }
    [xB[xy(322)]](xt) {
      const xq = xv,
        xd = xk,
        xL = xw;
      return this[xq(629)][xd(540)](this[xL(422)], xt, xB[xq(449)]);
    }
  }
  return new class {
    constructor(xt, xq) {
      const xd = xy,
        xL = xy,
        xm = xy,
        xo = xy,
        xT = xB[xd(693)][xd(393)]("|");
      let xN = 0;
      while (true) {
        switch (xT[xN++]) {
          case "0":
            this.logSeparator = "\n";
            continue;
          case "1":
            this.name = xt;
            continue;
          case "2":
            this[xm(696)]("", xB[xd(456)](xB[xm(283)]("🔔", this.name), xB[xL(258)]));
            continue;
          case "3":
            this[xo(291)] = new xK(this);
            continue;
          case "4":
            Object.assign(this, xq);
            continue;
          case "5":
            this[xd(672)] = [];
            continue;
          case "6":
            this.data = null;
            continue;
          case "7":
            this[xd(515)] = xB.NSRZm;
            continue;
          case "8":
            this.startTime = new Date()[xd(245)]();
            continue;
          case "9":
            this[xm(583)] = !1;
            continue;
          case "10":
            this[xL(271)] = !1;
            continue;
        }
        break;
      }
    }
    [xB[xw(308)]]() {
      const xt = xw;
      return xB.Vykjh(xB[xt(667)], typeof module) && !!module[xt(568)];
    }
    [xB[xy(313)]]() {
      const xt = xy,
        xq = xk;
      return xB[xt(507)](xB[xq(667)], typeof $task);
    }
    [xB[xy(267)]]() {
      const xt = xk;
      return xB.xubgW(xB.hyrAy, typeof $httpClient) && xB[xt(296)](xB[xt(667)], typeof $loon);
    }
    [xB[xk(694)]]() {
      const xt = xv;
      return xB[xt(667)] != typeof $loon;
    }
    [xB[xv(552)]](xt, xq = null) {
      try {
        return JSON.parse(xt);
      } catch {
        return xq;
      }
    }
    [xk(537)](xt, xq = null) {
      try {
        return JSON.stringify(xt);
      } catch {
        return xq;
      }
    }
    [xB.eCuMW](xt, xq) {
      const xd = xk,
        xL = xk;
      let xo = xq;
      const xT = this[xd(502)](xt);
      if (xT) {
        try {
          xo = JSON[xL(612)](this[xL(502)](xt));
        } catch {}
      }
      return xo;
    }
    [xB[xv(401)]](xt, xq) {
      const xd = xw;
      try {
        return this.setdata(JSON[xd(581)](xt), xq);
      } catch {
        return !1;
      }
    }
    [xB[xw(559)]](xt) {
      return new Promise(xq => {
        const xd = {};
        xd.url = xt;
        this.get(xd, (xL, xm, xo) => xq(xo));
      });
    }
    [xB[xk(335)]](xt, xq) {
      const xd = xv,
        xL = xy;
      return new Promise(xm => {
        const xo = xg,
          xT = xg,
          xN = xg,
          xC = xg;
        let xY = this[xo(502)](xo(260));
        xY = xY ? xY[xo(297)](/\n/g, "")[xo(461)]() : xY;
        let xO = this[xC(502)](xB[xC(381)]);
        xO = xO ? xB.CrUhr(1, xO) : 20;
        xO = xq && xq[xC(476)] ? xq[xN(476)] : xO;
        const [xs, xA] = xY[xC(393)]("@"),
          xb = {
            url: xB[xT(463)](xB.rgnDW(xB[xN(547)], xA), xB.oUeiJ),
            body: {
              script_text: xt,
              mock_type: xB.bxeni,
              timeout: xO
            },
            headers: {
              "X-Key": xs,
              Accept: "*/*"
            }
          };
        this.post(xb, (xz, xI, xJ) => xm(xJ));
      })[xd(387)](xm => this[xL(434)](xm));
    }
    [xB.DVofA]() {
      const xt = xk,
        xq = xw,
        xd = xk,
        xL = xv;
      if (!this[xt(624)]()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : xB[xt(544)](require, "fs");
        this[xq(635)] = this.path ? this[xt(635)] : xB.fcVKp(require, xB.ZLzOu);
        const xm = this[xt(635)][xL(454)](this[xd(515)]),
          xo = this[xt(635)][xq(454)](process[xt(593)](), this[xq(515)]),
          xT = this.fs[xL(440)](xm),
          xN = !xT && this.fs.existsSync(xo);
        if (xB[xL(300)](!xT, !xN)) {
          return {};
        }
        {
          const xC = xT ? xm : xo;
          try {
            return JSON.parse(this.fs[xL(464)](xC));
          } catch (xY) {
            return {};
          }
        }
      }
    }
    [xB[xw(342)]]() {
      const xt = xk,
        xd = xw,
        xL = xk;
      if (this[xt(624)]()) {
        this.fs = this.fs ? this.fs : xB[xt(544)](require, "fs");
        this[xt(635)] = this.path ? this[xL(635)] : require(xB.ZLzOu);
        const xm = this.path.resolve(this.dataFile),
          xo = this[xt(635)][xL(454)](process[xt(593)](), this.dataFile),
          xT = this.fs[xt(440)](xm),
          xN = !xT && this.fs[xt(440)](xo),
          xC = JSON[xd(581)](this[xL(560)]);
        xT ? this.fs[xt(266)](xm, xC) : xN ? this.fs.writeFileSync(xo, xC) : this.fs[xd(266)](xm, xC);
      }
    }
    [xy(494)](xt, xq, xd) {
      const xL = xy,
        xm = xk,
        xT = xw,
        xN = xq[xL(297)](/\[(\d+)\]/g, xB[xL(665)])[xm(393)](".");
      let xC = xt;
      for (const xY of xN) if (xC = Object(xC)[xY], xB[xT(328)](void 0, xC)) {
        return xd;
      }
      return xC;
    }
    [xB.TQgNK](xt, xq, xd) {
      const xL = xw,
        xm = xw,
        xo = xv,
        xT = xv;
      return xB.nrglZ(xB.gLzJH(Object, xt), xt) ? xt : (Array[xL(516)](xq) || (xq = xq[xm(366)]().match(/[^.[\]]+/g) || []), xq[xo(519)](0, -1)[xT(485)]((xN, xC, xY) => Object(xN[xC]) === xN[xC] ? xN[xC] : xN[xC] = Math[xm(530)](xq[xY + 1]) >> 0 == +xq[xY + 1] ? [] : {}, xt)[xq[xB[xL(370)](xq.length, 1)]] = xd, xt);
    }
    [xB[xw(429)]](xt) {
      const xq = xy,
        xd = xw,
        xL = xv;
      let xo = this[xq(567)](xt);
      if (/^@/[xd(709)](xt)) {
        const [, xT, xN] = /^@(.*?)\.(.*?)$/[xL(334)](xt),
          xC = xT ? this[xq(567)](xT) : "";
        if (xC) {
          try {
            const xY = JSON[xL(612)](xC);
            xo = xY ? this.lodash_get(xY, xN, "") : xo;
          } catch (xO) {
            xo = "";
          }
        }
      }
      return xo;
    }
    [xB[xk(605)]](xt, xq) {
      const xd = xk,
        xL = xv,
        xm = xv,
        xo = xv;
      let xT = false;
      if (/^@/[xd(709)](xq)) {
        const [, xN, xC] = /^@(.*?)\.(.*?)$/[xd(334)](xq),
          xY = this[xd(567)](xN),
          xO = xN ? xB.BgvyB(xB[xm(481)], xY) ? null : xB.CTXJs(xY, "{}") : "{}";
        try {
          const xs = JSON[xo(612)](xO);
          this[xL(237)](xs, xC, xt);
          xT = this[xL(664)](JSON[xd(581)](xs), xN);
        } catch (xA) {
          const xb = {};
          this[xm(237)](xb, xC, xt);
          xT = this.setval(JSON[xd(581)](xb), xN);
        }
      } else {
        xT = this.setval(xt, xq);
      }
      return xT;
    }
    [xB.UOnQj](xt) {
      const xq = xy,
        xL = xw,
        xm = xw;
      return this.isSurge() || this[xq(420)]() ? $persistentStore.read(xt) : this.isQuanX() ? $prefs[xq(396)](xt) : this.isNode() ? (this.data = this.loaddata(), this[xL(560)][xt]) : this.data && this[xm(560)][xt] || null;
    }
    setval(xt, xq) {
      const xd = xw,
        xL = xk,
        xm = xw,
        xo = xv;
      return this.isSurge() || this.isLoon() ? $persistentStore[xd(620)](xt, xq) : this[xd(388)]() ? $prefs[xm(634)](xt, xq) : this[xd(624)]() ? (this[xL(560)] = this[xL(467)](), this[xo(560)][xq] = xt, this.writedata(), !0) : this.data && this[xL(560)][xq] || null;
    }
    [xB.qXQbu](xt) {
      const xq = xv,
        xd = xk,
        xL = xv,
        xm = xv;
      this[xq(359)] = this[xq(359)] ? this[xq(359)] : xB[xq(662)](require, xm(359));
      this[xd(455)] = this[xL(455)] ? this[xd(455)] : xB[xd(332)](require, xB[xL(327)]);
      this[xd(715)] = this.ckjar ? this.ckjar : new this[xd(455)].CookieJar();
      xt && (xt[xL(524)] = xt.headers ? xt[xL(524)] : {}, xB[xd(471)](void 0, xt.headers.Cookie) && xB[xq(328)](void 0, xt[xm(631)]) && (xt.cookieJar = this[xd(715)]));
    }
    [xB[xw(263)]](xt, xq = () => {}) {
      const xL = xw,
        xm = xk,
        xo = xw,
        xT = xw,
        xN = {
          WInkY: function (xO, xs) {
            const xA = xg;
            return xB[xA(300)](xO, xs);
          },
          SQbGg: function (xO, xs, xA, xb) {
            return xO(xs, xA, xb);
          },
          Rorha: function (xO, xs, xA, xb) {
            const xz = xg;
            return xB[xz(259)](xO, xs, xA, xb);
          }
        };
      xt[xL(524)] && (delete xt.headers[xB[xm(307)]], delete xt.headers[xB[xo(249)]]);
      const xC = {};
      xC[xL(408)] = !1;
      const xY = {};
      xY[xL(277)] = !1;
      this.isSurge() || this.isLoon() ? (this[xm(532)]() && this[xL(271)] && (xt[xo(524)] = xt[xm(524)] || {}, Object.assign(xt[xo(524)], xC)), $httpClient.get(xt, (xO, xs, xA) => {
        const xb = xo,
          xI = xm;
        xN.WInkY(!xO, xs) && (xs[xb(445)] = xA, xs[xb(641)] = xs.status);
        xN[xI(487)](xq, xO, xs, xA);
      })) : this.isQuanX() ? (this.isNeedRewrite && (xt[xL(405)] = xt[xo(405)] || {}, Object[xo(518)](xt.opts, xY)), $task[xm(616)](xt)[xm(674)](xO => {
        const xs = xL,
          {
            statusCode: xz,
            statusCode: xI,
            headers: xJ,
            body: xj
          } = xO,
          xS = {};
        xS[xs(312)] = xz;
        xS.statusCode = xI;
        xS[xs(524)] = xJ;
        xS[xs(445)] = xj;
        xq(null, xS, xj);
      }, xO => xq(xO))) : this[xo(624)]() && (this.initGotEnv(xt), this[xm(359)](xt).on(xB[xT(268)], (xO, xs) => {
        const xA = xm,
          xb = xT,
          xz = xL,
          xI = xo;
        try {
          if (xO[xA(524)][xB[xA(557)]]) {
            const xJ = xO.headers[xB.RokzO][xz(718)](this[xb(455)][xI(330)][xI(612)]).toString();
            xJ && this[xA(715)][xz(354)](xJ, null);
            xs.cookieJar = this[xz(715)];
          }
        } catch (xj) {
          this[xI(434)](xj);
        }
      }).then(xO => {
        const xs = xL,
          xb = xo,
          {
            statusCode: xz,
            statusCode: xI,
            headers: xJ,
            body: xj
          } = xO,
          xS = {
            status: xz
          };
        xS.status = xz;
        xS[xs(641)] = xI;
        xS[xs(524)] = xJ;
        xS.body = xj;
        xN[xb(317)](xq, null, xS, xj);
      }, xO => {
        const xs = xT,
          {
            message: xA,
            response: xb
          } = xO;
        xq(xA, xb, xb && xb[xs(445)]);
      }));
    }
    [xB[xy(322)]](xt, xq = () => {}) {
      const xL = xk,
        xm = xk,
        xo = xy,
        xT = xv,
        xN = {
          OGltt: function (xY, xO, xs, xA) {
            const xb = xg;
            return xB[xb(259)](xY, xO, xs, xA);
          }
        },
        xC = {};
      xC["X-Surge-Skip-Scripting"] = !1;
      if (xt[xL(445)] && xt.headers && !xt.headers[xB[xm(307)]] && (xt.headers[xB[xL(307)]] = xB[xo(400)]), xt[xT(524)] && delete xt[xo(524)][xB.hdzCI], this[xo(532)]() || this[xL(420)]()) {
        this[xL(532)]() && this[xT(271)] && (xt.headers = xt.headers || {}, Object.assign(xt.headers, xC));
        $httpClient.post(xt, (xY, xO, xs) => {
          const xA = xT,
            xb = xL;
          xB[xA(300)](!xY, xO) && (xO[xb(445)] = xs, xO[xb(641)] = xO.status);
          xB.RjZef(xq, xY, xO, xs);
        });
      } else {
        const xY = {};
        xY[xm(277)] = !1;
        if (this[xL(388)]()) {
          xt[xo(691)] = xB.TwvTW;
          this.isNeedRewrite && (xt[xm(405)] = xt[xm(405)] || {}, Object[xm(518)](xt[xm(405)], xY));
          $task[xm(616)](xt).then(xO => {
            const xs = xT,
              xA = xT,
              xb = xT,
              {
                statusCode: xI,
                statusCode: xJ,
                headers: xj,
                body: xS
              } = xO,
              p0 = {};
            p0.status = xI;
            p0[xs(641)] = xJ;
            p0[xs(524)] = xj;
            p0[xA(445)] = xS;
            xN[xb(676)](xq, null, p0, xS);
          }, xO => xq(xO));
        } else {
          if (this[xm(624)]()) {
            this[xL(442)](xt);
            const {
              url: xO,
              ...xs
            } = xt;
            this.got.post(xO, xs).then(xA => {
              const xb = xT,
                {
                  statusCode: xI,
                  statusCode: xJ,
                  headers: xj,
                  body: xS
                } = xA,
                p0 = {};
              p0.status = xI;
              p0[xb(641)] = xJ;
              p0[xb(524)] = xj;
              p0.body = xS;
              xq(null, p0, xS);
            }, xA => {
              const xb = xT,
                xz = xT,
                {
                  message: xI,
                  response: xJ
                } = xA;
              xB[xb(259)](xq, xI, xJ, xJ && xJ[xz(445)]);
            });
          }
        }
      }
    }
    [xB[xy(706)]](xt, xq = null) {
      const xd = xy,
        xL = xy,
        xm = xv,
        xo = xk,
        xT = xq ? new Date(xq) : new Date();
      let xN = {
        "M+": xB[xd(508)](xT[xL(402)](), 1),
        "d+": xT.getDate(),
        "H+": xT[xL(651)](),
        "m+": xT.getMinutes(),
        "s+": xT[xd(273)](),
        "q+": Math[xL(512)]((xT[xL(402)]() + 3) / 3),
        S: xT[xm(457)]()
      };
      /(y+)/.test(xt) && (xt = xt[xo(297)](RegExp.$1, xB[xL(456)](xT.getFullYear(), "")[xo(529)](4 - RegExp.$1[xo(348)])));
      for (let xC in xN) new RegExp(xB.ZmBVt(xB.fFdWM("(", xC), ")"))[xm(709)](xt) && (xt = xt[xo(297)](RegExp.$1, 1 == RegExp.$1.length ? xN[xC] : xB[xd(384)]("00", xN[xC])[xL(529)](xB[xo(463)]("", xN[xC])[xL(348)])));
      return xt;
    }
    msg(xt = xr, xq = "", xd = "", xL) {
      const xo = xv,
        xT = xw,
        xN = xy,
        xC = xk,
        xY = xO => {
          const xs = xg,
            xA = xg,
            xb = xg,
            xz = xg;
          if (!xO) {
            return xO;
          }
          if (xB.wFezg(xB.OMIrx, typeof xO)) {
            return this[xs(420)]() ? xO : this[xA(388)]() ? {
              "open-url": xO
            } : this[xs(532)]() ? {
              url: xO
            } : void 0;
          }
          if (xB[xs(543)]("object", typeof xO)) {
            if (this.isLoon()) {
              let xI = xO[xb(338)] || xO.url || xO[xB[xs(640)]],
                xJ = xO[xs(632)] || xO[xB.Fjwuv];
              const xj = {};
              xj[xs(338)] = xI;
              xj.mediaUrl = xJ;
              return xj;
            }
            if (this[xz(388)]()) {
              let xS = xO[xB.uwKBC] || xO[xs(392)] || xO[xs(338)],
                p0 = xO[xB[xA(446)]] || xO.mediaUrl;
              const p1 = {};
              p1[xz(331)] = xS;
              p1[xA(409)] = p0;
              return p1;
            }
            if (this.isSurge()) {
              let p2 = xO.url || xO.openUrl || xO[xB[xs(640)]];
              const p3 = {};
              p3[xA(392)] = p2;
              return p3;
            }
          }
        };
      if (this[xo(583)] || (this.isSurge() || this[xT(420)]() ? $notification.post(xt, xq, xd, xB.xefyk(xY, xL)) : this.isQuanX() && $notify(xt, xq, xd, xB.GwGeg(xY, xL))), !this[xT(279)]) {
        let xO = ["", xB.rvyDG];
        xO[xo(385)](xt);
        xq && xO[xC(385)](xq);
        xd && xO[xN(385)](xd);
        console[xN(696)](xO[xo(719)]("\n"));
        this.logs = this[xo(672)].concat(xO);
      }
    }
    [xB.rPdHV](...xt) {
      const xq = xy,
        xd = xv,
        xL = xw;
      xB[xq(618)](xt[xq(348)], 0) && (this[xL(672)] = [...this[xL(672)], ...xt]);
      console.log(xt.join(this[xd(584)]));
    }
    [xB.cDZlF](xt, xq) {
      const xd = xv,
        xL = xy,
        xm = xv,
        xo = xy,
        xT = !this[xd(532)]() && !this[xL(388)]() && !this[xL(420)]();
      xT ? this.log("", xB[xm(533)](xB[xL(283)]("❗️", this.name), xB[xd(452)]), xt.stack) : this[xL(696)]("", xB.dfaHu(xB[xo(592)]("❗️", this.name), xB[xo(452)]), xt);
    }
    [xB.oETXx](xt) {
      return new Promise(xq => setTimeout(xq, xt));
    }
    [xk(521)](xt = {}) {
      const xq = xy,
        xd = xy,
        xL = xv,
        xm = xw,
        xo = new Date().getTime(),
        xT = xB.nNPSh(xB.gYwgU(xo, this[xq(483)]), 1000);
      this[xq(696)]("", xB.yPcOX(xB[xL(384)](xB[xq(384)]("🔔", this[xL(683)]) + xB.IPwuu, xT), " 秒"));
      this[xd(696)]();
      (this[xm(532)]() || this.isQuanX() || this[xm(420)]()) && xB[xL(542)]($done, xt);
    }
  }(xr, xl);
}
const xH = new xM(s(708));