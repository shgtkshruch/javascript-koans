describe("変更できること", function() {

  it("オブジェクトのプロパティがパブリックであり変更できること", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("生成されたプロパティはパブリックであり変更できることへの理解", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("プロトタイプのプロパティはパブリックであり、変更できること", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

  it("コンストラクタの内部の変数、そしてコンストラクタの引数はプライベートであることへの理解", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

});
