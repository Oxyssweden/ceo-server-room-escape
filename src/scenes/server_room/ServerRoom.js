import React from 'react';
import Broom from './assets/Broom';
import Cabinet from './assets/Cabinet';
import Cable from './assets/Cable';
import Key from './assets/Key';
import Knife from './assets/Knife';
import Newspaper from './assets/Newspaper';
import Background from '../../components/Background';
import Foreground from '../../components/Foreground';
import DepthMap from '../../components/DepthMap';
import Me from '../../components/Me';
import ContextMenu from '../../components/ContextMenu';
import Scene from '../../components/Scene';
import Asset from '../../components/Asset';

class ServerRoom extends Scene {
  render() {
    return (<div id="scene" className="scene" style={this.getStyle()}>
      <DepthMap ref="depthmap" minScale="0.8" maxScale="1.2" file="/images/walk_path.svg" width={this.props.width} height={this.props.height} />
      <Background file="/images/room.svg" width={this.props.width} height={this.props.height} />
      <Asset x="115" y="30" width="1084" src="/images/pipe.svg"
             actions={{
               "Look": "It´s leaking. That can´t be safe",
               "Pick up": "What am I supposed to do? Rip it out of the wall?"
             }}/>
      <Asset x="511" y="7" width="58" src="/images/pipe_fixed.svg"
             actions={{
               "Look": "Someone did a quickfix on that leak. That can´t be safe!",
               "Pick up": "I can´t reach it."
             }}/>
      <Asset x="214" y="197" width="130" src="/images/binder_shelf.svg"
             actions={{
               "Look": "The accounting covers. I prefer fiction but last year´s edition was really exciting!",
               "Pick up": "It is enough to read them once."
             }}/>
      <Broom x="679" y="258" width="84" src="/images/broomstick.svg"/>
      <Asset x="780" y="608" width="69" src="/images/business_card.svg"
             actions={{
               "Look": "A business card belonging to the tech guy. Hmm... Maybe he could get me out of here.",
               "Pick up": "I don´t want it."
             }}/>
      <Cabinet x="1045" y="341" width="124" src="/images/archive.svg"/>
      <Asset x="908" y="222" width="85" src="/images/calendar.svg"
             actions={{
               "Look": "A calendar. August 1997.",
               "Pick up": "I can´t take this down. It is a nostalgic thing."
             }}/>
      <Asset x="215" y="303" width="192" src="/images/computer_table.svg"
             actions={{
               "Look": "The computer table. They have told me not to touch this.",
               "Pick up": "Not supposed to touch this."
             }}/>
      <Asset x="864" y="334" width="147" src="/images/copying_machine.svg"
             actions={{
               "Look": "Never touching this copying machine again. Not since I caught our cleaning lady sitting bare naked on it.",
               "Pick up": "I can´t do that."
             }}/>
      <Key x="81" y="653" width="42" src="/images/key.svg"/>
      <Knife/>
      <Asset x="713" y="20" width="262" src="/images/lamp.svg"
             actions={{
               "Look": "It is a lamp.",
               "Pick up": "I don´t want it."
             }}/>
      <Newspaper x="42" y="631" width="125" src="/images/newspaper.svg"/>
      <Asset x="1055" y="246" width="130" src="/images/paper_shelf.svg"
             actions={{
               "Look": "A shelf with a stack of papers. Wanna hear a joke about paper? Nevermind, it´s tearable!",
               "Pick up": "I don´t want it."
             }}/>
      <Asset x="778" y="428" width="74" src="/images/paper_shredder.svg"
             actions={{
               "Look": "A broken paper shredder.",
               "Pick up": "I don´t want it."
             }}/>
      <Asset x="505" y="280" width="175" src="/images/rack.svg"
             actions={{
               "Look": "It´s a server rack."
             }}/>
      <Cable x="565" y="499" width="62" src="/images/cable.svg"/>
      <Asset x="515" y="298" width="155" src="/images/servers.svg"
             actions={{
               "Look": "I think these are servers. Better not mess around with it.",
               "Use": "I think these are servers. Better not mess around with it.",
               "Pick up": "I cant pick up that!"
             }}/>
      <Me y="600" x="100"/>
      <Foreground parallaxState={this.parallaxState()} offset={this.state.leftOffset} parallax="0.4" file="/images/foreground.svg"/>
      <ContextMenu/>
    </div>);
  }
}

export default ServerRoom;