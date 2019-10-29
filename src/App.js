import React from 'react';
import {} from 'react-router-dom';
import Logo from './communicate.svg';
import { ThemeProvider } from 'styled-components';
import { Container, Header, Card, Display, Title, Body, Headline, Caption, Button, InputField, Label, Toolbar, ToolbarTitle, ToolbarActions, ToolbarAction, FloatingActionButton } from './styles';

const theme = {
  primaryColor: '#368f13', 
  secondaryColor: 'black', 
  accentColor: '#0e2A55'
}

function App(props) {
  return (
    <ThemeProvider theme={theme}>
    <Toolbar secondary>
      <ToolbarTitle>yDS-starter-template</ToolbarTitle>
      <ToolbarActions>
        <ToolbarAction to="/">link</ToolbarAction>
        <ToolbarAction>link</ToolbarAction>
        <ToolbarAction>link</ToolbarAction>
      </ToolbarActions>
    </Toolbar>
      <Container>
        {console.log(props)}
        <h1 style={{ color: '#b31e1a'}}>Welcome to yDS starter template</h1>
        <h1 tyle={{ color: '#00ff00' }}>Typography</h1>
        <Display>Display Fonts for Modal Titles</Display>
        <Header>Header for Page Titles</Header>
        <Title>Title for Tabs, titles and forms</Title>
        <Headline>Headline for Info paragraphs!</Headline>
        <Body>Body for descriptions</Body>
        <Caption>Caption for timestamps, footers and additional info</Caption>
        <h1 tyle={{ color: '#00ff00' }}>We have Cards too!</h1>
        <Card>
          <Display>Cards..</Display>
        </Card>
        <Card>
        <img src={Logo} />
          <Display>Rich Cards</Display>
          <Body>Lorem ipsum dolor amet cronut vape kickstarter, farm-to-table everyday carry swag synth man braid chia mumblecore post-ironic gastropub locavore vegan poke. Hell of gochujang subway tile fashion axe flannel, cred williamsburg coloring book. Blog health goth succulents fam, fixie sartorial raclette glossier. Squid seitan chambray neutra live-edge iPhone taiyaki.</Body>
          <Caption>7 days ago</Caption>
        </Card>
        <Title>Buttons</Title>
          <Button>primary</Button>
          <Button secondary>secondary btn</Button>
          <Button primary round>round</Button>
          <Button secondary small>small</Button>
          <Button primary small round>small round</Button>
          <FloatingActionButton></FloatingActionButton>
        <Title>Inputs</Title>
        <Label>your deets</Label>
        <InputField />

        <Label>you better have a good reason for using this one</Label>
        <InputField round/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
