import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import ControlledInput from './ControlledInput';
import StateHoisting from './StateHoisting';
import VanillaApp from './VanillaApp';
import JSXSpread from './JSXSpread.js';
import ConditionalRendering from './ConditionalRendering.js';
import RenderProp from './RenderProp';
import WrapperComponents from './WrapperComponents';
import WrapperComponents2 from './WrapperComponents2';
import ContainerComponent from './ContainerComponent';
import HOC from './HOC';
import Modal from './Modal';

import './App.css';

const links = [
  {
    href: '/jsxspread',
    label: 'JSX Spread',
    Component: JSXSpread
  },
  {
    href: '/controlledinput',
    label: 'Controlled Input',
    Component: ControlledInput
  },
  {
    href: '/statehoisting',
    label: 'State Hoisting',
    Component: StateHoisting
  },
  {
    href: '/childmap',
    label: 'Child Mapping',
    Component: () => <div>Look at the Menu in App.js</div>
  },
  {
    href: '/modal',
    label: 'Modal',
    Component: Modal
  },
  {
    href:'/wrappercomponents',
    label: 'Wrapper Components',
    Component: WrapperComponents
  },
  {
    href:'/wrappercomponents2',
    label: 'Wrapper Components II',
    Component: WrapperComponents2
  },
  {
    href: '/renderprop',
    label: 'Render Prop',
    Component: RenderProp
  },
  {
    href: '/vanilla',
    label: 'Vanilla App',
    Component: VanillaApp
  },
  {
    href: '/conditionalrendering',
    label: 'Conditional Rendering',
    Component: ConditionalRendering
  },
  {
    href: '/container',
    label: 'Container App',
    Component: ContainerComponent
  },
  {
    href: '/HOC',
    label: 'HOC',
    Component: HOC
  },
  {
    href: '/provider',
    label: 'Provider',
    Component: () => <div>Look up docs</div>
  },
];

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          {
            links.map(({ href, label }) => <li key={href}><Link to={href}>{label}</Link></li>)
          }
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Router>
          <aside className='aside'><Menu /></aside>
          <Switch>
            {
              links.map(({ href, Component }) => <Route key={href} path={href}><Component /></Route>)
            }
            <Route path='/jsxspread'>
              <JSXSpread />
            </Route>
            <Route path='/vanilla'>
              <VanillaApp />
            </Route>
            <Route path='/conditionalrendering'>
              <ConditionalRendering />
            </Route>
            <Route default path='/'>
              <div />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;