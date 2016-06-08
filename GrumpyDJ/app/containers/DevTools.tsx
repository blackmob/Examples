"use strict"

var React = require('react');

// Exported from redux-devtools
var createDevTools = require('redux-devtools/lib/createDevTools').default;

// Monitors are separate packages, and you can make a custom one
var LogMonitor = require('redux-devtools-log-monitor/lib/LogMonitor').default;
var DockMonitor = require('redux-devtools-dock-monitor/lib/DockMonitor').default;

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
    // Monitors are individually adjustable with props
    // Consult their repositories to learn about those props
    <DockMonitor toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default DevTools;