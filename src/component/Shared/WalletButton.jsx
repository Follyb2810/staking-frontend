// WalletButton.js
import React from 'react';
import { Button } from 'react-bootstrap';

const WalletButton = ({ content, click, className }) => {
  return (
    <Button className={`rounded-5 ${className}`} onClick={click} variant='danger'>
      {content}
    </Button>
  );
}

export default WalletButton;
