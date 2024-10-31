export interface stat {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
};

export interface type {
  type: { name: string };
};

export interface ability {
  ability: {
    name: string,
    url: string
  },
  is_hidden: boolean,
  slot: number
}

export interface evolution_detail {
  gender: "1" | "2",
  held_item: string,
  item: {
    name: string, 
    url:string
  },
  known_move: string,
  known_move_type: {
    name: string,
    url: string
  },
  location: {
    name: string, 
    url:string
  },
  min_affection: number,
  min_beauty: number,
  min_happiness: number,
  min_level: number,
  needs_overworld_rain: boolean,
  party_species: string,
  party_type: string,
  relative_physical_stats: string,
  time_of_day: string
  trade_species: string,
  trigger: {
    name: string,
    url: string
  },
  turn_upside_down: boolean
}

export interface chain {
  evolution_details: evolution_detail[] | [],
  evolves_to: [{
    evolution_details: evolution_detail[],
    evolves_to: [
      {evolution_details: evolution_detail[],
      evolves_to: [],
      is_baby: boolean,
      species: {
        name:string;
        url:string;
      }
    }],
    is_baby: boolean,
    species: {
      name:string,
      url:string
    }
  }]
  is_baby: boolean,
  species: {
    name: string,
    url: string
  }
  id: number;
} 