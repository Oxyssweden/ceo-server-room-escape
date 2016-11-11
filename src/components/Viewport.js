import React from 'react';
var EventEmitterMixin = require('react-event-emitter-mixin');

var Viewport = React.createClass({

    componentWillMount: function() {
        this.updateDimensions();
        console.log("Viewport will mount")
    },

    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },

    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    },



    render: function() {
        return <div style={{width: this.state.width, height: this.state.height}} className="Viewport">

        </div>;
    }
});

export default Viewport;
