import * as React from "react";
import {ShowListItem} from "./ShowListItem";
import * as RB from "react-bootstrap";

interface ListProps{
    headerTitle: string;
    header?: any;
    footer?: any;
    next?: Function;
    previous? : Function; 
};

export var ShowList = (props : ListProps) => {
    
        const { headerTitle, header, footer, next, previous} = props;
        let headerContent = header;
        //if the header content is null then render the default one.
        if (!header) {
            headerContent = <div className="panel-heading">
                {headerTitle}
                <div className="pull-right action-buttons">
                    <div className="btn-group pull-right">
                        <RB.Button bsStyle="primary" className="btn btn-default btn-xs" onClick={() => { previous() } }>Previous...
                            <span className="glyphicon glyphicon glyphicon-chevron-left" style={{ marginRight: "0px" }}></span></RB.Button>
                        <RB.Button bsStyle="primary" className="btn btn-default btn-xs" onClick={() => { next() } }>Next...
                            <span className="glyphicon glyphicon glyphicon-chevron-right" style={{ marginRight: "0px" }}></span></RB.Button>
                    </div>
                    
                </div>
            </div>
        }

        return <RB.Row>
                <RB.Col xs={12} md={8}>
                    <RB.Panel header={headerContent} footer={footer} bsStyle="primary">
                        <RB.ListGroup>
                            {(props as any).children}
                        </RB.ListGroup>
                    </RB.Panel>
                </RB.Col>
            </RB.Row> }

