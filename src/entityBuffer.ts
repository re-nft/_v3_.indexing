// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class EntityBuffer {
  private static buffer: Record<string, Entity[]> = {};

  private constructor() {}

  static add<E extends Entity>(e: E): void {
    let b = this.buffer[e.constructor.name];
    if (b == null) {
      b = this.buffer[e.constructor.name] = [];
    }
    b.push(e);
  }

  static flush(): Entity[][] {
    const values = Object.values(this.buffer);
    this.buffer = {};
    return values;
  }
}

interface Entity {
  id: string;
}
