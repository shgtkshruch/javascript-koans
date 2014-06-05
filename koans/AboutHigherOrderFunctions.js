var _; //globals

/* このセクションではUnderscore.js(http://documentcloud.github.com/underscore/)を使って関数言語的なアプローチをします。
 「UndersocreはJavaScript用のユーティリティベルトライブラリで、Prototype.js(またはRuby)のような沢山の関数型プログラミングサポートを提供しますが、JavaScriptの組み込みオブジェクトは一切拡張していません。jQuery製のタキシードと、Backbone.js製のサスペンダーと一緒に着るネクタイであります。」
 */

describe("高階関数", function () {

  it("'filter'を使って条件にある配列のアイテムのみを返すこと", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([1,3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  it("'map'を使ってそれぞれの要素を変更する方法", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([2,3,4]);
    expect(numbers).toEqual([1,2,3]);
  });

  it("'reduce'を使ってイテレーション毎に同じ結果をアップデートする方法", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(6);
    expect(numbers).toEqual([1,2,3]);
  });

  it("'forEach'を使ったシンプルなイテレーションの方法", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1,2,3]);
  });

  it("'all'を使ってすべての条件でパスするかをテストする方法", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  it("'any'を使ってアイテムのどれかが条件に合致するかをテストする方法" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("'range'を使って配列を生成する方法", function() {
      expect(_.range(3)).toEqual([0,1,2]);
      expect(_.range(1, 4)).toEqual([1,2,3]);
      expect(_.range(0, -4, -1)).toEqual([0,-1,-2,-3]);
  });

  it("'flatten'を使って入れ子になった配列を簡単に扱えるようにすること", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1,2,3,4]);
  });

  it("'chain()'と'value()'を使って複数の高階関数を扱えるようになること", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6);
  });

});

