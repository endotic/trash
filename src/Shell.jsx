// import React from 'react';
import PropTypes from 'prop-types';

import DisplayChar from './DisplayChar.jsx';
import Config from './Config.jsx';

import './Shell.css';

const cfg = Config.get();

export const Shell = ({ 
    lines,            // queue of lines to display
    accents = [],      // mask for characters to accent = zero
    config = {cfg}       // config object
    }) => {
    return (
        <div className='trashShell'> 
            {
                lines.slice(config.gridSize)
                .map((line, i) => {                 // each line max 100 char
                    const chars = line.split('');
                    chars.map((ch, j) => {
                        let mark = false;
                        if ( (i * 100 + j) in accents ) {mark = true;}

                        return (
                            <DisplayChar
                                key={j}
                                content={ch}
                                accent={mark}
                            />
                        );
                    }
                 )
        })  }
       </div>
    );
};

Shell.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
    accents: PropTypes.arrayOf(PropTypes.number),
    config: PropTypes.shape({
        gridSize: PropTypes.number
    })
};
