'use strict'
const User = use('App/Models/User');

class AuthController {

    async register({request, auth, response}) {

        let user = await User.create(request.all())

        //generate token for user;
        let token = await auth.generate(user)

        Object.assign(user, token)

        return response.json(user)
      }

      async login({request, auth, response}) {

        let {username, password} = request.all();

        try {
          if (await auth.attempt(username, password)) {
            let user = await User.findBy('username', username)
            let token = await auth.generate(user)

            Object.assign(user, token)
            return response.json(user)
          }


        }
        catch (e) {
          console.log(e)
          return response.json({message: 'You are not registered!'})
        }
      }
      async getUser({request,response,params}){
        let { id } = params
        let doctor = await User.find(id)
        return response.status(200).json(doctor)
      }

}

module.exports = AuthController
