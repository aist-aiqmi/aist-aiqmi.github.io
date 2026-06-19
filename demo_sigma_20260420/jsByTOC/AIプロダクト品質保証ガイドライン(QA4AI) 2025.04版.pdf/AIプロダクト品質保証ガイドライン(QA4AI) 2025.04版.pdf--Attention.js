var toc_content = `Attention
表4.8: Attention
4-12

AI プロダクト品質保証ガイドライン
概要
Attention 機構（注意機構）とは、主に機械翻訳や画像処理等を
目的とした深層学習モデルに導入される入出力要素ごとの関係
性、注意箇所を学習する手法である。
分類
Local, Intrinsic
対象ドメイン
機械翻訳、画像処理。
対象モデル
DNN。
実用例
現段階Attention 機構は研究レベルで、画像処理、自動運転[4.3.5-
4] と機械翻訳[4.3.5-3] などの分野への応用が見込まれている。
使用方法
Attention 機構を用いた機械翻訳では、入力文字列を符号化する
エンコーダ部の各単語の隠れ状態と、復号化するためのデコーダ
部で目標単語翻訳時の隠れ状態を使って新たなコンテキストベク
トルを計算する[4.3.5-3]。コンテキストベクトルはデコーダ部
の単語推定時に使われる。Attention 機構を用いることで、⻑文
での翻訳精度の向上と共に、alignment と呼ばれる機械翻訳分野
で、翻訳前の文と翻訳後の文の対照関係を分析する処理でも有用
な結果を生成できる。
効果：予測精度
機械翻訳では、単語と本文の関連性を示すことができ、言語の文
法構造分析が可能である。
自動運転、画像処理の応用例としては、前方画像のピクセルが運
転操作との関連性を可視化することができ、運転シーンへの重要
度を直観的に評価できる。
効果：信頼性
Attention は入出力要素ごとの関係性を可視化することができ、
ユーザーへの信頼性を向上することにつながる。
懸念事項
Attention 機構を用いることで、入出力データの対応関係を定量
的に分析することができるようになった。機械翻訳で翻訳した
単語と入力した単語の対応関係を分析できることが一つの例で
ある。しかし、品質保証技術開発の時に、入出力データの対応
関係は機械翻訳のように明らかになっていない場合がある。例
えば、工場の機械に装着したセンサの故障検知タスクにおいて、
Attention 機構を用いてセンサ値予測し、入出力センサデータの
関連性を分析することはできるが、その関連性を人間に説明可能
かという議論がある。Attention 機構から得られたデータ関連性
を解釈可能にする技術がこれから注目されるだろう。
4-13

AI プロダクト品質保証ガイドライン
ライブラリ
https://www.tensorﬂow.org/tutorials/text/nmt_with_attention
参考文献
[4.3.5-1] Mikolov, Tomáš, et al. "Recurrent neural network based
language model." Eleventh annual conference of the international
speech communication association. 2010.
[4.3.5-2] Gehring, Jonas, et al.
"Convolutional sequence to se-
quence learning." Proceedings of the 34th International Conference
on Machine Learning-Volume 70. JMLR. org, 2017.
[4.3.5-3] Vaswani, Ashish, et al. "Attention is all you need." Ad-
vances in neural information processing systems. 2017.
[4.3.5-4] Liu, Nian, Junwei Han, and Ming-Hsuan Yang.
"Pi-
canet: Learning pixel-wise contextual attention for saliency detec-
tion."Proceedings of the IEEE Conference on Computer Vision and
Pattern Recognition. 2018.
[4.3.5-5] Wang, Dequan, et al. "Deep object-centric policies for
autonomous driving." 2019 International Conference on Robotics
and Automation （ICRA）. IEEE, 2019.
[4.3.5-6] https://qiita.com/itok_msi/items/ad95425b6773985ef959
[4.3.5-7] http://www.thothchildren.com/chapter
/5c0b968d41f88f26724a70b8
4.3.6

`;