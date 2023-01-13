import React from 'react'
import "./Settings.css"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';
import { DarkMode, Opacity } from '@mui/icons-material';
import chroma from 'chroma-js';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Settings() {

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (color) => {
    document.documentElement.style.setProperty('--selected-color', color);
  }

  const enableDark = (color) => {
    document.documentElement.style.setProperty('--text-color', "white");
    document.documentElement.style.setProperty('--grey-color', "rgb(180, 177, 177)");
    document.documentElement.style.setProperty('--grey-color2', "rgb(75, 75, 75)");
    document.documentElement.style.setProperty('--grey-color3', "white");
    document.documentElement.style.setProperty('--grey-color4', "white");
    document.documentElement.style.setProperty('--tile-color', "#01081b");
    document.documentElement.style.setProperty('--inside-color', "#091c3b");
    document.documentElement.style.setProperty('--background-color', "#000b23");
    document.documentElement.style.setProperty('--accent-color', "#635BFF");
    document.documentElement.style.setProperty('--grey-color5', "rgb(180, 177, 177)");
  }

  const enableLight = (color) => {
    document.documentElement.style.setProperty('--text-color', "black");
    document.documentElement.style.setProperty('--grey-color', "grey");
    document.documentElement.style.setProperty('--grey-color2', "rgb(75, 75, 75)");
    document.documentElement.style.setProperty('--grey-color3', "rgb(60, 60, 60)");
    document.documentElement.style.setProperty('--grey-color4', "rgb(102, 102, 102)");
    document.documentElement.style.setProperty('--grey-color5', "rgb(74, 74, 74)");
    document.documentElement.style.setProperty('--tile-color', "white");
    document.documentElement.style.setProperty('--inside-color', "#eff3f8");
    document.documentElement.style.setProperty('--background-color', "white");
    document.documentElement.style.setProperty('--accent-color', "#d8c7ff");
  }
  const [color, setColor] = useState("purple");
  

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  return (

    <div className='setting-cont'>
      <div className='section-title'>Appearance</div>
      <div className='color-title'>Accent Color</div>
      <div className='color-cont'>
      <CircleIcon className='purple' onClick={() => handleClick("#635BFF")} fontSize='large' />
      <CircleIcon className='blue' onClick={() => handleClick("blue")}fontSize='large' />
      <CircleIcon className='green' onClick={() => handleClick("green")}fontSize='large' />
      <CircleIcon className='yellow' onClick={() => handleClick("yellow")}fontSize='large' />
      <CircleIcon className='red' onClick={() => handleClick("red")}fontSize='large' />
      <CircleIcon className='pink' onClick={() => handleClick("pink")}fontSize='large' />
      <CircleIcon className='black' onClick={() => handleClick("black")}fontSize='large' />
      </div>
      <div className='color-title'>Toggle Dark Theme</div>
      <div className='theme-button-cont'>
      {/* <div className='dark-theme-button' onClick={() => enableDark("#635BFF")}>Dark Mode</div>
      <div className='light-theme-button'onClick={() => enableLight("#635BFF")}>Light Mode</div> */}

      <FormControlLabel
      className='deeznuts'
    control={
      <MaterialUISwitch
        checked={darkMode}
        onChange={() => {
          setDarkMode(!darkMode);
          if (darkMode) {
            enableLight();
          } else {
            enableDark();
          }
        }}
      />
    }
  />
      </div>
    </div>
  )
}

export default Settings