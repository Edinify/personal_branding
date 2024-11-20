;/*FB_PKG_DELIM*/

__d("IGDSTabGroupContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);c=b;g["default"]=c}),98);
__d("useBoolean",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useState;function a(a){a=j(a);var b=a[0],c=a[1];return{value:b,set:c,toggle:i(function(){return c(function(a){return!a})},[]),setTrue:i(function(){return c(!0)},[]),setFalse:i(function(){return c(!1)},[])}}g["default"]=a}),98);
__d("IGDSTabBase.react",["BaseButton.react","IGDSTabGroupContext","IGDSText.react","PolarisFastLink.react","nullthrows","react","stylex","useBoolean"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useContext,l=b.c,m={bottomBorder:{borderBottomColor:"x1bs97v6",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},bottomBorderSelected:{borderBottomColor:"x1rx6pd",borderBottomStyle:"x1q0q8m5",borderBottomWidth:"xso031l",$$css:!0},iconContainer:{fontSize:"xgxxoiu",height:"xxk0z11",$$css:!0},iconContainerWithMarginEnd:{marginEnd:"x1emribx",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",flexGrow:"x1iyjqo2",height:"xn3w4p2",justifyContent:"xl56j7k",lineHeight:"x17ydfre",textAlign:"x2b8uid",$$css:!0}};function a(a){var b=l(35),d=a.bottomBorder,e=a.linkXStyle,f=a.size,g=a.href,i=a.icon,n=a.label,o=a.onPress,p=a.value;a=c("useBoolean")(!1);var q=a.setFalse,r=a.setTrue;a=a.value;var s=k(c("IGDSTabGroupContext")),t,u;if(b[0]!==s||b[1]!==p||b[2]!==o||b[3]!==i||b[4]!==a||b[5]!==n){var v=c("nullthrows")(s),w=v.selectedValue,x=v.setSelectedValue;v=v.showLabels;v=v;u=p===w;w=function(){o&&o(),u||x(p)};t=i==null?null:j.jsx("span",{className:(h||(h=c("stylex")))(m.iconContainer,v&&m.iconContainerWithMarginEnd),children:j.jsx(i,{alt:n,color:a||u?"ig-primary-icon":"ig-secondary-icon",size:24})});b[0]=s;b[1]=p;b[2]=o;b[3]=i;b[4]=a;b[5]=n;b[6]=t;b[7]=v;b[8]=u;b[9]=w}else t=b[6],v=b[7],u=b[8],w=b[9];s=t;b[10]!==v||b[11]!==u||b[12]!==f||b[13]!==n?(i=v&&j.jsx("span",{"aria-hidden":!0,className:"x6s0dn4 xrvj5dj xa74l3y",children:j.jsx("span",{className:"xcrlgei x1agbcgv",children:j.jsx(c("IGDSText.react"),{color:u?"primaryText":"tertiaryText",size:f,weight:"bold",children:n})})}),b[10]=v,b[11]=u,b[12]=f,b[13]=n,b[14]=i):i=b[14];b[15]!==s||b[16]!==i?(a=j.jsxs(j.Fragment,{children:[s,i]}),b[15]=s,b[16]=i,b[17]=a):a=b[17];t=a;if(g!=null){v=d===!0&&(u?m.bottomBorderSelected:m.bottomBorder);b[18]!==e||b[19]!==v?(f=[m.root,e,v],b[18]=e,b[19]=v,b[20]=f):f=b[20];b[21]!==g||b[22]!==f||b[23]!==t?(s=j.jsx(c("PolarisFastLink.react"),{href:g,xstyle:f,children:t}),b[21]=g,b[22]=f,b[23]=t,b[24]=s):s=b[24];return s}i=d===!0&&(u?m.bottomBorderSelected:m.bottomBorder);b[25]!==e||b[26]!==i?(a=[m.root,e,i],b[25]=e,b[26]=i,b[27]=a):a=b[27];b[28]!==n||b[29]!==w||b[30]!==q||b[31]!==r||b[32]!==a||b[33]!==t?(v=j.jsx(c("BaseButton.react"),{"aria-label":n,onClick:w,onHoverEnd:q,onHoverStart:r,xstyle:a,children:t}),b[28]=n,b[29]=w,b[30]=q,b[31]=r,b[32]=a,b[33]=t,b[34]=v):v=b[34];return v}g["default"]=a}),98);
__d("IGDSHeroTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={leftAligned:{flexGrow:"x1c4vz4f",$$css:!0}};function a(a){var b=i(2),d;b[0]!==a?(d=j.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({},a,{linkXStyle:k.leftAligned,size:"label"})),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("IGDSTabGroup.react",["IGDSTabGroupContext","emptyFunction","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useMemo;var k=b.c,l={leftAligned:{alignItems:"x7a106z",display:"x78zum5",rowGap:"xp1r0qw",columnGap:"xtqikln",justifyContent:"x1nhvcw1",$$css:!0},root:{alignItems:"x6s0dn4",display:"xrvj5dj",gridTemplateColumns:"x1lp0lgv",width:"xh8yej3",$$css:!0}};function a(a){var b=k(17),d=a.children,e=a.leftAlign,f=a.onChange,g=a.showLabels;a=a.value;g=g===void 0?!0:g;var i=c("IGDSTabGroupContext");f=(f=f)!=null?f:c("emptyFunction");var m;b[0]!==a||b[1]!==f||b[2]!==g?(m={selectedValue:a,setSelectedValue:f,showLabels:g},b[0]=a,b[1]=f,b[2]=g,b[3]=m):m=b[3];a=m;f=a;b[4]!==d?(g=j.Children.toArray(d),b[4]=d,b[5]=g):g=b[5];m=g.length;b[6]!==m?(a={"--igdstabgroup-column-count":m},b[6]=m,b[7]=a):a=b[7];g=a;m=g;a=i.Provider;g=e===!0?l.leftAligned:l.root;b[8]!==g?(i=(h||(h=c("stylex")))(g),b[8]=g,b[9]=i):i=b[9];b[10]!==i||b[11]!==m||b[12]!==d?(e=j.jsx("div",{className:i,style:m,children:d}),b[10]=i,b[11]=m,b[12]=d,b[13]=e):e=b[13];b[14]!==f||b[15]!==e?(g=j.jsx(a,{value:f,children:e}),b[14]=f,b[15]=e,b[16]=g):g=b[16];return g}g["default"]=a}),98);
__d("IGDSHeroTabGroup.react",["IGDSDivider.react","IGDSTabGroup.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(10),d,e;b[0]!==a?(d=a.hasDivider,e=babelHelpers.objectWithoutPropertiesLoose(a,["hasDivider"]),b[0]=a,b[1]=d,b[2]=e):(d=b[1],e=b[2]);a=d===void 0?!0:d;b[3]!==e?(d=j.jsx(c("IGDSTabGroup.react"),babelHelpers["extends"]({},e,{leftAlign:!0})),b[3]=e,b[4]=d):d=b[4];b[5]!==a?(e=a&&j.jsx(c("IGDSDivider.react"),{}),b[5]=a,b[6]=e):e=b[6];b[7]!==d||b[8]!==e?(a=j.jsxs(j.Fragment,{children:[d,e]}),b[7]=d,b[8]=e,b[9]=a):a=b[9];return a}g["default"]=a}),98);
__d("IGDSTab.react",["IGDSTabBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2),d;b[0]!==a?(d=j.jsx(c("IGDSTabBase.react"),babelHelpers["extends"]({bottomBorder:!0},a)),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("PolarisDSACommonStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__u0Be1d57Mpf__JHASH__");b=h._("__JHASH__3_D4NdH98Lo__JHASH__");c=h._("__JHASH__qDRbI_FRuW6__JHASH__");d=h._("__JHASH__boI5WtRuQ86__JHASH__");e=h._("__JHASH__zRp2s1FeNY5__JHASH__");f=h._("__JHASH___BqkzgA1P3H__JHASH__");g.SUGGESTED_FOR_YOU_HEADER=a;g.MORE_ACCOUNTS_HEADER=b;g.SEARCH_NOT_PERSONALIZED_HEADER=c;g.SEARCH_FOR_YOU_HEADER=d;g.FOR_YOU_HEADER=e;g.FOLLOWING_HEADER=f}),226);
__d("PolarisForYouFeedHeader.react",["IGDSText.react","PolarisDSACommonStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",{className:"x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdt5ytf x2lah0s x11i5rnm xat24cr x1mh8g0r xr9ek0c xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf",children:j.jsx(c("IGDSText.react"),{size:"headline2",weight:"bold",children:d("PolarisDSACommonStrings").FOR_YOU_HEADER})}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("PolarisNonProfiledSearchContentFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisNonProfiledSearchContentFragment",selections:[{args:null,kind:"FragmentSpread",name:"PolarisNonProfiledSearchResultsList"}],type:"XDTNonProfiledSerpResponse",abstractKey:null};e.exports=a}),null);
__d("PolarisNonProfiledSearchContent.react",["CometPlaceholder.react","CometRelay","PolarisActiveSearchContext.react","PolarisNonProfiledSearchContentFragment.graphql","PolarisSearchResultDisplayTypes","PolarisSearchResultsListWrapper.next.react","PolarisSearchResultsLoadingState.next.react","deferredLoadComponent","react","react-forget-runtime","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;e.useContext;var k=e.c,l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisNonProfiledSearchResultsList.next.react").__setRef("PolarisNonProfiledSearchContent.react"));function a(a){var e=k(9),f=a.fragmentKey,g=a.isLoading;a=a.pendingQuery;f=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisNonProfiledSearchContentFragment.graphql"),f);var i=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(d("PolarisActiveSearchContext.react").PolarisActiveSearchContext,m);i=i.resultDisplayType;i=i===c("PolarisSearchResultDisplayTypes").Panel;i=i?6:4;var n;e[0]!==i?(n=j.jsx(c("PolarisSearchResultsListWrapper.next.react"),{children:j.jsx(c("PolarisSearchResultsLoadingState.next.react"),{includeHeaders:!0,paddingX:i})}),e[0]=i,e[1]=n):n=e[1];e[2]!==f||e[3]!==g||e[4]!==a?(i=j.jsx(c("PolarisSearchResultsListWrapper.next.react"),{children:j.jsx(l,{fragmentKey:f,isLoading:g,query:a})}),e[2]=f,e[3]=g,e[4]=a,e[5]=i):i=e[5];e[6]!==n||e[7]!==i?(f=j.jsx(c("CometPlaceholder.react"),{fallback:n,children:i}),e[6]=n,e[7]=i,e[8]=f):f=e[8];return f}function m(a){return[a.resultDisplayType]}g["default"]=a}),98);
__d("PolarisScrollawayHeaderWrapper.react",["CometEventListener","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect,l=b.useRef,m=b.c,n={root:{backgroundColor:"xvbhtw8",position:"xixxii4",top:"x13vifvy",zIndex:"xk3oba8",$$css:!0},takesFullPageWidth:{end:"xds687c",left:null,right:null,"@media (max-width:767px)_paddingTop":"xa39lb5","@media (max-width:767px)_start":"xn9dbyl","@media (max-width:767px)_left":null,"@media (max-width:767px)_right":null,"@media (min-width:1264px) and (max-width:1919px)_start":"x19elr03","@media (min-width:1264px) and (max-width:1919px)_left":null,"@media (min-width:1264px) and (max-width:1919px)_right":null,"@media (min-width:1920px)_start":"x19hu032","@media (min-width:1920px)_left":null,"@media (min-width:1920px)_right":null,"@media (min-width:768px) and (max-width: 1263px)_start":"x1w2ply9","@media (min-width:768px) and (max-width: 1263px)_left":null,"@media (min-width:768px) and (max-width: 1263px)_right":null,$$css:!0}};function a(a){var b=m(12),d=a.children,e=a.target;a=a.xstyle;var f=l(null),g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g={headerTop:0,lastScrollOffset:0},b[0]=g):g=b[0];g=l(g);var i=g.current;b[1]!==e?(g=function(){var a=f.current;if(a==null)return;var b=a.clientHeight,c=e!=null?e.scrollTop:window.pageYOffset;if(c<0)return;var d=c-i.lastScrollOffset,g;g=i.headerTop;d>0?g=Math.max(i.headerTop-d,-b):g=Math.min(i.headerTop-d,0);i.headerTop!==g&&(i.headerTop=g,window.requestAnimationFrame(function(){a.style.top=g+"px"}));i.lastScrollOffset=c},b[1]=e,b[2]=g):g=b[2];var o=g,p;b[3]!==e||b[4]!==o?(g=function(){var a,b=c("CometEventListener").listen((a=e)!=null?a:window,"scroll",o);return function(){b.remove()}},p=[o,e],b[3]=e,b[4]=o,b[5]=g,b[6]=p):(g=b[5],p=b[6]);k(g,p);p=(g=a)!=null?g:n.takesFullPageWidth;b[7]!==p?(a=(h||(h=c("stylex")))(n.root,p),b[7]=p,b[8]=a):a=b[8];b[9]!==a||b[10]!==d?(g=j.jsx("div",{className:a,ref:f,children:d}),b[9]=a,b[10]=d,b[11]=g):g=b[11];return g}g["default"]=a}),98);
__d("usePolarisNonPersonalizedTabsImpressionLogger",["polarisLogAction","react","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).c;function a(a){var b=i(2),d;b[0]!==a?(d={onImpressionStart:function(){c("polarisLogAction")("dsaTabImpression",{source:a})}},b[0]=a,b[1]=d):d=b[1];return c("useSinglePartialViewImpression")(d)}g["default"]=a}),98);
__d("PolarisSearchTabs.next.react",["IGDSTab.react","IGDSTabGroup.react","PolarisActiveSearchContext.react","PolarisDSACommonStrings","PolarisSearchConstants","polarisLogAction","react","react-forget-runtime","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useContext;var j=b.c;function a(a){var b=j(14),e=a.onSearch;a=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(d("PolarisActiveSearchContext.react").PolarisActiveSearchContext,k);var f=a.query,g=a.rankToken,h=a.setTab;a=a.tab;var l;b[0]!==h||b[1]!==e||b[2]!==f||b[3]!==g?(l=function(a){h(a),e(d("PolarisSearchConstants").SEARCH_CONTEXT.BLENDED,f,g),c("polarisLogAction")("dsaTabSwitch",{intent_source:a===d("PolarisSearchConstants").SearchTabConstants["default"]?"default":"non_profiled",source:"search"})},b[0]=h,b[1]=e,b[2]=f,b[3]=g,b[4]=l):l=b[4];l=l;var m=c("usePolarisNonPersonalizedTabsImpressionLogger")("search"),n;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(n="x4afe7t x127lhb5",b[5]=n):n=b[5];var o;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(o=i.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_FOR_YOU_HEADER,value:d("PolarisSearchConstants").SearchTabConstants["default"]}),b[6]=o):o=b[6];var p;b[7]===Symbol["for"]("react.memo_cache_sentinel")?(p=i.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_NOT_PERSONALIZED_HEADER,value:d("PolarisSearchConstants").SearchTabConstants.notPersonalized}),b[7]=p):p=b[7];b[8]!==l||b[9]!==a?(o=i.jsxs(c("IGDSTabGroup.react"),{onChange:l,value:a,children:[o,p]}),b[8]=l,b[9]=a,b[10]=o):o=b[10];b[11]!==m||b[12]!==o?(p=i.jsx("div",{className:n,ref:m,children:o}),b[11]=m,b[12]=o,b[13]=p):p=b[13];return p}function k(a){return[a.query,a.rankToken,a.setTab,a.tab]}g["default"]=a}),98);
__d("PolarisSearchTabs.react",["IGDSTab.react","IGDSTabGroup.react","PolarisDSACommonStrings","PolarisReactRedux.react","PolarisSearchActions","PolarisSearchConstants","polarisLogAction","react","usePolarisNonPersonalizedTabsImpressionLogger","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(12),e=a.pendingQuery;a=c("usePolarisSelector")(k);var f=d("PolarisReactRedux.react").useDispatch(),g;b[0]!==f||b[1]!==e?(g=function(a){f(d("PolarisSearchActions").switchSearchTab(a,e)),c("polarisLogAction")("dsaTabSwitch",{intent_source:a===d("PolarisSearchConstants").SearchTabConstants["default"]?"default":"non_profiled",source:"search"})},b[0]=f,b[1]=e,b[2]=g):g=b[2];g=g;var h=c("usePolarisNonPersonalizedTabsImpressionLogger")("search"),l;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(l="x4afe7t x127lhb5",b[3]=l):l=b[3];var m;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(m=j.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_FOR_YOU_HEADER,value:d("PolarisSearchConstants").SearchTabConstants["default"]}),b[4]=m):m=b[4];var n;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(n=j.jsx(c("IGDSTab.react"),{label:d("PolarisDSACommonStrings").SEARCH_NOT_PERSONALIZED_HEADER,value:d("PolarisSearchConstants").SearchTabConstants.notPersonalized}),b[5]=n):n=b[5];b[6]!==g||b[7]!==a.currentSearchTab?(m=j.jsxs(c("IGDSTabGroup.react"),{onChange:g,value:a.currentSearchTab,children:[m,n]}),b[6]=g,b[7]=a.currentSearchTab,b[8]=m):m=b[8];b[9]!==h||b[10]!==m?(n=j.jsx("div",{className:l,ref:h,children:m}),b[9]=h,b[10]=m,b[11]=n):n=b[11];return n}function k(a){return a.search}g["default"]=a}),98);
__d("PolarisTabbedFeedHeader.react",["IGDSHeroTab.react","IGDSHeroTabGroup.react","PolarisDSACommonStrings","PolarisNavigationLayoutContext","PolarisScrollawayHeaderWrapper.react","PolarisUA","react","stylex","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={hasBottomNavTopMargin:{marginTop:"xvkph5b",$$css:!0},headerFamiliarFeed:{maxWidth:"x1mcj5oc",$$css:!0},headerNotFamiliarFeed:{maxWidth:"x1rva566",$$css:!0},headerSpacingFamiliarFeed:{marginTop:"x1muwf4h",$$css:!0},headerSpacingNotFamilarFeed:{marginTop:"x1pdq3kb",$$css:!0},headerTopMargin:{marginTop:"x11fxgd9",$$css:!0},root:{width:"xh8yej3",$$css:!0}};function a(a){var b=j(15),e=a.currentFeed;a=a.onChange;var f=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();f=f.navigationPosition;f=f==="bottom";var g=d("PolarisUA").isDesktop(),i=c("usePolarisNonPersonalizedTabsImpressionLogger")("feedPage"),m;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(m=[l.root,g?l.headerFamiliarFeed:l.headerNotFamiliarFeed],b[0]=m):m=b[0];f=f&&l.hasBottomNavTopMargin;var n;b[1]!==f?(n=(h||(h=c("stylex")))(l.headerTopMargin,f),b[1]=f,b[2]=n):n=b[2];var o;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(f=k.jsx(c("IGDSHeroTab.react"),{label:d("PolarisDSACommonStrings").FOR_YOU_HEADER,value:"home"}),o=k.jsx(c("IGDSHeroTab.react"),{label:d("PolarisDSACommonStrings").FOLLOWING_HEADER,value:"following"}),b[3]=f,b[4]=o):(f=b[3],o=b[4]);b[5]!==a||b[6]!==e?(f=k.jsxs(c("IGDSHeroTabGroup.react"),{onChange:a,value:e,children:[f,o]}),b[5]=a,b[6]=e,b[7]=f):f=b[7];b[8]!==n||b[9]!==i||b[10]!==f?(o=k.jsx(c("PolarisScrollawayHeaderWrapper.react"),{xstyle:m,children:k.jsx("div",{className:n,ref:i,children:f})}),b[8]=n,b[9]=i,b[10]=f,b[11]=o):o=b[11];b[12]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsx("div",{className:(h||(h=c("stylex")))(g?l.headerSpacingFamiliarFeed:l.headerSpacingNotFamilarFeed)}),b[12]=a):a=b[12];b[13]!==o?(e=k.jsxs("div",{children:[o,a]}),b[13]=o,b[14]=e):e=b[14];return e}g["default"]=a}),98);