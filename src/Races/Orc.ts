import Race from './Race';

class Orc extends Race {
  maxLifePoints : number;
  private static _numberInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._numberInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._numberInstance;   
  }
}

export default Orc;