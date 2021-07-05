(this.webpackJsonpfood_vision_mobile=this.webpackJsonpfood_vision_mobile||[]).push([[0],{458:function(e,a,t){e.exports=t(646)},463:function(e,a,t){},469:function(e,a){},470:function(e,a){},478:function(e,a){},487:function(e,a){},488:function(e,a){},489:function(e,a){},497:function(e,a){},642:function(e,a,t){},643:function(e){e.exports=JSON.parse('{"apple_pie":0,"baby_back_ribs":1,"baklava":2,"beef_carpaccio":3,"beef_tartare":4,"beet_salad":5,"beignets":6,"bibimbap":7,"bread_pudding":8,"breakfast_burrito":9,"bruschetta":10,"caesar_salad":11,"cannoli":12,"caprese_salad":13,"carrot_cake":14,"ceviche":15,"cheese_plate":16,"cheesecake":17,"chicken_curry":18,"chicken_quesadilla":19,"chicken_wings":20,"chocolate_cake":21,"chocolate_mousse":22,"churros":23,"clam_chowder":24,"club_sandwich":25,"crab_cakes":26,"creme_brulee":27,"croque_madame":28,"cup_cakes":29,"deviled_eggs":30,"donuts":31,"dumplings":32,"edamame":33,"eggs_benedict":34,"escargots":35,"falafel":36,"filet_mignon":37,"fish_and_chips":38,"foie_gras":39,"french_fries":40,"french_onion_soup":41,"french_toast":42,"fried_calamari":43,"fried_rice":44,"frozen_yogurt":45,"garlic_bread":46,"gnocchi":47,"greek_salad":48,"grilled_cheese_sandwich":49,"grilled_salmon":50,"guacamole":51,"gyoza":52,"hamburger":53,"hot_and_sour_soup":54,"hot_dog":55,"huevos_rancheros":56,"hummus":57,"ice_cream":58,"lasagna":59,"lobster_bisque":60,"lobster_roll_sandwich":61,"macaroni_and_cheese":62,"macarons":63,"miso_soup":64,"mussels":65,"nachos":66,"omelette":67,"onion_rings":68,"oysters":69,"pad_thai":70,"paella":71,"pancakes":72,"panna_cotta":73,"peking_duck":74,"pho":75,"pizza":76,"pork_chop":77,"poutine":78,"prime_rib":79,"pulled_pork_sandwich":80,"ramen":81,"ravioli":82,"red_velvet_cake":83,"risotto":84,"samosa":85,"sashimi":86,"scallops":87,"seaweed_salad":88,"shrimp_and_grits":89,"spaghetti_bolognese":90,"spaghetti_carbonara":91,"spring_rolls":92,"steak":93,"strawberry_shortcake":94,"sushi":95,"tacos":96,"takoyaki":97,"tiramisu":98,"tuna_tartare":99,"waffles":100}')},646:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),o=t(59),c=t.n(o),i=(t(463),t(6)),l=t.n(i),s=t(12),u=t(5),d=t(682),m=t(687),p=t(690),f=t(676),h=t(441),_=t.n(h),b=t(229),g=t(422),v=t.n(g),k=t(681),y=t(678),E=t(688),w=t(423),x=t.n(w),j=t(648),O=t(679),S=t(680);function M(){return r.a.createElement(f.a,{container:!0,spacing:1,alignItems:"center",justify:"center"},r.a.createElement(f.a,{item:!0}," ",r.a.createElement(x.a,null)),r.a.createElement(f.a,{item:!0},r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(y.a,{color:"inherit",href:"https://github.com/tomwalczak"},"@tomwalczak"))))}var z=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},grey:{color:"grey"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),C=function(e){var a=e.handleClick,t=e.modelLoaded,n=z();return r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(k.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement(j.a,{component:"h1",variant:"h4"},"\ud83c\udf54 \ud83d\udc40 \ud83d\udcf1"),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Welcome to Food Vision Mobile!"),r.a.createElement(j.a,{component:"p",variant:"subtitle2",className:n.grey},"(Works best on a smartphone)"),r.a.createElement(d.a,{fullWidth:!0,variant:"contained",color:"secondary",className:n.submit,onClick:function(){console.log(t),t&&a()}},t?"Let's go! \ud83e\uddd1\u200d\ud83c\udf73 ":"Loading models... \ud83e\udd16 \ud83e\uddbe  ")),r.a.createElement(E.a,{mt:8},r.a.createElement(M,null)))},T=t(683),N=t(438),A=t(439),I=t(443);function W(e){var a=e.data;return r.a.createElement(T.a,{width:420,height:170,data:a,layout:"vertical",fill:"#fff",margin:{top:10}},r.a.createElement(N.a,{type:"number",domain:[0,100],tickFormatter:function(e){return"".concat(e,"%")}}),r.a.createElement(A.a,{type:"category",dataKey:"food",tick:{fill:"white",fontSize:12},width:140}),r.a.createElement(I.a,{dataKey:"prob",fill:"#fff"}))}var L=t(440),D=function(e,a){e.forEach((function(e){var t=Object(u.a)(e.bbox,4),n=t[0],r=t[1],o=t[2],c=t[3],i=e.class,l=Math.floor(16777215*Math.random()).toString(16);a.strokeStyle="#"+l,a.font="12px Arial",a.beginPath(),a.fillStyle="#"+l,a.fillText(i,n,r),a.rect(n,r,o,c),a.stroke()}))},F=(t(642),t(643));var V=[{name:"MobileNetV2_10PC_Food101_10Mb",path:"mobilenet_v2_js_model",model:null,loadTime:null},{name:"ResNet50_all_Food101_90Mb",path:"resnet_100pc_js_model",model:null,loadTime:null},{name:"MobileNetV2_ALL_Food101_10Mb",path:"mobilenet_v2_100pc_js_model",model:null,loadTime:null}],q=null,J=0;var P=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=r.a.useState(null),o=Object(u.a)(t,2),c=o[0],i=o[1],h=r.a.useState(null),g=Object(u.a)(h,2),k=g[0],y=g[1],E=Object(n.useState)(!1),w=Object(u.a)(E,2),x=w[0],j=w[1],O=Object(n.useState)(!0),S=Object(u.a)(O,2),M=S[0],z=S[1],T=Object(n.useState)(),N=Object(u.a)(T,2),A=N[0],I=N[1],P=function(e){var a={};for(var t in e)a[e[t]]=t;return a}(F),R=b.c(255),B=function(e){var a=e.currentTarget.dataset.myValue;console.log(a),a&&(J=a),i(null)},K=function(){var e=Object(s.a)(l.a.mark((function e(){var a,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,e.next=3,b.b("/food-vision-mobile-tensorflowjs"+"/models/".concat(V[J].path,"/model.json"));case 3:return V[J].model=e.sent,t=new Date-a,console.log("Model loaded, took ".concat(t," ms")),e.next=8,L.load();case 8:q=e.sent,console.log("Object detection model loaded."),j(!0),V[J].loadTime=t;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:setInterval((function(){G()}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var t=Object(s.a)(l.a.mark((function t(){var n,r,o,c,i,s,u,d,m,p;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){t.next=24;break}if(n=e.current.video,r=e.current.video.videoWidth,o=e.current.video.videoHeight,a.current.width=r,a.current.height=o,c=b.a.fromPixels(n),i=c.div(R).expandDims(0),s=new Date,!V[J].model){t.next=16;break}u=V[J].model.predict(i),d=new Date-s,y(d),I(u),t.next=18;break;case 16:return t.next=18,K();case 18:return t.next=20,q.detect(n);case 20:m=t.sent,console.log(m),p=a.current.getContext("2d"),D(m.slice(-2),p);case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){H()}),[]),M?r.a.createElement(C,{handleClick:function(){z(!1)},modelLoaded:x}):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(f.a,{container:!0,spacing:1,alignItems:"center",style:{fontSize:18,margin:"0px auto"}},r.a.createElement(f.a,{item:!0,xs:!0,style:{textAlign:"right"}},"Try model: \ud83e\udd16"," "),r.a.createElement(f.a,{item:!0,xs:!0,style:{textAlign:"left"}}," ",r.a.createElement(d.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},variant:"contained",color:"secondary",size:"small",endIcon:r.a.createElement(_.a,null)},V[J].name)))," ",r.a.createElement(m.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:B},V.map((function(e,a){return r.a.createElement(p.a,{key:a,"data-my-value":a,onClick:B},e.name)})))),r.a.createElement("div",{className:"App-body"},r.a.createElement(v.a,{ref:e,height:224,width:224,videoConstraints:{width:224,height:224,facingMode:"environment"},muted:!0,style:{zIndex:8,width:"100vw",height:"100%"}}),r.a.createElement("canvas",{ref:a,style:{position:"absolute",left:0,top:40,textAlign:"center",zIndex:100,width:"100vw",height:"100%"}}),r.a.createElement("div",{style:{position:"absolute",padding:10,bottom:0,width:"80%",maxWidth:600,minWidth:500,height:250,backgroundColor:"#000",textAlign:"left",fontSize:16,zindex:9,opacity:.8}},A&&"What \ud83c\udf54 \ud83c\udf55 \ud83c\udf4f  is this? \ud83d\udc40"," ",r.a.createElement("br",null),function(e){var a=e.preds,t=e.food_classes;if(!a)return"Loading predictions.. \ud83e\udd16";var n=b.d(a,5,!0),o=n.values.dataSync(),c=n.indices.dataSync(),i=[];return c.forEach((function(e,a){i.push({food:t[e],prob:Math.round(1e3*o[a])/10})})),r.a.createElement(W,{data:i})}({preds:A,food_classes:P}),A&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Model loaded in: ",V[J].loadTime," ms"),r.a.createElement("div",null,"Inference time was: ",k," ms")))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[458,1,2]]]);
//# sourceMappingURL=main.de87119e.chunk.js.map