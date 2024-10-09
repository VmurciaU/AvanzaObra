"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
const typeorm_1 = require("typeorm");
const pagination = async (entidad, rowsPerPage, currentPage) => {
    let skipPage = 0;
    if (currentPage === 1) {
        skipPage = (currentPage - 1);
    }
    else {
        skipPage = (currentPage + 1);
    }
    const [data, countRowsQuery] = await (0, typeorm_1.getRepository)(entidad).findAndCount({
        take: rowsPerPage,
        skip: (skipPage),
    });
    let firstPage = 1;
    let previousPage = 1;
    let lastPage = 1;
    let perPage = rowsPerPage;
    const totalPages = Math.round(countRowsQuery / rowsPerPage);
    if (rowsPerPage >= countRowsQuery) {
        return {
            firstPage,
            previousPage,
            lastPage,
            perPage,
            totalPages,
            data,
        };
    }
    firstPage = 1;
    previousPage = (currentPage - 1) > 1 ? (currentPage - 1) : 1;
    lastPage = (currentPage + 1) >= 1 && (currentPage + 1) <= totalPages ? (currentPage + 1) : totalPages;
    perPage = rowsPerPage;
    return {
        firstPage,
        previousPage,
        lastPage,
        perPage,
        totalPages,
        data,
    };
};
exports.pagination = pagination;
//# sourceMappingURL=paginate.js.map