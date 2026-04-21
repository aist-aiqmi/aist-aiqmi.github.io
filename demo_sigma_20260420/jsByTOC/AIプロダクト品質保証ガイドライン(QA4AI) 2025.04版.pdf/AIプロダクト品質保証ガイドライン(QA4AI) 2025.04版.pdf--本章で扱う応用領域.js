var toc_content = `本章で扱う応用領域
本章においては、上述のシステムの代表例として、画像や動画、および3D モデルなどの構造モデ
ルを生成するシステムを考える。例えば、Web サイトや印刷物において閲覧者を楽しい気分にさせ
るような画像を生成し配置したり、映画やゲーム、アニメの構成要素となる動画や3D モデルを生成
したりする応用が考えられる。このようなシステムの例を以下に紹介する。
画像生成例- 無指定での画像生成
何も指定せず、多様で自然な画像の生成。
参考事例（図5.1）：A Style-Based Generator Architecture for Generative Adversarial Networks.
Tero Karras, Samuli Laine, and Timo Aila. In CVPR 2019.
図5.1
画像生成例- 無指定での画像生成(Karras et al., in CVPR 2019)
画像生成例- 種類を指定しての画像生成
画像の被写体を指定し、多様で自然な画像を生成。
参考事例（図5.2）：Large Scale GAN Training for High Fidelity Natural Image Synthesis. Andrew
Brock, JeﬀDonahue, and Karen Simonyan. In ICLR 2019.
5-2

AI プロダクト品質保証ガイドライン
図5.2
画像生成例- 種類を指定しての画像生成(Brock et al., in ICLR 2019)
画像生成例- 背景見本とレイアウトを指定しての背景生成
美術画像、レイアウト指定（物体の領域配置）を与え、美術画像の各領域の詳細テクスチャを反映
し、指定レイアウトでの背景を生成。
参考事例（図5.3）：Anime Generation with AI. DeNA, 2020. https://www.slideshare.net/
hamadakoichi/anime-generation-ai
図5.3
画像生成例- 背景見本とレイアウトを指定しての背景生成(DeNA, 2020)
画像生成例- 色見本を指定しての線画彩色
色見本、線画、ラフ部位領域を指定し、各部位の色パターン・線詳細を厳密に反映した彩色。
5-3

AI プロダクト品質保証ガイドライン
参考事例（図5.4）：Anime Generation with AI. DeNA, 2020. https://www.slideshare.net/
hamadakoichi/anime-generation-ai, https://youtu.be/X9j1fwexK2c?t=191
図5.4
画像生成例- 色見本を指定しての線画彩色(DeNA, 2020)
動画生成例- キャラクター画像と構造系列を指定しての動画生成
キャラクターにとらせたい構造を表す、構造情報の系列を与え、動画を生成。
キャラクターにとらせたい姿勢を表す座標モデルの系列（姿勢のリスト）を与え、多様なキャラ
クターが、指定された姿勢を順にとって動いていく自然な動画を生成。
参考事例（図5.5）：Full-body High-resolution Anime Generation with Progressive Structure-
conditional Generative Adversarial Networks.
Koichi Hamada, Kentaro Tachibana, Tianqi Li,
Hiroto Honda, and Yusuke Uchida. In ECCV Workshop 2018. https://youtu.be/bIi5gSITK0E
https://youtu.be/0LQlfkvQ3Ok
キャラクターを描きたい各部位形状の系列（領域情報のリスト）を与え、多様なキャラクターが、
指定された各部位の形状・姿勢を順にとって動いていく自然な動画を生成。
参考事例（図5.6）：Anime Generation with AI. DeNA, 2020. https://www.slideshare.net/
hamadakoichi/anime-generation-ai https://youtu.be/X9j1fwexK2c?t=166
動画生成例- キーフレームを指定しての中割生成
キーフレームとして始点画像と終点画像を与え、それらの画像の間を「補間」するような自然で
多様な動画を生成。
参考事例（図5.7）：AI によるアニメ生成の挑戦.
濱田晃一, 李天琦.
In DeNA TechCon
2019.
https://www.slideshare.net/hamadakoichi/anime-generation
https://www.
slideshare.net/hamadakoichi/anime-generation-ai
https://youtu.be/tOZW_KWb8b0
https://youtu.be/X9j1fwexK2c
5-4

`;