const numberRegexp = /^[0-9]+$/;
export default function (s) {
    return s.length === 5 && numberRegexp.test(s);
}
