export const RIOT_API = {
  account: {
    byPuuid: 'api.riotgames.com/riot/account/v1/accounts/by-puuid',
    byRiotId: 'api.riotgames.com/riot/account/v1/accounts/by-riot-id',
    activeShards: 'api.riotgames.com/riot/account/v1/active-shards/by-game/val/by-puuid'
  },
  content: {
    contents: 'api.riotgames.com/val/content/v1/contents?locale=en-US'
  },
  match: {
    matches: 'api.riotgames.com/val/match/v1/matches',
    matchlist: 'api.riotgames.com/val/match/v1/matchlists/by-puuid'
  }
}

export const validRegions: Array<string> = ['americas', 'asia', 'europe']
export const validShards: Array<string> = ['ap', 'br', 'eu', 'kr', 'latam', 'na']
