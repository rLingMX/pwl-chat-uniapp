
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/chat/chat","pages/chat/redpacket","pages/chat/userInfo","pages/chat/setting","uni_modules/uni-upgrade-center-app/pages/upgrade-popup","pages/tabbar/chatList/chatList","pages/xiaoice/xiaoice","pages/tabbar/user/user","pages/tabbar/bbs/bbs","pages/tabbar/find/find"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"摸鱼派","navigationBarBackgroundColor":"#3b3e43","backgroundColor":"#3b3e43","onReachBottomDistance":200},"tabBar":{"list":[{"pagePath":"pages/tabbar/chatList/chatList","text":"聊天"},{"pagePath":"pages/tabbar/bbs/bbs","text":"社区"},{"pagePath":"pages/tabbar/find/find","text":"发现"},{"pagePath":"pages/tabbar/user/user","text":"我"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"摸鱼派","compilerVersion":"3.3.13","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"摸鱼派"}},{"path":"/pages/chat/chat","meta":{},"window":{"navigationBarTitleText":"摸鱼派-聊天室","enablePullDownRefresh":true,"titleNView":{"buttons":[{"type":"menu","float":"right"}]}}},{"path":"/pages/chat/redpacket","meta":{},"window":{"navigationBarTitleText":"发红包"}},{"path":"/pages/chat/userInfo","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/chat/setting","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/uni_modules/uni-upgrade-center-app/pages/upgrade-popup","meta":{},"window":{"disableScroll":true,"backgroundColorTop":"transparent","background":"transparent","titleNView":false,"scrollIndicator":false,"popGesture":"none","animationType":"fade-in","animationDuration":200}},{"path":"/pages/tabbar/chatList/chatList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"摸鱼派","enablePullDownRefresh":false}},{"path":"/pages/xiaoice/xiaoice","meta":{},"window":{"navigationBarTitleText":"小冰","enablePullDownRefresh":false}},{"path":"/pages/tabbar/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人信息","enablePullDownRefresh":false}},{"path":"/pages/tabbar/bbs/bbs","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/tabbar/find/find","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
