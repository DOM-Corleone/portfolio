(function(g){var window=this;'use strict';var Lrb=function(a,b){a.jb("onAutonavCoundownStarted",b)},l6=function(a,b,c){g.pv(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Yg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.XS&&(b.lengthText?(e=b.lengthText||null,f=b.jw||null):b.lengthSeconds&&(e=g.lH(b.lengthSeconds),f=g.lH(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.CRa(d).type;var l=b instanceof g.XS?b.isLivePlayback:null,m=b instanceof g.XS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.sK("Se $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Nk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Xr};b instanceof g.WS&&(c.playlist_length=b.playlistLength);a.update(c)},m6=function(a){var b=a.U(),c=b.D;
g.V.call(this,{I:"a",S:"ytp-autonav-suggestion-card",Y:{href:"{{url}}",target:c?b.W:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",La:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],Y:{style:"{{background}}"},V:[{I:"div",Y:{"aria-label":"{{timestamp}}"},La:["ytp-autonav-timestamp"],ya:"{{duration}}"},{I:"div",La:["ytp-autonav-live-stamp"],ya:"Direkte"},
{I:"div",La:["ytp-autonav-upcoming-stamp"],ya:"Kommer"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",ya:"Samleliste"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",La:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ya:"{{title}}"},{I:"div",La:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ya:"{{author}}"},{I:"div",La:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ya:"{{views_and_publish_time}}"}]});this.J=
a;this.suggestion=null;this.j=c;this.Ta("click",this.onClick);this.Ta("keypress",this.onKeyPress)},n6=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.N=b;this.G=this.K=void 0;this.C=0;this.container=new g.V({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.N(this,this.container);this.container.Ja(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.V({I:"div",S:"ytp-autonav-endscreen-upnext-container",Y:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",ya:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",Y:{href:"{{url}}",target:d?b.W:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",Y:{style:"{{background}}"},V:[{I:"div",Y:{"aria-label":"{{timestamp}}"},La:["ytp-autonav-timestamp"],
ya:"{{duration}}"},{I:"div",La:["ytp-autonav-live-stamp"],ya:"Direkte"},{I:"div",La:["ytp-autonav-upcoming-stamp"],ya:"Kommer"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",ya:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",ya:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",ya:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",ya:"{{author_and_views}}"}]}]}]});
g.N(this,this.j);this.j.Ja(this.container.element);d||this.T(this.j.Ha("ytp-autonav-endscreen-link-container"),"click",this.OS);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Ha("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({I:"div",S:"ytp-autonav-overlay"});g.N(this,this.overlay);this.overlay.Ja(this.container.element);this.B=new g.V({I:"div",S:"ytp-autonav-endscreen-button-container"});g.N(this,this.B);this.B.Ja(this.container.element);
this.cancelButton=new g.V({I:"button",La:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],Y:{"aria-label":"Avbryt autoavspillingen"},ya:"Avbryt"});g.N(this,this.cancelButton);this.cancelButton.Ja(this.B.element);this.cancelButton.Ta("click",this.V1,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.V({I:"a",La:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],Y:{href:"{{url}}",role:"button","aria-label":"Spill av den neste videoen"},ya:"Spill av n\u00e5"});g.N(this,this.playButton);this.playButton.Ja(this.B.element);this.playButton.Ta("click",this.OS,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&Mrb(this,b)):this.J.createClientVe(this.playButton.element,this,115130);this.D=
new g.Xu(function(){Nrb(c)},500);
g.N(this,this.D);this.NS();this.T(a,"autonavvisibility",this.NS);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.U1),this.T(a,"onAutonavCoundownStarted",this.q9))},o6=function(a){var b=a.J.xn(!0,a.J.isFullscreen());
g.pv(a.container.element,"ytp-autonav-endscreen-small-mode",a.Dg(b));g.pv(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.CK);g.pv(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.wf());g.pv(a.J.getRootNode(),"countdown-running",a.Rk());g.pv(a.container.element,"ytp-player-content",a.J.wf());g.rs(a.overlay.element,{width:b.width+"px"});if(!a.Rk()){a.J.wf()?Orb(a,Math.round(Prb(a)/1E3)):Orb(a);b=!!a.suggestion&&!!a.suggestion.Xr;var c=a.J.wf()||!b;
g.pv(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.pv(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.sG(a.B,a.J.wf());g.pv(a.element,"ytp-enable-w2w-color-transitions",Qrb(a))}},Nrb=function(a){var b=Prb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);Orb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Rk()?a.select(!0):a.Rk()&&a.D.start()},Prb=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.DB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Hs()?a.J.Hs():g.FJ(a.J.U().experiments,"autoplay_time")||1E4},Mrb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.Z5;a.K=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},Qrb=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},Orb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ha("ytp-autonav-endscreen-upnext-header");g.xf(a);if(0<=b){b=String(b);var c="Spilles av om $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Spilles av om $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.vf("Spilles av om $SECONDS".slice(0,d)));var e=g.uf("span");g.jv(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Ff(e,b);a.appendChild(e);a.appendChild(g.vf("Spilles av om $SECONDS".slice(d+c.length)));return}}g.Ff(a,"Neste")},p6=function(a,b){g.V.call(this,{I:"div",
La:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},q6=function(a){g.V.call(this,{I:"div",
La:["ytp-upnext","ytp-player-content"],Y:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",Y:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",ya:"Neste"},{I:"span",S:"ytp-upnext-title",ya:"{{title}}"},{I:"span",S:"ytp-upnext-author",ya:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",Y:{role:"button",href:"{{url}}","aria-label":"Spill av den neste videoen"},V:[{I:"svg",Y:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",Y:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",Y:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",Y:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
ya:"Autoavspilling er satt p\u00e5 pause"}]}]});this.api=a;this.cancelButton=null;this.G=this.Ha("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.Xu(this.aH,5E3,this);this.B=0;var b=this.Ha("ytp-upnext-cancel");this.cancelButton=new g.V({I:"button",La:["ytp-upnext-cancel-button","ytp-button"],Y:{tabindex:"0","aria-label":"Avbryt autoavspillingen"},ya:"Avbryt"});g.N(this,this.cancelButton);this.cancelButton.Ta("click",this.W1,this);this.cancelButton.Ja(b);
this.cancelButton&&this.api.createClientVe(this.cancelButton.element,this,115129);g.N(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Ha("ytp-upnext-autoplay-icon");this.T(b,"click",this.X1);this.api.createClientVe(b,this,115130);this.PS();this.T(a,"autonavvisibility",this.PS);this.T(a,"mdxnowautoplaying",this.b$);this.T(a,"mdxautoplaycanceled",this.c$);g.pv(this.element,"ytp-upnext-mobile",this.api.U().B)},Rrb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.DB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Hs()?a.api.Hs():g.FJ(a.api.U().experiments,"autoplay_time")||1E4},Srb=function(a,b){b=Rrb(a,b);
var c=Math,d=c.min;var e=(0,g.JD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Rk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Rk()&&a.j.start()},r6=function(a){p6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",La:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ya:"Flere videoer"}]});this.N=new g.V({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new n6(this.player);g.N(this,this.B);this.B.Ja(this.element);a.getVideoData().Qf?this.j=this.B:(this.j=new q6(a),g.EU(this.player,this.j.element,4),g.N(this,this.j));this.overlay=new g.V({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.N(this,this.overlay);this.overlay.Ja(this.element);this.D=new g.ZK(this);g.N(this,this.D);g.N(this,this.table);this.table.Ja(this.element);this.table.show();g.N(this,this.N);this.N.Ja(this.table.element);this.hide()},s6=function(a){var b=a.wf();
b!==a.G&&(a.G=b,a.player.qa("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},t6=function(a,b){g.V.call(this,{I:"button",
La:["ytp-watch-on-youtube-button","ytp-button"],ya:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.x_();2===this.buttonType&&g.lv(this.element,"ytp-continue-watching-button");this.Ta("click",this.onClick);this.Ta("videodatachange",this.x_);g.sG(this,!0)},u6=function(a,b){p6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.We=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new t6(a,2);g.N(this,this.watchButton);this.watchButton.Ja(this.element);this.hide()},Trb=function(a){p6.call(this,a,"subscribecard-endscreen");
this.j=new g.V({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",Y:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",ya:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.N(this,this.j);this.j.Ja(this.element);var b=a.getVideoData();this.subscribeButton=new g.AW("Abonner",null,"Avslutt abonnementet",null,!0,!1,b.Bl,b.subscribed,"trailer-endscreen",null,a,!1);g.N(this,this.subscribeButton);this.subscribeButton.Ja(this.j.Ha("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Ra);this.Ra();this.hide()},v6=function(a){var b=a.U(),c=g.XK||g.iS?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.V.call(this,{I:"a",La:e,Y:{href:"{{url}}",target:d?b.W:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",Y:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",Y:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",Y:c,V:[{I:"span",S:"ytp-videowall-still-info-title",ya:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",ya:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",ya:"Direkte"},{I:"span",S:"ytp-videowall-still-info-duration",ya:"{{duration}}"}]}]}]},{I:"span",La:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],Y:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Spilleliste",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",ya:"{{playlist_length}}"},")"]}]},{I:"span",La:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],Y:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Samleliste",{I:"span",S:"ytp-videowall-still-listlabel-length",ya:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.ZK(this);g.N(this,this.j);this.Ta("click",this.onClick);this.Ta("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},w6=function(a){p6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.W=null;this.B=new g.ZK(this);g.N(this,this.B);this.K=new g.Xu(function(){g.lv(b.element,"ytp-show-tiles")},0);
g.N(this,this.K);var c=new g.V({I:"button",La:["ytp-button","ytp-endscreen-previous"],Y:{"aria-label":"Forrige"},V:[g.yG()]});g.N(this,c);c.Ja(this.element);c.Ta("click",this.d2,this);this.table=new g.pG({I:"div",S:"ytp-endscreen-content"});g.N(this,this.table);this.table.Ja(this.element);c=new g.V({I:"button",La:["ytp-button","ytp-endscreen-next"],Y:{"aria-label":"Neste"},V:[g.zG()]});g.N(this,c);c.Ja(this.element);c.Ta("click",this.b2,this);a.getVideoData().Qf?this.j=new n6(a,!0):this.j=new q6(a);
g.N(this,this.j);g.EU(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},x6=function(a){return g.FU(a.player)&&a.AC()&&!a.D},y6=function(a){var b=a.wf();
b!==a.N&&(a.N=b,a.player.qa("autonavvisibility"))},z6=function(a){p6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new t6(a,1);g.N(this,this.watchButton);this.watchButton.Ja(this.element);g.bgb(a)&&(this.j=new g.A2(a),g.N(this,this.j),this.B=new g.V({I:"div",La:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],Y:{tabIndex:"-1"},V:[this.j]}),g.N(this,this.B),this.j.Ja(this.B.element),this.B.Ja(this.element));a.createClientVe(this.element,this,156914);this.hide()},Xrb=function(a){g.TV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.ZK(this);g.N(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.JC(g.rS(c))&&d&&!g.BU(a)?(this.B=!0,this.endScreen=new u6(a,g.sU(a))):a.Xc()?this.endScreen=new z6(a):Urb(a)?(this.D=!0,Vrb(this),this.j?this.endScreen=new r6(a):this.endScreen=new w6(a)):c.Mg?this.endScreen=new Trb(a):this.endScreen=new p6(a);g.N(this,this.endScreen);g.EU(a,this.endScreen.element,4);Wrb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.mK("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.nK("endscreen"),function(e){b.onCueRangeExit(e)})},Vrb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Dl&&a.C===b.Qf)return!1;a.j=b.Dl;a.C=b.Qf;return!0},Urb=function(a){a=a.U();
return a.ke&&!a.Mg},Wrb=function(a){a.player.Af("endscreen");
var b=a.player.getVideoData();b=new g.lK(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.lK(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.tf([b,c])};
g.xU.prototype.Hs=g.ea(16,function(){return this.app.Hs()});
g.f1.prototype.Hs=g.ea(15,function(){return this.getVideoData().AU});
g.tU.prototype.zr=g.ea(14,function(a){this.wi().zr(a)});
g.ZW.prototype.zr=g.ea(13,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.fY.prototype.zr=g.ea(12,function(a){this.overflowButton&&this.overflowButton.zr(a)});
g.tU.prototype.Ar=g.ea(11,function(a){this.wi().Ar(a)});
g.dX.prototype.Ar=g.ea(10,function(a){this.j!==a&&(this.j=a,this.Ra())});
g.fY.prototype.Ar=g.ea(9,function(a){this.shareButton&&this.shareButton.Ar(a)});
g.tU.prototype.cB=g.ea(8,function(a){this.wi().cB(a)});
g.tW.prototype.cB=g.ea(7,function(a){this.yQ!==a&&(this.yQ=a,this.Zp())});
g.tU.prototype.bB=g.ea(6,function(a){this.wi().bB(a)});
g.fY.prototype.bB=g.ea(5,function(a){this.xQ!==a&&(this.xQ=a,this.Yp())});g.w(m6,g.V);m6.prototype.select=function(){this.J.Eo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.VC||void 0)&&this.J.logClick(this.element)};
m6.prototype.onClick=function(a){g.aV(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
m6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.w(n6,g.V);g.k=n6.prototype;g.k.nG=function(a){this.suggestion!==a&&(this.suggestion=a,l6(this.j,a),this.playButton.updateValue("url",this.suggestion.Nk()),o6(this))};
g.k.Rk=function(){return 0<this.C};
g.k.kB=function(){this.Rk()||(this.C=Date.now(),Nrb(this),Lrb(this.J,Prb(this)),g.pv(this.J.getRootNode(),"countdown-running",this.Rk()))};
g.k.Nw=function(){this.Up();Nrb(this);var a=this.j.Ha("ytp-autonav-endscreen-upnext-header");a&&g.Ff(a,"Neste")};
g.k.Up=function(){this.Rk()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Up()};
g.k.OS=function(a){g.aV(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Ha("ytp-autonav-endscreen-link-container")&&(a=this.j.Ha("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.K?(this.J.jb("innertubeCommand",this.K),this.Up()):this.select())};
g.k.V1=function(){this.J.logClick(this.cancelButton.element);g.zU(this.J,!0);this.G&&this.J.jb("innertubeCommand",this.G)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&Mrb(this,b);var c;this.G=null==(c=b.R5)?void 0:c.command};
g.k.q9=function(a){if(Qrb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.tH(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.tH(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.tH(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.tH(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.tH(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.tH(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.pv(this.element,"ytp-w2w-animate",!0)}};
g.k.U1=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.pv(this.element,"ytp-w2w-animate",!1)};
g.k.NS=function(){var a=this.J.wf();this.N&&this.Ib!==a&&g.sG(this,a);o6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Ha("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Dg=function(a){return 400>a.width||459>a.height};g.w(p6,g.V);g.k=p6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.AC=function(){return!1};
g.k.wf=function(){return!1};
g.k.JX=function(){return!1};g.w(q6,g.V);g.k=q6.prototype;g.k.aH=function(){this.notification&&(this.D.stop(),this.Pc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.nG=function(a){this.suggestion=a;l6(this,a,"hqdefault.jpg")};
g.k.PS=function(){g.sG(this,this.api.wf());this.api.logVisibility(this.element,this.api.wf());this.api.logVisibility(this.Ha("ytp-upnext-autoplay-icon"),this.api.wf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.wf())};
g.k.k$=function(){window.focus();this.aH()};
g.k.kB=function(a){var b=this;this.Rk()||(g.SE("a11y-announce","Neste "+this.suggestion.title),this.B=(0,g.JD)(),this.j=new g.Xu(function(){Srb(b,a)},25),Srb(this,a),Lrb(this.api,Rrb(this,a)));
g.nv(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Rk=function(){return!!this.j};
g.k.Nw=function(){this.Up();this.B=(0,g.JD)();Srb(this);g.lv(this.element,"ytp-upnext-autoplay-paused")};
g.k.Up=function(){this.Rk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.aH(),this.notification=new Notification("Neste",{body:this.suggestion.title,icon:this.suggestion.Yg()}),this.C=this.T(this.notification,"click",this.k$),this.D.start())}this.Up();this.api.nextVideo(!1,a)};
g.k.X1=function(a){!g.Bf(this.cancelButton.element,a.target)&&g.aV(a,this.api)&&(this.api.wf()&&this.api.logClick(this.Ha("ytp-upnext-autoplay-icon")),this.select())};
g.k.W1=function(){this.api.wf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.zU(this.api,!0)};
g.k.b$=function(a){this.api.getPresentingPlayerType();this.show();this.kB(a)};
g.k.c$=function(){this.api.getPresentingPlayerType();this.Up();this.hide()};
g.k.xa=function(){this.Up();this.aH();g.V.prototype.xa.call(this)};g.w(r6,p6);g.k=r6.prototype;g.k.create=function(){p6.prototype.create.call(this);this.D.T(this.player,"appresize",this.LB);this.D.T(this.player,"onVideoAreaChange",this.LB);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.QS);this.D.T(this.player,"onAutonavCancelled",this.Y1);this.onVideoDataChange()};
g.k.show=function(){p6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.zU(this.player,!1);g.FU(this.player)&&this.AC()&&!this.C?(s6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.kB():3===this.videoData.autonavState&&this.j.Nw()):(g.zU(this.player,!0),s6(this));this.LB()};
g.k.hide=function(){p6.prototype.hide.call(this);this.j.Nw();s6(this)};
g.k.LB=function(){var a=this.player.xn(!0,this.player.isFullscreen());s6(this);o6(this.B);g.pv(this.element,"ytp-autonav-cancelled-small-mode",this.Dg(a));g.pv(this.element,"ytp-autonav-cancelled-tiny-mode",this.CI(a));g.pv(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.rs(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.pv(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.xT(this.videoData);b&&(this.j.nG(b),this.j!==this.B&&this.B.nG(b))}if(a&&a.length)for(b=0;b<Yrb.length;++b){var c=Yrb[b];if(a&&a[c]){this.videos[b]=new m6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,l6(d,c));g.N(this,this.videos[b]);this.videos[b].Ja(this.N.element)}}this.LB()}};
g.k.QS=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Up(),this.Ib&&this.LB()):(this.K=!0,this.wf()&&(2===a?this.j.kB():3===a&&this.j.Nw()))};
g.k.Y1=function(a){a?this.QS(1):(this.C=null,this.K=!1)};
g.k.AC=function(){return 1!==this.videoData.autonavState};
g.k.Dg=function(a){return(910>a.width||459>a.height)&&!this.CI(a)&&!(400>=a.width||360>=a.height)};
g.k.CI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.wf=function(){return this.Ib&&g.FU(this.player)&&this.AC()&&!this.C};
var Yrb=[1,3,2,4];g.w(t6,g.V);g.k=t6.prototype;g.k.x_=function(){switch(this.buttonType){case 1:var a="Se om igjen p\u00e5 YouTube";var b=156915;break;case 2:a="Se videre p\u00e5 YouTube";b=156942;break;default:a="Se videre p\u00e5 YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.bV(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.jS(b)){var c={};g.jS(b)&&g.mU(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.GP(c,b);a=g.Ym(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Ib&&this.Z)};
g.k.show=function(){g.V.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.V.prototype.hide.call(this);this.logVisibility()};
g.k.Jc=function(a){g.V.prototype.Jc.call(this,a);this.logVisibility()};g.w(u6,p6);u6.prototype.show=function(){3!==this.player.getPlayerState()&&(p6.prototype.show.call(this),this.We.bB(!0),this.We.Ar(!0),this.J.U().Ce||this.We.zr(!0),this.J.logVisibility(this.element,!0),this.watchButton.Jc(!0))};
u6.prototype.hide=function(){p6.prototype.hide.call(this);this.We.bB(!1);this.We.Ar(!1);this.We.zr(!1);this.J.logVisibility(this.element,!1);this.watchButton.Jc(!1)};g.w(Trb,p6);Trb.prototype.Ra=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Bl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.w(v6,g.V);v6.prototype.select=function(){this.api.Eo(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.VC||void 0)&&this.api.logClick(this.element)};
v6.prototype.onClick=function(a){if(g.jS(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Nk(),c={};g.ZTa(this.api,c,"emb_rel_end");b=g.Ym(b,c);g.bV(b,this.api,a)}else g.aV(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
v6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
v6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Jf?!1:b.D};g.w(w6,p6);g.k=w6.prototype;g.k.create=function(){p6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.cq();this.B.T(this.player,"appresize",this.cq);this.B.T(this.player,"onVideoAreaChange",this.cq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.vL);this.B.T(this.player,"onAutonavCancelled",this.Z1);a=this.videoData.autonavState;a!==this.W&&this.vL(a);this.B.T(this.element,"transitionend",this.Caa)};
g.k.destroy=function(){g.YC(this.B);g.wb(this.stills);this.stills=[];p6.prototype.destroy.call(this);g.nv(this.element,"ytp-show-tiles");this.K.stop();this.W=this.videoData.autonavState};
g.k.AC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Ib;p6.prototype.show.call(this);g.nv(this.element,"ytp-show-tiles");this.player.U().B?g.fv(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.zU(this.player,!1);x6(this)?(y6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.kB():3===this.videoData.autonavState&&this.j.Nw()):(g.zU(this.player,!0),y6(this));a!==this.Ib&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Ib;p6.prototype.hide.call(this);this.j.Nw();y6(this);a!==this.Ib&&this.player.logVisibility(this.element,!1)};
g.k.Caa=function(a){a.target===this.element&&this.cq()};
g.k.cq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.xT(d)];if(e.length){g.lv(this.element,"ytp-endscreen-paginate");var f=this.J.xn(!0,this.J.isFullscreen());if(a=g.sU(this.J))a=a.qh()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,v=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&v)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(v)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.Cs(f,n,p);g.rs(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.nG(g.xT(this.videoData));this.j instanceof
n6&&o6(this.j);g.pv(this.element,"ytp-endscreen-takeover",x6(this));y6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.ye(q+this.C,c),0!==t){r=this.stills[h];r||(r=new v6(this.player),this.stills[h]=r,f.appendChild(r.element));v=Math.floor(p*m/b);var x=Math.floor(n*l/a),B=Math.floor(p*(m+t)/b)-v-4,E=Math.floor(n*(l+t)/a)-x-4;g.ys(r.element,x,v);g.Cs(r.element,E,B);g.rs(r.element,"transitionDelay",
(m+l)/20+"s");g.pv(r.element,"ytp-videowall-still-mini",1===t);g.pv(r.element,"ytp-videowall-still-large",2<t);t=Math.max(E,B);g.pv(r.element,"ytp-videowall-still-round-large",256<=t);g.pv(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.pv(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),v=g.kv(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",l6(r,q,v),g.jS(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Nk(),v={},g.mU(r.api,"addEmbedsConversionTrackingParams",[v]),t=g.Ym(t,g.GP(v,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.pv(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.zf(a.element),g.vb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.videoData=a,this.cq())};
g.k.b2=function(){this.C+=this.stills.length;this.cq()};
g.k.d2=function(){this.C-=this.stills.length;this.cq()};
g.k.JX=function(){return this.j.Rk()};
g.k.vL=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.Up(),this.Ib&&this.cq()):(this.G=!0,this.Ib&&x6(this)&&(2===a?this.j.kB():3===a&&this.j.Nw()))};
g.k.Z1=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.vL(1)}else this.D=null,this.G=!1;this.cq()};
g.k.wf=function(){return this.Ib&&x6(this)};g.w(z6,p6);z6.prototype.LD=function(){var a;return null==(a=this.j)?void 0:a.LD()};
z6.prototype.show=function(){if(3!==this.player.getPlayerState()){p6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.LD();g.pv(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.sU(this.player))||c.cB(!0);this.player.logVisibility(this.element,!0);this.watchButton.Jc(!0)}};
z6.prototype.hide=function(){p6.prototype.hide.call(this);var a;null==(a=g.sU(this.player))||a.cB(!1);this.player.logVisibility(this.element,!1);this.watchButton.Jc(!1)};g.w(Xrb,g.TV);g.k=Xrb.prototype;g.k.Xt=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((this.player.Xc()||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.xT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!Urb(this.player)||d;a=a.jk;c=this.player.jD();return d&&!a&&!c&&!b};
g.k.wf=function(){return this.endScreen.wf()};
g.k.Z7=function(){return this.wf()?this.endScreen.JX():!1};
g.k.xa=function(){this.player.Af("endscreen");g.TV.prototype.xa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.Bb().Ke.get("heartbeat"),d=g.xT(a);!d||b.videoId!==d.videoId||a.AS?(this.player.Eo(b.videoId,void 0,void 0,!0,!0,b),c&&c.OI("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.TV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.TV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Xt()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Wrb(this);this.D&&Vrb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new r6(this.player):this.endScreen=new w6(this.player),g.N(this,this.endScreen),g.EU(this.player,this.endScreen.element,4))};g.SV("endscreen",Xrb);})(_yt_player);
