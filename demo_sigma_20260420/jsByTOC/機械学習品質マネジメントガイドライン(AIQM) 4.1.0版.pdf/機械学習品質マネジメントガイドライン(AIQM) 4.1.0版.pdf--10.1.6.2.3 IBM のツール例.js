var toc_content = `10.1.6.2.3 IBM のツール例 
前節で述べた①～⑤の機能が以下のようにカバーされる。 
 
AI Fairness 360 / IBM Watson OpenScale ・・・ ①、②、③ 
 
https://aif360.mybluemix.net/ 
 
https://www.ibm.com/jp-ja/cloud/watson-openscale 
 
AI Explainability 360 / IBM Watson OpenScale ・・・ ④ 
 
https://aix360.mybluemix.net/ 
 
https://www.ibm.com/jp-ja/products/cloud-pak-for-data 
 
IBM Cloud Pak for Data ・・・⑤ 
AI Fairness 360 とAI Explainability 360 は、IBM 基礎研究所が開発し公開したオープン

機械学習品質マネジメントガイドライン 第4 版 
 
国立研究開発法人産業技術総合研究所 
DigiARC-TR-2023-03 / CPSEC-TR-2023003 
174 
 
ソース・ソフトウェアであり、2020 年にLinux Foundation に寄付されている。AI Fairness 
360 では機械学習モデルやデータセットのバイアスに対処するための豊富な機能が提供さ
れており、本文書で解説した方法論が概ね網羅されている。 
 
Pre-processing：学習用データの再重み付け (reweighing)、差別的効果の除去 
(disparate impact remover)、学習用データの最適化 (optimized preprocessing) 他に
対応。 
 
In-processing：偏見除去 (prejudice remover)、敵対的バイアス除去 (adversarial 
debiasing) 他に対応 
 
Post-Processing：等化オッズ (equalized odds)、キャリブレーションされた等化オッ
ズ (calibrated equalized odds) に対応。 
 
メトリクス：Predictive parity 他に対応。Equalized odds とdemographic parity は提
供されるモジュールを使って計算が可能。 
IBM Cloud Pak for Data は機械学習モデルのライフサイクルを統合的にカバーするマル
チクラウド対応ソフトウェアであり、IBM Watson OpenScale はそれを構成する１つのソフ
トウエアモジュールである。モデル運用時に入出力データを監視し、公平性指標の時系列変
化を検知する機能は、運用開始後に発生するバイアスの改善に役立つ。 
10.2 
プライバシー 
本章では、プライバシーに関する品質マネジメントについて、社会的な背景や問題を整理
（10.2.1 節）し、機械学習のプライバシーに関わる品質特性に特有の課題を分析（10.2.2 節）
し、開発成果物ごとに品質マネジメントとして留意すべき事項（10.2.3 節）を説明する。 
 
プライバシー保護 
社会的な背景を踏まえて、情報システムにおけるプライバシーの考え方を整理する。 
10.2.1.1 
増大するプライバシー危機 
10.2.1.1.1 倫理的なAI 
データ利活用の時代が到来し、AI の技術を用いた高度な機能の実現とその広範な利用が

`;