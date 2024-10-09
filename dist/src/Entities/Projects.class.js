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
exports.Projects = void 0;
const typeorm_1 = require("typeorm");
const Clients_class_1 = require("./Clients.class");
const Tasks_class_1 = require("./Tasks.class");
let Projects = class Projects {
};
exports.Projects = Projects;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], Projects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Projects.prototype, "idClient", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        length: 255,
    }),
    __metadata("design:type", String)
], Projects.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Projects.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Projects.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Projects.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Projects.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'idClient', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => Clients_class_1.Clients, (client) => client.project),
    __metadata("design:type", Clients_class_1.Clients)
], Projects.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'idProject' }),
    (0, typeorm_1.OneToMany)(() => Tasks_class_1.Tasks, (tasks) => tasks.projects),
    __metadata("design:type", Array)
], Projects.prototype, "tasks", void 0);
exports.Projects = Projects = __decorate([
    (0, typeorm_1.Entity)('projects', {
        orderBy: {
            id: 'ASC',
        },
    })
], Projects);
//# sourceMappingURL=Projects.class.js.map