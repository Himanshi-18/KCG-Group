import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(MUIButton)(({ backgroundColor, textColor, hoverTextColor, hoverBackgroundColor, borderColor}) => ({
  backgroundColor: backgroundColor || 'white',
  color: textColor || 'white',
  padding: '6px 16px',
  border: '1px solid',
  borderColor: borderColor || '#fff',
  borderRadius: '2px',
  fontSize: '15px',
  '&:hover': {
    backgroundColor: hoverBackgroundColor || backgroundColor, 
    color: hoverTextColor || textColor, 
  },
}));

const Button = ({ backgroundColor, textColor, text, hoverBackgroundColor, hoverTextColor, borderColor, icon }) => {
  return (
    <CustomButton 
    backgroundColor={backgroundColor} 
    textColor={textColor} 
    hoverTextColor={hoverTextColor} 
    hoverBackgroundColor={hoverBackgroundColor}
    borderColor={borderColor}
    >
      {text} {icon}
    </CustomButton>
  );
};

export default Button;
