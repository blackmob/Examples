"use strict";
var Q = require('Q');

export class DataService implements IDataService{

    constructor() {

    }
 
    public getShows = (url : string): Promise<CloudCastResult> => {
        let mixCloudUrl = url ? url : 'https://api.mixcloud.com/search/?q=Solid_Steel&type=cloudcast&since=2016-01-01';       
               
        return fetch( mixCloudUrl, {
              }).then((response) => {
                  
            return Q.resolve(response.json<CloudCastResult>());
            });
    }
    
    public getEmotions = (url : string): Promise<Face[]> => {
        
        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Ocp-Apim-Subscription-Key', '[your key here]]');
        
        return fetch('https://api.projectoxford.ai/emotion/v1.0/recognize', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({ url:  url }) 
        }).then((response) => {                  
            return Q.resolve(response.json<Face[]>());
            });
    }    

}