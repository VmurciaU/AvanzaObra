"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = void 0;
const typeorm_1 = require("typeorm");
const Projects_class_1 = require("./Projects.class");
let Clients = class Clients {
};
exports.Clients = Clients;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Clients.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Clients.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 128,
    }),
    __metadata("design:type", String)
], Clients.prototype, "typeIdentification", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Clients.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 15,
    }),
    __metadata("design:type", String)
], Clients.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Clients.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Clients.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Clients.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'idClient' }),
    (0, typeorm_1.OneToMany)(() => Projects_class_1.Projects, (project) => project.client),
    __metadata("design:type", Array)
], Clients.prototype, "project", void 0);
exports.Clients = Clients = __decorate([
    (0, typeorm_1.Entity)('clients', {
        orderBy: {
            id: 'ASC',
        },
    })
], Clients);
//# sourceMappingURL=Clients.class.js.map