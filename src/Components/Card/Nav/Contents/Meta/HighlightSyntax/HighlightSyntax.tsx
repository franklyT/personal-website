import React from "react";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// materialDark
// okaidia
// tomorrow
// ghcolors
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function HighlightSyntax(props: {code: string} ) {
    return (
        <React.Fragment>
            <SyntaxHighlighter language="jsx" style={ materialDark } customStyle={ { border: 'none', fontSize: '0.75vw' } }>
                { props.code }
            </SyntaxHighlighter>
        </React.Fragment>
    )
}

export default HighlightSyntax;