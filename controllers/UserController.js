const bcrypt = require('bcryptjs');

const UserModel = require('../models/User');
const appError = require('../service/appError');
const success = require('../service/responseSuccess');

module.exports = {
    async getUser(req, res, next) {
        const { id } = req.params;
        const data = await UserModel.findById(id, 'name avatar');
        success(res, data);
    },
    async insertUser(req, res, next) {
        const data = req.body;
        const {
            name,
            sex,
            email,
            password,
        } = data;

        if ( !name ) {
            return appError('【暱稱】必填', next);
        }

        if ( !sex ) {
            return appError('【性別】必填', next);
        }

        if ( !email ) {
            return appError('【帳號】必填', next);
        }

        if ( !password ) {
            return appError('【密碼】必填', next);
        }

        data.password = await bcrypt.hash(data.password, 12);

        const result = await UserModel.create(data);
        result.password = undefined;

        success(res, result, 201);
    }
}
