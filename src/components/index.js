import React from "react"
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import './index.css'

export default ({ children }) =>
  <div className="root">
    <Grid container>
      <Grid item xs={12}>
        <Paper className="paper">
          <div className="children">
            {children}
          </div>
        </Paper>

      </Grid>
    </Grid>
  </div>
