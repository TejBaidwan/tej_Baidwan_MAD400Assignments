/**
 * Class representing an Aircraft
 */
export class Aircraft {
  constructor(
    public planeModel: string,
    public capacity: number,
    public fuelStorage: number,
    public retired: boolean = false,
    public owner?: string
  ) {
  }
}
