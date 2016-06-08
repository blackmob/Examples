"use strict"

import * as React from "react";
import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {Grid, Row, Col } from "react-bootstrap";

export var App = (props) => {

        return (
            <div>
                <Grid fluid>
                    {props.children}
                </Grid>
            </div>
        )       
}

