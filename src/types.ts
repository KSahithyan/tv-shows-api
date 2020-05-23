// Template for episodeID
const episodeIdTemplate = (seasonNo: number, episodeNo: number): any => `S${seasonNo.toString().padStart(2, '0')}E${episodeNo.toString().padStart(2, '0')}`
export interface CharacterObj {
    character_name: string,
    actor_name: string,
    first_appearance: string
}

export interface SeasonObj {
    season_no: number,
    episode_count: number
}

export interface EpisodeObj {
    episode_id: string,
    episode_title: string,
    important_notes?: string[],
    first_appearances?: string[]
}

export interface ShowObject {
    is_complete_data: boolean,
    rating: number,
    id: string,
    name: string,
    status: "Ended" | "Running",
    start_date: string,
    end_date: string,
    category: string[],
    season_count: number,
    episodes_count_total: number,
    seasons: SeasonObj[],
    characters: CharacterObj[],
    episode_list: EpisodeObj[],
    reference: string[]
}

export interface DataObj {
    shows: ShowObject[]
}

export interface Error {
    message: string
}