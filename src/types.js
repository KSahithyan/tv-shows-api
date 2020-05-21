"use strict";
exports.__esModule = true;
// Template for episodeID
var episodeIdTemplate = function (seasonNo, episodeNo) { return "S" + seasonNo.toString().padStart(2, '0') + "E" + episodeNo.toString().padStart(2, '0'); };
