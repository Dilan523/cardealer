"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNoticiaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_noticia_dto_1 = require("./create-noticia.dto");
class UpdateNoticiaDto extends (0, mapped_types_1.PartialType)(create_noticia_dto_1.CreateNoticiaDto) {
}
exports.UpdateNoticiaDto = UpdateNoticiaDto;
//# sourceMappingURL=update-noticia.dto.js.map