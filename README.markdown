# JavaScript Koans - JavaScriptを学ぶための公案 #

訳注: 「公案」とは禅宗において修行者が悟りを開くための課題として与えられる問題のこと。(参照: [Wikipesia](http://ja.wikipedia.org/wiki/%E5%85%AC%E6%A1%88))

JavaScript KoansはEdgecaseによる[Ruby koans](http://github.com/edgecase/ruby_koans)をベースに、JavaScriptによるプログラミングをテストから教えることを目標にしています。

この公案を初めて実行すると、ランタイムエラーと、エラーがどこで発生したかを示すスタックトレースが提示されます。  
ゴールはこのエラーを解決することです。各エラーを修正していく課程でJavaScriptについて、そしてUnderscore.jsを使った関数型JavaScriptに学ぶことができるはずです。

JavaScriptの「悟り」を得るための旅路は`koans/AboutExpects.js`ファイルからスタートします。  
公案はとてもシンプルなものなので、あまり考えすぎないように!
公案を進めていけばいくほど、より多くのJavaScriptのシンタックスに出会っていきます。それらはより難しい問題を解決することと、より高度なテクニックを使えるようにサポートしてくれます。

### 公案をブラウザで実行する

単純にJavaScript Koansのフォルダにファイルブラウザを使って移動し、そして`KoansRunnner.html`をダブルクリックしてください。

どのブラウザでも動作しますあ、快適な環境としてFireFoxかChromeを推奨します。JavaScriptのより詳しいスタックトレースの情報がこれらのブラウザでは表示できます。

一番初めのエラーは`koans/AboutExpects.js`にあります。まずはこの一番初めのテストを修正し、ブラウザを更新してください。  
すべてのテストがグリーン(訳注:
テストがパスする)になるまで、繰り返して下さい。

テストランナーには[Jasmine](http://pivotal.github.com/jasmine/)を利用し、レポートビューをカスタマイズしています。

### 公案をGrunt.jsを使って実行する(ja-koans-with-gruntブランチ)

Grunt.js(0.4.x)を利用して、公案の実行を行えるようにしてあります。  
JavaScript Koansディレクトリを`ja-koans-with-grunt`ブランチに切り替えて  
`grunt`
のコマンドを叩くと、
コマンドラインにテスト結果を出力します。  
コマンドライン側のテスト出力結果が順番通りではないので、  
http://localhost:8000/KoansRunner.html  
こちらからもアクセスできるようにしてあります。

### Changelog

*  v3 - Nov 2010  - Moved out of branch of functional-koans project, into own top level project
*  v2 - Sept 2010 - Second version based on jasmine (Thanks Greg Malcolm!)
*  v1 - July 2010 - First version based on jsTestDriver

### Inspirations & thanks

*  Dick Wall (the Java posse) - for bringing the idea of koans to my attention
*  Edgecase - for the great Ruby Koans
*  Douglas Crockford - for Javascript; the good bits

##### License

This software is (c) 2010 David Laing & Greg Malcolm, and licensed under the MIT license (see
LICENCE for details).  Enjoy!
