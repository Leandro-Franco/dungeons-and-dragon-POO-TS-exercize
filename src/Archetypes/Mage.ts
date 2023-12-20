import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energyType: EnergyType = 'mana';
  private static __numberInstance = 0;
  constructor(name:string) {
    super(name);
    Mage.__numberInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.__numberInstance;
  }
}

export default Mage;