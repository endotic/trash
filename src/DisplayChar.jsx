import PropTypes from 'prop-types';

const DisplayChar = ({
    content, // i.e. one char 'a', '$'
    accent // Boolean
}) => {
    let classTags = ['trashChar'];

    if (accent) {
        classTags.push('accent');
    }
    return (
        <span className={classTags.join(' ')}>{content}</span>
    );
};

DisplayChar.propTypes = {
    content: PropTypes.string.isRequired,
    accent: PropTypes.bool.isRequired
};

export default DisplayChar;