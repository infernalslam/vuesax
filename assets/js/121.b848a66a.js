(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{619:function(t,e,r){},733:function(t,e,r){"use strict";var o=r(619);r.n(o).a},812:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:""}},methods:{openAlert:function(t){this.activeAlert=!0,this.titleAlert="Alert "+t||this.getColorRandom(),this.colorAlert=t||this.getColorRandom()},getColorRandom:function(){function t(t,e){return Math.floor(Math.random()*(e-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")},acceptAlert:function(t){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})}}},n=(r(733),r(0)),c=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"centerx"},[r("vs-button",{attrs:{"vs-color":"primary","vs-type":"flat"},on:{click:function(e){t.openAlert("primary")}}},[t._v("Alert Primary")]),r("vs-button",{attrs:{"vs-color":"success","vs-type":"flat"},on:{click:function(e){t.openAlert("success")}}},[t._v("Alert success")]),r("vs-button",{attrs:{"vs-color":"danger","vs-type":"flat"},on:{click:function(e){t.openAlert("danger")}}},[t._v("Alert Danger")]),r("vs-button",{attrs:{"vs-color":"warning","vs-type":"flat"},on:{click:function(e){t.openAlert("warning")}}},[t._v("Alert Warning")]),r("vs-button",{attrs:{"vs-color":"dark","vs-type":"flat"},on:{click:function(e){t.openAlert("dark")}}},[t._v("Alert Dark")]),r("vs-button",{attrs:{"vs-color":"primary","vs-type":"gradient"},on:{click:function(e){t.openAlert(null)}}},[t._v("Alert Color RGB | HEX")]),r("vs-dialog",{attrs:{"vs-color":t.colorAlert,"vs-title":t.titleAlert,"vs-active":t.activeAlert},on:{"vs-accept":t.acceptAlert,"update:vsActive":function(e){t.activeAlert=e}}},[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  ")])],1)},[],!1,null,null,null);e.default=c.exports}}]);