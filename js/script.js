// 献立データ
const mealData = {
    "categories": {
        "主菜": [
            {"name": "鶏の照り焼き", "nutrition": "250g / 595kcal / 2.0g"},
            {"name": "鮭のムニエル", "nutrition": "120g / 230kcal / 1.2g"},
            {"name": "豚肉と野菜炒め", "nutrition": "200g / 420kcal / 1.8g"},
            {"name": "麻婆豆腐", "nutrition": "250g / 380kcal / 2.5g"},
            {"name": "鶏むね肉南蛮漬け", "nutrition": "200g / 310kcal / 1.5g"},
            {"name": "白身魚ホイル焼き", "nutrition": "150g / 220kcal / 1.2g"},
            {"name": "豆腐ハンバーグ", "nutrition": "200g / 280kcal / 1.3g"}
        ],
        "副菜": [
            {"name": "ほうれん草のおひたし", "nutrition": "80g / 40kcal / 0.3g"},
            {"name": "キャベツとツナのサラダ", "nutrition": "100g / 120kcal / 0.8g"},
            {"name": "きんぴらごぼう", "nutrition": "80g / 90kcal / 0.6g"},
            {"name": "小松菜としめじナムル", "nutrition": "100g / 70kcal / 0.5g"},
            {"name": "ブロッコリー卵サラダ", "nutrition": "100g / 120kcal / 0.6g"},
            {"name": "ひじき大豆煮", "nutrition": "100g / 120kcal / 0.7g"},
            {"name": "トマトきゅうりサラダ", "nutrition": "100g / 60kcal / 0.4g"}
        ],
        "主食": [
            {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"},
            {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"},
            {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"},
            {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}
        ],
        "汁物": [
            {"name": "豆腐とわかめの味噌汁", "nutrition": "200g / 70kcal / 1.2g"},
            {"name": "玉ねぎと人参のコンソメスープ", "nutrition": "200g / 60kcal / 1.0g"},
            {"name": "もやしと卵の中華スープ", "nutrition": "200g / 80kcal / 1.3g"},
            {"name": "わかめと長ねぎスープ", "nutrition": "200g / 60kcal / 1.0g"},
            {"name": "じゃがいも玉ねぎ味噌汁", "nutrition": "200g / 80kcal / 1.2g"},
            {"name": "キャベツベーコンスープ", "nutrition": "200g / 70kcal / 1.1g"},
            {"name": "根菜けんちん汁", "nutrition": "200g / 90kcal / 1.5g"}
        ]
    },
    "full_meals": [
        {"主菜": {"name": "鶏の照り焼き", "nutrition": "250g / 595kcal / 2.0g"}, "副菜": {"name": "ほうれん草のおひたし", "nutrition": "80g / 40kcal / 0.3g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "豆腐とわかめの味噌汁", "nutrition": "200g / 70kcal / 1.2g"}, "total_calories": 957, "protein": 54.3, "fat": 22.5, "carbs": 156, "fiber": 9.5},
        {"主菜": {"name": "鮭のムニエル", "nutrition": "120g / 230kcal / 1.2g"}, "副菜": {"name": "キャベツとツナのサラダ", "nutrition": "100g / 120kcal / 0.8g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "玉ねぎと人参のコンソメスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 650, "protein": 38.5, "fat": 19.5, "carbs": 141, "fiber": 11.1},
        {"主菜": {"name": "豚肉と野菜炒め", "nutrition": "200g / 420kcal / 1.8g"}, "副菜": {"name": "きんぴらごぼう", "nutrition": "80g / 90kcal / 0.6g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "もやしと卵の中華スープ", "nutrition": "200g / 80kcal / 1.3g"}, "total_calories": 830, "protein": 42.2, "fat": 23.5, "carbs": 146, "fiber": 11.5},
        {"主菜": {"name": "麻婆豆腐", "nutrition": "250g / 380kcal / 2.5g"}, "副菜": {"name": "小松菜としめじナムル", "nutrition": "100g / 70kcal / 0.5g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "わかめと長ねぎスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 760, "protein": 38.8, "fat": 21.0, "carbs": 142, "fiber": 11.0},
        {"主菜": {"name": "鶏むね肉南蛮漬け", "nutrition": "200g / 310kcal / 1.5g"}, "副菜": {"name": "ブロッコリー卵サラダ", "nutrition": "100g / 120kcal / 0.6g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "じゃがいも玉ねぎ味噌汁", "nutrition": "200g / 80kcal / 1.2g"}, "total_calories": 762, "protein": 44.1, "fat": 23.5, "carbs": 142, "fiber": 12.0},
        {"主菜": {"name": "白身魚ホイル焼き", "nutrition": "150g / 220kcal / 1.2g"}, "副菜": {"name": "ひじき大豆煮", "nutrition": "100g / 120kcal / 0.7g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "キャベツベーコンスープ", "nutrition": "200g / 70kcal / 1.1g"}, "total_calories": 650, "protein": 38.5, "fat": 18.5, "carbs": 131, "fiber": 11.5},
        {"主菜": {"name": "豆腐ハンバーグ", "nutrition": "200g / 280kcal / 1.3g"}, "副菜": {"name": "トマトきゅうりサラダ", "nutrition": "100g / 60kcal / 0.4g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "根菜けんちん汁", "nutrition": "200g / 90kcal / 1.5g"}, "total_calories": 670, "protein": 36.8, "fat": 20.0, "carbs": 126, "fiber": 13.5},
        {"主菜": {"name": "鶏の照り焼き", "nutrition": "250g / 595kcal / 2.0g"}, "副菜": {"name": "ほうれん草のおひたし", "nutrition": "80g / 40kcal / 0.3g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "豆腐とわかめの味噌汁", "nutrition": "200g / 70kcal / 1.2g"}, "total_calories": 955, "protein": 54.5, "fat": 22.5, "carbs": 158, "fiber": 9.8},
        {"主菜": {"name": "鮭のムニエル", "nutrition": "120g / 230kcal / 1.2g"}, "副菜": {"name": "キャベツとツナのサラダ", "nutrition": "100g / 120kcal / 0.8g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "玉ねぎと人参のコンソメスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 662, "protein": 38.7, "fat": 19.5, "carbs": 143, "fiber": 10.8},
        {"主菜": {"name": "豚肉と野菜炒め", "nutrition": "200g / 420kcal / 1.8g"}, "副菜": {"name": "きんぴらごぼう", "nutrition": "80g / 90kcal / 0.6g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "もやしと卵の中華スープ", "nutrition": "200g / 80kcal / 1.3g"}, "total_calories": 830, "protein": 42.2, "fat": 23.5, "carbs": 144, "fiber": 11.8},
        {"主菜": {"name": "麻婆豆腐", "nutrition": "250g / 380kcal / 2.5g"}, "副菜": {"name": "小松菜としめじナムル", "nutrition": "100g / 70kcal / 0.5g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "わかめと長ねぎスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 750, "protein": 38.8, "fat": 21.0, "carbs": 140, "fiber": 11.3},
        {"主菜": {"name": "鶏むね肉南蛮漬け", "nutrition": "200g / 310kcal / 1.5g"}, "副菜": {"name": "ブロッコリー卵サラダ", "nutrition": "100g / 120kcal / 0.6g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "じゃがいも玉ねぎ味噌汁", "nutrition": "200g / 80kcal / 1.2g"}, "total_calories": 760, "protein": 44.3, "fat": 23.5, "carbs": 144, "fiber": 12.3},
        {"主菜": {"name": "白身魚ホイル焼き", "nutrition": "150g / 220kcal / 1.2g"}, "副菜": {"name": "ひじき大豆煮", "nutrition": "100g / 120kcal / 0.7g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "キャベツベーコンスープ", "nutrition": "200g / 70kcal / 1.1g"}, "total_calories": 662, "protein": 38.7, "fat": 18.5, "carbs": 133, "fiber": 11.2},
        {"主菜": {"name": "豆腐ハンバーグ", "nutrition": "200g / 280kcal / 1.3g"}, "副菜": {"name": "トマトきゅうりサラダ", "nutrition": "100g / 60kcal / 0.4g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "根菜けんちん汁", "nutrition": "200g / 90kcal / 1.5g"}, "total_calories": 670, "protein": 36.8, "fat": 20.0, "carbs": 124, "fiber": 13.8},
        {"主菜": {"name": "鶏の照り焼き", "nutrition": "250g / 595kcal / 2.0g"}, "副菜": {"name": "ほうれん草のおひたし", "nutrition": "80g / 40kcal / 0.3g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "豆腐とわかめの味噌汁", "nutrition": "200g / 70kcal / 1.2g"}, "total_calories": 957, "protein": 54.3, "fat": 22.5, "carbs": 156, "fiber": 9.5},
        {"主菜": {"name": "鮭のムニエル", "nutrition": "120g / 230kcal / 1.2g"}, "副菜": {"name": "キャベツとツナのサラダ", "nutrition": "100g / 120kcal / 0.8g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "玉ねぎと人参のコンソメスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 650, "protein": 38.5, "fat": 19.5, "carbs": 141, "fiber": 11.1},
        {"主菜": {"name": "豚肉と野菜炒め", "nutrition": "200g / 420kcal / 1.8g"}, "副菜": {"name": "きんぴらごぼう", "nutrition": "80g / 90kcal / 0.6g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "もやしと卵の中華スープ", "nutrition": "200g / 80kcal / 1.3g"}, "total_calories": 830, "protein": 42.2, "fat": 23.5, "carbs": 146, "fiber": 11.5},
        {"主菜": {"name": "麻婆豆腐", "nutrition": "250g / 380kcal / 2.5g"}, "副菜": {"name": "小松菜としめじナムル", "nutrition": "100g / 70kcal / 0.5g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "わかめと長ねぎスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 760, "protein": 38.8, "fat": 21.0, "carbs": 142, "fiber": 11.0},
        {"主菜": {"name": "鶏むね肉南蛮漬け", "nutrition": "200g / 310kcal / 1.5g"}, "副菜": {"name": "ブロッコリー卵サラダ", "nutrition": "100g / 120kcal / 0.6g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "じゃがいも玉ねぎ味噌汁", "nutrition": "200g / 80kcal / 1.2g"}, "total_calories": 762, "protein": 44.1, "fat": 23.5, "carbs": 142, "fiber": 12.0},
        {"主菜": {"name": "白身魚ホイル焼き", "nutrition": "150g / 220kcal / 1.2g"}, "副菜": {"name": "ひじき大豆煮", "nutrition": "100g / 120kcal / 0.7g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "キャベツベーコンスープ", "nutrition": "200g / 70kcal / 1.1g"}, "total_calories": 650, "protein": 38.5, "fat": 18.5, "carbs": 131, "fiber": 11.5},
        {"主菜": {"name": "豆腐ハンバーグ", "nutrition": "200g / 280kcal / 1.3g"}, "副菜": {"name": "トマトきゅうりサラダ", "nutrition": "100g / 60kcal / 0.4g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "根菜けんちん汁", "nutrition": "200g / 90kcal / 1.5g"}, "total_calories": 670, "protein": 36.8, "fat": 20.0, "carbs": 126, "fiber": 13.5},
        {"主菜": {"name": "鶏の照り焼き", "nutrition": "250g / 595kcal / 2.0g"}, "副菜": {"name": "ほうれん草のおひたし", "nutrition": "80g / 40kcal / 0.3g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "豆腐とわかめの味噌汁", "nutrition": "200g / 70kcal / 1.2g"}, "total_calories": 955, "protein": 54.5, "fat": 22.5, "carbs": 158, "fiber": 9.8},
        {"主菜": {"name": "鮭のムニエル", "nutrition": "120g / 230kcal / 1.2g"}, "副菜": {"name": "キャベツとツナのサラダ", "nutrition": "100g / 120kcal / 0.8g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "玉ねぎと人参のコンソメスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 662, "protein": 38.7, "fat": 19.5, "carbs": 143, "fiber": 10.8},
        {"主菜": {"name": "豚肉と野菜炒め", "nutrition": "200g / 420kcal / 1.8g"}, "副菜": {"name": "きんぴらごぼう", "nutrition": "80g / 90kcal / 0.6g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "もやしと卵の中華スープ", "nutrition": "200g / 80kcal / 1.3g"}, "total_calories": 830, "protein": 42.2, "fat": 23.5, "carbs": 144, "fiber": 11.8},
        {"主菜": {"name": "麻婆豆腐", "nutrition": "250g / 380kcal / 2.5g"}, "副菜": {"name": "小松菜としめじナムル", "nutrition": "100g / 70kcal / 0.5g"}, "主食": {"name": "麦ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "わかめと長ねぎスープ", "nutrition": "200g / 60kcal / 1.0g"}, "total_calories": 750, "protein": 38.8, "fat": 21.0, "carbs": 140, "fiber": 11.3},
        {"主菜": {"name": "鶏むね肉南蛮漬け", "nutrition": "200g / 310kcal / 1.5g"}, "副菜": {"name": "ブロッコリー卵サラダ", "nutrition": "100g / 120kcal / 0.6g"}, "主食": {"name": "十六穀米", "nutrition": "150g / 250kcal / 0.0g"}, "汁物": {"name": "じゃがいも玉ねぎ味噌汁", "nutrition": "200g / 80kcal / 1.2g"}, "total_calories": 760, "protein": 44.3, "fat": 23.5, "carbs": 144, "fiber": 12.3},
        {"主菜": {"name": "白身魚ホイル焼き", "nutrition": "150g / 220kcal / 1.2g"}, "副菜": {"name": "ひじき大豆煮", "nutrition": "100g / 120kcal / 0.7g"}, "主食": {"name": "白ごはん", "nutrition": "150g / 252kcal / 0.0g"}, "汁物": {"name": "キャベツベーコンスープ", "nutrition": "200g / 70kcal / 1.1g"}, "total_calories": 662, "protein": 38.7, "fat": 18.5, "carbs": 133, "fiber": 11.2},
        {"主菜": {"name": "豆腐ハンバーグ", "nutrition": "200g / 280kcal / 1.3g"}, "副菜": {"name": "トマトきゅうりサラダ", "nutrition": "100g / 60kcal / 0.4g"}, "主食": {"name": "雑穀ごはん", "nutrition": "150g / 240kcal / 0.0g"}, "汁物": {"name": "根菜けんちん汁", "nutrition": "200g / 90kcal / 1.5g"}, "total_calories": 670, "protein": 36.8, "fat": 20.0, "carbs": 124, "fiber": 13.8}
    ]
};

// 週ごとの原材料データ（サンプル - 実際のデータに置き換える）
const ingredientsData = {
    "第1週": [
        {"name": "鶏むね肉", "amount": 300}, {"name": "しょうゆ", "amount": 20}, {"name": "みりん", "amount": 10}, 
        {"name": "砂糖", "amount": 5}, {"name": "ほうれん草", "amount": 80}, {"name": "かつお節", "amount": 3},
        {"name": "豆腐", "amount": 150}, {"name": "わかめ", "amount": 5}, {"name": "味噌", "amount": 18},
        {"name": "白米", "amount": 150}, {"name": "鮭", "amount": 120}, {"name": "バター", "amount": 10},
        {"name": "小麦粉", "amount": 5}, {"name": "キャベツ", "amount": 70}, {"name": "ツナ缶", "amount": 50},
        {"name": "マヨネーズ", "amount": 10}, {"name": "雑穀米", "amount": 150}, {"name": "玉ねぎ", "amount": 100},
        {"name": "人参", "amount": 50}, {"name": "コンソメ", "amount": 5}, {"name": "豚肉", "amount": 150},
        {"name": "ピーマン", "amount": 30}, {"name": "もやし", "amount": 80}, {"name": "ごぼう", "amount": 80},
        {"name": "唐辛子", "amount": 1}, {"name": "ごま油", "amount": 5}, {"name": "麦米", "amount": 150},
        {"name": "卵", "amount": 100}, {"name": "鶏ガラスープの素", "amount": 5}, {"name": "豆板醤", "amount": 5},
        {"name": "長ネギ", "amount": 30}, {"name": "にんにく", "amount": 5}, {"name": "生姜", "amount": 5},
        {"name": "小松菜", "amount": 80}, {"name": "しめじ", "amount": 50}, {"name": "十六穀米", "amount": 150},
        {"name": "長ねぎ", "amount": 30}, {"name": "酢", "amount": 15}, {"name": "片栗粉", "amount": 10}
    ],
    "第2週": [
        {"name": "鶏むね肉", "amount": 300}, {"name": "しょうゆ", "amount": 20}, {"name": "みりん", "amount": 10},
        {"name": "砂糖", "amount": 5}, {"name": "ほうれん草", "amount": 80}, {"name": "かつお節", "amount": 3},
        {"name": "豆腐", "amount": 150}, {"name": "わかめ", "amount": 5}, {"name": "味噌", "amount": 18},
        {"name": "十六穀米", "amount": 150}, {"name": "鮭", "amount": 120}, {"name": "バター", "amount": 10},
        {"name": "小麦粉", "amount": 5}, {"name": "キャベツ", "amount": 120}, {"name": "ツナ缶", "amount": 50},
        {"name": "白米", "amount": 150}, {"name": "玉ねぎ", "amount": 100}, {"name": "人参", "amount": 50},
        {"name": "コンソメ", "amount": 5}, {"name": "豚肉", "amount": 150}, {"name": "ピーマン", "amount": 30},
        {"name": "もやし", "amount": 80}, {"name": "ごぼう", "amount": 80}, {"name": "唐辛子", "amount": 1},
        {"name": "雑穀米", "amount": 150}, {"name": "卵", "amount": 100}, {"name": "鶏ガラスープの素", "amount": 5},
        {"name": "豆板醤", "amount": 5}, {"name": "長ネギ", "amount": 30}, {"name": "にんにく", "amount": 5},
        {"name": "小松菜", "amount": 80}, {"name": "しめじ", "amount": 50}, {"name": "麦米", "amount": 150},
        {"name": "長ねぎ", "amount": 30}, {"name": "酢", "amount": 15}, {"name": "ブロッコリー", "amount": 80},
        {"name": "じゃがいも", "amount": 100}, {"name": "ごま油", "amount": 5}, {"name": "片栗粉", "amount": 10}
    ]
};

let currentMode = 'daily'; // 'daily' or 'weekly'
let currentWeekIndex = 0;
let weeklyMenus = [];

// 栄養情報をパース
function parseNutrition(nutritionStr) {
    const parts = nutritionStr.split(' / ');
    const weight = parseInt(parts[0]);
    const calories = parseInt(parts[1]);
    const salt = parseFloat(parts[2]);
    return { weight, calories, salt };
}

// モード切り替え
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.btn-mode').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ランダムに献立を生成（今日の分）
function generateRandomDailyMenu() {
    const categories = ['主菜', '副菜', '主食', '汁物'];
    const selectedMenu = {};
    
    categories.forEach(category => {
        const items = mealData.categories[category];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        selectedMenu[category] = randomItem;
    });
    
    // 栄養情報を計算（近似値）
    let totalCalories = 0;
    let totalWeight = 0;
    let totalSalt = 0;
    
    categories.forEach(category => {
        const nutrition = parseNutrition(selectedMenu[category].nutrition);
        totalCalories += nutrition.calories;
        totalWeight += nutrition.weight;
        totalSalt += nutrition.salt;
    });
    
    // タンパク質、脂質、炭水化物、食物繊維は近似値として推定
    const protein = Math.round(totalCalories * 0.15 / 4);
    const fat = Math.round(totalCalories * 0.25 / 9);
    const carbs = Math.round(totalCalories * 0.60 / 4);
    const fiber = Math.round(totalWeight * 0.03);
    
    return {
        menu: selectedMenu,
        nutrition: {
            calories: totalCalories,
            weight: totalWeight,
            salt: totalSalt,
            protein: protein,
            fat: fat,
            carbs: carbs,
            fiber: fiber
        }
    };
}

// 1週間分の献立を生成
function generateWeeklyMenus() {
    weeklyMenus = [];
    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * mealData.full_meals.length);
        weeklyMenus.push(mealData.full_meals[randomIndex]);
    }
    currentWeekIndex = 0;
}

// メニュー決定
function randomizeMenu() {
    const button = document.querySelector('.btn-roulette');
    button.classList.add('spinning');
    
    setTimeout(() => {
        if (currentMode === 'daily') {
            const result = generateRandomDailyMenu();
            displayDailyResult(result.menu, result.nutrition);
        } else {
            generateWeeklyMenus();
            displayWeeklyResult();
        }
        button.classList.remove('spinning');
    }, 500);
}

// 今日の献立を表示
function displayDailyResult(menu, nutrition) {
    const resultContainer = document.getElementById('resultContainer');
    const categories = ['主菜', '副菜', '主食', '汁物'];
    
    let html = '<div class="menu-grid">';
    categories.forEach(category => {
        const item = menu[category];
        html += `
            <div class="menu-item">
                <div class="category-label">${category}</div>
                <div class="dish-name">${item.name}</div>
                <div class="nutrition-info">${item.nutrition}</div>
            </div>
        `;
    });
    html += '</div>';
    
    html += `
        <div class="nutrition-summary">
            <h3>📊 栄養情報</h3>
            <div class="nutrition-grid">
                <div class="nutrition-stat">
                    <div class="stat-label">総カロリー</div>
                    <div class="stat-value">${nutrition.calories}<span style="font-size: 0.6em;">kcal</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">総重量</div>
                    <div class="stat-value">${nutrition.weight}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">総塩分</div>
                    <div class="stat-value">${nutrition.salt.toFixed(1)}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">たんぱく質</div>
                    <div class="stat-value">${nutrition.protein}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">脂質</div>
                    <div class="stat-value">${nutrition.fat}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">炭水化物</div>
                    <div class="stat-value">${nutrition.carbs}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">食物繊維</div>
                    <div class="stat-value">${nutrition.fiber}<span style="font-size: 0.6em;">g</span></div>
                </div>
            </div>
        </div>
    `;
    
    resultContainer.innerHTML = html;
    resultContainer.classList.add('show');
}

// 1週間の献立を表示
function displayWeeklyResult() {
    const resultContainer = document.getElementById('resultContainer');
    const days = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];
    
    let totalNutrition = {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fiber: 0,
        salt: 0,
        weight: 0
    };
    
    let html = '';
    
    // 週のナビゲーション
    html += `
        <div class="week-navigation">
            <button class="nav-button" onclick="previousDay()" ${currentWeekIndex === 0 ? 'disabled' : ''}>←</button>
            <h2 class="week-title">${days[currentWeekIndex]}</h2>
            <button class="nav-button" onclick="nextDay()" ${currentWeekIndex === 6 ? 'disabled' : ''}>→</button>
        </div>
    `;
    
    const meal = weeklyMenus[currentWeekIndex];
    const categories = ['主菜', '副菜', '主食', '汁物'];
    
    html += '<div class="menu-grid">';
    categories.forEach(category => {
        const item = meal[category];
        html += `
            <div class="menu-item">
                <div class="category-label">${category}</div>
                <div class="dish-name">${item.name}</div>
                <div class="nutrition-info">${item.nutrition}</div>
            </div>
        `;
    });
    html += '</div>';
    
    // 今日の栄養情報
    html += `
        <div class="nutrition-summary">
            <h3>📊 ${days[currentWeekIndex]}の栄養情報</h3>
            <div class="nutrition-grid">
                <div class="nutrition-stat">
                    <div class="stat-label">カロリー</div>
                    <div class="stat-value">${meal.total_calories}<span style="font-size: 0.6em;">kcal</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">たんぱく質</div>
                    <div class="stat-value">${meal.protein}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">脂質</div>
                    <div class="stat-value">${meal.fat}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">炭水化物</div>
                    <div class="stat-value">${meal.carbs}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">食物繊維</div>
                    <div class="stat-value">${meal.fiber}<span style="font-size: 0.6em;">g</span></div>
                </div>
            </div>
        </div>
    `;
    
    // 1週間分の合計栄養情報を計算
    weeklyMenus.forEach(meal => {
        totalNutrition.calories += meal.total_calories;
        totalNutrition.protein += meal.protein;
        totalNutrition.fat += meal.fat;
        totalNutrition.carbs += meal.carbs;
        totalNutrition.fiber += meal.fiber;
    });
    
    // 週間合計
    html += `
        <div class="nutrition-summary" style="background: linear-gradient(135deg, #1a936f 0%, #2fb88b 100%); margin-top: 20px;">
            <h3>📈 1週間の合計栄養情報</h3>
            <div class="nutrition-grid">
                <div class="nutrition-stat">
                    <div class="stat-label">総カロリー</div>
                    <div class="stat-value">${totalNutrition.calories}<span style="font-size: 0.6em;">kcal</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">たんぱく質</div>
                    <div class="stat-value">${totalNutrition.protein.toFixed(1)}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">脂質</div>
                    <div class="stat-value">${totalNutrition.fat.toFixed(1)}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">炭水化物</div>
                    <div class="stat-value">${totalNutrition.carbs}<span style="font-size: 0.6em;">g</span></div>
                </div>
                <div class="nutrition-stat">
                    <div class="stat-label">食物繊維</div>
                    <div class="stat-value">${totalNutrition.fiber.toFixed(1)}<span style="font-size: 0.6em;">g</span></div>
                </div>
            </div>
        </div>
    `;
    
    // 原材料リスト
    const weekKey = '第1週'; // ランダムに週を選択する場合は調整
    if (ingredientsData[weekKey]) {
        html += `
            <div class="ingredients-section">
                <h3>🛒 1週間分の必要な原材料</h3>
                <div class="ingredients-grid">
        `;
        
        ingredientsData[weekKey].forEach(ingredient => {
            html += `
                <div class="ingredient-item">
                    <span class="ingredient-name">${ingredient.name}</span>
                    <span class="ingredient-amount">${ingredient.amount}g</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    resultContainer.innerHTML = html;
    resultContainer.classList.add('show');
}

function previousDay() {
    if (currentWeekIndex > 0) {
        currentWeekIndex--;
        displayWeeklyResult();
    }
}

function nextDay() {
    if (currentWeekIndex < 6) {
        currentWeekIndex++;
        displayWeeklyResult();
    }
}
