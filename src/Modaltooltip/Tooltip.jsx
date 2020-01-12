import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';



const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    lineHeight : 2.5
  },
}))(Tooltip);

export default function CustomToolTip(props) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="h6" style={{color : "#fff"}}>{props.team_name}</Typography>
            <Typography variant="h6" style={{color : "#fff"}}><em>{"City : "}</em>{props.team_city}</Typography>
            <Typography variant="h6" style={{color : "#fff"}}><em>{"Conference : "}</em>{props.team_conference}</Typography>
            <Typography variant="h6" style={{color : "#fff"}}><em>{"Division : "}</em>{props.team_division}</Typography>
          </React.Fragment>
        }
        arrow
        placement="right"
        enterDelay={200}
      >
        <Button>
        <Typography component="h2" variant="h6">
          {props.children}
        </Typography>
        </Button>
      </HtmlTooltip>
    </div>
  );
}