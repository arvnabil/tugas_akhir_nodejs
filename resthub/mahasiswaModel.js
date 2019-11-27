// mahasiswaModel.js

var mongoose = require('mongoose');

var mahasiswaSchema = mongoose.Schema({
  nim: {
      type: String,
      required: true
  },
  name: {
      type: String,
      required: true
  },
  jurusan: String,
  semester: String,
  create_date: {
      type: Date,
      default: Date.now
  }
});


// export mahasiswa Model
var Mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports.get = function (callback, limit) {
	Mahasiswa.find(callback).limit(limit);
}