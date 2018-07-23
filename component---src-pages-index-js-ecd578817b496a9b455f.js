webpackJsonp([35783957827783,0xb851aee280d6],{43:function(e,t,a){var n,i;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=a.apply(null,n);s&&e.push(s)}else if("object"===i)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?(a.default=a,e.exports=a):(n=[],i=function(){return a}.apply(t,n),!(void 0!==i&&(e.exports=i)))}()},41:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),r=n(i),s=a(78),l=n(s),c=a(43),u=n(c),o=function(e){return r.default.createElement("nav",{className:(0,u.default)("display-font",e.className)},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"Nav"},r.default.createElement("div",{className:"flex-1"},r.default.createElement(l.default,{to:"/",className:"NavLink NavBrand text-2 uppercase font-weight-500"},"Kevin Qi")),r.default.createElement("div",{className:"d-flex"},r.default.createElement(l.default,{to:"/",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"Home"),r.default.createElement(l.default,{to:"/about",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"About"),r.default.createElement(l.default,{to:"/resume",className:"NavLink",activeClassName:"NavLink--active",exact:!0},"Resume"),r.default.createElement("a",{className:"NavLink",href:"https://github.com/iqnivek"},"Github"),r.default.createElement("a",{className:"NavLink",href:"https://medium.com/@kevin_qi"},"Blog")))))};t.default=o,e.exports=t.default},42:function(e,t){"use strict";t.__esModule=!0;t.PROJECTS={react_piano:{github:"https://github.com/iqnivek/react-piano",description:"An open source interactive piano component which supports custom sounds, touch/click/keyboard events, and fully configurable styling. Published on npm."},react_circular_progressbar:{github:"https://github.com/iqnivek/react-circular-progressbar",description:"An open source circular progressbar component for React, built with SVG and extensively customizable. It's published on npm with over 13,000 weekly downloads, and has 200+ stars on Github."},react_calendar_heatmap:{github:"https://github.com/patientslikeme/react-calendar-heatmap",description:"An open source calendar heatmap inspired by Github's contribution graph, developed while I was at PatientsLikeMe. It's published on npm, has 300+ stars on Github, and is used by outage.report to display outage history. Built with React and SVG."},save_tabbed_images:{github:"https://github.com/iqnivek/save_tabbed_images",description:"An open source Chrome extension for downloading images in tabs super quick. Has more than 8,000 weekly users. Built with React."},eventmapper:{website:"http://eventmapper.net",description:"A web app that maps out concerts in your city, sorted by popularity. Built with Rails and the Songkick API."},patientslikeme_app:{website:"https://itunes.apple.com/us/app/connect-patientslikeme-control/id955272281"}}},138:function(e,t,a){e.exports=a.p+"static/eventmapper.25d4fede.jpg"},88:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),r=n(i),s=a(42),l=a(142),c=n(l),u=a(141),o=n(u),d=a(140),m=n(d),p=a(143),f=n(p),h=a(139),b=n(h),v=a(138),g=n(v),E=function(){return r.default.createElement("div",null,r.default.createElement("h2",{className:"font-weight-light text-secondary"},"Projects //"),r.default.createElement("section",{className:"mt-5"},r.default.createElement(_,{name:"react-circular-progressbar",image:o.default,links:[{text:"View project on Github",url:s.PROJECTS.react_circular_progressbar.github}]},s.PROJECTS.react_circular_progressbar.description),r.default.createElement(_,{name:"react-calendar-heatmap",image:m.default,links:[{text:"View project on Github",url:s.PROJECTS.react_calendar_heatmap.github}]},s.PROJECTS.react_calendar_heatmap.description),r.default.createElement(_,{name:"react-piano",image:c.default,links:[{text:"View project on Github",url:s.PROJECTS.react_piano.github}]},s.PROJECTS.react_piano.description),r.default.createElement(_,{name:"Save Tabbed Images",image:f.default,links:[{text:"View project on Github",url:s.PROJECTS.save_tabbed_images.github},{text:"View extension in Chrome web store",url:"https://chrome.google.com/webstore/detail/save-tabbed-images/hhcoikfhkkadkgklepjkfgafmjoggefh"}]},s.PROJECTS.save_tabbed_images.description),r.default.createElement(_,{name:"EventMapper",image:g.default,links:[{text:"View site",url:s.PROJECTS.eventmapper.website}]},s.PROJECTS.eventmapper.description),r.default.createElement(_,{name:"PatientsLikeMe App Treatment Reports",image:b.default,links:[{text:"View in app store",url:s.PROJECTS.patientslikeme_app.website}]},"I worked on adding treatment reports to the native PatientsLikeMe iOS app. The reports have useful info on cost, effectiveness, side effects, and patient evaluations. Built with Swift.")))},_=function(e){var t=e.name,a=e.image,n=(e.url,e.links),i=e.children,s=n[0].url;return r.default.createElement("div",{className:"row mb-5"},r.default.createElement("div",{className:"col-xs-12 col-sm-6"},r.default.createElement("div",{className:"text-xs-center"},r.default.createElement("a",{href:s},r.default.createElement("img",{className:"img-fluid rounded mb-3",src:a})))),r.default.createElement("div",{className:"col-xs-12 col-sm-6"},r.default.createElement("h3",null,r.default.createElement("a",{href:s},t)),r.default.createElement("div",{className:"mt-2"},i),r.default.createElement("ul",{className:"list-unstyled mt-3"},n.map(function(e){var t=e.text,a=e.url;return r.default.createElement("li",{key:a},r.default.createElement("a",{href:a},t))}))))};t.default=E,e.exports=t.default},139:function(e,t,a){e.exports=a.p+"static/patientslikeme_app.9f3f3f4e.png"},140:function(e,t,a){e.exports=a.p+"static/react_calendar_heatmap.8d47e920.png"},141:function(e,t,a){e.exports=a.p+"static/react_circular_progressbar.fc781610.png"},142:function(e,t,a){e.exports=a.p+"static/react_piano.0be75936.png"},143:function(e,t,a){e.exports=a.p+"static/save_tabbed_images.03ebb787.png"},220:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),r=n(i),s=a(78),l=(n(s),a(41)),c=n(l),u=a(88),o=n(u),d=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"intro pt-4 pb-5"},r.default.createElement(c.default,{className:"mb-6"}),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-xs-12 col-sm-8"},r.default.createElement("p",{className:"font-weight-light text-1 mb-0"},"Software engineer versed in web and design. Based in San Francisco."))))),r.default.createElement("div",{className:"container mt-5"},r.default.createElement(o.default,null)))};t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-ecd578817b496a9b455f.js.map