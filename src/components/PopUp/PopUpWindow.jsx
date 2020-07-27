import React from 'react';
import './Popup.scss';
import PropTypes from 'prop-types';

export const Popup = ({ closePopup, confirmAction, text, name }) => {

  return (
    <div className='popup'>
      <div className='popup__inner'>
        <h1 className='popup__message'>{`${text} "${name}" ?`}</h1>
        <div className="popup__buttons">
          <button
            className='popup__confirm-btn btn'
            onClick={() => confirmAction()}
            type="button">
            OK
        </button>
          <button
            className='popup__cancel-btn btn'
            onClick={() => closePopup()}
          >
            Cancel
        </button>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  confirmAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string
};

Popup.defaultProps = {
  name: '',
};