webpackJsonp([2],{"9bBU":function(e,t,o){o("mClu");var r=o("FeBl").Object;e.exports=function(e,t,o){return r.defineProperty(e,t,o)}},C4MV:function(e,t,o){e.exports={default:o("9bBU"),__esModule:!0}},F0nk:function(e,t,o){var r=o("oI2q");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o("rjj0")("09e0a1d8",r,!0)},KeyE:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("bOdI"),n=o.n(r),a=o("TIfe"),l=o("kED/"),s={name:"JobsList",data:function(){return{dialogType:"",groups:[],routeStrategies:[],glueTypes:[],blockStrategies:[],failStrategies:[],headers:{},tableKey:0,total:null,list:null,listLoading:!0,dialogFormVisible:!1,queryParams:{jobGroup:null,jobDesc:"",executorHandler:"",pageNo:1,pageSize:10},jobForm:{id:null,jobGroup:null,executorRouteStrategy:"",glueType:null,executorParam:"",executorBlockStrategy:"",author:"",jobDesc:"",jobCron:"",executorHandler:"",childJobId:null,executorFailStrategy:"",alarmEmail:""},rules:n()({jobGroup:[{required:!0,message:"请选择执行器",trigger:"blur"}],executorRouteStrategy:[{required:!0,message:"请选择路由策略",trigger:"blur"}],executorHandler:[{required:!0,message:"请输入执行器BEAN名称",trigger:"blur"}],glueType:[{required:!0,message:"请选择运行模式",trigger:"blur"}],author:[{required:!0,message:"请输入负责人",trigger:"blur"}],jobDesc:[{required:!0,message:"请输入任务描述",trigger:"blur"}],jobCron:[{required:!0,message:"请输入Cron表达式",trigger:"blur"}],executorFailStrategy:[{required:!0,message:"请选择失败策略",trigger:"blur"}],alarmEmail:[{required:!1,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],executorBlockStrategy:[{required:!0,message:"请选择阻塞策略",trigger:"blur"}]},"executorFailStrategy",[{required:!0,message:"请选择失败策略",trigger:"blur"}]),operateJobId:null,pageBoolean:{delColor:"primary",delText:"批量删除",addColor:"success",addText:"添加作业"},operateText:["执行","暂停","删除"]}},created:function(){this.headers={accessToken:Object(a.a)()},this.getJobsList()},methods:{addForm:function(){var e=this;this.$refs.jobForm.validate(function(t){if(!t)return!1;Object(l.a)(e.jobForm).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"新增成功",type:"success"}),e.getJobsList()):e.$message(t.msg)}).catch(function(e){console.log(e.message)})})},updateForm:function(){var e=this;this.$refs.jobForm.validate(function(t){if(!t)return!1;Object(l.h)(e.jobForm).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"更新成功",type:"success"}),e.getJobsList()):e.$message(t.msg)}).catch(function(e){console.log(e.message)})})},getJobsList:function(){var e=this;Object(l.b)(this.queryParams).then(function(t){var o=t.code,r=t.msg,n=t.content,a=n.recordsTotal,l=n.data,s=n.blockStrategies,i=n.glueTypes,u=n.groups,c=n.routeStrategies,d=n.failStrategies;200===o?(e.total=a,e.list=l,e.groups=u,e.routeStrategies=c,e.glueTypes=i,e.blockStrategies=s,e.failStrategies=d,0===a&&e.$message({message:"未找到符合条件的作业任务",type:"warning"})):e.$message({message:r,type:"warning"}),e.listLoading=!1}).catch(function(t){e.listLoading=!1})},getDataByFilter:function(){this.queryParams.pageNo=1,this.getJobsList()},jobCreate:function(){this.jobForm={id:null,jobGroup:null,executorRouteStrategy:"",glueType:null,executorParam:"",executorBlockStrategy:"",author:"",jobDesc:"",jobCron:"",executorHandler:"",childJobId:null,executorFailStrategy:"",alarmEmail:""},this.dialogFormVisible=!0,this.dialogType="create"},warnBeforeOperate:function(e,t){var o=this;this.$confirm("确认"+this.operateText[e]+"该作业？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(r){0===e?o.exeJob(t):1===e&&o.deleteJob(t)}).catch(function(e){return console.log(e)})},justifyIfAllow:function(e,t){"NORMAL"===e||"PAUSED"===e?this.warnBeforePauseAndBack(e,t):this.$message({message:"该状态的作业不允许操作",type:"warning"})},warnBeforePauseAndBack:function(e,t){var o=this,r="PAUSED"===e?"恢复":"暂停";this.$confirm("确认"+r+"该作业？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(r){"PAUSED"===e?o.resumeJob(t):"NORMAL"===e&&o.pauseJob(t)}).catch(function(e){return console.log(e)})},exeJob:function(e){var t=this;Object(l.f)(e).then(function(e){200===e.code?(t.$message({message:"触发成功",type:"success"}),t.getJobsList()):t.$message(e.msg)}).catch(function(e){this.$message(e)})},pauseJob:function(e){var t=this;Object(l.d)(e).then(function(e){200===e.code?(t.$message({message:"暂停成功",type:"success"}),t.getJobsList()):t.$message(e.msg)}).catch(function(e){this.$message(e)})},resumeJob:function(e){var t=this;Object(l.e)(e).then(function(e){200===e.code?(t.$message({message:"恢复成功",type:"success"}),t.getJobsList()):t.$message(e.msg)}).catch(function(e){this.$message(e)})},deleteJob:function(e){var t=this;Object(l.g)(e).then(function(e){200===e.code?(t.$message({message:"删除成功",type:"success"}),t.getJobsList()):t.$message({message:e.msg,type:"error"})}).catch(function(e){this.$message(e)})},formatJobStatus:function(e){switch(e){case"NORMAL":return'<span style="color: seagreen;font-style: oblique;text-decoration:underline">NORMAL</span>';case"NONE":return'<span style="color: darkgoldenrod;font-style: oblique;text-decoration:underline">NONE</span>';case"PAUSED":return'<span style="color: grey;font-style: oblique;text-decoration:underline">PAUSED</span>';case"ERROR":return'<span style="color: red;font-style: oblique;text-decoration:underline">ERROR</span>';case"COMPLETE":return'<span style="color: green;font-style: oblique;text-decoration:underline">ERROR</span>';case"BLOCKED":return'<span style="color: goldenrod;font-style: oblique;text-decoration:underline">ERROR</span>';default:return null}},editJob:function(e){this.dialogFormVisible=!0,this.operateJobId=e.id,this.dialogType="update",this.jobForm=e},editCompleted:function(e){this.dialogFormVisible=!1,e&&this.getJobsList()},formateNumber:function(e){console.log(e)},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getGoodsData()},handleCurrentChange:function(e){this.queryParams.pageNo=e,this.getGoodsData()}},computed:{getExecutorList:function(){var e=this;axios.get("").then(function(t){var o=t.code,r=t.data;"0"===o&&(e.gradeList=r)})}}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"top"},[o("el-row",{staticClass:"fitersLine"},[o("el-col",{attrs:{span:24}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{label:"执行器"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.queryParams.jobGroup,callback:function(t){e.$set(e.queryParams,"jobGroup",t)},expression:"queryParams.jobGroup"}},[o("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),e._l(e.groups,function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})],2)],1),e._v(" "),o("el-form-item",{attrs:{label:"任务描述"}},[o("el-input",{attrs:{placeholder:"请输入任务描述"},model:{value:e.queryParams.jobDesc,callback:function(t){e.$set(e.queryParams,"jobDesc",t)},expression:"queryParams.jobDesc"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"JobHandler"}},[o("el-input",{attrs:{placeholder:""},model:{value:e.queryParams.executorHandler,callback:function(t){e.$set(e.queryParams,"executorHandler",t)},expression:"queryParams.executorHandler"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:e.getDataByFilter}},[e._v("查询")])],1),e._v(" "),o("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:e.pageBoolean.addColor,icon:"el-icon-plus"},on:{click:e.jobCreate}},[e._v(e._s(e.pageBoolean.addText)+"\n        ")])],1)],1)],1),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,"default-sort":{prop:"inTime",order:"descending"},"element-loading-text":"数据加载中，请稍后",border:"",fit:"","highlight-current-row":!1}},[o("el-table-column",{attrs:{label:"任务ID",align:"center","min-width":"30",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"jobDesc",label:"任务描述","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.jobDesc))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"gulueType",label:"运行模式","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.glueType)+":"+e._s(t.row.executorHandler))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"jobCron",label:"Cron","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.jobCron))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"author",label:"负责人","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.author))]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"author",label:"状态","min-width":"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{domProps:{innerHTML:e._s(e.formatJobStatus(t.row.jobStatus))}})]}}])}),e._v(" "),o("el-table-column",{attrs:{align:"center",prop:"name",label:"操作","show-overflow-tooltip":"","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{staticStyle:{"margin-bottom":"5px"}},[o("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(o){e.warnBeforeOperate(0,t.row.id)}}},[e._v("执行")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(o){e.justifyIfAllow(t.row.jobStatus,t.row.id)}}},[e._v("\n            "+e._s("PAUSED"===t.row.jobStatus?"恢复":"暂停")+"\n          ")])],1),e._v(" "),o("div",[o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(o){e.editJob(t.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){e.warnBeforeOperate(1,t.row.id)}}},[e._v("删除\n          ")])],1)]}}])})],1),e._v(" "),o("el-dialog",{attrs:{width:"60%",title:"create"==e.dialogType?"新增作业":"编辑作业",visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{ref:"jobForm",attrs:{model:e.jobForm,rules:e.rules,"label-width":"100px"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.jobForm.jobGroup,callback:function(t){e.$set(e.jobForm,"jobGroup",t)},expression:"jobForm.jobGroup"}},e._l(e.groups,function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.jobForm.executorRouteStrategy,callback:function(t){e.$set(e.jobForm,"executorRouteStrategy",t)},expression:"jobForm.executorRouteStrategy"}},e._l(e.routeStrategies,function(e,t){return o("el-option",{key:t,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"运行模式",prop:"glueType"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.jobForm.glueType,callback:function(t){e.$set(e.jobForm,"glueType",t)},expression:"jobForm.glueType"}},e._l(e.glueTypes,function(e,t){return o("el-option",{key:t,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"阻塞策略",prop:"executorBlockStrategy"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.jobForm.executorBlockStrategy,callback:function(t){e.$set(e.jobForm,"executorBlockStrategy",t)},expression:"jobForm.executorBlockStrategy"}},e._l(e.blockStrategies,function(e,t){return o("el-option",{key:t,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"失败处理策略",prop:"executorFailStrategy"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.jobForm.executorFailStrategy,callback:function(t){e.$set(e.jobForm,"executorFailStrategy",t)},expression:"jobForm.executorFailStrategy"}},e._l(e.failStrategies,function(e,t){return o("el-option",{key:t,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"报警邮件",prop:"alarmEmail"}},[o("el-input",{attrs:{label:"请输入报警邮件,如果存在多个则逗号分隔"},model:{value:e.jobForm.alarmEmail,callback:function(t){e.$set(e.jobForm,"alarmEmail",t)},expression:"jobForm.alarmEmail"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务描述",prop:"jobDesc"}},[o("el-input",{attrs:{label:"请输入任务描述"},model:{value:e.jobForm.jobDesc,callback:function(t){e.$set(e.jobForm,"jobDesc",t)},expression:"jobForm.jobDesc"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[o("el-input",{attrs:{label:"请输入Cron"},model:{value:e.jobForm.jobCron,callback:function(t){e.$set(e.jobForm,"jobCron",t)},expression:"jobForm.jobCron"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"JobHandler",prop:"executorHandler"}},[o("el-input",{attrs:{label:"executorHandler"},model:{value:e.jobForm.executorHandler,callback:function(t){e.$set(e.jobForm,"executorHandler",t)},expression:"jobForm.executorHandler"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"任务参数",prop:"executorParam"}},[o("el-input",{attrs:{label:"请输入任务参数"},model:{value:e.jobForm.executorParam,callback:function(t){e.$set(e.jobForm,"executorParam",t)},expression:"jobForm.executorParam"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"子任务ID",prop:"childJobId"}},[o("el-input",{attrs:{label:"请输入子任务的ID,如果存在多个则逗号分隔"},model:{value:e.jobForm.childJobId,callback:function(t){e.$set(e.jobForm,"childJobId",e._n(t))},expression:"jobForm.childJobId"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"负责人",prop:"author"}},[o("el-input",{attrs:{label:"请输入负责人"},model:{value:e.jobForm.author,callback:function(t){e.$set(e.jobForm,"author",t)},expression:"jobForm.author"}})],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogType?o("el-button",{attrs:{type:"primary"},on:{click:e.addForm}},[e._v("提 交")]):o("el-button",{attrs:{type:"primary"},on:{click:e.updateForm}},[e._v("更 新")])],1)],1),e._v(" "),o("el-row",{staticStyle:{"padding-top":"20px"},attrs:{type:"flex",justify:"space-between"}},[o("el-col",{staticStyle:{"text-align":"right"}},[o("el-pagination",{attrs:{background:"","current-page":e.queryParams.pageNo,"page-sizes":[10,20,30,50],"page-size":10,layout:"total, sizes, prev, pager, next",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.queryParams,"pageNo",t)}}})],1)],1)],1)},staticRenderFns:[]};var u=o("VU/8")(s,i,!1,function(e){o("F0nk"),o("cpbI")},"data-v-15f01f3e",null);t.default=u.exports},Xjet:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"\n.el-button--mini {\n  padding: 7px 10px;\n}\n.el-button + .el-button {\n  margin-left: 1px;\n}\n.el-upload {\n  text-align: left;\n}\n.el-dialog__body {\n  line-height: 0;\n  padding: 0 0 20px;\n}\n.el-dialog__header {\n  padding-bottom: 0;\n}\n.el-steps--simple {\n  margin: 10px 0;\n}\n.border-none input {\n  border: none;\n  padding: 0;\n  text-align: center;\n}\n.border-none input:focus {\n    border: 1px solid #dcdfe6;\n}\n.el-table--enable-row-hover .el-table__body tr:hover > td {\n  background: transparent;\n}\n.fitersLine .el-form-item__content {\n  margin-left: 0 !important;\n}\n.fitersLine .el-form-item__label {\n  min-width: auto !important;\n}\n.el-table .cell {\n  line-height: 1;\n  padding: 0 3px;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/jobs/list.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;CACpB;AACD;IACI,0BAA0B;CAC7B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,eAAe;EACf,eAAe;CAChB",file:"list.vue",sourcesContent:["\n.el-button--mini {\n  padding: 7px 10px;\n}\n.el-button + .el-button {\n  margin-left: 1px;\n}\n.el-upload {\n  text-align: left;\n}\n.el-dialog__body {\n  line-height: 0;\n  padding: 0 0 20px;\n}\n.el-dialog__header {\n  padding-bottom: 0;\n}\n.el-steps--simple {\n  margin: 10px 0;\n}\n.border-none input {\n  border: none;\n  padding: 0;\n  text-align: center;\n}\n.border-none input:focus {\n    border: 1px solid #dcdfe6;\n}\n.el-table--enable-row-hover .el-table__body tr:hover > td {\n  background: transparent;\n}\n.fitersLine .el-form-item__content {\n  margin-left: 0 !important;\n}\n.fitersLine .el-form-item__label {\n  min-width: auto !important;\n}\n.el-table .cell {\n  line-height: 1;\n  padding: 0 3px;\n}\n"],sourceRoot:""}])},bOdI:function(e,t,o){"use strict";t.__esModule=!0;var r,n=o("C4MV"),a=(r=n)&&r.__esModule?r:{default:r};t.default=function(e,t,o){return t in e?(0,a.default)(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},cpbI:function(e,t,o){var r=o("Xjet");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o("rjj0")("6a2b7284",r,!0)},"kED/":function(e,t,o){"use strict";t.b=function(e){return Object(r.a)({url:"/jobinfo/pageList",method:"get",params:e})},t.c=function(e){return Object(r.a)({url:"/jobinfo/jobsByGroup",method:"get",params:{groupId:e}})},t.a=function(e){return Object(r.a)({url:"/jobinfo/add",method:"post",data:e})},t.g=function(e){return Object(r.a)({url:"/jobinfo/remove",method:"get",params:{id:e}})},t.h=function(e){return Object(r.a)({url:"/jobinfo/update",method:"post",data:e})},t.f=function(e){return Object(r.a)({url:"/jobinfo/trigger",method:"get",params:{id:e}})},t.e=function(e){return Object(r.a)({url:"/jobinfo/resume",method:"get",params:{id:e}})},t.d=function(e){return Object(r.a)({url:"/jobinfo/pause",method:"get",params:{id:e}})};var r=o("vLgD")},mClu:function(e,t,o){var r=o("kM2E");r(r.S+r.F*!o("+E39"),"Object",{defineProperty:o("evD5").f})},oI2q:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"\n.top[data-v-15f01f3e] {\n  padding: 10px;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/jobs/list.vue"],names:[],mappings:";AACA;EACE,cAAc;CACf",file:"list.vue",sourcesContent:["\n.top[data-v-15f01f3e] {\n  padding: 10px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.f50a99270b9d2df9adb3.js.map