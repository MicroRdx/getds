/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["com/wipro/getdsreskin/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
