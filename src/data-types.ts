// Template for episodeID
const episodeIdTemplate = (seasonNo: number, episodeNo: number): any => `S${seasonNo.toString().padStart(2, '0')}E${episodeNo.toString().padStart(2, '0')}`
export interface CharacterObj {
    character_name: string,
    actor_name: string,
    first_appearance: string
}

export interface EpisodeObj {
    episode_id: string,
    episode_title: string,
    important_notes: string[],
    first_appearances: string[]
}

export interface ShowObject {
    id: string,
    name: string,
    status: "Ended" | "Running",
    start_date: string,
    category: string[],
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