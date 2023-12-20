import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType: EnergyType = 'mana';
  private static __numberInstance = 0;
  constructor(name:string) {
    super(name);
    Necromancer.__numberInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.__numberInstance;
  }
}

export default Necromancer;