import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Hidden from '@material-ui/core/Hidden'
import Search from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '@material-ui/core/Icon'

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container alignItems="center">
              <Icon>camera_alt</Icon>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs>
              <TextField
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Hidden>
          <Grid item>
            <Grid container justify="flex-end">
              <Icon>explore_outlined</Icon>
              <Icon>favorite_border_rounded</Icon>
              <Icon>person_outlined</Icon>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
