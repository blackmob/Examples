import * as React from 'react';
import {ListGroupItem} from "react-bootstrap";

interface EmotionProps {
    face : Face;
    imageUrl : string;    
}


export class Emotion extends React.Component<EmotionProps, EmotionState> {
  constructor(props : EmotionProps) {
    super(props);
  }
  
    componentDidMount = () => {
        this.updateCanvas();
    }
    componentDidUpdate =() => {
        this.updateCanvas();
    }
    updateCanvas =() => {
        const {faceRectangle, scores} = this.props.face;
        
        const ctx = (this.refs as any).canvas.getContext('2d');
        
        var image = new Image();
        image.src = this.props.imageUrl;                 
        image.onload = function() {
            ctx.canvas.width = image.width;
            ctx.canvas.height = image.height;
            ctx.drawImage(image,0,0);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(faceRectangle.left,faceRectangle.top, faceRectangle.width, faceRectangle.height);
            //sort so the nearest to zero is at the top  
            let emotions = _.pairs(scores).sort((a,b) => {
                return ((a[1] == b[1]) ? 0 : ((a[1] < b[1]) ? 1 : -1));
            }); 
            ctx.font='30px Verdana'; 
            ctx.fillStyle = 'red';           
            ctx.fillText(`emotion ${emotions[0][0]} : ${emotions[0][1]}`, 10,30);                
        }; 
    }  
  
  render() {
        return <canvas ref="canvas"/>        
  }
}

