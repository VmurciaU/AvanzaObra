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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Roles_class_1 = require("./Roles.class");
const Charges_class_1 = require("./Charges.class");
const Tasks_class_1 = require("./Tasks.class");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        unique: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 15,
    }),
    __metadata("design:type", String)
], Users.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Users.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Users.prototype, "idRole", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Users.prototype, "idCharges", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idRole', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Roles_class_1.Roles, (role) => role.user),
    __metadata("design:type", Roles_class_1.Roles)
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idCharges', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Charges_class_1.Charges, (charges) => charges.user),
    __metadata("design:type", Charges_class_1.Charges)
], Users.prototype, "charges", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'idUser' }),
    (0, typeorm_1.OneToMany)(() => Tasks_class_1.Tasks, (tasks) => tasks.user),
    __metadata("design:type", Array)
], Users.prototype, "tasks", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)('users', {
        orderBy: {
            id: 'ASC',
        },
    })
], Users);
//# sourceMappingURL=Users.class.js.map