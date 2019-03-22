import React  from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';

const Footer = ({item, category, onSelect}) =>  {
  const i = category
  ? item.findIndex(group => group === category) +1
  : 0

  const onIndexSelection = (e, i) => onSelect(i === 0 ? ''
  : item[i - 1])
  
  
  return (
    <Paper>
      <Tabs
        key={i}
        value={i}
        onChange={onIndexSelection}
        centered
      >
        <Tab label="All" />
        {item.map(group =>
        <Tab key={group} label={"individual " + group} />
        )}
      </Tabs>
    </Paper>)
}
export default Footer