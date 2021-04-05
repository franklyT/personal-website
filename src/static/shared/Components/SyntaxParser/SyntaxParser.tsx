import { ReactNode } from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// materialDark
// okaidia
// tomorrow
// ghcolors
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function SyntaxParser(props: {code: ReactNode, language: string} ) {
    return (
            <SyntaxHighlighter language={props.language} style={ materialDark } customStyle={ { border: 'none', fontSize: '0.75vw' } }>
                { props.code }
            </SyntaxHighlighter>
    )
}

export default SyntaxParser;