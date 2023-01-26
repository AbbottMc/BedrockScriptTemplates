// 在此处编写您的脚本，此处代码仅为示例，可移除。
import {world} from '@minecraft/server';

world.events.blockPlace.subscribe(({player, block})=>{
  world.say(`玩家：“${player.name}”放置了id为：“${block.typeId}”的方块`);
});