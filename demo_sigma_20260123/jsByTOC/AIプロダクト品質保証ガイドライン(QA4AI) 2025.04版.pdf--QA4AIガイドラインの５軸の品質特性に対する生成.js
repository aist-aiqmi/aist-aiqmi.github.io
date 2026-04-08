var toc_content = `AI プロダクト品質保証ガイドライン
一方、自動評価においてはTrue/False の二値で解答する問題や、文章に対して適切さの点数を与
える問題など、正解率やF 値といった標準的な評価指標に帰着しやすい形になっていることが多い。
その結果、対象の品質特性に対し、本来評価したいことがらとは異なるベンチマークとなっている
可能性がある。
例えば倫理性については、究極的には、運用時に現れる多種多様な問い合わせにおいて対象の
LLM が不適切な回答をしないことを確認したい。例えば、様々な病状についての問いに対し、病院
に行かずに自身の判断で治療するように促すなど行き過ぎた助言がないことを確認したいとする。
これに対し既存のベンチマークでは「・・・のときに病院に行かず・・・する行為は適切か？」とい
う問いへの点数付けが正しいかどうかを評価している場合がある。
対応したい品質特性の名前から盲目的に既存のベンチマークを採用するのではなく、品質による
価値・リスクやそのためのコストを踏まえてベンチマークの選択や拡張を行っていく必要がある。
10.4.5
利用する自然言語
現状ではChatGPT などアメリカで開発されたLLM も多いが、そういったLLM は、データセッ
トが少ないマイナーな言語や、データセットが大量にあってもラテン文字以外を用いる言語におい
て性能が悪いことがある（例えば[Bang, arXiv23] における翻訳の評価）。このため、利用が想定さ
れる利用言語を明確にし、その言語での評価を行う必要がある。
10.5 QA4AI ガイドラインの５軸の品質特性に対する生成AI の特徴
本章では、生成AI、特に大規模言語モデル(LLM) の活用における課題や品質特性について論じて
きた。一方で、本ガイドラインの2.1 章で示しているAI プロダクトの品質保証において考慮すべき
5 軸は、主にディープラーニングなどの機械学習技術を前提に作成された。つまり、判別や分類、推
測などの定められた課題に対して、それを実現する機能を持つ機械学習モデルと、そのモデルを用
いたシステムを構築することを想定している。そのため、データの収集、モデルの学習、システム
の構築といったプロセスが、設定された目的を達するように適切に実施されることを求めている。
他方、LLM は特定の機能に特化しない基盤モデルとして提供される。そのため、設定された目的
の達成という観点では、LLM 構築のためのデータの収集やモデルの学習における品質保証を語るこ
とができない。また、一部の事業者を除いて多くの事業者はLLM を自身で構築することは稀であ
り、本ガイドラインが対象とするLLM を包含するプロダクトの構築においてデータ収集やモデル構
築はブラックボックスであって、直接的に品質を評価することができない。
しかし特定の目的を実現するために、ファインチューニングなどの技術を用いて、特定のデータ
を既存のLLM に追加学習することができる。また、RAG と呼ばれる技術により、既存のLLM と
特定のデータを蓄積したデータベースを併用するシステムも一般的になりつつある。それらの場合、
10-22

AI プロダクト品質保証ガイドライン
特定の目的に対するデータの収集や(ある種の) モデル構築を行うことと言えるが、学習済みのLLM
を前提としていることから、従来の機械学習におけるデータ収集やモデル構築と同様に考えること
はできない。
以上のような特性により、AI プロダクト品質保証において考慮すべき5 軸を、基盤モデルを前提
とした生成AI にそのまま適用することができない。現時点では、生成AI に対する品質保証の軸の
見直しは完了していない。以下の議論は、品質保証において考慮すべき5 軸に対して、生成AI で特
に考慮すべきポイントを示すに留める。
Data Integrity
5 軸のうちData Integrity では、訓練データやテストデータの質や量の適切性や十分性について言
及している。これらの適切性や十分性は、想定する利用環境や目的などを考慮して評価されるもの
である。例えば学習データの量の十分性に関するチェックリスト(a.ii) では「想定する要求・適用環
境において」十分な量のデータがあることを、訓練データの妥当性に関する(b.i) でも「想定する要
求・適用環境に」対応した適切なデータとなっていることを求めている。しかし、基盤モデルとし
てのLLM は様々な目的に対して様々な環境で利用される汎用性が期待され、データに関しても要求
や利用環境などの前提を置くことができないし、用いるデータが莫大であるので、データの量や質
を評価することは簡単ではない。また、LLM を構築する一部の事業者以外にとってはLLM の学習
にどのようなデータが使われたかはブラックボックスであり、Data Integrity の評価は困難である。
以下、LLM を学習する場合、学習済みLLM を利用する場合、学習済みLLM に追加学習をする
場合に分けて、LLM におけるData Integrity に関する留意点を述べる。
LLM を学習する場合
LLM の学習には大量のデータが必要であるため、インターネット上にあるあらゆる文書を使う場
合がある。このとき、学習のデータが適切かという視点が重要となる。このときの適切性は先に述
べたような想定する要求・適用環境に対応する適切性でなく、LLM による回答の正誤や妥当性等に
影響を与える一般的な事項を検討することとなる。この点はチェックリスト(d) 訓練データの適正
性や(h) 訓練データの法的適合性と関連する。適切でないデータとは、例えば以下のようなもので
ある。
• 誤りのある文書、フェイク文書：誤ったことを学習することにつながる
• 陳腐化したデータ：インターネット上にある陳腐化したデータを使うと誤った解答につながる
• 権利を侵害する文書：著作権のあるデータを利用すると著作権侵害につながる
• 倫理的に問題のある文書：差別や迫害などにつながる言動を学習する可能性がある
LLM を学習する際は、上記のようなデータを用いないことでData Integrity を高めることができる。
訓練データセットを構築する際は、利用できるデータを見極め、利用したデータの出自を明らかに
しておくことが重要である。
10-23

AI プロダクト品質保証ガイドライン
ただしLLM によっては特定の分野にフォーカスした学習を行う場合がある。例えば、プログラム
言語の学習にフォーカスしたLLM や、日本語など特定の自然言語にフォーカスしたLLM、金融な
どの特定事業分野にフォーカスしたLLM である。その場合には、それらのフォーカスに対応した
データを適切に収集する必要がある。
データの量については、LLM ではスケーリング則と呼ばれる特性が知られており、データ量が多
いほど回答の精度が上がると言われている。そのため現時点ではできるだけ多くのデータを用いる
開発競争が繰り広げられている。しかし大規模なLLM の学習には多大なコストがかかるため、今後
は目的を限定した比較的小規模なLLM も登場するものと考えられる。
学習済みLLM を利用する場合
学習済みのLLM を使う際はどのようなデータで学習されているか詳細に把握することは難しい。
モデルによってはどのようなデータを使った記載しているものもあるが詳細には書かれていないこ
とが多い。不明なデータで学習したLLM を利用する結果、不適切な出力をしてしまう可能性もあ
る。このため、学習に使われたデータが公開されているLLM を利用することが、LLM を利用した
システムを提供する際のリスクを下げることに繋がる。
学習済みLLM に追加学習する場合
学習済みLLM にユーザが保有するデータを追加する場合がある。その方法には、ファインチュー
ニングやRAG(Retrieval-Augmented Generation) など様々あり、それぞれ異なる特徴をもつが、ここ
ではそれらを区別せず追加学習と呼ぶことにする。追加学習の場合には、想定する要求や適用環境
が存在するため、Date Integrity の考え方を準用することができる。ただし、LLM が既に学習してい
るデータがあるため、想定する要求や適用環境に対するデータを追加学習ですべてカバーする必要
はない。また、追加学習によってどのように結果が変化するかは明確ではなく、追加により一般的
な知識に対する性能が低減する場合もある。ベースとなる学習済LLM と追加学習のためのデータ
の関係性については、今後の研究の進展が待たれる。
Model Robustness
Model Robustness で考慮する主な性質として、モデルの精度(チェックリスト(a))、汎化性能
(チェックリスト(b))、頑健性(チェックリスト(g)) がある。
一般的にAI モデルの精度は、特定の問題に対する正解を設定した上で、それを表現するテスト
データを準備し、正答率や再現性などで評価される。LLM の評価においても特定の問題に対する正
答率や再現性を評価することは可能である。しかし基盤モデルとしてのLLM は様々な問題に対す
る汎用性も求められており、特定の問題を対する評価が、LLM としての精度を表すものではないこ
とに注意が必要である。また、特定の問題を設定する場合にも、問題領域が広く正解が定まらない利
用が多いこともLLM の特徴である。例えば自然言語で書かれた仕様書を入力としてソフトウェア
のソースコードを生成する場合、入力となる仕様は非常に多様であり、それに対して生成するソー
10-24

AI プロダクト品質保証ガイドライン
スコードの正解も１つではない。ソースコード生成能力の評価には、Human Eval*11やMBPP*12の
ようなベンチマークが用いられることが多いが、その結果がユーザが期待する生成対象でも同様と
なるとは限らない点に注意が必要である。(QC01-1, QC02-2 に関連)
また、LLM は一般的な知識を有していることが期待されることから、その正しさは特定の問題に
対する正解ではなく、社会の一般的な理解に合致しているか、あるいはそれが事実であるかという観
点で評価されることもある。この点は、本ガイドラインのModel Robustness では考慮していない。
(QC02-1 に関連)
次に汎化性能とは、学習時の入力とは異なる入力に対して適切な判別や予測を行う能力である。
たとえば動物画像を判別する機械学習モデルでは、訓練データに含まれる犬の画像と完全に一致し
なくても、それらに類似した入力画像に対しては犬であると判別できるのは汎化性能によるもので
ある。機械学習では「内挿」と呼ばれる訓練データ群の内側にある入力データに対する汎化性能が
期待され、逆に「外挿」と呼ばれる訓練データ群に含まれない入力データに対する結果を問うこと
は技術の特性上無意味である。しかしLLM の場合には外挿に相当するような未知の結果を生成す
ることが期待される場合がある。そもそもData Integrity で述べたように訓練データの特定が困難で
あるので、内挿か外挿かの区別をすることも困難である。一方で、LLM に対する指示に対する正解
は１つに定まるものでなく、同じ入力に対して様々な出力を生成する「出力の多様性」をモデルの
評価指標をして考慮する場合もある。(QC01-3 に関連)
モデルの頑健性とは、入力の微小な変化に対しての出力が安定する性質を表す。LLM は同じ入力
に対して異なる結果を生成することも特徴の１つであり、上記の意味での頑健性を求めるのは困難
である。しかし利用目的によってはLLM に対する問合せに対して安定的な回答が期待される場合
もあり、LLM に用いて安定的な結果を得るための検討は今後の課題である。(QC01-4 に関連)
そのほか、LLM に期待される性質について以下に挙げる。
1 つは、知らない情報に対して正しく知らないと答える能力である。LLM は過去の情報を学習し
ているため、最新の情報は学習していない。しかしながら、LLM は知らない情報をあたかも知って
いるように文書を作り上げることがある。このような出力は、利用者に対して正しくない情報を提
供するため性能の悪いモデルとなる。知っている情報は正しく返し、知らない情報は知らないと回
答できるかがモデル頑健性の1 つの要素となる。
2 つめは、文書としての自然さの観点である。LLM の利用者は様々な指示をすることがあり、
LLM は指示に適した自然な文書をする必要がある。例えば、利用者は箇条書きでの指示をしたり、
文字数を指定したりする。また、小学生向けや専門家向けなど、文章の読者を指定する場合もある。
内容の正しさだけでなく、指示に沿った出力の自然さもLLM の頑健性の1 つと考えられる。
最後は敵対的な攻撃に対する頑健性である。悪意のある利用者は、LLM が学習したデータを抜
*11 https://github.com/openai/human-eval
*12 https://arxiv.org/abs/2107.03374
10-25

AI プロダクト品質保証ガイドライン
き出そうとしたり、LLM をだましたり、LLM に悪意のある出力を引きだそうとすることがある。
LLM は、これらの入力に対して適切に対処できなければならない。例えば、設定パラメータを聞き
出すような入力を無視したり、差別を助⻑するような発言はできないと回答するなどである。(QC03
に関連)
本ガイドラインのModel Robustness では学習過程の妥当性(チェックリスト(d)) についても言及
しているが、LLM の学習については技術進展の最中であり、現時点でその過程の妥当性を検討する
ことは困難である。
また、Model Robustness ではモデルの陳腐化(チェックリスト(j)) にも言及している。これは学習
時と運用時で外部環境に変化がありデータ分布が一致しなくなるコンセプトドリフトなどを想定し
たものである。LLM の構築では膨大なデータの学習に多大なコストがかかる上、日々生まれている
新しいデータを反映することは困難である。学習済LLM を利用する際には、学習がどの時点で行わ
れたものであるかに留意し、特に最新の情報を問い合わせるような用途で使う場合には、Web 検索
との併用のような手段も検討すべきである。
System Quality
System Quality ではAI プロダクト全体の品質確保について考慮している。AI コンポーネントを
システムの一要素として扱うことで、システム全体に対しては従来の品質保証の考え方を準用で
きる可能性がある。LLM を組み込んだシステムを開発しリリースする際の要点としても、従来シ
ステムの品質観点と同じである。しかしながら、生成AI を利用している点で、利用者への影響が
大きいハルシネーション、公平性、倫理、データの権利、AI セキュリティ、個人情報とプライバ
シーについて、システムのリスク分析を実施し対策を講じることを強く求める。（チェックリスト
(b)(c)(d)(f)(i)）(QC04, QC05 が関連)
また、System Quality ではシステムが提供する価値に着目している(チェックリスト(a))。LLM
の活用は黎明期であり、現状ではLLM を使うこと自体が目的となっているシステムもある。しか
し、LLM を使うことが妥当か、従来の機械学習や演繹的な解析技術を用いる方が提供価値の観点で
適切でないかなど、今後は冷静な判断が求めらるようになるだろう。
さらに、LLM にデータベースを加えるRAG や、プロンプトによるin-context learning、あるいは
Langchain 等を用いて複数回のLLM への問合せを行うなど、LLM を中心としたAI コンポーネント
の構造は多々ありアップデートが続いている。また、LLM の出力を評価する手法なども提案されて
いる。適切な価値提供のための適切な生成AI 包含システムのアーキテクチャは、今後も模索が続く
であろう。
AI システムの法的適合性(チェックリスト(h)) に対して、EU AI Act など従来の機械学習に対す
る規制において、生成AI に対する言及が急速に検討されているところである。規制内容について変
化が早く、最新の情報を確認する必要がある。
10-26

AI プロダクト品質保証ガイドライン
Process Agility
LLM は従来のAI よりも開発のスピードが速いことが特徴である。そのため、利用者・開発者と
もに最新の情報を入手し、知識・技術をアップデートしなければならない。
利用者の立場では、LLM を活用するための知識と技術が必要になる。例えば、LLM への入力に
対してどのような出力になるかや、求める出力を得るためにはどのようなプロンプトにすれば良い
かなどである。基本的なものは書籍などにまとめられるが、システムに特化するものもある。ノウ
ハウを社内でまとめるなど利用者も学習し続けるという考えが必要である。
開発者の立場では、LLM が数ヶ月〜数年おきに新しいものがリリースされるという点を考慮し
て、システムを開発しなければならない。LLM を交換可能に出来る設計にしておいたり、必要に応
じてクラウド環境を使うなど、今後想定されるLLM の更新を意識した開発が求められる。
Process Agility のチェックリストは、多くの項目がLLM を用いたシステム開発においても準用で
きるであろう。
Customer Expectation
ChatGPT をはじめとした近年のLLM 技術の高まりを受け、一般のニュースなどでも広く生成AI
について紹介されている。そのため、顧客も生成AI の基本的な機能や生成AI の課題を認知し始め
ている。一方、すべての人が正しく生成AI の課題を理解しているわけではなく、利用者は一般消費
者となることもあるため、生成AI を組み込んだシステムを提供する際には、考えられる課題を共有
し、制限事項として理解してもらうことが必要である。
例えば、ある自治体でのゴミ出し案内をChatGPT で行う実証実験において、当初62.5% だった正
答率を様々な工夫で94.1% に向上したものの、自治体では導入条件を99.9% としていたために導入
を断念したとのニュースがあった。その判断の是非についてはここでは論じないが、ステークホル
ダーの期待によっては異なる結果になった可能性はある。
生成AI の利用が増加する一方で、現状ではその技術的特性や能力についての理解が社会に浸透し
ているとは言えず、生成AI の技術も日々進歩している。最新の情報を基に期待値も常に見直しなが
ら導入していくことが肝要である。
参考文献
[Chang+, arXiv23] Yupeng Chang, Xu Wang, Jindong Wang, Yuan Wu, Linyi Yang, Kaijie Zhu,
Hao Chen, Xiaoyuan Yi, Cunxiang Wang, Yidong Wang, Wei Ye, Yue Zhang, Yi Chang, Philip S.
Yu, Qiang Yang, Xing Xie. A Survey on Evaluation of Large Language Models (v8). arXiv, https:
//arxiv.org/abs/2307.03109, October 2023.
[Guo+, arXiv23] Zishan Guo, Renren Jin, Chuang Liu, Yufei Huang, Dan Shi, Supryadi, Linhao Yu,
Yan Liu, Jiaxuan Li, Bojian Xiong, Deyi Xiong. Evaluating Large Language Models: A Comprehensive
10-27

AI プロダクト品質保証ガイドライン
Survey (v2), arXiv, https://arxiv.org/abs/2310.19736, October 2023.
[Zhao+, TIST’24] Haiyan Zhao, Hanjie Chen, Fan Yang, Ninghao Liu, Huiqi Deng, Hengyi Cai,
Shuaiqiang Wang, Dawei Yin, and Mengnan Du. Explainability for Large Language Models: A Survey.
ACM Trans. Intell. Syst. Technol, January 2024 (Early Access).
[Papieni+, ACL02] Kishore Papineni, Salim Roukos, Todd Ward, Wei-Jing Zhu. BLEU: A Method
for Automatic Evaluation of Machine Translation. The 40th annual meeting of the Association for
Computational Linguistics (ACL 2002), pp. 311-318, December 2002.
[Wang+, arXiv19] Alex Wang, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian
Michael, Felix Hill, Omer Levy, Samuel R. Bowman. SuperGLUE: A Stickier Benchmark for General-
Purpose Language Understanding Systems (v3).
arXiv, https://arxiv.org/abs/1905.00537,
February 2020.
[Lin+, ACL22] Stephanie Lin, Jacob Hilton, Owain Evans. TruthfulQA: Measuring How Models
Mimic Human Falsehoods. The 60th Annual Meeting of the Association for Computational Linguistics
(ACL 2022), pp. 3214 ‒ 3252, May 2022.
[Zhang+, arXiv24] Ningyu Zhang et al. A Comprehensive Study of Knowledge Editing for Large
Language Models (v3). arXiv, https://arxiv.org/abs/2401.01286, Jan 2024.
[Hartmann+, arXiv23] Jochen Hartmann, Jasper Schwenzow, Maximilian Witte. The political ideol-
ogy of conversational AI: Converging evidence on ChatGPT’s pro-environmental, left-libertarian orien-
tation (v1). arXiv, https://arxiv.org/abs/2301.01768, January 2023.
[Perez+, ACL’23] Ethan Perez et al. Discovering Language Model Behaviors with Model-Written
Evaluations. Findings of the Association for Computational Linguistics: ACL 2023, July 2023.
[Liu+, arXiv23] Yi Liu, Gelei Deng, Yuekang Li, Kailong Wang, Tianwei Zhang, Yepang Liu, Haoyu
Wang, Yan Zheng, Yang Liu. Prompt Injection attack against LLM-integrated Applications (v1). arXiv,
https://arxiv.org/abs/2306.05499, June 2023.
[Yao+, arXiv23] Yifan Yao, Jinhao Duan, Kaidi Xu, Yuanfang Cai, Eric Sun, Yue Zhang. A Survey
on Large Language Model (LLM) Security and Privacy: The Good, the Bad, and the Ugly (v1). arXiv,
https://arxiv.org/abs/2312.02003, Dec 2023.
[Kumar+, arXiv19] Ram Shankar Siva Kumar, David O Brien, Kendra Albert, Salomé Viljöen, Jeﬀrey
Snover. Failure Modes in Machine Learning Systems (v1). arXiv, https://arxiv.org/abs/1911.
11034, November 2019.
[Evtikhiev+, JSS23] Mikhail Evtikhiev, Egor Bogomolov, Yaroslav Sokolov, Timofey Bryksin. Out
of the BLEU: How should we assess quality of the Code Generation models?. Journal of Systems and
Software, Vol. 203, 2023
[Ouyang+, arXiv23] Shuyin Ouyang, Jie M. Zhang, Mark Harman, Meng Wang. LLM is Like a Box
of Chocolates: the Non-determinism of ChatGPT in Code Generation (v1). arXiv, https://arxiv.
10-28

AI プロダクト品質保証ガイドライン
org/abs/2308.02828, August 2023.
[Joshi+, ACL17] Mandar Joshi, Eunsol Choi, Daniel Weld, Luke Zettlemoyer. TriviaQA: A Large
Scale Distantly Supervised Challenge Dataset for Reading Comprehension, The 55th Annual Meeting
of the Association for Computational Linguistics (ACL 2017), July 2017.
[Yu+, arXiv23] Jifan Yu et al. KoLA: Carefully Benchmarking World Knowledge of Large Language
Models (v2). arXiv, https://arxiv.org/abs/2306.09296, July 20223.
[Srivastava+, EMNLP23] Aarohi Srivastava et al. Beyond the Imitation Game: Quantifying and ex-
trapolating the capabilities of language models. The 2023 Conference on Empirical Methods in Natural
Language Processing (EMNLP 2023), December 2023.
[Min+, EMNLP23] Sewon Min, Kalpesh Krishna, Xinxi Lyu, Mike Lewis, Wen-tau Yih, Pang Wei
Koh, Mohit Iyyer, Luke Zettlemoyer, Hannaneh Hajishirzi. FActScore: Fine-grained Atomic Evaluation
of Factual Precision in Long Form Text Generation. The 2023 Conference on Empirical Methods in
Natural Language Processing (EMNLP 2023), December 2023.
[Wang+, NeurIPS21] Boxin Wang, Chejian Xu, Shuohang Wang, Zhe Gan, Yu Cheng, Jianfeng Gao,
Ahmed Hassan Awadallah, and Bo Li. Adversarial GLUE: A multi-task benchmark for robustness
evaluation of language models. NeurIPS Datasets and Benchmarks 2021, December 2021.
[Nie+, ACL20] Yixin Nie, Adina Williams, Emily Dinan, Mohit Bansal, Jason Weston, and Douwe
Kiela. Adversarial NLI: A new benchmark for natural language understanding. The 58th Annual Meet-
ing of the Association for Computational Linguistics (ACL 2020), July 2020.
[Hendrycks+, ICLR21] Dan Hendrycks, Collin Burns, Steven Basart, Andrew Critch, Jerry Li, Dawn
Song, Jacob Steinhardt. Aligning AI With Shared Human Values. The International Conference on
Learning Representations (ICLR 2021), May 2021.
[Jin+, NeurIPS22] Zhijing Jin, Sydney Levine, Fernando Gonzalez Adauto, Ojasv Kamal, Maarten
Sap, Mrinmaya Sachan, Rada Mihalcea, Josh Tenenbaum, Bernhard Schölkopf. When to Make Ex-
ceptions: Exploring Language Models as Accounts of Human Moral Judgment. Advances in Neural
Information Processing Systems 35 (NeurIPS 2022), November 2022.
[Dhamala+, FAccT21] Jwala Dhamala, Tony Sun, Varun Kumar, Satyapriya Krishna, Yada Pruk-
sachatkun, Kai-Wei Chang, Rahul Gupta. BOLD: Dataset and Metrics for Measuring Biases in Open-
Ended Language Generation. The 2021 ACM Conference on Fairness, Accountability, and Trans-
parency (FAccT 2021), March 2021
[Rudinger+, NAACL18] Rachel Rudinger, Jason Naradowsky, Brian Leonard, Benjamin Van Durme.
Gender Bias in Coreference Resolution. 2018 Conference of the North American Chapter of the Asso-
ciation for Computational Linguistics: Human Language Technologies, Volume 2 (NAACL 2018), June
2018.
[Zhao+, NAACL18] Jieyu Zhao, Tianlu Wang, Mark Yatskar, Vicente Ordonez, Kai-Wei Chang. Gen-
10-29

AI プロダクト品質保証ガイドライン
der Bias in Coreference Resolution: Evaluation and Debiasing Methods. 2018 Conference of the North
American Chapter of the Association for Computational Linguistics: Human Language Technologies,
Volume 2 (NAACL 2018), June 2018.
[Stanovskyu+, ACL19] Gabriel Stanovsky, Noah A. Smith, Luke Zettlemoyer. Evaluating Gender
Bias in Machine Translation. The 57th Annual Meeting of the Association for Computational Linguis-
tics (ACL 2019), July 2019.
[Nadeem+, ACL21] Moin Nadeem, Anna Bethke, Siva Reddy. StereoSet: Measuring stereotypical
bias in pretrained language models. The 59th Annual Meeting of the Association for Computational
Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1:
Long Papers), August 2021.
[Nangia+, ACL20] Nikita Nangia, Clara Vania, Rasika Bhalerao, Samuel R. Bowman. CrowS-Pairs:
A Challenge Dataset for Measuring Social Biases in Masked Language Models. The 2020 Conference
on Empirical Methods in Natural Language Processing (EMNLP 2020), November 2020.
[Smith+, EMNLP22] Eric Michael Smith, Melissa Hall, Melanie Kambadur, Eleonora Presani, Adina
Williams.“I’m sorry to hear that”: Finding New Biases in Language Models with a Holistic Descriptor
Dataset. The 2022 Conference on Empirical Methods in Natural Language Processing (EMNLP 2022),
December 2022.
[Li+, EMNLP20] Tao Li, Daniel Khashabi, Tushar Khot, Ashish Sabharwal, Vivek Srikumar. UN-
QOVERing Stereotyping Biases via Underspeciﬁed Questions. Findings of the Association for Compu-
tational Linguistics: EMNLP 2020, November 2020.
[Parrish+, ACL22] Alicia Parrish, Angelica Chen, Nikita Nangia, Vishakh Padmakumar, Jason Phang,
Jana Thompson, Phu Mon Htut, Samuel Bowman. BBQ: A hand-built bias benchmark for question
answering. Findings of the Association for Computational Linguistics: ACL 2022, May 2022.
[Zampieri+, NAACL19] Marcos Zampieri, Shervin Malmasi, Preslav Nakov, Sara Rosenthal, Noura
Farra, Ritesh Kumar. Predicting the Type and Target of Oﬀensive Posts in Social Media. The 2019
Conference of the North American Chapter of the Association for Computational Linguistics: Human
Language Technologies, Volume 1 (Long and Short Papers) (NAACL 2019), June 2019.
[Zong+, ACL21] Sara Rosenthal, Pepa Atanasova, Georgi Karadzhov, Marcos Zampieri, Preslav
Nakov. SOLID: A Large-Scale Semi-Supervised Dataset for Oﬀensive Language Identiﬁcation. Find-
ings of the Association for Computational Linguistics (ACL-IJCNLP 2021), August 2021.
[Gehman+, EMNLP20] Samuel Gehman, Suchin Gururangan, Maarten Sap, Yejin Choi, Noah A.
Smith. RealToxicityPrompts: Evaluating Neural Toxic Degeneration in Language Models. Findings of
the Association for Computational Linguistics (EMNLP 2020), November 2020.
[Shaikh+, ACL23] Omar Shaikh, Hongxin Zhang, William Held, Michael Bernstein, Diyi Yang. On
Second Thought, Let’s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning. The
10-30

AI プロダクト品質保証ガイドライン
61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers) (ACL
2023), July 2023.
[Wei+, arXiv23] Alexander Wei, Nika Haghtalab, Jacob Steinhardt. Jailbroken: How Does LLM
Safety Training Fail? (v1). arXiv, https://arxiv.org/abs/2307.02483, July 2023.
[Deng+, arXiv23] Gelei Deng, Yi Liu, Yuekang Li, Kailong Wang, Ying Zhang, Zefeng Li, Haoyu
Wang, Tianwei Zhang, Yang Liu. MasterKey: Automated Jailbreak Across Multiple Large Language
Model Chatbots (v2). arXiv, https://arxiv.org/abs/2307.08715, October 2023.
[Bang, arXiv23] Yejin Bang, Samuel Cahyawijaya, Nayeon Lee, Wenliang Dai, Dan Su, Bryan Wilie,
Holy Lovenia, Ziwei Ji, Tiezheng Yu, Willy Chung, Quyet V. Do, Yan Xu, Pascale Fung: A Multitask,
Multilingual, Multimodal Evaluation of ChatGPT on Reasoning, Hallucination, and Interactivity (v4).
arXiv, https://arxiv.org/abs/2302.04023, November 2023.
10-31

AI プロダクト品質保証ガイドライン
11. AI プロダクト品質保証コンソーシアムについて
名称：
AI プロダクト品質保証コンソーシアム
英名：
Consortium of Quality Assurance for Artiﬁcial-Intelligence-based products and services
略称：
QA4AI コンソーシアム
URL：
http://www.qa4ai.jp/
設立日：
2018 年4 月1 日
目的：
AI 技術の活用・進化のさらなる促進と、AI プロダクトと社会との安心できる共生の実現
メンバ‧団体（2025 年4 月現在）：
⻘木利晃（北陸先端科学技術大学院大学）
秋場良太（有限責任あずさ監査法人）
池田裕則（東芝インフラシステムズ株式会社）
石川冬樹（国立情報学研究所）
伊藤潤平（ウイングアーク1st 株式会社）
伊藤浩朗（日立オートモティブシステムズ株式会社）
猪又憲治（三菱電機株式会社）
今井健男（Idein 株式会社）
今谷恵理（株式会社日立製作所）
上田英介（FastLabel 株式会社）
宇治田康浩（オムロン株式会社）
宇宿哲平（有限責任あずさ監査法人）
梅津良昭（株式会社リコー）*
遠藤征樹（株式会社日立産業制御ソリューションズ）
大塚祐次（株式会社日立産業制御ソリューションズ）
大⻄秀一（株式会社ヴィッツ）
大野敦寛（日立オートモティブシステムズ株式会社）
小川秀人（株式会社日立製作所）*
荻野恒太郎（楽天株式会社）*
⻑田健一（日立オートモティブシステムズ株式会社）
小原勇揮（ウイングアーク1st 株式会社）
柏良輔（横河電機株式会社）
岸知二（早稲田大学）
鬼頭正広（アイシン・ソフトウェア株式会社）
11-1

`;