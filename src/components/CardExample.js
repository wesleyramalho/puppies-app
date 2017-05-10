import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const AppBarExampleIcon = (props) => (
  <AppBar
    showMenuIconButton={true}
    title="Lista de Puppies"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.quandoFechar}
    />
);


const DrawerComponent = (props) => (

  <Drawer
    docked={false}
    open={props.status}>
    <MenuItem onTouchTap={props.status}>Menu Item 1</MenuItem>
    <MenuItem onTouchTap={props.status}>Menu Item 2</MenuItem>
    <MenuItem onTouchTap={() => console.log('clicou')}>Menu Item 3</MenuItem>
  </Drawer>
);



const CardItem = (props) => {
  const cardStyle = {
    flex: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    marginBotton: '5%',
    textAlign: 'center'

  };

  return (
    <Card style={cardStyle}>
      <CardTitle title={"Nome: " + props.data.name} subtitle={"Idade: " + props.data.age} />
      <CardText>
        Personalidade: {props.data.breed}
      </CardText>
      <CardActions>
        <FlatButton label="Botão" />
      </CardActions>
    </Card>
  )
};

const style = {
  display: "flex", flexFlow: "row wrap",
  justifyContent: "space-around"
}

export default class CardExample extends React.Component {

  componentWillMount() {
    var myInit = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };
    var itens = null;
    fetch('https://puppiesapi.herokuapp.com/api/puppies', myInit)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data)
        itens = json.data.map((item, i) =>
          <CardItem key={i} data={item} />
        )
        this.setState({
          itens: itens
        });
      });
  }



  state = {
    itens: [],
    open: false

  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    })
  }

  sendRequest() {
    if (this.state.itens === [])
      return;
    return this.state.itens;
  }


  render() {
    return (
      <div>
        <AppBarExampleIcon quandoFechar={this.toggleDrawer.bind(this)} />
        <div style={style}>
          {this.sendRequest()}
        </div>
        <DrawerComponent status={this.state.open} />

      </div>

    );
  }


}
