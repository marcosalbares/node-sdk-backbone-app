define(["require","jquery","underscore","backbone","handlebars","views/base","text!templates/index.html"],function(t){"use strict";var e=t("jquery"),s=(t("underscore"),t("backbone"),t("handlebars"),t("views/base")),n=t("text!templates/index.html");return s.extend({isReady:!1,events:{"click #bTestRest":"onBtnTestRestClick","click #bTestSoap":"onBtnTestSoapClick"},initialize:function(){console.log("initialize"),s.prototype.initialize.call(this),this.templates.primary=n,this.setupCollections(),this.on("error",function(t){this.onShowError(t)},this),this.on("ready",function(){this.render()},this),this.trigger("ready")},render:function(){return console.log("render"),this.hasRendered=!0,this.empty(),this.$el.html(this.templates.primary),this.trigger("render"),this.createControls(),this},show:function(){return console.log("show"),this.hasRendered===!1&&this.fetchCollections(),this.$el.show(),this.trigger("show"),this},setupCollections:function(){},fetchCollections:function(){},createControls:function(){this.bindControls()},bindControls:function(){console.log("bindControls")},onShowError:function(t){e("#alertMsg").text(t),e("#alertModal").fadeIn("slow")},testGet:function(t){e.ajax({url:t,type:"GET",dataType:"json",success:function(){}})},onBtnTestRestClick:function(){this.testGet("test-rest")},onBtnTestSoapClick:function(){this.testGet("test-soap")}})});