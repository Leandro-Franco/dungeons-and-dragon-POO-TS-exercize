import Race from './Race';

class Dwarf extends Race {
  maxLifePoints : number;
  private static _numberInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf._numberInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._numberInstance;   
  }
}

export default Dwarf;