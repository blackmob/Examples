import * as React from 'react';
import {ListGroupItem} from "react-bootstrap";
var LinkContainer = require('react-router-bootstrap').LinkContainer;

export var ShowListItem = (props : ListItem) => {
    const { itemKey, text, image, onClick, smallImage} = props;
    return <ListGroupItem key={itemKey} href="" onClick={(e) => onClick(image,itemKey)}>        
        <img src={smallImage}/>{ text }
    </ListGroupItem >;
}
