
     interface Paging {
        next: string;
        previous : string;
    }

     interface Tag {
        url: string;
        name: string;
        key: string;
    }

     interface Pictures {
        medium: string;
        extra_large: string;
        large: string;
        medium_mobile: string;
        small: string;
        thumbnail: string;
    }

     interface User {
        url: string;
        username: string;
        name: string;
        key: string;
        pictures: Pictures;
    }

     interface Pictures2 {
        medium: string;
        extra_large: string;
        thumbnail: string;
    }

     interface Datum {
        tags: Tag[];
        play_count: number;
        user: User;
        key: string;
        created_time: Date;
        audio_length: number;
        slug: string;
        favorite_count: number;
        listener_count: number;
        name: string;
        url: string;
        pictures: Pictures2;
        repost_count: number;
        updated_time: Date;
        comment_count: number;
    }

     interface CloudCastResult {
        paging: Paging;
        data: Datum[];
    }
        
     interface FaceRectangle {
        left: number;
        top: number;
        width: number;
        height: number;
    }

    interface Scores {
        anger: number;
        contempt: number;
        disgust: number;
        fear: number;
        happiness: number;
        neutral: number;
        sadness: number;
        surprise: number;
    }

    interface Face {
        faceRectangle: FaceRectangle;
        scores: Scores;
    }
    
   
