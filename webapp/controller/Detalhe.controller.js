sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("ovly_fiori_21.cadastro_de_alunos.controller.Detalhe", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ovly_fiori_21.cadastro_de_alunos.view.Detalhe
		 */
		onInit: function () {

			var oRouter = this.getOwnerComponent().getRouter();
			var oRotaExibir = oRouter.getRoute("exibir");
			oRotaExibir.attachPatternMatched(this.onPatternMatched, this);

		},

		onPatternMatched: function (oEvent) {
			// debugger;
			var oArguments = oEvent.getParameters().arguments;
			var oDataModel = this.getView().getModel();     //ODtaModel
			var sPath = oDataModel.createKey("Studants", {
				Id: oArguments.codigo
			});
			this.getView().bindElement("/" + sPath);
		},


		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("listagem");
		},
		
		toUpper: function(s){
			if(s){
				return s.toUpperCase();
			}
		}

	});
});