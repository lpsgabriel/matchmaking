import { v4 as uuidV4 } from "uuid";

class Player {
  id?: string;
  name: string;
  level: number;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Player };
