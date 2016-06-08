interface IDataService {
   getShows(url : string): Promise<CloudCastResult>;
   getEmotions(url : string) : Promise<Face[]>;
}