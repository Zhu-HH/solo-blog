
function get_canvas() {
    // 一台机器 一个Olc 写一个特定的字符串 然后计算值  Plc 随机数 Nlc是Plc 随机的特征值
    function dZ() {

        return window["Date"]["now"] && "number" == typeof window["Date"]["now"]() ? window["Date"]["now"]() : +new window["Date"]();
    }

    function cvc() {
        var Rvc = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", 'SharePoint Browser Plug-in', "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", 'Adobe Acrobat', "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"];
        if (void 0 === window["navigator"]['plugins']) {
            return null;
        }
        for (var Dvc = Rvc["length"], nvc = "", Bvc = 0; Bvc < Dvc; Bvc++) {
            var Zvc = Rvc[Bvc];
            (void 0 !== window["navigator"]['plugins'][Zvc]) && (nvc = ""["concat"](nvc, ",")["concat"](Bvc));
        }
        return nvc;
    }

    function dvc() {
        try {
            return !!window.sessionStorage
        } catch (bvc) {
            return false;
        }
    }

    function lvc() {
        try {
            return !!window.localStorage;
        } catch (rvc) {
            return false;
        }
    }

    function vvc() {
        return !!window.indexedDB;
    }

    function fvc() {
        return new Date()["getTimezoneOffset"]();
    }

    function Svc() {
        return ('function' == typeof window.RTCPeerConnection) || ('function' == typeof window.mozRTCPeerConnection) || ('function' == typeof window.webkitRTCPeerConnection);
    }

    // ******************
    var clc = dZ();
    var klc = window["document"]["createElement"]("canvas");
    klc["width"] = 280
    klc["height"] = 60
    klc["style"]["display"] = "none"
    var Ylc = []
    var rCFP = []
    try {
        if ('function' == typeof klc["getContext"]) {
            var qlc = klc["getContext"]("2d");
            qlc["fillStyle"] = "rgb(102, 204, 0)", qlc["fillRect"](100, 5, 80, 50), qlc["fillStyle"] = "#f60", qlc["font"] = "16pt Arial", qlc["fillText"]("<@nv45. F1n63r,Pr1n71n6!", 10, 40), qlc["strokeStyle"] = "rgb(120, 186, 176)", qlc["arc"](80, 10, 20, 0, Math.PI, false)
            qlc["stroke"]();
            var hlc = klc["toDataURL"]();
            var Olc = 0;
            for (var Mlc = 0; Mlc < hlc["length"]; Mlc++) {
                Olc = (((Olc << 5) - Olc) + hlc["charCodeAt"](Mlc)), Olc &= Olc;
            }
            Olc = Olc['toString']();
            for (let i = 0; i < 30; i++) {
                var blc = window["document"]["createElement"]("canvas");
                blc["width"] = 16, blc["height"] = 16;
                var Ulc = blc["getContext"]("2d");
                Ulc["font"] = "6pt Arial"
                var Plc = Math.floor((1000 * Math.random()))['toString']()
                Ulc["fillText"](Plc, 1, 12);
                for (var Jlc = blc["toDataURL"](), Klc = 0, Xlc = 0; Xlc < Jlc["length"]; Xlc++) {
                    Klc = (((Klc << 5) - Klc) + Jlc["charCodeAt"](Xlc)), Klc &= Klc;
                }
                var Nlc = Klc['toString']();
                rCFP.push({
                    rVal: Plc,  // 随机数
                    value: Nlc, // 随机数的特征值
                })
            }

            //  debugger; // 一台机器 Olc 特定 Plc和Nlc 有关联 可以生成无数个
            Ylc = [Olc, Plc, Nlc];
        }
    } catch (e) {
        debugger
        Ylc = ['exception', -1, -1];
    }
    // var vlc = window["screen"]["colorDepth"] ? window["screen"]["colorDepth"] : -1;
    // var flc = window["screen"]["pixelDepth"] ? window["screen"]["pixelDepth"] : -1;
    // var Slc = window["navigator"]['cookieEnabled'] ? window["navigator"]['cookieEnabled'] : -1;
    // var Alc = window["navigator"]["javaEnabled"] ? window["navigator"]["javaEnabled"]() : -1;
    // var Hlc = window["navigator"]["doNotTrack"] ? window["navigator"]["doNotTrack"] : -1;
    // var Clc = [[Ylc[0], -1, "dis", cvc(), dvc(), lvc(), vvc(), fvc(), Svc(), vlc, flc, Slc, Alc, Hlc]["join"](";"), Ylc[1], Ylc[2]];
    // var Avc = {"fpValStr": Clc[0]["replace"](/"/g, "\\\""), "td": (dZ() - clc), 'rVal': Clc[1], "rCFP": Clc[2]};

    return {
        value1: Olc,  // 70 第一个值 就是绘制特定字符串的特征值
        value2: "",
        rCFP: rCFP
    }
}


