import Race from './Race';

class Halfling extends Race {
  maxLifePoints : number;
  private static _numberInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling._numberInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._numberInstance;   
  }
}

export default Halfling;