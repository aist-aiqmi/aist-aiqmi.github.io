var toc_content = `AI プロダクト品質保証ガイドライン
図5.12
スタイルガイド画像に対するSPADE の出力変化例（上段におけるスタイルガイド画像
の系統的な変化に対して生成された画像が下段）
図5.13
SPADE に対するテスト実施結果例（上段におけるスタイルガイド画像の系統的な変化
に対して生成された画像が下段）
トを実施してみることで、頑健性について一定の確認ができることもあれば、具体的な問題が見つ
かる場合もある。問題の修正をどのように行うかは、GAN による生成モデルに限らず深層学習全般
において大きな課題であるが、具体的な問題やその傾向を把握することが重要であると考える。本
事例ではその実例を示すことができた。
5.7 Text-to-Image に対する評価事例
謝辞
5.6 節で示した実装結果については、国立情報学研究所トップエスイープログラムにおけるソフト
ウェア開発実践演習において取り組んだ結果を掲載させていただきました。本ガイドラインに即し
た演習に取り組んでいただき、結果をご提供いただいた飯島久典様（富士通株式会社）、及川裕之様
（東芝デジタルソリューションズ株式会社）、笠井栄良様（ソニー株式会社）、小御門道様（株式会社富
士通研究所）、呉隆司様（株式会社NTT データ）、鷹野翔様（株式会社デンソー）に感謝いたします。
5-21

AI プロダクト品質保証ガイドライン
5.8 参考文献
[Goodfellow+14] Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-
Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio. Generative Adversarial Nets. In NIPS 2014.
[Karras+18] Tero Karras, Timo Aila, Samuli Laine, Jaakko Lehtinen. Progressive Growing of GANs
for Improved Quality, Stability, and Variation. In ICLR 2018.
[Brock+19] Andrew Brock, JeﬀDonahue, and Karen Simonyan. Large Scale GAN Training for High
Fidelity Natural Image Synthesis. In ICLR 2019.
[Karras+19] Tero Karras, Samuli Laine, and Timo Aila. A Style-Based Generator Architecture for
Generative Adversarial Networks. In CVPR 2019.
[Hamada+18] Koichi Hamada, Kentaro Tachibana, Tianqi Li, Hiroto Honda, and Yusuke Uchida.
Full-body High-resolution Anime Generation with Progressive Structure-conditional Generative Adver-
sarial Networks. In ECCV Workshop 2018.
[Hamada+19] 濱田晃一, 李天琦. AI によるアニメ生成の挑戦. In DeNA TechCon 2019. https:
//www.slideshare.net/hamadakoichi/anime-generation
[Hamada+20] Anime Generation with AI. DeNA. 2020.
https://www.slideshare.net/
hamadakoichi/anime-generation-ai (Generated Anime: https://youtu.be/X9j1fwexK2c )
[Salimans+16] Tim Salimans, Ian Goodfellow, Wojciech Zaremba, Vicki Cheung, Alec Radford, Xi
Chen. Improved Techniques for Training GANs. In NIPS 2016.
[Heusel+17] Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler, Sepp Hochre-
iter. GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium. In NIPS
2017.
[Russakovsky+15] Olga Russakovsky, Jia Deng, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean
Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, and Michael Bernstein. ImageNet large scale
visual recognition challenge. In IJCV 2015.
[Odena+17] Augustus Odena, Christopher Olah, and Jonathon Shlens. Conditional Image Synthesis
with Auxiliary Classiﬁer GANs. In ICML 2017.
[Miyato+18] Takeru Miyato and Masanori Koyama. cGANs with projection discriminator. In ICLR
2018.
[Zhang+18] Han Zhang, Ian Goodfellow, Dimitris Metaxas, and Augustus Odena. Self-attention
generative adversarial networks. In ICML 2018.
[Wang+18] Ting-Chun Wang, Ming-Yu Liu, Jun-Yan Zhu, Guilin Liu, Andrew Tao, Jan Kautz, Bryan
Catanzaro. Video-to-Video Synthesis. In NeurIPS 2018.
[Cai+18] Haoye Cai, Chunyan Bai, Yu-Wing Tai, Chi-Keung Tang. Deep Video Generation, Predic-
5-22

AI プロダクト品質保証ガイドライン
tion and Completion of Human Action Sequences. In ECCV 2018.
[Barsoum+18] Emad Barsoum, John Kender, Zicheng Liu. HP-GAN: Probabilistic 3D human motion
prediction via GAN. In CVPR 2018.
[Bi´nkowski+18] Mikołaj Bi´nkowski, Danica J. Sutherland, Michael Arbel, Arthur Gretton. Demysti-
fying MMD GANs. In ICLR 2018.
[Zhang+18] Richard Zhang, Phillip Isola, Alexei A. Efros, Eli Shechtman, Oliver Wang. The Unrea-
sonable Eﬀectiveness of Deep Features as a Perceptual Metric. In CVPR 2018.
[Kundu+19] Jogendra Nath Kundu, Maharshi Gor, R. Venkatesh Babu. BiHMP-GAN: Bidirectional
3D Human Motion Prediction GAN. In AAAI 2019.
[Sun+19] Ke Sun, Bin Xiao, Dong Liu, Jingdong Wang. Deep High-Resolution Representation
Learning for Human Pose Estimation. In CVPR 2019.
[Kocabas+19] Muhammed Kocabas, Salih Karagoz, Emre Akbas. Self-Supervised Learning of 3D
Human Pose using Multi-view Geometry. In CVPR 2019.
[Pavllo+19] Dario Pavllo, Christoph Feichtenhofer, David Grangier, Michael Auli. 3D human pose
estimation in video with temporal convolutions and semi-supervised training. In CVPR 2019.
[Park+19] Taesung Park, Ming-Yu Liu, Ting-Chun Wang, and Jun-Yan Zhu. Semantic Image Syn-
thesis with Spatially-Adaptive Normalization. In CVPR 2019
5-23

AI プロダクト品質保証ガイドライン
6. 
`;