const noteRoutes = require('./note_routes');
module.exports = (app, db) => {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
