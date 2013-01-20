describe("期待する振る舞い", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  //実在をテストすることで真実を熟考しましょう。
  it("trueであること", function() {
    expect(false).toBeTruthy(); //trueである必要があります。
  });

  //To understand reality, we must compare our expectations against reality.
  //実在を理解するためには、期待と実在を比べなければなりません。
  it("等価であること", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  //Some ways of asserting equality are better than others.
  //等しさを断言するためによりよい方法があります。
  it("等価であることを示すよりよい方法", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // toEqual() compares using common sense equality.
    // toEqual()は等価を一般的な方法で確認します。
    expect(actualValue).toEqual(expectedValue);
  });

  //Sometimes you need to be really exact about what you "type".
  //「型」について正確でなければならない場合もあります。
  it("=== を使って等価を評価する方法", function () {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

    // toBe() will always use === to compare.
    // toBe()は===を使って比較します。
    expect(actualValue).toBe(expectedValue);
  });

  //Sometimes we will ask you to fill in the values.
  //値を入力するように質問することもあります。
  it("値を入力する方法", function () {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
