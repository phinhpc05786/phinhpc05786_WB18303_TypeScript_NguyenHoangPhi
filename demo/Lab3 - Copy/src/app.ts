function checkStringLength(numberOfLength: number) {
  return (target: Object, propertyname: string) => {
    const getValue = function() {
      // ...
    };

    // Định nghĩa setter
    const setValue =  function (newValue: string) {
      // Kiểm tra độ dài chuỗi
      if (newValue.length <= numberOfLength) {
        console.log(`${propertyname} ${newValue} quá ngắn, ${ propertyname} phải > ${numberOfLength} ký tự`);
      } else {
        console.log("Giá trị này đã được cập nhật");
      }
    };

    // Sử dụng decorator để định nghĩa property
    Object.defineProperty(target, propertyname, {
      get: getValue,
      set: setValue,
    });
  };
}

// Lớp User
class User1 {
  public username: string;

  @checkStringLength(7)
  public password: string;

  // Hàm khởi tạo
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

let user = new User1("12345", "12347567");

