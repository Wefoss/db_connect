class Thing {
  static client = null;
  static tableName = 'things';
  static attribute = {
    body: 'string'
  };

  static async create(values) {
    const insertAttr = Object.entries(this.attribute)
      .filter(([attr]) => attr in values)
      .map(([attr]) => attr);
    const inserStrAttr = insertAttr.map((attr) => `"${attr}"`).join(",");
    const inserStrValues = insertAttr
      .map((val) =>typeof val === "string" ? `'${values[val]}'` : values[val])
      .join(",");
    const { rows } = await this.client.query(`
   INSERT INTO ${this.tableName} (${inserStrAttr}) VALUES (${inserStrValues}) RETURNING *; 
      `);
    return rows;
  }

  static async getAll() {
    const { rows } = await this.client.query(`
     SELECT * FROM ${this.tableName}; 
        `);
    return rows;
  }
  static async findByPk(value) {
    const { rows } = await this.client.query(`
     SELECT * FROM ${this.tableName} WHERE "id"=${value}; 
        `);
    return rows;
  }

  static async updateByPk(values, id) {
    const insertAttr = Object.entries(values)
      .map(([attr, val]) => `"${attr}"=${typeof val === "string" ? `'${val}'` : val}`).join(',')
  
      const { rows } = await this.client.query(`
      UPDATE ${this.tableName} SET ${insertAttr}, "updatedAt"=CURRENT_TIMESTAMP WHERE "id"=${id}; 
         `);
     return rows;  
  }


  static async deleteByPk(value) {
    const { rows } = await this.client.query(`
    DELETE FROM ${this.tableName} WHERE "id"=${value}
    RETURNING *; 
       `);
    return rows;
  }
}

module.exports = Thing;
