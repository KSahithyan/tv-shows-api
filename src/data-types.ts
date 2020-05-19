// export interface EpisodeId {
//     season_no: number,
//     episode_no: number
// }


export interface EpisodeId {
    toString(): string
    valueOf(): string
}
export class EpisodeId {
    season_no: number
    episode_no: number
    
    constructor(_season_no: number, _episode_no: number) {
        this.season_no = _season_no
        this.episode_no = _episode_no
    }
}

EpisodeId.prototype.toString = function () {
    return `S${this.season_no.toString().padStart(2, '0')}E${this.episode_no.toString().padStart(2, '0')}`
}

EpisodeId.prototype.valueOf = function () {
    return `S${this.season_no.toString().padStart(2, '0')}E${this.episode_no.toString().padStart(2, '0')}`
}

Object.prototype.hasOwnProperty

export interface CharacterObj {
    character_name: string,
    actor_name: string,
    first_appearance: EpisodeId
}

export interface EpisodeObj {
    episode_id: EpisodeId,
    title: string,
    important_notes: string[],
    first_appearances: string[]
}

export interface ShowObject {
    code_name: string,
    name: string,
    status: "Ended" | "Running",
    season_count: number,
    episodes_count_total: number,
    episodes_count_per_season: {},
    characters: CharacterObj[],
    episode_list: EpisodeObj[],
    reference: string[]
}

export interface DataObj {
    shows: ShowObject[]
}