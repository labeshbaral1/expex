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
import { useSelector, useDispatch } from "react-redux";

function Settings() {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem("darkMode");
    if (storedValue === null) return false;
    return JSON.parse(storedValue);
  });
  
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

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
<div className='settings-cont'>

<div className='setting-tile2'>
      <div className='section-title'>Account Info</div>
      <div className='color-title'>Email</div>
      <div>{email}</div>
      <div className='color-title'>Password</div>
      <div>••••••••••</div>
      <div className='color-title'>Number of Connected Accounts</div>
      <div>5</div>

    </div>

<div className='setting-tile2'>
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
        onChange=
        {() => {
          handleDarkModeChange()
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


    <div className='setting-tile2'>
      <div className='section-title2'>Terms of Conditions</div>

<p>Welcome to expex.com!</p>

<p>These terms and conditions outline the rules and regulations for the use of Expex's Website, located at www.expex.com.</p>

<p>By accessing this website we assume you accept these terms and conditions. Do not continue to use expex.com if you do not agree to take all of the terms and conditions stated on this page.</p>

<p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

<h3>Cookies</h3>

<p>We employ the use of cookies. By accessing expex.com, you agreed to use cookies in agreement with the Expex's Privacy Policy. </p>

<p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

<h3>License</h3>

<p>Unless otherwise stated, Expex and/or its licensors own the intellectual property rights for all material on expex.com. All intellectual property rights are reserved. You may access this from expex.com for your own personal use subjected to restrictions set in these terms and conditions.</p>

<p>You must not:</p>
<ul>
    <li>Republish material from expex.com</li>
    <li>Sell, rent or sub-license material from expex.com</li>
    <li>Reproduce, duplicate or copy material from expex.com</li>
    <li>Redistribute content from expex.com</li>
</ul>

<p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the <a href="https://www.termsandconditionsgenerator.com/">Free Terms and Conditions Generator</a>.</p>

<p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Expex does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Expex,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Expex shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

<p>Expex reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>

<p>You warrant and represent that:</p>

<ul>
    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
</ul>

<p>You hereby grant Expex a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>

<h3>Hyperlinking to our Content</h3>

<p>The following organizations may link to our Website without prior written approval:</p>

<ul>
    <li>Government agencies;</li>
    <li>Search engines;</li>
    <li>News organizations;</li>
    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
</ul>

<p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>

<p>We may consider and approve other link requests from the following types of organizations:</p>

<ul>
    <li>commonly-known consumer and/or business information sources;</li>
    <li>dot.com community sites;</li>
    <li>associations or other groups representing charities;</li>
    <li>online directory distributors;</li>
    <li>internet portals;</li>
    <li>accounting, law and consulting firms; and</li>
    <li>educational institutions and trade associations.</li>
</ul>

<p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Expex; and (d) the link is in the context of general resource information.</p>

<p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>

<p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Expex. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>

<p>Approved organizations may hyperlink to our Website as follows:</p>

<ul>
    <li>By use of our corporate name; or</li>
    <li>By use of the uniform resource locator being linked to; or</li>
    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
</ul>

<p>No use of Expex's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>

<h3>iFrames</h3>

<p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

<h3>Content Liability</h3>

<p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

<h3>Your Privacy</h3>

<p>Please read Privacy Policy</p>

<h3>Reservation of Rights</h3>

<p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

<h3>Removal of links from our website</h3>

<p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>

<p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>

<h3>Disclaimer</h3>

<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

<ul>
    <li>limit or exclude our or your liability for death or personal injury;</li>
    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
</ul>

<p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>

<p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
      <div>
        
      </div>

    </div>

</div>

  )
}

export default Settings