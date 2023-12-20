import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  energyType: EnergyType = 'stamina';
  private static __numberInstance = 0;
  constructor(name:string) {
    super(name);
    Warrior.__numberInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.__numberInstance;
  }
}

export default Warrior;