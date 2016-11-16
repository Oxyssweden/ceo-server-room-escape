import React from 'react';
import Broom from './assets/Broom';
import BroomAndKnife from './assets/BroomAndKnife';
import BinderShelf from './assets/BinderShelf';
import BusinessCard from './assets/BusinessCard';
import Cabinet from './assets/Cabinet';
import Cable from './assets/Cable';
import Calendar from './assets/Calendar';
import ComputerTable from './assets/ComputerTable';
import CopyingMachine from './assets/CopyingMachine';
import Key from './assets/Key';
import Knife from './assets/Knife';
import KnifeBroom from './assets/KnifeBroom';
import Lamp from './assets/Lamp';
import Newspaper from './assets/Newspaper';
import PaperShelf from './assets/PaperShelf';
import PaperShredder from './assets/PaperShredder';
import Rack from './assets/Rack';
import Servers from './assets/Servers';
import Waterpipe from './assets/Waterpipe';
import WaterpipeFixed from './assets/WaterpipeFixed';
import Background from '../../components/Background';
import Foreground from '../../components/Foreground';
import DepthMap from '../../components/DepthMap';
import Me from '../../components/Me';
import ContextMenu from '../../components/ContextMenu';
import Scene from '../../components/Scene';

class ServerRoom extends Scene {
  render() {
    return (<div id="scene" className="scene" style={this.getStyle()}>
      <DepthMap ref="depthmap" minScale="0.8" maxScale="1.2" file="/images/walk_path.svg" width={this.props.width} height={this.props.height} />
      <Background file="/images/room.svg" width={this.props.width} height={this.props.height} />
      <BinderShelf/>
      <Broom/>
      <BroomAndKnife/>
      <BusinessCard/>
      <Cabinet/>
      <Cable/>
      <Calendar/>
      <ComputerTable/>
      <CopyingMachine/>
      <Key/>
      <Knife/>
      <KnifeBroom/>
      <Lamp/>
      <Newspaper/>
      <PaperShelf/>
      <PaperShredder/>
      <Rack/>
      <Servers/>
      <Waterpipe/>
      <WaterpipeFixed/>
      <Me posTop="600" posLeft="100"/>
      <Foreground parallaxState={this.parallaxState()} offset={this.state.leftOffset} parallax="0.4" file="/images/foreground.svg"/>
      <ContextMenu/>
    </div>);
  }
}

export default ServerRoom;
