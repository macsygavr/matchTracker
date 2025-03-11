import { MatchStatus } from "@/src/api/matchInfoApi";

export const getStatusName = (status: MatchStatus) => {
  switch (status) {
    case MatchStatus.Ongoing:
      return "Live"
  
    case MatchStatus.Scheduled:
      return "Sheduled"
  
    case MatchStatus.Finished:
      return "Finished"
  
    default:
      return null;
  }
}
