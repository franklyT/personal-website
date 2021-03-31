import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// materialDark
// okaidia
// tomorrow
// ghcolors <- border: none;
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function HighlightSyntax(props: any) {
    return (
        <React.Fragment>
            <SyntaxHighlighter language="jsx" style={materialDark} customStyle={{border: 'none', fontSize: '1.1em'}}>
                {props.code}
            </SyntaxHighlighter>
        </React.Fragment>
    )
}

export default HighlightSyntax;