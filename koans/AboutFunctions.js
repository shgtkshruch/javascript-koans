describe("関数", function() {

  it("関数の宣言", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("内側の変数は外側の変数を上書きする", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
  });

  it("レキシカル・スコープがあること", function () {
    var variable = "top-level";
    function parentfunction() {
        var variable = "local";
      function childfunction() {
          return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local");
  });

  it("レキシカル・スコープを使って関数を組み合わせること", function () {

    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  });

  it("余計な関数の引数を許すこと", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("関数を値として渡すこと", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });

  it("関数のボディを文字列として使うこと", function () {
    var add = new Function("a", "b", "return a + b;");
    expect(add(1, 2)).toBe(3);

    var multiply = function (a, b) {
      //内部コメント
      return a * b;
    };
    expect(multiply.toString()).toBe("
      function (a, b) {
        //内部コメント
        return a * b;
      }");
  });
});
