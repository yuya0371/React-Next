let dom=document.querySelector('#root');
let element=React.createElement(
    'div',{},[
        React.createElement(
            'h2',{},"hello!"
        ),
        React.createElement(
            'h3',{},"React Page Sample"
        ),
        React.createElement(
            'ul',{},[
                React.createElement(
                    'li',{},"First"
                ),
                React.createElement(
                    'li',{},"second"
                ),
                React.createElement(
                    'li',{},"third"
                ),
            ]
        ),
    ]
);
ReactDOM.render(element, dom);