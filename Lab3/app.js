var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log("---Câu 1----");
// ARRAY
var hobbies = ["Sports", "Cooking"];
var activeHobbies = ["Hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
console.log("---Câu 2----");
var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var speech = function (output) {
    console.log("result:" + output);
};
speech(sum(5, 12));
console.log(speech(sum(5, 12)));
var something;
var nothing;
var throwError = function (errorMsg) {
    throw new Error(errorMsg);
};
function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (resuld) {
    console.log(resuld);
});
console.log("---Câu 3----");
// Shuffle function for Pokemon array
var shuffle = function (data) {
    var _a;
    for (var i = data.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [data[j], data[i]], data[i] = _a[0], data[j] = _a[1];
    }
    return data;
};
// Fetch Pokemon data from API
var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, randomCount, results, pokemonArray, _i, results_1, result, pokemonResponse, pokemonData, pokemon;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://pokeapi.co/api/v2/pokemon')];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                randomCount = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
                results = data.results.slice(0, randomCount);
                pokemonArray = [];
                _i = 0, results_1 = results;
                _a.label = 3;
            case 3:
                if (!(_i < results_1.length)) return [3 /*break*/, 7];
                result = results_1[_i];
                return [4 /*yield*/, fetch(result.url)];
            case 4:
                pokemonResponse = _a.sent();
                if (!pokemonResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
                return [4 /*yield*/, pokemonResponse.json()];
            case 5:
                pokemonData = _a.sent();
                pokemon = {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: pokemonData.sprites.front_default,
                    type: pokemonData.types[0].type.name,
                };
                pokemonArray.push(pokemon);
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 3];
            case 7: return [2 /*return*/, pokemonArray];
        }
    });
}); };
// Show Pokemon data on the board
var show = function (data) {
    var board = document.getElementById('board');
    if (!board)
        return;
    board.innerHTML = ''; // Clear existing content
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var pokemon = data_1[_i];
        var div = document.createElement('div');
        div.className = 'col-2 gameItem m-2 p1 text-center d-flex';
        var img = document.createElement('img');
        img.src = pokemon.image;
        img.alt = pokemon.name;
        img.className = 'img-fluid';
        div.appendChild(img);
        board.appendChild(div);
    }
};
// Main function to execute everything
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    var data, shuffledData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, fetchData()];
            case 1:
                data = _a.sent();
                shuffledData = shuffle(data);
                show(shuffledData);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
main();
