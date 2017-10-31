import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {grey, amber, red} from 'material-ui/colors'

import createPalette from 'material-ui/styles/createPalette'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'

import './index.css'

const ITEM_HEIGHT = 48;

const options = [
  'Home',
  'Second Page'
];

const muiTheme = createMuiTheme({
    palette: createPalette({
      primary: grey,
      accent: amber,
      error: red,
      type: 'dark'
    })
})

class Header extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  }

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="appbar-div">
         <MuiThemeProvider theme={muiTheme}>
            <AppBar className="appbar" title="Gatsby" >
              <Toolbar>
                  <Button className="menuButton"
                            onClick={this.handleClick}
                            aria-owns={this.state.open ? 'simple-menu' : null }
                            aria-haspopup="true">
                    <MenuIcon className="menuIcon"/>
                    </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={this.state.open}
                        onRequestClose={this.handleRequestClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 200,
                          },
                        }}>

                <MenuItem onClick={this.handleRequestClose}>
                  <Link to="/" className="link">Home</Link>
                </MenuItem>
                <MenuItem onClick={this.handleRequestClose}>
                  <Link to="/page-2/" className="link">Page 2</Link>
                </MenuItem>

            </Menu>

                <Typography  type="title">
                  <Link to="/" className="title">Gatsbyjs</Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </MuiThemeProvider>

      </div>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
