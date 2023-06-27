"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileDownload = exports.convertIntoCSV = void 0;
const path_1 = require("path");
const json_2_csv_1 = require("json-2-csv");
const fs_1 = require("fs");
async function convertIntoCSV(jsonArray, filenm) {
    try {
        json_2_csv_1.default.json2csv(jsonArray, (err, csv) => {
            if (err)
                throw err.message;
            const createFile = path_1.default.join(__dirname, "../public/csv", `${filenm}.csv`);
            fs_1.default.writeFileSync(createFile, csv);
        });
    }
    catch (error) {
        throw error.message;
    }
}
exports.convertIntoCSV = convertIntoCSV;
async function fileDownload(fileName) {
    let csvFilePath = path_1.default.join(__dirname, "../public/csv", fileName);
    return csvFilePath;
}
exports.fileDownload = fileDownload;
//# sourceMappingURL=csvConvert.middleware.js.map