import { User } from './model';
export let users = (req, res) => {
    let users = [
        new User('James Coonce', 'jcoonce', 'james@none.com'),
        new User('Jim Coonce', 'jimcoonce', 'jim@none.com'),
        new User('Norman', 'jcoonce', 'norman@none.com'),
    ];
    res.json(users);
};
export let create = (req, res) => {
    res.json(req.body);
};
