import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints : number;
  private _strength : number;

  constructor(lifePoints = 85) {
    this._lifePoints = lifePoints;
    this._strength = 63;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }
  
  public get strength(): number {
    return this._strength;
  }

  public attack(enemy: SimpleFighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    this._lifePoints -= damage;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Monster;