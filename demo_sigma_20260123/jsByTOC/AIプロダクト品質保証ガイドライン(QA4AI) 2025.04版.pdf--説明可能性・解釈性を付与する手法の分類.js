var toc_content = `説明可能性・解釈性を付与する手法の分類方法は種々ある。例えば、文
献[2][1][6] の大阪大学産業科学技術研究所の原准教授によると、「どのような説明がしたいか」とい
う出口ベースの分類として、大きく「大域的な説明」、「局所的な説明」、「説明可能なモデルの設計」
の3 つに分類される。
4-1

AI プロダクト品質保証ガイドライン
[原准教授による分類方法]
1. 大域的な説明
複雑なブラックボックスモデルを可読性の高い説明可能なモデルで表現することで説明とす
る方法。
2. 局所的な説明
特定の入力に対するブラックボックスモデルの予測の根拠を提示することで説明とする方法。
深層学習モデル、特に画像認識モデルの説明法も含む。
3. 説明可能なモデルの設計
そもそも最初から可読性の高い説明可能なモデルを作ってしまう方法。
また、三菱電機株式会社では、説明可能性・解釈性を3 つの軸で分類している[5]。
[三菱電機株式会社による分類方法]
(1). 説明可能性・解釈性を与える対象。
(2). 説明可能性・解釈性を与えるタイミング。
(3). 説明可能性・解釈性を与える方法。
(1) の分類は説明可能性・解釈性を与える対象で、モデル自体に付与する手法をGlobal、個々の推
論結果に対して付与する手法をLocal なアプローチと定義している。Global では予測傾向について
の統計的な説明や、解釈できる簡易モデルに大域的に近似することができる。対してLocal では、
個々の予測結果についての説明となる。
(2) の分類は、説明性・解釈性を与えるタイミングで、Intrinsic とPost-hoc がある。Intrinsic はモ
デルの学習時に、モデルの内部的な特性や仕組みに対して説明可能性・解釈性を与える。あるいは
最初から説明・解釈可能なモデルを学習するなどのアプローチを指す。Post-hoc はモデルの学習後
に、学習済みのモデルを対象に説明可能性・解釈性を与えるアプローチを指す。説明可能性・解釈性
の手法はGlobal/Local、Intrinsic/Post-hoc の組み合わせで大きく4 つに分類される。さらに、(3) の
説明可能性・解釈性を付与する方法（Explanator）では、大きく3 つのアプローチ（ルールベース、
特徴ベース、インスタンスベース）に分類される。ルールベースは「〜ならば〜」といったルール
を基に推論ロジックや判断根拠を説明する方法であり、特徴ベースは入力データのうち推論に大き
く影響を与える重要な要素を重みづけする方法である。インスタンスベースはモデルの推論結果を
データセットに含まれるインスタンスや、それらを加工したデータにより説明する方法である。
これらの分類軸を用いて代表的な手法を整理し、原准教授の分類方法との対応を示したものを図
4.1 に示す。各々の代表的な手法については、後に詳細を述べる。XAI 技術は現在も研究が盛んな分
野であり、AI 開発者はどのようなXAI 技術があるのかその特性を広く把握し、用途に応じて使い分
4-2

AI プロダクト品質保証ガイドライン
ける必要がある。AI を利用する者や利用するシーンでどのような意思決定をするかを踏まえ、どの
ような情報を提示すれば懸念を払拭してAI の判断を信頼してもらえるのか等、人へのフィードバッ
ク方法の検討が非常に重要である。
図4.1
説明性・解釈性の分類
Global のIntrinsic なアプローチは推論過程が明確な手法が用いられる。一般化線形モデル（GLM：
General Linear Model）や一般化加法モデル（GAM：Generalized Additive Model）などのモデリン
グ手法によってモデルの特徴からデータの透明性や解釈が得られる。決定木（DT：Decision Tree）
や決定則（DR：Decision Rule）は、設定したルールに応じた解釈を得られる。また近傍ベースの手
法（Neighbor）は、ニューラルネットで学習させた上で個々のレイヤーの説明性を最近傍法（nearest
neighbor）でテストサンプルのクラス予測を行って説明する。
Global のPost-hoc なアプローチは、解釈可能な手法によりモデルの出力を近似するSurrogate の
手法がある。例えば、DT Surrogate は、DT を用いて複雑なモデルを単純なサロゲートモデルに変換
することで、複雑なモデルの内部を説明できる。
Local のIntrinsic な手法にはニューラルネットワークの性質を利用する方法が多く、特徴マッ
プの自己回帰モデルにより注目点を推定するAttention などのアプローチがある。また影響関数
(Inﬂuence Function) により学習サンプルのひとつひとつが推論結果に与える影響を定量化したイン
スタンスベースの手法もある。
Post-hoc は、勾配ベースで顕著性マップ(Saliency Map) を推定するCAM(Class Activation Map)
4-3

AI プロダクト品質保証ガイドライン
やデータに対する摂動/変動を与え、出力の変換を解析するアプローチのSensitivity Analysis がある。
また入力データを摂動させて作った人工データを用いて解釈可能なモデルを学習するLIME などの
Local Surrogate のアプローチがある。表4.1 に各Explanator について、代表的な手法を記載する。
表4.1: Explanator
Explanator
Global
/Local
(G/L)
Instrinsic
/Post-hoc
(I/P)
代表的な手法のReference
GLM/GAM
G
I
GLM/GAM
Hastie, T. J.; Tibshirani, R. J. (1990). Generalized Ad-
ditive Models. Chapman & Hall/CRC. ISBN 978-0-
412-34390-2.
Madsen, Henrik; Thyregod, Poul (2011). Introduction
to General and Generalized Linear Models. Chapman
& Hall/CRCC
DT/DR
G
I
DT/DR
V.
Schetinin
et
al.,
“Condent
interpretation
of
Bayesian decision tree ensembles for clinical applica-
tions,” IEEE Trans. Inf. Technol. Biomed., vol. 11,
no. 3, pp. 312319, May 2007.
Neighbor
G
I
KNN(k-nearest neighbor)
N. Papernot, P. McDaniel, Deep k-nearest neigh-
bors: Towards conﬁdent, interpretable and robust deep
learning (2018). arXiv:1803.04765.
Surrogate
G
I
Surrogate Model
J. J. Thiagarajan, B. Kailkhura, P. Sattigeri, and K. N.
Ramamurthy. (2016). “TreeView: Peeking into deep
neural networks via feature-space partitioning.” [On-
line]. Available: https://arxiv.org/abs/1611.07429
Attention
L
I
Attention
Vaswani, Ashish, et al. "Attention is all you need."
Advances in neural information processing systems.
2017.
4-4

AI プロダクト品質保証ガイドライン
Inﬂuence
Function
L
I
Inﬂuence Function
Pang et al., Understanding Black-box Predictions via
Inﬂuence Functions, arXiv:1703.04730, 2017.
Sensitivity
Analysis
L
P
Gradient Boost Machine
Friedman, Greedy Function Approximation: A Gradi-
ent Boosting Machine, Annals of statistics, vol. 29,
no. 5, pp. 1189-1232, 2001.
Saliency
Map
L
P
Saliency Map
Karen et al., Deep Inside Convolutional Networks:
VisualisingImage Classiﬁcation Models and Saliency
Maps, arXiv:1312.6034v2, 2014.
CAM
L
P
Grad-CAM
R. R. Selvaraju, A. Das, R. Vedantam, M. Cogswell,
D. Parikh, and D. Batra.
Grad-cam:
Why did
you say that?
visual explanations from deep net-
works via gradient-based localization. arXiv preprint
arXiv:1610.02391, 2016.
Local
Surrogate
L
P
LIME
M. T. RiPython やR でXAI の代表的な手法が使え
るようにツールの整理も進んでいるbeiro, S. Singh,
and C. Guestrin, “‘Why should i trust you?’: Explain-
ing the predictions of any classier,” in Proc.
22nd
ACM SIGKDD Int. Conf. Knowl. Discovery Data
Mining, 2016, pp. 11351144.
前述したXAI 技術は、。各論文の著者が個別に公開している実装以外にも、各種手法を集めて整
理したライブラリが公開されている（表4.2、表4.3 参照）。
表4.2: XAI 関連のライブラリ
名称
言語
説明
リンク
4-5

AI プロダクト品質保証ガイドライン
ELI5
Python
Python のライブラリ、各種の説明
法・可視化法が実装されている。
python で機械学習によく利用さ
れるscikit-learn にシームレスに
繋がる様に設計されている。
https://eli5.readthedocs.io/en/latest/
iml
R
R のパッケージ、書籍Inter-
pretable Machine Learning:
A
Guide for Making Black Box Mod-
els Explainable の著者により種々
の説明法がまとめられている。
https://github.com/christophM/iml
DALEX
R
R のパッケージ、パッケージ開発
者の別リポジトリでは論文を初
め、様々な情報がまとめられてい
る。
https://github.com/pbiecek/DALEX
表4.3: XAI 関連のGithub
No.
説明
リンク
1
The Institute for Ethical AI & Machine
Learning によってまとめられたAI 関
連の技術リスト、Explaining Black Box
Models and Datasets にライブラリや
Git の情報が記載されている。
https://github.com/EthicalML/awesome-
production-machine-learning#explaining-
black-box-models-and-datasets
2
H2O.ai Machine Learning Interpretabil-
ity team (https://github.com/h2oai/mli-
resources) の機械学習ワークフローを
ベースとしたAI 関連の技術リスト、
Explainability- or Fairness-Enhancing
Software Packages にライブラリやGit
の情報が記載されている。
https://github.com/jphall663/awesome-
machine-learning-
interpretability/blob/master/README.md
4-6

`;