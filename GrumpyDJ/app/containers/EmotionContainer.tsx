

import * as React from "react";
import * as RB from "react-bootstrap";
import { connect } from 'react-redux';
import * as actions from '../actions/cloudCastActions';
import * as emotionActions from '../actions/emotionActions';

import { bindActionCreators } from 'redux';
import {Emotion} from '../components/Emotion';

interface EmotionContainerProps {
    faces : Face[];
    url : string;
    params : {show : string};
}

class EmotionContainer extends React.Component<EmotionContainerProps, EmotionState> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { faces, url } = this.props;
        return <div>{faces.map((f)=>{
            return <Emotion key={this.props.params.show} face={f} imageUrl={url}/>;            
        })}</div>; 
    }
}

const mapStateToProps = (state : RootState) => {
    return {
        url : state.emotions.url,
        faces : state.emotions.faces
    };
}

export var EmotionCanvasContainer = connect(mapStateToProps)(EmotionContainer);