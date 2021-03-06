const router = require('express').Router()
const surfSpots = require('../controllers/surfSpots')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')
// --------------------------------  Main Related  -------------------------------- //
router.route('/surfspots')
  .get(surfSpots.index)
  .post(secureRoute, surfSpots.create)
router
  .route('/surfspots/:id')
  .get(surfSpots.show)
  .put(secureRoute, surfSpots.edit)
  .delete(secureRoute, surfSpots.delete)
router
  .route('/surfspots/:id/comments')
  .post(secureRoute, surfSpots.commentCreate)
router
  .route('/surfspots/:id/comments/:commentId')
  .delete(secureRoute, surfSpots.commentDelete)
// --------------------------------  Log Related  -------------------------------- //
router.route('/register')
  .post(auth.register)
router.route('/login')
  .post(auth.login)
// --------------------------------  Profiles Related  -------------------------------- //
router.route('/profile')
  .get(secureRoute, users.userIndex)
router.route('/profile/:id')
  .get(secureRoute, users.userShow)
  .put(secureRoute, users.userUpdate)
router.route('/profile/:id/achieved')
  .post(secureRoute, users.userAchievedSurfSpotsCreate)
router.route('/profile/:id/achieved/:achievedId')
  .delete(secureRoute, users.userAchievedSurfSpotsDelete)
module.exports = router