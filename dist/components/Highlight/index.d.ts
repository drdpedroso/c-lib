export default Highlight;
declare class Highlight extends React.Component<any, any, any> {
    constructor(props: any);
    codeNode: React.RefObject<any>;
    highlight: () => void;
}
declare namespace Highlight {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const language: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const language_1: string;
        export { language_1 as language };
    }
}
import React from "react";
import PropTypes from "prop-types";
