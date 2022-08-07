import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Intro } from './../Intro';
import { CreateEvent } from './../CreateEvent';
import { GetPass } from './../GetPass';
import { Roadmap } from './../Roadmap';
import { useEthers } from '@usedapp/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Nav() {
  const [value, setValue] = React.useState(0);
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (!account || error) {
    return <Intro />;
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="app navigation tabs"
          centered
        >
          <Tab label="Create Event" {...a11yProps(0)} />
          <Tab label="Get Pass" {...a11yProps(1)} />
          <Tab label="Next Steps" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreateEvent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GetPass />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Roadmap />
      </TabPanel>
    </Box>
  );
}
