import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType: EnergyType = 'stamina';
  private static __numberInstance = 0;
  constructor(name:string) {
    super(name);
    Ranger.__numberInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.__numberInstance;
  }
}

export default Ranger;