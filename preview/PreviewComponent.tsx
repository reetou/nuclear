
            var React = require('react');
            var ImportedComponent = require('../../../../Downloads/react-test/src/App.js');
            var render = require('react-dom').render;
            render(<ImportedComponent.default/>, document.getElementById("root"));
            
            