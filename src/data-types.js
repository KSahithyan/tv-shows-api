"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Template for episodeID
var episodeIdTemplate = function (seasonNo, episodeNo) { return "S" + seasonNo.toString().padStart(2, '0') + "E" + episodeNo.toString().padStart(2, '0'); };
