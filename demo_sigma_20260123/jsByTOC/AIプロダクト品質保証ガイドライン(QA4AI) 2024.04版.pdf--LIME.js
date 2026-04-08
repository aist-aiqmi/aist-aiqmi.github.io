var toc_content = `LIME
表4.11: LIME
概要
LIME（local interpretable model-agnostic explanations）は、複雑
なモデルを線形回帰で近似することで判断根拠を可視化する手法
である。
分類
Local, Post-hoc
対象ドメイン
画像、テキスト。
対象モデル
線形回帰。
実用例
研究段階。
使用方法
対象とするサンプルの周囲のデータ空間から、サンプリングと予
測を繰り返し行うことで得られるデータセットを教師データとし
て、線形回帰モデルを作成する。
効果：予測精度
システムが画像やテキストのどこに注目して分類を行ったかを示
すことができるため、品質を検証することが可能になる。
たとえ分類に成功していたとしても、注目領域が適切でなけれ
ば、学習方法を修正するなどの判断ができるようになり、予測精
度向上につながる。
効果：信頼性
LIME は判断根拠を可視化することができ、ユーザーへの信頼性
を向上することにつながる。
4-19

AI プロダクト品質保証ガイドライン
懸念事項
LIME は局所的に近似するため、特徴空間において離れたデータ
を入力すると期待する結果と乖離する場合がある。
ライブラリ
https://github.com/marcotcr/lime
参考文献
[4.3.8-1] Marco Tulio Ribeiro, Sameer Singh, Carlos Guestrin,
"Why Should I Trust You?": Explaining the Predictions of Any
Classiﬁer, Proceedings of the 22nd ACM SIGKDD International
Conference on Knowledge Discovery and Data Mining, August,
2016.
参考文献
[1]
【記事更新】私のブックマーク「機械学習における解釈性」. https://www.ai-gakkai.or.
jp/my-bookmark_vol33-no3/.
[2]
【記事更新】私のブックマーク「説明可能AI」（Explainable AI）. https://www.ai-gakkai.
or.jp/my-bookmark_vol34-no4/.
[3]
A. ADADI et al: “Peeking inside the black-box: A survey on Explainable Artiﬁcial Intelligence
（XAI）.” In: VOLUME XX, 2018.
[4]
Guidotti et al. “A Survey of Methods For Explaining Black Box Models.” In: arxiv, 2018.
[5]
瀬光孝之他. “機械学習モデルの解釈性に関する最新動向”. In: 電子情報通信学会. Vol. Vol.102,
No.10. 2019/10. url: https://app.journal.ieice.org/trial/102_10/k102_10_973/
index.html.
[6]
機械学習モデルの判断根拠の説明. https://www.slideshare.net/SatoshiHara3/ss-
126157179?qid=91472032-d83b-4d83-9305-a60e80f3aed9&v=&b=&from_search=4.
4-20

AI プロダクト品質保証ガイドライン
5. 
`;