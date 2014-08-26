define(["text!sulusalescore/components/editable-data-row/templates/address.form.html"],function(a){"use strict";var b={instanceName:"undefined",fields:null,defaultProperty:null,overlayTemplate:null,overlayTitle:"",selectSelector:"#address-select"},c={rowClass:"editable-row",rowClassSelector:".editable-row",overlayTitle:"salesorder.orders.addressOverlayTitle",formSelector:".editable-data-overlay-form"},d={rowTemplate:function(a,b){return b?['<span class="block ',c.rowClass,' disabled">',a,"</span>"].join(""):['<span class="block pointer ',c.rowClass,'">',a,"</span>"].join("")}},e="sulu.editable-data-row.address-view.",f=function(){this.sandbox.emit(e+this.options.instanceName+".initialized")},g=function(a){this.sandbox.emit(e+this.options.instanceName+".changed",a)},h=function(){this.context.disabled||(this.sandbox.on("husky.overlay."+this.context.options.instanceName+".opened",function(){this.openedDialog||l.call(this),this.openedDialog=!1}.bind(this)),this.sandbox.on("husky.overlay."+this.options.instanceName+".initialized",function(){this.openedDialog=!1}.bind(this)),this.sandbox.on("husky.select."+this.options.instanceName+".select.selected.item",function(a){var b=k.call(this,a);n.call(this,b)}.bind(this)))},i=function(){this.sandbox.emit("husky.overlay."+this.context.options.instanceName+".close"),this.sandbox.emit("sulu.overlay.show-warning","salesorder.orders.addressOverlayWarningTitle","salesorder.orders.addressOverlayWarningMessage",j.bind(this,!1),j.bind(this,!0)),this.openedDialog=!0},j=function(a){if(a){var b=this.sandbox.form.getData(this.formObject,!0);this.context.selectedData=this.sandbox.util.extend({},this.context.selectedData,b),g.call(this,this.context.selectedData),q.call(this,this.context.selectedData)}else this.sandbox.emit("husky.overlay."+this.context.options.instanceName+".open")},k=function(a){var b=null;return this.sandbox.util.each(this.context.data,function(c,d){return d.id.toString()===a?(b=d,!1):void 0}.bind(this)),b},l=function(){var a=p.call(this,this.context.data),b=this.sandbox.dom.find(this.options.selectSelector,this.$el);this.sandbox.start([{name:"select@husky",options:{el:b,instanceName:this.options.instanceName+".select",valueName:"fullAddress",data:a,defaultLabel:this.sandbox.translate("public.please-choose")}}]),m.call(this)},m=function(){var a=this.sandbox.dom.find(c.formSelector,this.context.$el);this.formObject=this.sandbox.form.create(a),this.formObject.initialized.then(function(){this.context.selectedData&&n.call(this,this.context.selectedData)}.bind(this))},n=function(a){this.sandbox.form.setData(this.formObject,a).fail(function(a){this.sandbox.logger.error("An error occured when setting data!",a)}.bind(this))},o=function(){this.sandbox.dom.on(this.context.$el,"click",function(){this.sandbox.emit("sulu.editable-data-row."+this.options.instanceName+".overlay.initialize",{overlayTemplate:a,overlayTitle:c.overlayTitle,overlayOkCallback:i.bind(this),overlayCloseCallback:null,overlayData:this.context.data})}.bind(this),c.rowClassSelector)},p=function(a){return a&&"array"===this.sandbox.util.typeOf(a)?this.sandbox.util.foreach(a,function(a){a&&a.country&&a.country.name&&(a.country=a.country.name),a.fullAddress=r.call(this,a)}.bind(this)):(a&&a.country&&a.country.name&&(a.country=a.country.name),a.fullAddress=r.call(this,a)),a},q=function(a){var b,e,f;e=this.sandbox.dom.find(c.rowClassSelector,this.context.$el),this.sandbox.dom.remove(e),a&&(f=p.call(this,a),b=this.sandbox.dom.createElement(d.rowTemplate(f.fullAddress,this.context.options.disabled)),this.sandbox.dom.append(this.context.$el,b))},r=function(a){var b=a.street;return b+=b.length&&a.number?" "+a.number:a.number,b+=b.length&&a.zip?", "+a.zip:"",b+=b.length&&a.city?" "+a.city:a.city,b+=b.length&&a.country?", "+a.country:a.country};return{initialize:function(a,c){this.context=a,this.sandbox=this.context.sandbox,this.options=this.sandbox.util.extend({},b,c),this.openedDialog=!1,h.call(this),o.call(this),f.call(this)},render:function(){q.call(this,this.context.selectedData)}}});