import Race from './Race';

class Elf extends Race {
  maxLifePoints : number;
  private static _numberInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._numberInstance += 1;
  }

  static createdRacesInstances(): number {
    return this._numberInstance;   
  }
}

export default Elf;