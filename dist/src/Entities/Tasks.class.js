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
exports.Tasks = void 0;
const typeorm_1 = require("typeorm");
const Users_class_1 = require("./Users.class");
const Status_class_1 = require("./Status.class");
const Projects_class_1 = require("./Projects.class");
let Tasks = class Tasks {
};
exports.Tasks = Tasks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Tasks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks.prototype, "idProject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Tasks.prototype, "idState", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 100,
    }),
    __metadata("design:type", String)
], Tasks.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Tasks.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Tasks.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Tasks.prototype, "audio", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Tasks.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tasks.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Tasks.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idUser', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Users_class_1.Users, (user) => user.tasks),
    __metadata("design:type", Users_class_1.Users)
], Tasks.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idState', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Status_class_1.Status, (state) => state.tasks),
    __metadata("design:type", Status_class_1.Status)
], Tasks.prototype, "states", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idProject', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Projects_class_1.Projects, (project) => project.tasks),
    __metadata("design:type", Projects_class_1.Projects)
], Tasks.prototype, "projects", void 0);
exports.Tasks = Tasks = __decorate([
    (0, typeorm_1.Entity)('tasks', {
        orderBy: {
            id: 'ASC',
        },
    })
], Tasks);
//# sourceMappingURL=Tasks.class.js.map