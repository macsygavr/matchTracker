const baseApiPath = "https://app.ftoyd.com/fronttemp-service";

export enum MatchStatus {
  Scheduled = "Scheduled", 
  Ongoing = "Ongoing", 
  Finished = "Finished"
}

export type MatchItemType = {
  time: Date;
  title: string;
  homeTeam: {
    name: string;
    players: [
      {
        username: string;
        kills: number;
      }
    ];
    points: number;
    place: number;
    total_kills: number;
  };
  awayTeam: {
    name: string;
    players: [
      {
        username: string;
        kills: number;
      }
    ];
    points: number;
    place: number;
    total_kills: number;
  };
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};

type MatchListResponse = {
  ok: boolean;
  data: {
    matches: MatchItemType[];
  };
};

export const getMatchList = (): Promise<MatchListResponse> => {
  return fetch(`${baseApiPath}/fronttemp`).then((response) => response.json());
};
