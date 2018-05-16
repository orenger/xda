export const messages:any = {
    after: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להכיל תאריך לאחר " + e[0] + "."
    }, alpha_dash: function (n:string) {
        return "השדה " + n + " יכול להכיל רק אותיות, מספרים ומקפים."
    }, alpha_num: function (n:string) {
        return "השדה " + n + " יכול להכיל רק אותיות ומספרים.."
    }, alpha_spaces: function (n:string) {
        return "השדה " + n + " יכול להכיל רק אותיות ורווחים."
    }, alpha: function (n:string) {
        return "השדה " + n + " יכול להכיל רק אותיות."
    }, before: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להכיל תאריך לפני " + e[0] + "."
    }, between: function (n:string, e:Array<any>) {
        return "הערך " + n + " חייב להיות בין " + e[0] + " ל- " + e[1] + "."
    }, confirmed: function (n:string) {
        return "הערכים של " + n + " חייבים להיות זהים."
    }, date_between: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להיות בין התאריכים " + e[0] + " ו- " + e[1] + "."
    }, date_format: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להיות בפורמט " + e[0] + "."
    }, decimal: function (n:string, e:Array<any>) {
        void 0 === e && (e = []);
        var t = e[0];
        return void 0 === t && (t = "*"), "השדה " + n + " חייב להיות מספרי ולהכיל " + ("*" === t ? "" : t) + " נקודות עשרוניות."
    }, digits: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להיות מספר ולהכיל " + e[0] + " ספרות בדיוק."
    }, dimensions: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להיות " + e[0] + " פיקסלים על " + e[1] + " פיקסלים."
    }, email: function (n:string) {
        return "השדה " + n + " חייב להכיל כתובת אימייל תקינה."
    }, ext: function (n:string) {
        return "השדה " + n + " חייב להכיל קובץ תקין."
    }, image: function (n:string) {
        return "השדה " + n + " חייב להכיל תמונה."
    }, in: function (n:string) {
        return "השדה " + n + " חייב להיות בעל ערך תקין."
    }, ip: function (n:string) {
        return "השדה " + n + " חייב להכיל כתובת IP תקינה."
    }, max: function (n:string, e:Array<any>) {
        return "השדה " + n + " לא יכול להכיל יותר מ- " + e[0] + " תווים."
    }, max_value: function (n:string, e:Array<any>) {
        return "השדה " + n + " יכול להיות " + e[0] + " לכל היותר."
    }, mimes: function () {
        return "הקובץ חייב להיות מסוג תקין."
    }, min: function (n:string, e:Array<any>) {
        return "השדה " + n + " חייב להכיל " + e[0] + " תווים לפחות."
    }, min_value: function (n:string, e:Array<any>) {
        return "הערך של " + n + " חייב להיות לפחות " + e[0] + "."
    }, not_in: function (n:string) {
        return "השדה " + n + " חייב להכיל ערך תקין."
    }, numeric: function (n:string) {
        return "השדה " + n + " יכול להכיל ספרות בלבד."
    }, regex: function (n:string) {
        return "הפורמט של " + n + " אינו תקין."
    }, required: function (n:string, e:Array<any>) {
        return "השדה " + n + " הינו שדה חובה"
    }, size: function (n:string, e:Array<number>) {
        var t:number = e[0]; var r:number = 1024;
        var u:number = 0 == (t = Number(t) * r) ? 0 : Math.floor(Math.log(t) / Math.log(r))
        var i:number = (t / Math.pow(r, u));
        return "השדה " + n + " חייב לשקול פחות מ "
            +(i.toFixed(2)
            + " " + ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][u]) + "."
    }, url: function (n:string) {
        return n + " אינו מכיל כתובת אינטרנט תקינה."
    }
}
