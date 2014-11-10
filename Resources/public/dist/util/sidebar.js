define(["app-config","sulusalesshipping/model/shipping"],function(a,b){"use strict";var c={widgetUrls:{shippingInfo:"/admin/widget-groups/shipping-info",shippingDetail:"/admin/widget-groups/shipping-detail{?params*}"}},d=function(){this.sandbox.on("sulu.flow-of-documents.orders.row.clicked",function(a){var b,c;a.route&&(this.sandbox.emit("sulu.router.navigate",a.route),b=a.route.split("/"),c=b[0]+"/"+b[1],this.sandbox.emit("husky.navigation.select-item",c))}.bind(this))},e=function(){this.sandbox.on("husky.datagrid.item.click",function(a){g.call(this,{data:a,callback:function(a,b){this.sandbox.emit("sulu.sidebar.set-widget",c.widgetUrls.shippingInfo+"?contact="+a+"&account="+b)}.bind(this)})},this)},f=function(){this.sandbox.dom.off("#sidebar"),this.sandbox.dom.on("#sidebar","click",function(a){var b=this.sandbox.dom.data(a.currentTarget,"id");this.sandbox.emit("sulu.router.navigate","contacts/accounts/edit:"+b+"/details"),this.sandbox.emit("husky.navigation.select-item","contacts/accounts")}.bind(this),"#sidebar-account"),this.sandbox.dom.on("#sidebar","click",function(a){var b=this.sandbox.dom.data(a.currentTarget,"id");this.sandbox.emit("sulu.router.navigate","contacts/contacts/edit:"+b+"/details"),this.sandbox.emit("husky.navigation.select-item","contacts/contacts")}.bind(this),"#sidebar-contact")},g=function(a){if(a&&a.data&&a.callback&&"function"==typeof a.callback){var c,d=b.findOrCreate({id:a.data});d.fetch({success:function(b){c=b.toJSON(),c.order.account&&c.order.contact?a.callback(c.order.contact.id,c.order.account.id):this.sandbox.logger.error("received invalid data when initializing sidebar",c)}.bind(this),error:function(){this.sandbox.logger.error("error while fetching order")}.bind(this)})}else this.sandbox.logger.error("param for getDataForListSidebar has to be an object with a data attribute and a valid callback (attribute)!")};return{initForDetail:function(b,e){var g,h;this.sandbox=b,e.order.contact&&e.order.account&&e.status?(h=this.sandbox.uritemplate.parse(c.widgetUrls.shippingDetail),g=h.expand({params:{id:e.id,number:e.number,contact:e.order.contact.id,account:e.order.account.id,status:e.status.status,locale:a.getUser().locale,date:e.expectedDeliveryDate,orderDate:e.order.orderDate,orderNumber:e.order.number,orderId:e.order.id}}),f.call(this),d.call(this)):(h=this.sandbox.uritemplate.parse(c.widgetUrls.shippingDetail),g=h.expand({params:{}})),this.sandbox.emit("sulu.sidebar.set-widget",g)},initForList:function(a){this.sandbox=a,f.call(this),e.call(this)}}});