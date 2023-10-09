"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[169],{70169:(v,i,e)=>{e.r(i),e.d(i,{REVIEW_WORKFLOW_FILTERS:()=>w});var o=e(21892),t=e(27279),O=e(8295),T=e(61121),r=e(70627),n=e.n(r),s=e(61020),l=e(78186),E=e(54920);const a=({value:c,onChange:f})=>{const{formatMessage:A}=(0,s.Z)(),{users:C,isLoading:_}=(0,E.R)();return t.createElement(O.hQ,{value:c,"aria-label":A({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:f,loading:_},C.map(g=>t.createElement(T.O,{key:g.id,value:g.id.toString()},(0,l.G)(g,A))))};a.propTypes={onChange:n().func.isRequired,value:n().string},a.defaultProps={value:""};var d=e(63738),u=e(10701),S=e(32370),W=e(77970),R=e(52258),L=e(5318);const m=({value:c,onChange:f,uid:A})=>{const{formatMessage:C}=(0,s.Z)(),{workflows:[_],isLoading:g}=(0,R.n)({filters:{contentTypes:A}});return t.createElement(d.q4,{"aria-label":C({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:c,onChange:f,loading:g,customizeContent:()=>t.createElement(u.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(S.Z,{textColor:"neutral800",ellipsis:!0},c),g?t.createElement(W.a,{small:!0,style:{display:"flex"}}):null)},(_?.stages??[]).map(({id:P,color:p,name:I})=>{const{themeColorName:y}=(0,L.k)(p);return t.createElement(d.ag,{key:P,startIcon:t.createElement(u.k,{height:2,background:p,borderColor:y==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:I},I)}))};m.defaultProps={value:""},m.propTypes={onChange:n().func.isRequired,uid:n().string.isRequired,value:n().string};const w=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:m,label:{id:(0,o.OB)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"int"}}},metadatas:{customInput:a,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,o.OB)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},86978:(v,i,e)=>{e.d(i,{$k:()=>W,Ef:()=>c,FT:()=>m,Nj:()=>u,Ot:()=>a,QM:()=>l,VS:()=>R,_X:()=>f,bc:()=>d,gu:()=>O,k_:()=>S,lv:()=>L,qZ:()=>s,rg:()=>r,sN:()=>t,uL:()=>w,x4:()=>E,yq:()=>T,zn:()=>n});var o=e(97003);const t="settings_review-workflows",O="Settings/Review_Workflows/RESET_WORKFLOW",T="Settings/Review_Workflows/SET_CONTENT_TYPES",r="Settings/Review_Workflows/SET_IS_LOADING",n="Settings/Review_Workflows/SET_ROLES",s="Settings/Review_Workflows/SET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOWS",E="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",S="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",W="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",R="Settings/Review_Workflows/WORKFLOW_UPDATE",L={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},m=o.W.colors.primary600,w={STAGE:"stage"},c="numberOfWorkflows",f="stagesPerWorkflow"},52258:(v,i,e)=>{e.d(i,{n:()=>T});var o=e(27279),t=e(82959),O=e(40464);function T(r={}){const{get:n}=(0,t.kY)(),{id:s="",...l}=r,E={populate:"stages"},{data:a,isLoading:d,status:u,refetch:S}=(0,O.useQuery)(["review-workflows","workflows",s],async()=>(await n(`/admin/review-workflows/workflows/${s}`,{params:{...E,...l}})).data),W=o.useMemo(()=>s&&a?.data?[a.data]:Array.isArray(a?.data)?a.data:[],[a?.data,s]);return{meta:o.useMemo(()=>a?.meta??{},[a?.meta]),workflows:W,isLoading:d,status:u,refetch:S}}},5318:(v,i,e)=>{e.d(i,{k:()=>O,s:()=>T});var o=e(97003),t=e(86978);function O(r){if(!r)return null;const s=Object.entries(o.W.colors).filter(([,l])=>l.toUpperCase()===r.toUpperCase()).reduce((l,[E])=>(t.lv?.[E]&&(l=E),l),null);return s?{themeColorName:s,name:t.lv[s]}:null}function T(){return Object.entries(t.lv).map(([r,n])=>({hex:o.W.colors[r].toUpperCase(),name:n}))}}}]);
