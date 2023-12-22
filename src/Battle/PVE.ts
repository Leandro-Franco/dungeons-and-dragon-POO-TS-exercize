import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _mob: SimpleFighter[];
  constructor(player:Fighter, mob:SimpleFighter[]) {
    super(player);
    this._player = player;
    this._mob = mob;
  }

  fight(): number {
    while ( 
      this._player.lifePoints !== -1
      && this._mob.some((mob) => mob.lifePoints !== -1) 
    ) {
      this._mob.forEach((mob) => {
        this._player.attack(mob);     
        mob.attack(this._player);
      });
    }
    return super.fight();
  }
}
export default PVE;