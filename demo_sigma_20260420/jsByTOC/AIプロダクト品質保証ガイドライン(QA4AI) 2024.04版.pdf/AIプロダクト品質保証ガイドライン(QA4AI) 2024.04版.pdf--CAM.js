var toc_content = `CAM
表4.10: CAM
概要
CAM（Class Activation Mapping）は、CNN（Convolution Neural
Network）を用いた画像解析・分類において、その判断根拠を可
視化する手法である。
分類
Local, Post-hoc
対象ドメイン
画像。
対象モデル
DNN。
4-17

AI プロダクト品質保証ガイドライン
実用例
日立製作所にて、技術者やコンサルタント向けツールとして、AI
の判断根拠を顧客企業の現場担当者に説明し、必要に応じてAI
モデルを改善するために、「Grad-CAM（Gradient-weighted Class
Activation Mapping）」が利用されている。
https://xtech.nikkei.com/atcl/nxt/news/18/06939/
使用方法
CNN 層における特徴抽出計算後の各特徴マップに対して、GAP
（Global Average Pooling）、つまり画素平均値を計算し、分類の
クラスとマッピングを行う。マッピングの結果、各特徴マップに
対する重みが出力されるので、各特徴マップに重み付けを行い、
元の画像に重ねることで、マッピング結果の寄与度を示すヒート
マップを作成する。[4.3.7-1]
効果：予測精度
システムが画像のどこに注目して分類を行ったかを示すことがで
きるため、品質を検証することが可能になる。たとえ分類に成功
していたとしても、注目領域が適切でなければ、学習方法を修正
するなどの判断ができるようになり、予測精度向上につながる。
効果：信頼性
CAM は判断根拠を可視化することができ、ユーザーへの信頼性
を向上することにつながる。
懸念事項
CAM はGAP やSoftmax 関数を用いているため、ベースとなる
画像分類モデルより精度が落ちてしまうことから、現在は各特
徴マップの重みづけ部分とGAP の部分を逆伝搬時の勾配、つま
りは変動が大きくなる部分で代用できるGrad-CAM（Gradient-
weighted Class Activation Mapping）[4.3.7-2] という発展手法が主
流となっており、さらにそこから特徴領域にキャプションを追加
したり、画像についての質問と応答を行うVQA（Visual Question
Answering）などの様々な可視化手法に応用されている。
また、このような手法の多くは敵対的攻撃に脆弱であり、画像中
に目に見えないノイズを乗せることで、判断根拠としての注目箇
所を変えることができることが知られている。[4.3.7-3]
ライブラリ
https://github.com/jazzsaxmaﬁa/Weakly_detector
4-18

AI プロダクト品質保証ガイドライン
参考文献
[4.3.7-1] Bolei Zhou, Aditya Khosla, Agata Lapedriza, Aude Oliva,
Antonio Torralba, Learning Deep Features for Discriminative Lo-
calization, Computer Vision and Pattern Recognition, 2015.
[4.3.7-2] Grad-CAM: Visual Explanations from Deep Networks via
Gradient-based Localization, Ramprasaath R. Selvaraju, Michael
Cogswell, Abhishek Das, Ramakrishna Vedantam, Devi Parikh,
Dhruv Batra, Computer Vision and Pattern Recognition, 2016.
[4.3.7-3] Ian J. Goodfellow, Jonathon Shlens, Christian Szegedy,
Explaining and Harnessing Adversarial Examples, Computer Vi-
sion and Pattern Recognition, 2015.
4.3.8

`;