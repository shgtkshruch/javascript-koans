describe("オブジェクト", function () {

  describe("プロパティ", function () {
    var meglomaniac;

    beforeEach(function () {
       meglomaniac = { mastermind: "Joker", henchwoman: "Harley" };
    });

    it("オブジェクトがプロパティの集合であることを確認すること", function () {
      expect(meglomaniac.mastermind).toBe("Joker");
    });

    it("プロパティには大文字、小文字の区別があることを確認すること", function () {
      expect(meglomaniac.henchwoman).toBe("Harley");
      expect(meglomaniac.henchWoman).toBe(undefined);
    });
  });


  it("プロパティ内の関数はメソッドのように振る舞うこと", function () {
    var meglomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = meglomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
  });

  it("オブジェクトに関数が紐付く場合には、'this'がオブジェクトを示すことを確認すること", function () {
    var currentDate = new Date()
    var currentYear = (currentDate.getFullYear());
    var meglomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2014);
    expect(meglomaniac.calculateAge()).toBe(44);
  });

  describe("'in'キーワード", function () {
    var meglomaniac;
    beforeEach(function () {
      meglomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("bomb(爆弾)を持っていること", function () {

      var hasBomb = "theBomb" in meglomaniac;

      expect(hasBomb).toBe(true);
    });

    it("しかし、detonator(起爆装置)は持っていないこと", function () {

      var hasDetonator = "theDetonator" in meglomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("プロパティを追加、削除できること", function () {
    var meglomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in meglomaniac).toBe(false);

    meglomaniac.secretary = "Agent Smith";
    expect("secretary" in meglomaniac).toBe(true);

    delete meglomaniac.henchman;
    expect("henchman" in meglomaniac).toBe(false);
  });


  it("プロトタイプを使ってすべてのオブジェクトに追加できること", function () {
      function Circle(radius) {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe("red");

      Circle.prototype.describe = function () {
        return "この円の半径は: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("この円の半径は: 10");
      expect(colouredCircle.describe()).toBe("この円の半径は: 5");
  });
});
