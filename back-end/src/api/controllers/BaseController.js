require('express-async-errors');

class BaseController {
    constructor(service) {
        this.service = service;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getOne = this.getOne.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req, res) {
        const request = await this.service.create(req.body);
        return res.status(201).json(request);
    }

    async getAll(_req, res) {
        const request = await this.service.getAll();
        return res.status(200).json(request);
    }

    async getOne(req, res) {
        const request = await this.service.getOne(req.params.id);
        return res.status(200).json(request);
    }

    async update(req, res) {
        const request = await this.service.update(req.params.id, req.body);
        return res.status(200).json(request);
    }

    async delete(req, res) {
        const request = await this.service.delete(req.params.id);
        return res.status(200).json(request);
    }
}

module.exports = BaseController;