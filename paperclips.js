
clearInterval(autonato);
console.clear();

stratPickerElement.value = 3;
sliderElement.value = 100;

var autonato = setInterval(() => {
	"use strict";

	/**
	 * Click a button from its ID.
	 * @param {string} id `document.querySelector(id)`
	 * @returns {boolean} Weather it was clicked or not.
	 */
	const click_btn = (id) => {
		const btn = document.querySelector(id);
		const valid = btn && !btn.disabled && btn.parentNode.style.display !== "none";
		if (valid) {
			btn.click();
			console.log(id);
		}
		return valid;
	};

	// Run
	if (click_btn("#btnRunTournament")) return;

	// New Tournament
	if (click_btn("#btnNewTournament")) return;

	// Upgrade Investment Engine
	if (click_btn("#btnImproveInvestments")) return;

	// Marketing
	if (click_btn("#btnExpandMarketing")) return;

	// Raise
	if (avgSales > clipRate) {
		if (click_btn("#btnRaisePrice")) return;
	}

	// MegaClippers
	if (megaClipperCost * 10 < adCost)
		if (click_btn("#btnMakeMegaClipper")) return;

	// AutoClippers
	if (clipperCost * 10 < adCost && clipperCost * 10 < megaClipperCost)
		if (click_btn("#btnMakeClipper")) return;

	/*
	 * Release the HypnoDrones
	 */

	if (document.querySelector("#projectButton46") && project46.flag === 0) {

		// Space Exploration
		if (click_btn("#projectButton46")) return;

		if (batterySize * batteryLevel < 10000000) {

			// Battery Tower
			if (click_btn("#btnBatteryx100")) return;
			if (click_btn("#btnBatteryx10")) return;
			if (click_btn("#btnMakeBattery")) return;
		} else {

			// Disassemble Solar Farm
			if (click_btn("#btnFarmReboot")) return;
		}

		// Dismantle everything
		if (click_btn("#btnHarvesterReboot")) return;
		if (click_btn("#btnWireDroneReboot")) return;
		if (click_btn("#btnFactoryReboot")) return;

	} else {

		// Synchronize the Swarm
		if (click_btn("#btnSynchSwarm")) return;

		// Entertain the Swarm
		if (click_btn("#btnEntertainSwarm")) return;

		// Solar Farm
		if (farmRate * farmLevel <= factoryPowerRate * factoryLevel + dronePowerRate * wireDroneLevel + dronePowerRate * harvesterLevel) {
			if (click_btn("#btnFarmx100")) return;
			if (click_btn("#btnFarmx10")) return;
			if (click_btn("#btnMakeFarm")) return;
		}

		// Harvester Drone
		if (harvesterRate * harvesterLevel <= wireDroneRate * wireDroneLevel) {
			if (click_btn("#btnHarvesterx1000")) return;
			if (click_btn("#btnHarvesterx100")) return;
			if (click_btn("#btnHarvesterx10")) return;
			if (click_btn("#btnMakeHarvester")) return;
		}

		// Wire Drone
		if (wireDroneRate * wireDroneLevel / 2 <= factoryRate * factoryLevel * factoryBoost) {
			if (click_btn("#btnWireDronex1000")) return;
			if (click_btn("#btnWireDronex100")) return;
			if (click_btn("#btnWireDronex10")) return;
			if (click_btn("#btnMakeWireDrone")) return;
		}

		// Clip Factory
		if (click_btn("#btnMakeFactory")) return;

	}

	/*
 	 * Space Exploration
 	 */



	/*
	 * Idle
	 */

	// Compute
	let value = 0;
	qChips.forEach(qChip => {
		if (qChip.active === 1) value += qChip.value;
	});
	if (value > 0) {
		if (click_btn("#btnQcompute")) return;
	}

	// Make Paperclip
	if (click_btn("#btnMakePaperclip")) return;

	// Wire
	if (click_btn("#btnBuyWire")) return;

}, 100);
