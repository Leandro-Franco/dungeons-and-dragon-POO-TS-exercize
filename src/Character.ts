import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Fighter from './Fighter';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race : Race;
  private _dexterity : number;
  private _archeType : Archetype;
  private _energy : Energy;
  private _maxLifePoints : number;
  private _lifePoints : number;
  private _strength : number;
  private _defense : number;
  // public name:string

  constructor(name:string) {
    // this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archeType = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archeType.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  
  public get energy() {
    return {
      ...this._energy,
    };
  }
  
  public get race() {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archeType;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public get strength(): number {
    return this._strength;
  }
  
  public get defense(): number {
    return this._defense;
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }
  
  public attack(enemy: Fighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  public receiveDamage(attackPoints: number): number {
    let damage = 0;
    damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
  
  special(enemy: Fighter): void {
    this._lifePoints = 1;
    const attackdamage = this._race.maxLifePoints + this._energy.amount + this._strength;
    enemy.receiveDamage(attackdamage);
  }
}

export default Character;