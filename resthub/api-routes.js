// initialize zxpress routes
let router = require('express').Router();

// set defaut API response
router.get('/', function(req, res) {
	res.json({
		status: 'API its Working',
		message:'Welcome to Resthub crafted!'
	});
});

// import mahasiswaController
var mahasiswaController = require('./mahasiswaController');

// mahasiswa apiRoutes
router.route('/mahasiswa')
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);
router.route('/mahasiswa/:mahasiswa_id')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);
// Export API routes
module.exports = router;


