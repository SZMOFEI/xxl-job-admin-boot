webpackJsonp([4],{"8q5N":function(e,t,a){var i=a("bqN2");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("6be050a1",i,!0)},Pd2J:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("TIfe"),n=a("COTu"),s={name:"list",props:{},components:{},data:function(){return{addressTypeEnum:[{code:0,msg:"自动注册"},{code:1,msg:"手动输入"}],dialogStatus:"create",dialogFormVisible:!1,userTypeCode:null,userTypes:[{code:0,msg:"超级管理员"},{code:1,msg:"普通用户"}],headers:{},modifyData:"",form:{id:null,appName:"",title:"",order:null,addressType:null,addressList:""},rules:{appName:[{required:!0,message:"请输入用户名",trigger:"blur"}],title:[{required:!0,message:"请选择用户类型",trigger:"blur"}],order:[{required:!0,message:"请输入排列顺序",trigger:"blur"}],addressType:[{required:!0,message:"请选择注册类型",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{appName:"",title:"",pageNo:1,pageSize:10},tableKey:0,pageBoolean:{delColor:"primary",delText:"批量删除",addColor:"success",addText:"添加执行器"}}},created:function(){},mounted:function(){this.headers={accessToken:Object(i.a)()},this.getList()},watch:{},methods:{addForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;Object(n.a)(e.form).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"新增成功",type:"success"}),e.getList()):e.$message(t.msg),e.listLoading=!1}).catch(function(e){console.log(e.message)})})},updateForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;Object(n.e)(e.form).then(function(t){200===t.code?(e.dialogFormVisible=!1,e.$message({message:"更新成功",type:"success"}),e.getList()):e.$message(t.msg)}).catch(function(e){console.log(e.message)})})},executorCreate:function(){this.form={id:null,appName:"",title:"",order:null,addressType:null,addressList:""},this.dialogFormVisible=!0,this.dialogStatus="create"},getList:function(){var e=this;Object(n.b)(this.listQuery).then(function(t){e.listLoading=!1;var a=t.code,i=t.content,n=i.list,s=i.total;200===a?(e.list=n,e.total=s,0===e.total&&e.$message({message:"执行器列表为空",type:"warning"})):e.$message(t.msg)})},executorModify:function(e){this.dialogFormVisible=!0,this.dialogStatus="update",this.form=e},modifyComplete:function(e){if(!e)return!1;this.getList(),this.dialogFormVisible=!1},warnBeforeDelete:function(e,t){var a=this;this.$confirm("确认删除当前执行器？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(i){a.batchDelete(e,t)}).catch(function(e){return console.log(e)})},batchDelete:function(e,t){var a=this;Object(n.d)(t.id).then(function(t){if(200===t.code){a.$message({message:"删除成功",type:"success",duration:2e3});a.list.indexOf(e);a.list.splice(e,1),a.total--}else a.$message({message:"删除失败",type:"error",duration:2e3})}).catch(function(e){console.log(e.message)})},formatAddressList:function(e){if(null!=e&&""!=e){var t="";return e.split(",").forEach(function(e){t+=e+"<br>"}),t}},handleFilter:function(){this.listQuery.pageNo=1,this.getList()},handleSizeChange:function(e){this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.getList()},handleRefresh:function(){this.list=null,this.total=null,this.listQuery.pageNo=1,this.getList()}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"20px"}},[a("span",{staticStyle:{"margin-right":"10px"}},[e._v("AppName")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"AppName"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.appName,callback:function(t){e.$set(e.listQuery,"appName",t)},expression:"listQuery.appName"}}),e._v(" "),a("span",{staticStyle:{"margin-right":"10px"}},[e._v("名称")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px","margin-left":"10px"},attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:e.pageBoolean.addColor,icon:"el-icon-plus"},on:{click:e.executorCreate}},[e._v(e._s(e.pageBoolean.addText)+"\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,ref:"list",staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"数据加载中，请稍后",border:"",fit:"","highlight-current-row":"","select-on-indeterminate":""}},[a("el-table-column",{attrs:{align:"center",label:"ID","min-width":"30"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"AppName","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.appName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100",align:"center",label:"名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"排序","min-width":"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.order))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"60",align:"center",label:"注册方式","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addressTypeDesc))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"120",align:"center",label:"OnLine机器地址","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"seagreen"},domProps:{innerHTML:e._s(e.formatAddressList(t.row.addressList))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.executorModify(t.row)}}},[e._v("编辑\n        ")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.warnBeforeDelete(t.$index,t.row)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.pageNo,"page-sizes":[10,20,30,50],"page-size":e.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"pageNo",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"create"==e.dialogStatus?"新增执行器":"编辑执行器",visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"AppName","label-width":"80px",prop:"appName"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"180",placeholder:"请输入AppName"},model:{value:e.form.appName,callback:function(t){e.$set(e.form,"appName",t)},expression:"form.appName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称","label-width":"80px",prop:"title"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"180",placeholder:"请输入名称"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序","label-width":"80px",prop:"order"}},[a("el-input-number",{attrs:{min:1,placeholder:"请输入排列顺序"},model:{value:e.form.order,callback:function(t){e.$set(e.form,"order",t)},expression:"form.order"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"注册方式",prop:"addressType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.addressType,callback:function(t){e.$set(e.form,"addressType",t)},expression:"form.addressType"}},e._l(e.addressTypeEnum,function(e){return a("el-option",{key:e.code,attrs:{label:e.msg,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"地址列表","label-width":"80px",prop:"addressList"}},[a("el-input",{attrs:{"auto-complete":"off",maxlength:"180",type:"textarea",placeholder:"请输入执行器地址，多个地址用逗号分隔"},model:{value:e.form.addressList,callback:function(t){e.$set(e.form,"addressList",t)},expression:"form.addressList"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.addForm}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateForm}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,o,!1,function(e){a("bb8R"),a("8q5N")},"data-v-bb173bfc",null);t.default=l.exports},bb8R:function(e,t,a){var i=a("yGDz");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("33390c1b",i,!0)},bqN2:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.dialogModifyLessonManage .el-dialog__header {\n  padding-bottom: 0;\n}\n.dialogModifyLessonManage .el-dialog__body {\n  padding: 0;\n}\n.dialogModifyLessonManage .createPost-main-container {\n  padding: 20px 0 !important;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/executor/list.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,2BAA2B;CAC5B",file:"list.vue",sourcesContent:["\n.dialogModifyLessonManage .el-dialog__header {\n  padding-bottom: 0;\n}\n.dialogModifyLessonManage .el-dialog__body {\n  padding: 0;\n}\n.dialogModifyLessonManage .createPost-main-container {\n  padding: 20px 0 !important;\n}\n"],sourceRoot:""}])},yGDz:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.app-container[data-v-bb173bfc] {\n  padding: 20px;\n}\n.pagination-container[data-v-bb173bfc] {\n  margin-top: 30px;\n}\n","",{version:3,sources:["D:/vuework/xxl-job-admin-vue-h5/src/views/executor/list.vue"],names:[],mappings:";AACA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB",file:"list.vue",sourcesContent:["\n.app-container[data-v-bb173bfc] {\n  padding: 20px;\n}\n.pagination-container[data-v-bb173bfc] {\n  margin-top: 30px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.e007966b4a2d67dc853c.js.map