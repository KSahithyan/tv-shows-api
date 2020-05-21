"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const episodeIdTemplate = (seasonNo, episodeNo) => `S${seasonNo.toString().padStart(2, '0')}E${episodeNo.toString().padStart(2, '0')}`;