async function sha256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hash = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function get_webgl() {
    function Esc(Ksc, Xsc) {
        ((null == Xsc) || (Xsc > Ksc["length"])) && (Xsc = Ksc["length"]);
        for (var Ysc = 0, rsc = new window["Array"](Xsc); Ysc < Xsc; Ysc++) rsc[Ysc] = Ksc[Ysc];
        return rsc;
    }

    function Osc(Psc) {
        return function Nsc(Tsc) {
            if (window["Array"]["isArray"](Tsc)) {
                return Esc(Tsc);
            }
        }(Psc) || function msc(gsc) {
            if (("undefined" != typeof window["Symbol"]) && (null != gsc[window["Symbol"]["iterator"]]) || (null != gsc['@@iterator'])) {
                return window["Array"]["from"](gsc);
            }
        }(Psc) || function nsc(Bsc, Zsc) {
            if (!Bsc) {
                return;
            }
            if ("string" == typeof Bsc) {
                return Esc(Bsc, Zsc);
            }// 未执行过此分支
            var jsc = window["Object"]['prototype']['toString'].call(Bsc)["slice"](9, -1);
            n8("Object", jsc) && Bsc["constructor"] && (jsc = Bsc["constructor"]["name"]);
            if (n8(dc.cH.apply(null, [T7, HZ, dq(Rq), Rq]), jsc) || n8("Set", jsc)) {
                var Msc;
                return Msc = cc["Array"]["from"](Bsc), gD.pop(), Msc;
            }
            if (n8(dc.vH(Xt, qX), jsc) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](jsc)) {
                var bsc;
                return bsc = Esc(Bsc, Zsc), bsc;
            }
        }(Psc) || function Usc() {
            throw new cc[dc.DS.apply(null, [z9, b3c])](dc.Ss.apply(null, [xn, dq(hU)]));
        }();
    }

    var dq = function (MEc) {
        return -MEc;
    };


    var gRc;
    var kRc = {
        "maskedInfo": {"vendor": "n", "renderer": "n"},
        "unmaskedInfo": {"vendor": "n", "renderer": "n"},
        "weh": "n",
        "wel": "n",
        "wph": "n"
    }
    var DRc = 'n';
    gRc = window["document"]["createElement"]("iframe"), window["document"]["head"]["appendChild"](gRc);
    var nRc = gRc["contentWindow"], ZRc = nRc["document"]["createElement"]("canvas"),
        zRc = ZRc["getContext"]("webgl");
    kRc["maskedInfo"] = function ELc(mLc) {
        var gLc = 'n';
        var kLc = 'n';
        try {debugger
            gLc = mLc["getParameter"](mLc["VENDOR"]), kLc = mLc["getParameter"](mLc["RENDERER"]);
        } catch (qLc) {
            gLc = "e", kLc = "e";
        }
        return {"vendor": gLc, "renderer": kLc};
    }(zRc)

    var FLc = {}; // wph
    var rLc = nRc, VLc = zRc;
    var pLc = ['MAX_VERTEX_UNIFORM_VECTORS', "MAX_VIEWPORT_DIMS", "MAX_VERTEX_ATTRIBS", "SHADING_LANGUAGE_VERSION", "VERSION", "MAX_VARYING_VECTORS", "ALIASED_POINT_SIZE_RANGE", "SAMPLES", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "ALIASED_LINE_WIDTH_RANGE", "MAX_RENDERBUFFER_SIZE", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "STENCIL_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_CUBE_MAP_TEXTURE_SIZE"],
        vRc = rLc["Object"]["getOwnPropertyNames"](rLc["Object"]["getPrototypeOf"](VLc));
    (pLc = pLc["filter"](function (SRc) {
        var GRc;
        return GRc = vRc["includes"](SRc), GRc;
    }))["forEach"](function (ARc) {
        var sRc = VLc["getParameter"](VLc[ARc]);
        sRc && (sRc["buffer"] instanceof rLc["ArrayBuffer"]) ? FLc[ARc] = Osc(sRc) : FLc[ARc] = sRc;
    });
    var LRc = VLc["getExtension"]("WEBGL_draw_buffers");
    FLc["MAX_DRAW_BUFFERS"] = LRc ? VLc["getParameter"](LRc["MAX_DRAW_BUFFERS_WEBGL"]) : 1;
    var xRc = VLc["getExtension"]("EXT_texture_filter_anisotropic") || VLc["getExtension"]('WEBKIT_EXT_texture_filter_anisotropic') || VLc["getExtension"]('MOZ_EXT_texture_filter_anisotropic');
    if (FLc["MAX_TEXTURE_MAX_ANISOTROPY"] = "-1", xRc) {
        var PRc = VLc["getParameter"](xRc["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]);
        FLc["MAX_TEXTURE_MAX_ANISOTROPY"] = PRc || 2;
    }

    var hRc = function MRc(tRc) {
        try {
            var URc = function JRc(KRc, XRc, YRc) {
                    var rRc = KRc["createShader"](XRc);
                    if (KRc["shaderSource"](rRc, YRc), KRc["compileShader"](rRc), KRc["getShaderParameter"](rRc, KRc["COMPILE_STATUS"])) {
                        return rRc;
                    }
                    throw KRc['deleteShader'](rRc), new window['Error'](""["concat"](XRc, ' Failed'));
                },
                cxc = URc(tRc, tRc["VERTEX_SHADER"], "              attribute vec2 a_position;              attribute vec4 a_color;              varying vec4 v_color;              void main() {                  gl_Position = vec4(a_position, 0, 1);                  v_color = a_color;              }              "),
                lxc = URc(tRc, tRc["FRAGMENT_SHADER"], "              precision mediump float;              varying vec4 v_color;              void main() {                  gl_FragColor = v_color;              }              "),
                fxc = tRc["createProgram"]();
            if (tRc["attachShader"](fxc, cxc), tRc["attachShader"](fxc, lxc), tRc['linkProgram'](fxc), !tRc["getProgramParameter"](fxc, tRc["LINK_STATUS"])) throw tRc['deleteProgram'](fxc), new window['Error']('Program Link Failed');
            tRc["clearColor"](0, 0, 0, 0), tRc["clear"](tRc['COLOR_BUFFER_BIT']), tRc["useProgram"](fxc);
            var Gxc = tRc["getAttribLocation"](fxc, "a_position"),
                Axc = tRc["getAttribLocation"](fxc, 'a_color'),
                Hxc = tRc["createBuffer"]();
            tRc["bindBuffer"](tRc["ARRAY_BUFFER"], Hxc), tRc["enableVertexAttribArray"](Gxc), tRc["bufferData"](tRc["ARRAY_BUFFER"], new window["Float32Array"]([dq(0.8), dq(0.7), dq(0.95), 0.98, 0.4, 0.9, dq(0.7), dq(0.8), 0.98, dq(0.95), 0.1, 0.4]), tRc["STATIC_DRAW"]), tRc["vertexAttribPointer"](Gxc, 2, tRc["FLOAT"], false, 0, 0);
            var Rxc = tRc["createBuffer"]();
            var xxc;
            return tRc["enableVertexAttribArray"](Axc), tRc["bindBuffer"](tRc["ARRAY_BUFFER"], Rxc), tRc["bufferData"](tRc["ARRAY_BUFFER"], new window["Float32Array"]([1, 0.1, 0.07, 0.7, 1, 0.95, 0.025, 0.7, 127 / 255, 1, 212 / 255, 1, 0.08, 1, 0.075, 0.07, 0.08, 0.22, 1, 1, 0, 206 / 255, 209 / 255, 1]), tRc["STATIC_DRAW"]), tRc["vertexAttribPointer"](Axc, 4, tRc["FLOAT"], false, 0, 0), tRc["drawArrays"](tRc["TRIANGLES"], 0, 6), xxc = 1, xxc;
        } catch (Nxc) {
            return Nxc["message"];
        }
    }(zRc);
    DRc = (1 === hRc) ? await sha256(ZRc["toDataURL"]()) : hRc;  // SHA256
    return {
        "value1": DRc, // 画特定的画之后特定的指纹
        "vendor": kRc.maskedInfo.vendor,
        "render": kRc.maskedInfo.renderer,
        "params": FLc,  // wph
        // "extParams": ,  // TODO 暂时找不到使用
        "exts": zRc["getSupportedExtensions"](),  // weh
    }
}

// ***************************************

async function getEnv() {
    return {
        ver: 1,
        canvas: get_canvas(),
        webgl: await get_webgl(),
    }
}

console.log(await getEnv())