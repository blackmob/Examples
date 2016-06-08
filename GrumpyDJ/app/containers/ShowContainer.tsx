

import * as React from "react";
import * as RB from "react-bootstrap";
import {ListGroup, ListGroupItem, Grid, Row, Col, Button} from "react-bootstrap";
import { connect } from 'react-redux';
import * as actions from '../actions/cloudCastActions';
import * as emotionActions from '../actions/emotionActions';

import { bindActionCreators } from 'redux';

import {ShowList} from '../components/ShowList';
import {ShowListItem} from '../components/ShowListItem';
import {Emotion} from '../components/Emotion';

interface ShowListProps {
    shows: Datum[];
    emotions : EmotionState;
    actions: any;
    emotionActions : any;
    nextUrl : string;
    previousUrl : string;
};

class ShowContainer extends React.Component<ShowListProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.actions.fetchShows(undefined);
    }


    onClick = (url : string, slug : string) => {
        this.props.emotionActions.fetchEmotions(url, slug);
    }

    handleFetchNext = (url :string) => {
         this.props.actions.fetchShows(this.props.nextUrl);
    }

    handleFetchPrevious = (url: string) => {
         this.props.actions.fetchShows(this.props.previousUrl);
    }

    render() {
        const { shows, emotions, actions } = this.props;

        const items = shows ? shows.map((s) => {
            return <ShowListItem key={s.slug} itemKey={s.slug} text={s.name} smallImage={s.pictures.thumbnail} image={s.pictures.extra_large} onClick={this.onClick} >
                </ShowListItem>;
        }) : [];

        return <Row>
            <Col xs={12} md={6}>
                <ShowList headerTitle="Solid Steel Shows" header={null} next={this.handleFetchNext} previous={this.handleFetchPrevious}>
                    {items}
                </ShowList>
            </Col>
            <Col xs={12} md={6}>
                {this.props.children}
            </Col>
        </Row>;
    }
}

const mapStateToProps = (state : RootState) => {
    return {
        nextUrl : state.cloudCast.cloudCastResults.paging.next,
        previousUrl : state.cloudCast.cloudCastResults.paging.previous,
        shows: state.cloudCast.cloudCastResults.data,
        emotions : state.emotions
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        emotionActions : bindActionCreators(emotionActions, dispatch)
    };
}

export var ShowListContainer = connect(mapStateToProps, mapDispatchToProps)(ShowContainer);