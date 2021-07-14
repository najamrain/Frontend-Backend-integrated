(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(10),c=n.n(r),o=(n(108),n(29)),s=n.n(o),d=n(31),l=n(32),u=n(84),j=n(30),h=n(11),b=n(92),p=n(2),O=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth.isLoggedIn,i=Object(b.a)(e,["component","auth"]);return Object(p.jsx)(h.b,Object(j.a)(Object(j.a)({},i),{},{render:function(e){return n?Object(p.jsx)(t,Object(j.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))})),m=n(58),g=n(188),v=n(178),x=n(181),f=n(182),y=n(183),w=n(184),k=n(21),I=n.n(k),R=n(37),V="LOGIN_SUCCESS",L="LOGOUT",C="http://127.0.0.1:8000",D=C+"/api/recordings/",S=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,cursor:"pointer"}}})),B={signOutAction:function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:L});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},N=Object(l.b)((function(e){return{auth:e.auth}}),B)((function(e){var t=S();return Object(p.jsx)("div",{className:t.root,children:Object(p.jsx)(x.a,{position:"static",style:{marginBottom:30},children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)(d.b,{className:t.title,style:{textDecoration:"none",color:"white"},to:"/",children:Object(p.jsx)(y.a,{variant:"h6",children:"Video Recording Portal"})}),Object(p.jsxs)("div",{style:{textAlign:"right"},children:[e.auth.isLoggedIn&&Object(p.jsx)(d.b,{style:{textDecoration:"none",color:"white"},to:"/dashboard",children:Object(p.jsx)(w.a,{color:"inherit",children:"Dashboard"})}),e.auth.isLoggedIn?Object(p.jsx)(w.a,{color:"inherit",onClick:e.signOutAction,children:"Logout"}):Object(p.jsx)(d.b,{style:{textDecoration:"none",color:"white"},to:"/signin",children:Object(p.jsx)(w.a,{color:"inherit",children:"Login"})})]})]})})})})),_=n(187),E=n(185),T=n(186),U=n(89),P=n.n(U),F=n(90),A=n.n(F),X=Object(v.a)((function(e){return{root:{width:345,marginRight:20,background:"#eeedee"},media:{height:140},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));function G(e){var t=Object(i.useState)([!0]),n=Object(m.a)(t,2),a=n[0],r=n[1],c=X(),o=e.recording;return Object(p.jsxs)(E.a,{className:c.root,children:[o.video_file?Object(p.jsx)(T.a,{id:o.id,className:c.media,component:"video",image:o.video_file}):Object(p.jsx)("div",{style:{justifyContent:"center",display:"grid"},children:Object(p.jsx)("video",{id:o.id,style:{width:200},src:o.video_blob_url})}),Object(p.jsx)("div",{className:c.controls,children:a?Object(p.jsx)(_.a,{"aria-label":"play/pause",onClick:function(){r(!1),document.getElementById(o.id).play()},children:Object(p.jsx)(P.a,{className:c.playIcon})}):Object(p.jsx)(_.a,{"aria-label":"play/pause",onClick:function(){r(!0),document.getElementById(o.id).pause()},children:Object(p.jsx)(A.a,{className:c.playIcon})})})]})}var M=function(){var e=Object(i.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){s.a.get(D).then((function(e){a(e.data)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(N,{}),Object(p.jsx)(g.a,{container:!0,spacing:3,children:n.map((function(e){return Object(p.jsx)(g.a,{item:!0,xs:!0,children:Object(p.jsx)(G,{recording:e})},e.id)}))})]})},W=n(51),q=n(55),z=n(56),H=n(60),J=n(59),K=n(94),Q=n(190),Y=n(191),Z=n(189),$=n(140),ee=function(){return{body:{paddingLeft:10,paddingRight:10,minHeight:"100vh"},cardDiv:{display:"flex",justifyContent:"center"},card:{padding:"50px",width:"400px",minHeight:"150px",marginBottom:"30px"},gridItem:{marginBottom:"20px"},backdrop:{color:"#72b39f",zIndex:1201},gridWidth:{width:"50%"}}},te=function(e){var t=e.color;return Object(p.jsx)("hr",{style:{color:t,backgroundColor:t,height:1}})},ne=function(e){Object(H.a)(n,e);var t=Object(J.a)(n);function n(e){var i;return Object(q.a)(this,n),(i=t.call(this,e)).onChange=function(e){return i.setState(Object(W.a)({},e.target.name,e.target.value))},i.signIn=function(){var e=Object(R.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i.setState({isLoading:!0}),n=i.state,a=n.username,r=n.password,e.next=5,i.props.signInAction(a,r);case 5:i.setState({isLoading:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.state={username:"",password:"",isLoading:!1},i}return Object(z.a)(n,[{key:"render",value:function(){var e=this.props.classes;return this.props.auth.isLoggedIn?Object(p.jsx)(h.a,{to:"/dashboard"}):Object(p.jsx)(g.a,{container:!0,spacing:0,justifyContent:"center",alignItems:"center",className:e.body,children:Object(p.jsxs)(g.a,{item:!0,xs:12,sm:6,className:e.gridWidth,children:[Object(p.jsx)(Y.a,{className:e.backdrop,open:this.state.isLoading,children:Object(p.jsx)(Z.a,{color:"inherit"})}),Object(p.jsx)("div",{className:e.cardDiv,children:Object(p.jsxs)(K.a,{variant:"elevation",elevation:2,className:e.card,children:[Object(p.jsx)(g.a,{item:!0,className:e.gridItem,children:Object(p.jsx)(y.a,{component:"h1",variant:"h4",children:"Sign In"})}),Object(p.jsxs)(g.a,{container:!0,spacing:1,className:e.gridItem,children:[Object(p.jsx)(g.a,{item:!0,xs:5,children:Object(p.jsx)(te,{color:"#DBDBDB"})}),Object(p.jsx)(g.a,{item:!0,xs:2,children:Object(p.jsx)("p",{style:{color:"#DBDBDB",marginLeft:"12px",marginTop:"0px"},children:"OR"})}),Object(p.jsx)(g.a,{item:!0,xs:5,children:Object(p.jsx)(te,{color:"#DBDBDB"})})]}),Object(p.jsx)(g.a,{item:!0,children:Object(p.jsx)("form",{onSubmit:this.signIn,children:Object(p.jsxs)(g.a,{container:!0,direction:"column",spacing:2,children:[Object(p.jsx)(g.a,{item:!0,className:e.gridItem,children:Object(p.jsx)(Q.a,{type:"text",placeholder:"Username",fullWidth:!0,name:"username",value:this.state.username,onChange:this.onChange,required:!0,autoFocus:!0})}),Object(p.jsx)(g.a,{item:!0,className:e.gridItem,children:Object(p.jsx)(Q.a,{type:"password",placeholder:"Password",name:"password",fullWidth:!0,value:this.state.password,onChange:this.onChange,required:!0})}),Object(p.jsx)(g.a,{item:!0,className:e.gridItem,children:Object(p.jsx)(w.a,{variant:"contained",type:"submit",color:"primary",children:"Sign In"})})]})})})]})})]})})}}]),n}(i.Component),ie={signInAction:function(e,t){return function(){var n=Object(R.a)(I.a.mark((function n(i){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.post("http://127.0.0.1:8000/api/signin/",{username:e,password:t});case 3:a=n.sent,i({type:V,payload:{id:a.id,username:a.username}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.response.request.responseText);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}},ae=Object(l.b)((function(e){return{auth:e.auth}}),ie)(Object($.a)(ee)(ne)),re=n(192),ce="video/webm",oe=[[{type:"PUBLIC",props:{path:"/signin",exact:!0,component:ae}},{type:"PRIVATE",props:{path:"/dashboard",exact:!0,component:M}},{type:"PUBLIC",props:{path:"/",exact:!0,component:function(e){Object(H.a)(n,e);var t=Object(J.a)(n);function n(e){var i;return Object(q.a)(this,n),(i=t.call(this,e)).deleteRecordedVideo=function(){return i.setState({recordedVideo:""})},i.handleVideo=function(e){return i.setState({video:e.target.files[0]})},i.uploadVideo=function(){if(i.state.video){var e=new FormData;e.set("video_file",i.state.video),s()({url:D,method:"POST",data:e}).then((function(){alert("Video uploaded")}))}else alert("Please select video file and then click upload")},i.uploadRecordedVideo=function(){var e={video_blob_url:i.state.recordedVideo};s.a.post(D,e).then((function(){return alert("Video uploaded to server")}))},i.setValue=function(e,t){var n=i.chunks.slice(t[0],t[1]+1),a=new Blob(n,{type:ce}),r=window.URL.createObjectURL(a);i.setState({sliderValue:t,recordedVideo:r})},i.state={recording:!1,recordedVideo:"",videos:[],sliderValue:[0,100]},i}return Object(z.a)(n,[{key:"componentDidMount",value:function(){var e=Object(R.a)(I.a.mark((function e(){var t,n=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:t=e.sent,this.video.srcObject=t,this.video.play(),this.mediaRecorder=new MediaRecorder(t,{mimeType:ce}),this.chunks=[],this.mediaRecorder.ondataavailable=function(e){e.data&&e.data.size>0&&n.chunks.push(e.data)};case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startRecording",value:function(e){e.preventDefault(),this.chunks=[],this.mediaRecorder.start(10),this.setState({recording:!0})}},{key:"stopRecording",value:function(e){e.preventDefault(),this.mediaRecorder.stop(),this.setState({recording:!1,sliderValue:[0,this.chunks.length]}),this.saveVideo()}},{key:"saveVideo",value:function(){var e=new Blob(this.chunks,{type:ce}),t=window.URL.createObjectURL(e),n=this.state.videos.concat([t]);this.setState({videos:n,recordedVideo:t})}},{key:"deleteVideo",value:function(e){var t=this.state.videos.filter((function(t){return t!==e}));this.setState({videos:t})}},{key:"render",value:function(){var e,t=this,n=this.state,i=n.recording,a=(n.videos,n.recordedVideo);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(N,{}),Object(p.jsxs)("div",{style:{display:"grid",justifyContent:"center"},children:[Object(p.jsx)("video",{style:{width:400,marginBottom:10,display:!i&&"none"},ref:function(e){t.video=e},children:"Video stream not available."}),Object(p.jsxs)("div",{children:[!i&&Object(p.jsx)(w.a,{color:"primary",variant:"contained",onClick:function(e){return t.startRecording(e)},children:"Record Video"}),i&&Object(p.jsx)(w.a,{color:"primary",variant:"contained",onClick:function(e){return t.stopRecording(e)},children:"Stop Recording"})]})]}),a&&Object(p.jsxs)("div",{style:{margin:10},children:[Object(p.jsx)("h3",{children:"Recorded video:"}),Object(p.jsx)("video",{style:{width:250},src:a,autoPlay:!0,loop:!0}),Object(p.jsx)("div",{children:Object(p.jsx)(re.a,{style:{width:250},value:this.state.sliderValue,onChange:this.setValue,valueLabelDisplay:"auto","aria-labelledby":"range-slider",max:null===(e=this.chunks)||void 0===e?void 0:e.length})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(w.a,{color:"primary",variant:"contained",style:{marginRight:10},onClick:this.deleteRecordedVideo,children:"Delete"}),Object(p.jsx)(w.a,{style:{marginLeft:10},color:"primary",variant:"contained",onClick:this.uploadRecordedVideo,children:"Upload File"})]})]})]})}}]),n}(a.a.Component)}}]].map((function(e){return e.map((function(e){var t="PRIVATE"===e.type?O:h.b;return Object(p.jsx)(t,Object(j.a)({},e.props))}))})),se=function(){return Object(p.jsx)(h.d,{children:oe})},de=n(26),le=n(91),ue=n(68),je=n(57),he=n.n(je),be={isLoggedIn:!1,user:null},pe=Object(de.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:!0,user:t.payload});case L:return{};default:return e}}}),Oe=function(e,t){return t.type===L&&(he.a.removeItem("persist:root"),e=void 0),pe(e,t)},me={key:"root",storage:he.a},ge=Object(ue.a)(me,Oe),ve=Object(de.d)(ge,{auth:{}},Object(de.c)(Object(de.a)(le.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),xe=Object(ue.b)(ve),fe=ve;document.getElementsByName("csrfmiddlewaretoken")[0]&&(s.a.defaults.headers.common["X-CSRFToken"]=document.getElementsByName("csrfmiddlewaretoken")[0].value);var ye=function(){return Object(p.jsx)(l.a,{store:fe,children:Object(p.jsx)(u.a,{persistor:xe,children:Object(p.jsx)(d.a,{children:Object(p.jsx)(se,{})})})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(ye,{})}),document.getElementById("root")),we()}},[[138,1,2]]]);
//# sourceMappingURL=main.4121df30.chunk.js.map