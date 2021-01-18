const database = require('../models/index');
class UserController {
    static async addUser(req, res) {
        const newUser = req.body;
        try {
            const newUserCreated = await database.User.create(newUser);
            return res.status(200).json(newUserCreated);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async getUser(req, res) {
        const id = req.params.id;
        try {
            const user = await database.User.findOne({where: {id: Number(id)}});
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async getUserList(req, res) {
        try {
            const userList = await database.User.findAll();
            return res.status(200).json(userList);
        } catch (error) {
            return res.status(400).json(error.message);
        }

    }

    static async editUser(req, res) {
        const id = req.params.id;
        const newData = req.body;
        try {
            await database.User.update(newData, {where: {id: id}});
            const userUpdated = await database.User.findOne({where: {id: Number(id)}});
            return res.status(200).json(userUpdated);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async deleteUser(req, res) {
        const id = req.params.id;
        try {
            await database.User.destroy({where: {id: id}});
            return res.status(200).json({message: `user ${id} deleted`});
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async addCigar(req, res) {
        const userId = req.params.userId;
        try {
            const newCigar = await database.Cigar.create({UserId:userId});
            return res.status(200).json(newCigar);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async deleteCigar(req, res){
        const cigarId = req.params.cigarId;
        const userId = req.params.userId;
        try {
            await database.Cigar.destroy({where: {UserId:userId, id:cigarId}});
            return res.status(200).json({message: 'Cigar deleted'});
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    static async getCigarList(req, res){
        const userId = req.params.userId;
        let bodyDate = req.body.date;
        bodyDate = bodyDate.split('-');
        bodyDate = bodyDate[2] + '-' + bodyDate[1] + '-' + bodyDate[0];
        try {
            let cigarList = await database.Cigar.findAll({where: {UserId: userId}});
            if (bodyDate !== undefined) {
                cigarList = cigarList.filter(cigar => {
                    const dateCigar = new Date(cigar.createdAt);
                    const dateParameter = new Date(bodyDate);

                    const stringDateCigar = `${dateCigar.getDate().toString()}-${(dateCigar.getMonth()+1).toString()}-${dateCigar.getFullYear().toString()}`
                    const stringDateParameter = `${(dateParameter.getDate()+1).toString()}-${(dateParameter.getMonth()+1).toString()}-${dateParameter.getFullYear().toString()}`

                    return stringDateParameter == stringDateCigar;
                })
            }

            return res.status(200).json(cigarList);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
}

module.exports = UserController;