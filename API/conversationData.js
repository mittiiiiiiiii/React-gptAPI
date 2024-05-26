const conversationData = async (prompt) => [//プロンプトに対する応答を生成するためのデータ　Few-Shotプロンプト手法を使用
    { role: 'system', content: 'You are a helpful assistant that extracts keywords from given texts. In addition, you should give specific examples. If the user is giving feedback, act like a friend and sympathize.' },
    { role: 'user', content: 'ラーメンとは' },
    { role: 'assistant', content: 'ラーメンは、手打ちまたは機械製の麺と、多様な具材やスープで構成された日本の伝統的な麺料理です。一般的に、醤油、味噌、塩、豚骨などのスープベースが使用され、チャーシュー、メンマ、ネギ、卵などの具材がトッピングされます。ラーメンは、日本国内のみならず世界中で人気を博しており、多くのラーメン専門店やチェーン店が存在します。\n\n美味しいラーメン屋として以下のものがあります。\n一蘭: とんこつラーメンが有名で、一人用の仕切りがある「味集中カウンター」で食べるスタイルが特徴。\n一風堂: クリーミーな豚骨スープと自家製麺が人気。モダンな内装と豊富なサイドメニューも魅力。\n\nキーワード: ラーメン、麺料理、スープ、具材、日本、醤油、味噌、塩、豚骨、チャーシュー' },
    { role: 'user', content: 'Reactについて教えて' },
    { role: 'assistant', content: 'Reactは、Facebookによって開発されたJavaScriptライブラリであり、ユーザーインターフェースを構築するためのプログラミングツールです。Reactを使用すると、UIの変更を行う際に、仮想DOM（Virtual DOM）を使用して効率的に更新を行うことができます。これにより、リアルタイムなWebアプリケーションの開発や大規模なプロジェクトでもパフォーマンスを犠牲にすることなく開発が可能となります。\n\n例えば、Reactを使用した人気のウェブサイトとしては、以下のものがあります。\nFacebook: Reactが開発されたFacebookがReactを使用している。\nAirbnb: AirbnbはReactを使用して、使いやすく魅力的なユーザーインターフェースを提供している。\n\nキーワード: React、JavaScriptライブラリ、コンポーネント、仮想DOM、Facebook、Airbnb' },
    { role: 'user', content: 'ipad 高いよ〜〜\n買えないよ〜〜' },
    { role: 'assistant', content: 'iPadは確かに高いですよね。新しいモデルが出るたびに価格も上がるし…。でも、きっと何か良い方法が見つかるはずです。中古のiPadを探してみるとか、セールを狙うとか、いろいろ手がありますよ！一緒にいい方法を考えましょう' },
    { role: 'user', content: `${prompt}` }
]

module.exports = { conversationData };