function _0x2dce(){const _0x6d2dc9=['log','thumbnailUrl','src','URL\x20INVALID','mp4','jsdom','test','20589iyZNRa','POST','application/x-www-form-urlencoded;\x20charset=UTF-8','then','639VhVmel','exec','result','searchMusics','326FrKLVF','push','catch','exports','w600-h600','body','label','length','json','7096fBHdMq','yt-search','document','youtubeId','title','*/*','img','ytv','8178810AzCPzJ','node-youtube-music','map','totalSeconds','DD/MM\x20HH:mm:ss','\x1b[1;34m~\x1b[1;37m>>','295580XIFeVS','moment-timezone','https://youtu.be/','join','name','searchResult','querySelectorAll','duration','206782vKeoLp','Scraping...','3943388wpyVyA','innerHTML','keys','https://www.y2mate.com/mates/en60/analyze/ajax','querySelector','https://www.y2mate.com/mates/en60/convert','artists','2968asIcvF','youtube','ytdl-core','../function','3226605CXUpvi','window','w120-h120'];_0x2dce=function(){return _0x6d2dc9;};return _0x2dce();}const _0x1c93db=_0x2506;(function(_0x2d278c,_0x28d0b1){const _0x234d84=_0x2506,_0x1908c8=_0x2d278c();while(!![]){try{const _0x8b755a=-parseInt(_0x234d84(0x17b))/0x1+parseInt(_0x234d84(0x19a))/0x2*(parseInt(_0x234d84(0x192))/0x3)+parseInt(_0x234d84(0x17d))/0x4+-parseInt(_0x234d84(0x188))/0x5+parseInt(_0x234d84(0x1ab))/0x6+-parseInt(_0x234d84(0x184))/0x7*(-parseInt(_0x234d84(0x1a3))/0x8)+parseInt(_0x234d84(0x196))/0x9*(-parseInt(_0x234d84(0x173))/0xa);if(_0x8b755a===_0x28d0b1)break;else _0x1908c8['push'](_0x1908c8['shift']());}catch(_0x1433b0){_0x1908c8['push'](_0x1908c8['shift']());}}}(_0x2dce,0xda05a));const fetch=require('node-fetch'),{JSDOM}=require(_0x1c93db(0x190)),fs=require('fs'),ytdl=require(_0x1c93db(0x186)),yts=require(_0x1c93db(0x1a4)),ytM=require(_0x1c93db(0x16e)),moment=require(_0x1c93db(0x174)),time=moment()['format'](_0x1c93db(0x171)),{color,bgcolor}=require(_0x1c93db(0x187)),ytIdRegex=/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;function _0x2506(_0x478885,_0x232271){const _0x2dce0e=_0x2dce();return _0x2506=function(_0x250666,_0x34a32d){_0x250666=_0x250666-0x16e;let _0x4be6e0=_0x2dce0e[_0x250666];return _0x4be6e0;},_0x2506(_0x478885,_0x232271);}function INFOLOG(_0x1524e6){const _0x356cc1=_0x1c93db;return console[_0x356cc1(0x18b)](_0x356cc1(0x172),'[\x1b[1;33mINF\x1b[1;37m]',time,color(_0x1524e6));}function post(_0x51eaf0,_0x79db41){const _0x1f0599=_0x1c93db;return INFOLOG(Object['keys'](_0x79db41)['map'](_0x2a00a1=>_0x2a00a1+'='+encodeURIComponent(_0x79db41[_0x2a00a1]))[_0x1f0599(0x176)]('&')),fetch(_0x51eaf0,{'method':_0x1f0599(0x193),'headers':{'accept':_0x1f0599(0x1a8),'accept-language':'en-US,en;q=0.9','content-type':_0x1f0599(0x194)},'body':Object[_0x1f0599(0x17f)](_0x79db41)[_0x1f0599(0x16f)](_0x191772=>_0x191772+'='+encodeURIComponent(_0x79db41[_0x191772]))['join']('&')});}function ytv(_0x86d171){return new Promise((_0x26ef03,_0x29791f)=>{const _0x1f60b3=_0x2506;if(ytIdRegex[_0x1f60b3(0x191)](_0x86d171)){let _0x125353=ytIdRegex[_0x1f60b3(0x197)](_0x86d171);_0x86d171=_0x1f60b3(0x175)+_0x125353[0x1],post('https://www.y2mate.com/mates/en60/analyze/ajax',{'url':_0x86d171,'q_auto':0x0,'ajax':0x1})[_0x1f60b3(0x195)](_0x8da403=>_0x8da403[_0x1f60b3(0x1a2)]())[_0x1f60b3(0x195)](_0x4efb76=>{const _0x290f84=_0x1f60b3;INFOLOG(_0x290f84(0x17c)),document=new JSDOM(_0x4efb76[_0x290f84(0x198)])['window'][_0x290f84(0x1a5)],yaha=document[_0x290f84(0x179)]('td'),filesize=yaha[yaha['length']-0x17][_0x290f84(0x17e)],id=/var k__id = "(.*?)"/[_0x290f84(0x197)](document[_0x290f84(0x19f)]['innerHTML'])||['',''],thumb=document[_0x290f84(0x181)](_0x290f84(0x1a9))[_0x290f84(0x18d)],title=document[_0x290f84(0x181)]('b')[_0x290f84(0x17e)],post(_0x290f84(0x182),{'type':_0x290f84(0x185),'_id':id[0x1],'v_id':_0x125353[0x1],'ajax':'1','token':'','ftype':_0x290f84(0x18f),'fquality':0x168})[_0x290f84(0x195)](_0x49a531=>_0x49a531[_0x290f84(0x1a2)]())[_0x290f84(0x195)](_0x3772d7=>{const _0x14215d=_0x290f84;let _0x6e326f=parseFloat(filesize)*(0x3e8*/MB$/['test'](filesize));_0x26ef03({'dl_link':/<a.+?href="(.+?)"/[_0x14215d(0x197)](_0x3772d7[_0x14215d(0x198)])[0x1],'thumb':thumb,'title':title,'filesizeF':filesize,'filesize':_0x6e326f});})[_0x290f84(0x19c)](_0x29791f);})[_0x1f60b3(0x19c)](_0x29791f);}else _0x29791f(_0x1f60b3(0x18e));});}function yta(_0x16cc1e){return new Promise((_0x197ee1,_0x264875)=>{const _0x54211e=_0x2506;if(ytIdRegex[_0x54211e(0x191)](_0x16cc1e)){let _0x11937f=ytIdRegex[_0x54211e(0x197)](_0x16cc1e);_0x16cc1e=_0x54211e(0x175)+_0x11937f[0x1],post(_0x54211e(0x180),{'url':_0x16cc1e,'q_auto':0x0,'ajax':0x1})[_0x54211e(0x195)](_0x42657e=>_0x42657e[_0x54211e(0x1a2)]())[_0x54211e(0x195)](_0x1582d1=>{const _0x2dae32=_0x54211e;let _0x427b66=new JSDOM(_0x1582d1[_0x2dae32(0x198)])[_0x2dae32(0x189)][_0x2dae32(0x1a5)],_0x593b49=_0x427b66[_0x2dae32(0x179)]('td'),_0x504cf2=_0x593b49[_0x593b49[_0x2dae32(0x1a1)]-0xa][_0x2dae32(0x17e)],_0xbd7ad6=/var k__id = "(.*?)"/[_0x2dae32(0x197)](_0x427b66[_0x2dae32(0x19f)][_0x2dae32(0x17e)])||['',''],_0x23c50c=_0x427b66['querySelector'](_0x2dae32(0x1a9))['src'],_0x417ae9=_0x427b66['querySelector']('b')['innerHTML'];post('https://www.y2mate.com/mates/en60/convert',{'type':_0x2dae32(0x185),'_id':_0xbd7ad6[0x1],'v_id':_0x11937f[0x1],'ajax':'1','token':'','ftype':'mp3','fquality':0x80})['then'](_0x28e51e=>_0x28e51e['json']())[_0x2dae32(0x195)](_0x5c484d=>{const _0x54b17c=_0x2dae32;let _0xa543fb=parseFloat(_0x504cf2)*(0x3e8*/MB$/[_0x54b17c(0x191)](_0x504cf2));_0x197ee1({'dl_link':/<a.+?href="(.+?)"/[_0x54b17c(0x197)](_0x5c484d[_0x54b17c(0x198)])[0x1],'thumb':_0x23c50c,'title':_0x417ae9,'filesizeF':_0x504cf2,'filesize':_0xa543fb});})['catch'](_0x264875);})[_0x54211e(0x19c)](_0x264875);}else _0x264875(_0x54211e(0x18e));});}function searchResult(_0x3127e){return new Promise(async(_0xbae122,_0xabc7fb)=>{const _0x407cdf=_0x2506;try{let _0x1619a1=await ytM[_0x407cdf(0x199)](_0x3127e||this['query']),_0x2151dc=[];for(let _0x358fd1=0x0;_0x358fd1<_0x1619a1[_0x407cdf(0x1a1)];_0x358fd1++){_0x2151dc[_0x407cdf(0x19b)]({'isYtMusic':!![],'title':_0x1619a1[_0x358fd1][_0x407cdf(0x1a7)]+'\x20-\x20'+_0x1619a1[_0x358fd1][_0x407cdf(0x183)][_0x407cdf(0x16f)](_0x1a6589=>_0x1a6589[_0x407cdf(0x177)])[_0x407cdf(0x176)]('\x20'),'artist':_0x1619a1[_0x358fd1][_0x407cdf(0x183)][_0x407cdf(0x16f)](_0x40f3b1=>_0x40f3b1[_0x407cdf(0x177)])[_0x407cdf(0x176)]('\x20'),'id':_0x1619a1[_0x358fd1][_0x407cdf(0x1a6)],'url':_0x407cdf(0x175)+_0x1619a1[_0x358fd1][_0x407cdf(0x1a6)],'album':_0x1619a1[_0x358fd1]['album'],'duration':{'seconds':_0x1619a1[_0x358fd1][_0x407cdf(0x17a)][_0x407cdf(0x170)],'label':_0x1619a1[_0x358fd1]['duration'][_0x407cdf(0x1a0)]},'image':_0x1619a1[_0x358fd1][_0x407cdf(0x18c)]['replace'](_0x407cdf(0x18a),_0x407cdf(0x19e))});}_0xbae122(_0x2151dc);}catch(_0x1cc433){_0xabc7fb(_0x1cc433);}});}module[_0x1c93db(0x19d)]['yta']=yta,module['exports'][_0x1c93db(0x1aa)]=ytv,module[_0x1c93db(0x19d)][_0x1c93db(0x178)]=searchResult;