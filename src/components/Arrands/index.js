import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import date from 'date-and-time';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

 

 export default ({ arrands, category, onSelect, dates:{id, startDate='Welcome!',endDate, activity, location  } }) =>


<Grid container>
    <Grid item sm>
        <Paper style ={styles.Paper}>
          {arrands.map(([group, arrands]) =>
          !category || category === group
          ? <Fragment key={group}>
           <Typography
             variant="headline"
             style={{texttransform: "capitalize"}}
           >           
            Individual {group}
           </Typography>           
           <List component="ul">
                {arrands.map(({id, startDate}) =>
                    <ListItem 
                        key={id} 
                        button 
                    >
                        <ListItemText
                            primary={startDate}
                            onClick={() => onSelect(id)}
                        >
                        {startDate}
                        </ListItemText>
                    </ListItem>
                )}
                {arrands.map(({id, startDate, endDate}) =>            
                        <ListItem key={endDate+id} 
                        button 
                        >
                            <ListItemText
                            primary={date.format(new Date(startDate), 'DD-[MM]-YYYY') !== 
                            date.format(new Date(endDate), 'DD-[MM]-YYYY') ?
                                endDate
                                : null
                            }
                            onClick={() => onSelect(id)}
                        >
                                
                            </ListItemText>             
                        </ListItem>
                )}
           </List>           
           </Fragment>
          :null

          )}
        </Paper>
    </Grid>
    <Grid item sm>
        <Paper style ={styles.Paper}>
            <Typography
                variant="display1"
            >
            {date.format(new Date(startDate), 'DD-[MM]-YYYY') !== 
            date.format(new Date(endDate), 'DD-[MM]-YYYY') ?
                endDate
                : startDate
            }
            </Typography>
            <Typography
                variant="subheading"
            >
              {activity}<br />{location}
            </Typography>
        </Paper>
    </Grid>
</Grid>
