import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header,
  Menu,
  Item,
  Icon,
  Image,
  Dropdown,
  Grid,
  GridColumn,
  List,
  Input,
  Label,
  Button
} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const imageStyle = { paddingTop: '30px', paddingBottom: "20px" };
    const tabStyle = { paddingTop: '10px', paddingBottom: "10px" };
    return (
        <Container>
          <Grid container verticalAlign='middle'>
            <Grid.Row columns='two'>
              <Grid.Column>
                <Image style={imageStyle} src='http://www.bpaviation.com/wp-content/uploads/2014/01/green_logo1.png'/>
              </Grid.Column>
              <Grid.Column>
                <Button icon floated='right' style={tabStyle}><Icon name="youtube"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="google"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="facebook f"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="twitter"/></Button>
                <div className="ui right aligned header">info@bpaviation.com | Office: + 1 808 518 4660 | 24-Hour Line:
                  +1 808 375 9244
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Container className='midcont'>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>ABOUT US</Menu.Item>
            <Menu.Item>FBO</Menu.Item>
            <Menu.Item>AIR TOURS</Menu.Item>
            <Menu.Item>FLIGHT SCHOOL</Menu.Item>
            <Menu.Item>PILOT SHOP</Menu.Item>
            <Menu.Item>LOCATION</Menu.Item>
            <Menu.Item>CONTACT US</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Container>
          <Image fluid
                 src="https://i0.wp.com/www.bpaviation.com/wp-content/uploads/2013/12/fueltruck.jpg?resize=980%2C370"/>
        </Container>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    const textStyle = { paddingTop: '20px', paddingBottom: "20px", fontSize: '24px' };
    return (
        <Container style={textStyle}>
          <p>
            Aloha and welcome to Barbers Point Aviation Services. Thank you for coming to visit our historic piece of
            paradise
            at Kalaeloa Airport. Formerly Barbers Point Naval Air Station, the airport’s military past means long
            runways,
            and
            convenient ocean arrivals and departures. With a full range of FBO services, and 24/7 fuel operations we
            are
            committed to offering premier aircraft handling with aloha.
          </p>
        </Container>
    )
  }
}

class CentMenu extends React.Component {
  render() {
    const textStyle = { fontSize: '24px' };
    return (
        <Container>
          <Grid columns='four' className='centmenu'>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="plane"/></Button>
              <h3 style={textStyle}>
                Aircraft Handling
              </h3>
              <p>
                Barbers Point Aviation Services is committed to offering premier FBO services with aloha. Barbers Point
                Aviation Services offers 24/7 service.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="truck"/></Button>
              <h3 style={textStyle}>
                Ground Services
              </h3>
              <p>
                Barbers Point Aviation Services include amenities that will fill your passengers with the feeling of
                aloha
                and the spirit of Hawaii. We also offer a comfortable receiving area with wi-fi access for airline crews
                needing to conduct flight planning.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="money bill alternate outline"/></Button>
              <h3 style={textStyle}>
                Check Fuel Prices
              </h3>
              <p>
                24-hour full service Jet-A and 24-Hour self service AVGAS 100. Discounts are available for purchases of
                1500
                gallons or more. We guarantees all of our prices posted online
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="certificate icon"/></Button>
              <h3 style={textStyle}>
                Flight School
              </h3>
              <p>
                Barbers Point Flight School is a full-service flight school owned and operated by experienced pilots and
                driven by a goal of passing on aeronautical knowledge and experience.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
          </Grid>
        </Container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <IslandSnowLogo/>
          <FullWidthImage/>
          <CentMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));