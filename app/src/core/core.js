const _0x4560a0=_0x126b;(function(_0x2ab53a,_0x4d8fad){const _0x507902=_0x126b,_0x4ad952=_0x2ab53a();while(!![]){try{const _0x4baea2=-parseInt(_0x507902(0x1de))/0x1+parseInt(_0x507902(0x1cd))/0x2+-parseInt(_0x507902(0x1c8))/0x3*(-parseInt(_0x507902(0x1df))/0x4)+-parseInt(_0x507902(0x1cb))/0x5+-parseInt(_0x507902(0x1ca))/0x6*(parseInt(_0x507902(0x1ce))/0x7)+parseInt(_0x507902(0x1db))/0x8*(parseInt(_0x507902(0x1eb))/0x9)+parseInt(_0x507902(0x1e5))/0xa*(-parseInt(_0x507902(0x1e8))/0xb);if(_0x4baea2===_0x4d8fad)break;else _0x4ad952['push'](_0x4ad952['shift']());}catch(_0x1235ee){_0x4ad952['push'](_0x4ad952['shift']());}}}(_0x3a85,0xe2c91));import{HttpsProxyAgent}from'https-proxy-agent';function _0x126b(_0x4e8976,_0x319ca3){const _0x3a8541=_0x3a85();return _0x126b=function(_0x126b8e,_0x46fa13){_0x126b8e=_0x126b8e-0x1c2;let _0x28d3ab=_0x3a8541[_0x126b8e];return _0x28d3ab;},_0x126b(_0x4e8976,_0x319ca3);}function _0x3a85(){const _0x1142ad=['body','status','Bearer\x20','empty','application/json','Request\x20Body\x20:\x20','184gHJqnp','...','url','106416CAiIHi','7676zsmuQH','fetch','GET','get','Response\x20Data\x20:\x20','text','570590eGoOZv','proxy','json','209AqeDyc','same-origin','error','656811bHNxWJ','generateHeaders','message','exit','Response\x20:\x20','query','\x20:\x20','Detect\x20API\x20change\x20Stopping\x20BOT..','Request\x20Header\x20:\x20','randomUserAgent','597tcMxBm','agent','6KXGmSz','5451270fNjNDm','content-type','2334766vgFHlh','126539BwPlrY','substring','stringify','application/json,\x20text/plain,\x20*/*','\x20-\x20','info','statusText'];_0x3a85=function(){return _0x1142ad;};return _0x3a85();}import{Helper}from'../utils/helper.js';import _0x165866 from'../utils/logger.js';export class API{constructor(_0x2df91f,_0x4d609b,_0x5a1439){const _0x991ead=_0x126b;this['url']=_0x4d609b,this['ua']=Helper[_0x991ead(0x1c7)](),this[_0x991ead(0x1c3)]=_0x2df91f,this[_0x991ead(0x1e6)]=_0x5a1439;}[_0x4560a0(0x1ec)](_0x4e6f58){const _0x2428aa=_0x4560a0,_0x4e77bb={'accept':_0x2428aa(0x1d1),'accept-language':'en-GB,en-US;q=0.9,en;q=0.8','sec-ch-ua':this['ua'],'sec-fetch-dest':_0x2428aa(0x1d8),'sec-fetch-mode':'cors','sec-fetch-site':_0x2428aa(0x1e9),'init-data':this[_0x2428aa(0x1c3)],'user-agent':this['ua']};return _0x4e6f58&&(_0x4e77bb['Authorization']=_0x2428aa(0x1d7)+_0x4e6f58),_0x4e77bb;}async[_0x4560a0(0x1e0)](_0x47cd24,_0x42e718,_0x431efe,_0x2af4c8={},_0x5f0d19={}){const _0x43e5c7=_0x4560a0;try{const _0x2666be=''+this[_0x43e5c7(0x1dd)]+_0x47cd24,_0x1e4265={..._0x5f0d19,...this[_0x43e5c7(0x1ec)](_0x431efe)},_0x210126={'headers':_0x1e4265,'method':_0x42e718};this['proxy']&&(_0x210126[_0x43e5c7(0x1c9)]=new HttpsProxyAgent(this[_0x43e5c7(0x1e6)]));_0x165866[_0x43e5c7(0x1d3)](_0x42e718+_0x43e5c7(0x1c4)+_0x2666be),_0x165866[_0x43e5c7(0x1d3)](_0x43e5c7(0x1c6)+JSON[_0x43e5c7(0x1d0)](_0x1e4265));_0x42e718!==_0x43e5c7(0x1e1)&&(_0x210126[_0x43e5c7(0x1d5)]=''+JSON['stringify'](_0x2af4c8),_0x165866[_0x43e5c7(0x1d3)](_0x43e5c7(0x1da)+_0x210126['body']));const _0x52d59a=await fetch(_0x2666be,_0x210126);_0x165866['info'](_0x43e5c7(0x1c2)+_0x52d59a[_0x43e5c7(0x1d6)]+'\x20'+_0x52d59a[_0x43e5c7(0x1d4)]);if(_0x52d59a['ok']||_0x52d59a['status']==0x190||_0x52d59a[_0x43e5c7(0x1d6)]==0x193){const _0x182636=_0x52d59a['headers'][_0x43e5c7(0x1e2)](_0x43e5c7(0x1cc));let _0x28de39;_0x182636&&_0x182636['includes'](_0x43e5c7(0x1d9))?(_0x28de39=await _0x52d59a[_0x43e5c7(0x1e7)](),_0x28de39[_0x43e5c7(0x1d6)]=_0x52d59a[_0x43e5c7(0x1d6)]):_0x28de39={'status':_0x52d59a['status'],'message':await _0x52d59a[_0x43e5c7(0x1e4)]()};_0x52d59a['ok']&&(_0x28de39[_0x43e5c7(0x1d6)]=0xc8);let _0x50439a=JSON[_0x43e5c7(0x1d0)](_0x28de39);return _0x50439a['length']>0x1f4&&(_0x50439a=_0x50439a[_0x43e5c7(0x1cf)](0x0,0x1f4)+_0x43e5c7(0x1dc)),_0x165866['info'](_0x43e5c7(0x1e3)+_0x50439a),_0x28de39;}else throw new Error(_0x52d59a[_0x43e5c7(0x1d6)]+_0x43e5c7(0x1d2)+_0x52d59a[_0x43e5c7(0x1d4)]);}catch(_0x4dee66){_0x165866['error']('Error\x20:\x20'+_0x4dee66[_0x43e5c7(0x1ed)]);if(_0x4dee66[_0x43e5c7(0x1d6)]==0x1f7||_0x4dee66[_0x43e5c7(0x1d6)]==0x194)console[_0x43e5c7(0x1ea)](_0x43e5c7(0x1c5)),process[_0x43e5c7(0x1ee)]();else throw _0x4dee66;}}}