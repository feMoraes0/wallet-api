const { Model, DataType } = require('sequelize');

class User extends Model {
  
  static init(connection) {
    super.init(
      {
        name: DataType.STRING,
        email: DataType.STRING,
      },
      {
        sequelize: connection
      }
    );
  }

}
