/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comwipro/getds_reskin/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
