// mahasiswaController.js

// import mahasiswa model
Mahasiswa = require('./mahasiswaModel');

// handle index actions
exports.index = function(req,res){
	Mahasiswa.get(function(err, mahasiswas) {
		if(err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "Success",
			message: "Data Mahasiswa Berhasil Didapatkan",
			data: mahasiswas
		});
	});
};

// handle create mahasiswa actions
exports.new = function (req,res){
	var mahasiswa =  new Mahasiswa();
	mahasiswa.name = req.body.name ? req.body.name : mahasiswa.name;
	mahasiswa.nim = req.body.nim;
	mahasiswa.jurusan = req.body.jurusan;
	mahasiswa.semester = req.body.semester;

	// save the mahasiswa and check for error
	mahasiswa.save(function(err) {
		// if (err)
		// res.json(err);

		res.json({
			message: "Mahasiswa Baru Terdaftar!",
			data: mahasiswa
		});
	});
};

// handle view mahasiswa info
exports.view = function(req, res){
	Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa)
	{
		if(err)
		res.send(err);
		res.json({
			message: 'Mahasiswa details loading..',
			data: mahasiswa
		});
	});
};
// Handle update mahasiswa info
exports.update = function (req, res) {
Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
       if (err)
           res.send(err);
	mahasiswa.name = req.body.name ? req.body.name : mahasiswa.name;
	mahasiswa.nim = req.body.nim;
	mahasiswa.jurusan = req.body.jurusan;
	mahasiswa.semester = req.body.semester;
// save the mahasiswa and check for errors
       mahasiswa.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'Mahasiswa Info updated',
               data: mahasiswa
           });
       });
   });
};
// Handle delete mahasiswa
exports.delete = function (req, res) {
   Mahasiswa.remove({
       _id: req.params.mahasiswa_id
   }, function (err, mahasiswa) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Mahasiswa deleted'
       });
   });
};
