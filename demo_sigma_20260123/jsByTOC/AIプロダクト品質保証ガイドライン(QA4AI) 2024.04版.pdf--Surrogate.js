var toc_content = `Surrogate
表4.6: Surrogate
4-9

AI プロダクト品質保証ガイドライン
概要
Surrogate は、Black Box のモデルを最初から解釈可能なモデル
として学習しなおすものである。初めに一般的な手法でモデルを
生成し、後からそのモデルを近似する代理（Surrogate）モデルを
解釈可能な手法で生成することで、そこから情報を読み取るもの
である。Global のSurrogate は、モデルが全体としてどの変数の
どういった値に着目しているかを表すものである。
分類
Global, Post-hoc
対象ドメイン
画像、テキスト。
対象モデル
機械学習、深層学習。
実用例
なし。
使用方法
決定木における決定木代理モデルでは、元の複雑なモデルの元の
入力と予測で決定木をトレーニングすることで作成される。変
数同士の相互作用を見つけて確認するために、ICE（Individual
Conditional Expectation）および部分従属（Partial Dependence）
を用いる。
効果：予測精度
決定木代理モデルによって変数の重要度、傾向や相互作用が読み
取れる。決定木代理モデルでは、モデルそのものが等式や不等式
で表される階層構造になっている。
効果：信頼性
期待値に対して整合している場合に、ユーザーへの信頼性を向上
することにつながる。
懸念事項
単純なモデルが複雑なモデルの内部メカニズムを完全に表すわけ
でない。
ライブラリ
調査中
参考文献
[4.3.3-1] J. J. Thiagarajan, B. Kailkhura, P. Sattigeri, and K. N.
Ramamurthy.
(2016).
“TreeView:
Peeking into deep neural
networks via feature-space partitioning.”
[Online].
Available:
https://arxiv.org/abs/1611.07429
4.3.4

`;