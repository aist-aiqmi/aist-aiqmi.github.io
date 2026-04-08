var toc_content = `DT
表4.5: DT
概要
DT（Decision Tree:決定木）とは、データを段階的に分割してい
き、木構造の分析結果を出力する分析技法である。最初から解釈
可能なモデルを出力する手法であり、機械学習モデルに対する解
釈性の付与という意味では、利用者にとって利便性が高い。
分類
Global, Intrinsic
対象ドメイン
データの予測、判別、分類に用いられる。
4-8

AI プロダクト品質保証ガイドライン
対象モデル
DT は、それ自体が解釈可能なモデルである。
実用例
DataRobot ほか様々なツールに実装されており、利用可能。
使用方法
1) データ分析の目的に沿って、決定木分析のアルゴリズムによ
りデータを分割していく。
2) データ分割の場面では、不純度（データをきれいに分割でき
たかを表し、純粋な状態は0（ゼロ）となる）と情報利得（分割
の良さを表し、分割前の不純度- 分割後の不純度で求める）によ
り、データ分割の良さを判断する。
3) 汎化性能を確保できるように、木構造の深さを制限する。
効果：予測精度
木構造で表現されるため、分析結果の解釈が容易である。このた
め、得られた機械学習予測モデルの妥当性を判断しやすい。
効果：信頼性
木構造表現による可読性の高さから、信頼性は高い。
懸念事項
木構造が深くなると過学習（Over ﬁtting）となる危険性がある。
このため、木構造の深さを制限して、汎化性能を確保する必要が
ある。
ライブラリ
dtreeviz（可視化ツール）
https://github.com/parrt/dtreeviz
scikit-learn （Python 用機械学習ライブラリ）
https://github.com/scikit-learn/scikit-learn
rpart, partykit （R 用ライブラリ）
https://cran.r-project.org/web/packages/rpart/index.html
https://cran.r-project.org/web/packages/partykit/index.html
参考文献
[4.3.2-1] V. Schetinin et al., "Condent interpretation of Bayesian
decision tree ensembles for clinical applications," IEEE Trans. Inf.
Technol. Biomed., vol. 11, no. 3, pp. 312319, May 2007.
4.3.3

`;