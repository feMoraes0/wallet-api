
class UserController {

  store(request, response) {
    return response.status(200).send(request.body);
  }

}

module.exports = new UserController();