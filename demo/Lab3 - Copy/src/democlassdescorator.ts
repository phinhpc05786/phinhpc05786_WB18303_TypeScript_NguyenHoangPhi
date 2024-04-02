// Ví dụ sau cho thấy class decorator được chạy 1 lần lúc gặp khai báo class,
// không chạy khi tạo các đối tượng.

function ThunCungEx(constructor: Function) {
  console.log("Ham  class");
}

@ThunCungEx
class ThunCung {
  constructor(private _name: string, private _age: number) {}
}

// Ví dụ: Thêm thuộc tính vào class dùng class decorator
function BaseHV(constructor: Function) {
  constructor.prototype.phai = true;
  constructor.prototype.ngaytao = new Date().toLocaleString("vi");
}
@BaseHV
class HocVien {
  constructor(public ht: string) {}
}
let hv1 = new HocVien(" Phi nè");
console.log(hv1);

//Ví dụ: Dùng class decorator để return class mới mở rộng class
// hiện tại với các thuộc tính bổ sung
function themTT<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    mauxe: string = "red";
  };
}

@themTT
class XeMay {
  constructor(private tx: string, private gia: number) {}
}
const x1: any = new XeMay("Vision 125", 39.5);
console.log(x1, x1["mauxe"]);

// Ví dụ: dùng class decorator đổi nội dung class
function ChangeHS(constructor: Function): any {
  return class {
    private name: string;
    public job: boolean;
    constructor(h: string) {
      this.name = h;
      this.job = true;
    }
  };
}
@ChangeHS
class HocSinh {
  public hoten: string;
  constructor(h: string) {
    this.hoten = h;
  }
}
// let u1 = new HocSinh{"phi phi"};
// console.log(u1);

//Ví dụ: Sử dụng kết hợp nhiều class decorator
function BaseUser1(constructor: Function) {
  console.log(`day la ham`);
}
function BaseUser2(constructor: Function) {
  console.log(`day la ham `);
}

@BaseUser1
@BaseUser2
class User {
  constructor(public name: string) {}
}
let a1 = new User("Luom");
console.log(a1);

// Bai vidu
class Pet {
  constructor(private name: string, private age: number) {}
}
//
function PetLogger(constructor: Function) {
  console.log("Day la PetLogger");
}
