export default class Data {
  constructor() {
    this.data = null;
    this.generator = null;
  }

  async init() {
    this.data = await this.loadData();
    this.generator = this.keyGenerator();
  }

  async loadData() {
    try {
      const response = await fetch('data.json');
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  getKeys() {
    return Object.keys(this.data[0]);
  }

  keyGenerator() {
    const keys = this.getKeys();
    let index = 0;
    
    return {
      next: () => {
        const key = keys[index % keys.length];
        index++;
        return key;
      },
      reset: () => {
        index = 0;
      }
    };
  }

  getNextKey() {
    return this.generator.next();
  }
}