import moderatelyLuckCorundum from "@/assets/result/luckResult/iconBlock/resultIcon/moderatelyLuckyCorundum.svg";
import luckCorundum from "@/assets/result/luckResult/iconBlock/resultIcon/luckyCorundum.svg";
import unluckyCorundum from "@/assets/result/luckResult/iconBlock/resultIcon/unluckyCorundum.svg";
import greatLuckyZircon from "@/assets/result/luckResult/iconBlock/resultIcon/greatLuckyZircon.svg";
import moderatelyLuckyZircon from "@/assets/result/luckResult/iconBlock/resultIcon/moderatelyLuckyZircon.svg";
import littleLuckyZircon from "@/assets/result/luckResult/iconBlock/resultIcon/littleLuckyZircon.svg";
import moderatelyLuckySpinel from "@/assets/result/luckResult/iconBlock/resultIcon/moderatelyLuckySpinel.svg";
import luckySpinel from "@/assets/result/luckResult/iconBlock/resultIcon/luckySpinel.svg";
import littleLuckySpinel from "@/assets/result/luckResult/iconBlock/resultIcon/littleLuckySpinel.svg";
import Corundum from "@/assets/result/luckStone/Corundum.png";
import Zircon from "@/assets/result/luckStone/Zircon.jpg";
import Spinel from "@/assets/result/luckStone/Spinel.jpg"

const resultData: {
    [key: string]: {
        luckyType: {
            [key: string]: {
                description: string[],
                luck: { [key: string]: number },
                icon: string,
            }
        },
        description: string,
        image: string,
    }
} = {
    "剛玉": {
        luckyType: {
            "中吉": {
                description: [
                    "你的愛情生活將迎來穩定和平靜的時期，或者現有的感情將進入一個新的深度，保持開放心態，享受愛情的美好。你的事業遇到一些新的機會，這些機會可能與一個特定的符號或標誌相關，留心觀察並善用這些機會。財運方面你可能會得到某種意外的好運，這可能來自於一個未預料到的機會或收入來源，謹慎理財，善加利用這份財富。",
                    "整體而言，你可能會面臨一些神秘的變化和機會，這是有機會改變你生活方向的時期，思考自己的目標和願望，並為之努力。",
                ],
                luck: {
                    "桃花": 4.0,
                    "財運": 3.0,
                    "事業/學業": 3.0,
                },
                icon: moderatelyLuckCorundum,
            },
            "吉": {
                description: [
                    "你有機會邂逅一位有趣的愛人，他們總是能逗你笑，一段充滿歡樂的愛情即將開始。你將進入一個顛覆性的事業階段，提出大膽的點子，這可能會為你的事業帶來奇蹟。忙碌之中，也別忘了犒賞自己，讓生活更有趣。",
                    "這是一個充滿笑聲和歡樂的時期。透過幽默看待生活中的點點滴滴。",
                ],
                luck: {
                    "桃花": 3,
                    "財運": 3.5,
                    "事業/學業": 3,
                },
                icon: luckCorundum,
            },
            "兇": {
                description: [
                    "你可能會面臨感情上的一些挫折和失望，可能是由於溝通不良或彼此之間的距離感，需要更多的時間來修復和理解。事業上可能會遇到一些挑戰，但同時也有機會學到新的技能並發現自己的潛力。與特定數字相關的財運可能會受到一些影響，請謹慎管理金錢，避免進一步的財務壓力。",
                    "這是一個充滿挑戰和悲傷的時期，記住，每個變動都是一種成長的機會，並在過程中發現生活中更多的美好。",
                ],
                luck: {
                    "桃花": 1.0,
                    "財運": 2.5,
                    "事業/學業": 1.5,
                },
                icon: unluckyCorundum,
            },
        },
        description: "剛玉為莫氏硬度第二高的寶石，被視為勇氣、力量和保護的象徵。能賦予佩戴者勇氣和自信，幫助他們勇敢地面對生活中的挑戰和困難。適合現正面對人生挑戰的人，能夠抵禦負能量和外界壓力的侵害，有助於保持情緒和心靈的穩定。",
        image: Corundum,
    },
    "鋯石": {
        luckyType: {
            "大吉": {
                description: [
                    "你即將迎來愛情中的甜蜜時刻，可能會有一個浪漫的驚喜等著你。事業上，與同事之間的合作和工作上的突破將帶來豐碩的成果，可能會有意外的獲利或者理想中的投資回報，讓你的財富增值。",
                    "這是一個適合開始新計劃或挑戰自己的時刻，可能會遇到一些令人挑戰的機會，但同時也會有機會展現出你的才華和創意，保持冷靜和耐心，並尋找解決問題的新方法。",
                ],
                luck: {
                    "桃花": 4.0,
                    "財運": 5.0,
                    "事業/學業": 4.0,
                },
                icon: greatLuckyZircon,
            },
            "中吉": {
                description: [
                    "你將在愛情領域迎來一陣溫馨和甜蜜的風暴。一位特別的人可能會進入你的生活，彷彿是一部浪漫喜劇的主角。你的事業將充滿活力，新的合作機會和有趣的專案將為你的事業帶來動力。一串吉祥的數字將為你帶來好運，或許是在彩票中獎，或者在特別的日子收到一份意外的獎金。",
                    "總的來說，這是一段充實和有趣的時光，滿懷希望地迎接生活的種種挑戰。",
                ],
                luck: {
                    "桃花": 3.0,
                    "財運": 4.0,
                    "事業/學業": 3.0,
                },
                icon: moderatelyLuckyZircon,
            },
            "小吉": {
                description: [
                    "感情中可能會有一些小的波動，保持冷靜和理解，這有助於解決潛在的問題，使感情更加穩固。在事業領域，你將面臨一些新的挑戰，但這同時也是成長的機會，與同事和上級保持良好的溝通，勇敢迎接變化。財運方面可能會有一些意外的好運，謹慎管理金錢，這將有助於穩定財務狀況。",
                    "這是一個適合深思熟慮和內省的時刻，嘗試尋找生活中的平衡、從日常生活中的小事中獲得滿足感，並建立更深厚的人際關係。保持積極的態度，並對未來充滿信心，您將會在平靜中找到生活的美好之處。",
                ],
                luck: {
                    "桃花": 3.0,
                    "財運": 2.5,
                    "事業/學業": 3.0,
                },
                icon: littleLuckyZircon,
            },
        },
        description: "鋯石璀璨透亮的光澤象征純潔、忠誠的愛情，是和伴侶感情的加溫器。也有著吸引貴人、增進人員的作用，業務相關工作配戴有助提振事業。",
        image: Zircon,
    },
    "尖晶石": {
        luckyType: {
            "中吉": {
                description: [
                    "你將在愛情領域迎來一陣溫馨風暴，一位溫暖善良的人可能會進入你的生活，彷彿是一部浪漫喜劇的主角。你的事業將充滿活力，新的合作機會和有趣的專案將為你的事業帶來動力。一串吉祥的數字將為你帶來好運，或許是在彩票中中獎，或者在特別的日子收到一份意外的獎金。",
                    "多注意身邊的人和事，這可能會帶來一些愉快的驚喜。保持積極的態度，對生活充滿信心，您將會在多個層面上獲得豐盛的收獲。",
                ],
                luck: {
                    "桃花": 4.0,
                    "財運": 3.0,
                    "事業/學業": 3.0,
                },
                icon: moderatelyLuckySpinel,
            },
            "吉": {
                description: [
                    "你近期可能會遇到一個特別的人，可能是在工作場合或社交活動中，保持開放心態，這段關係可能會帶來意外的喜悅。你的事業領域可能會面臨一些變動，但這些變動有望帶來新的機會和成長。保持積極態度，並善於適應變化。你可能會在財務方面請注意理性管理資產，並謹慎投資，這將有助於穩定你的財務狀況。",
                    "綜合來看，整體運勢較為積極，但仍需謹慎應對變化。在接下來的時期，請花點時間放鬆心情，深入思考生活的方向和目標。",
                ],
                luck: {
                    "桃花": 3.0,
                    "財運": 3.0,
                    "事業/學業": 3.5,
                },
                icon: luckySpinel,
            },
            "小吉": {
                description: [
                    "你即將遇到一位和你一樣愛玩耍的愛人，他們將給你的生活帶來無窮的歡笑和樂趣。事業上，發揮你出色的觀察力和靈活的應變能力，面對挑戰時，保持靈活和機敏，將迎來一個充滿創意和靈感的時期。花一些錢在一些讓你愉快的事物上，享受這段時光，讓生活充滿歡笑。",
                    "保持樂觀的態度、與人建立積極的關係，並在人際交往中尋找支持。靈活適應變化，這將有助於您度過可能出現的困境。最重要的是，相信自己的能力，勇敢地面對生活中的種種挑戰。",
                ],
                luck: {
                    "桃花": 2.5,
                    "財運": 2.0,
                    "事業/學業": 2.0,
                },
                icon: littleLuckySpinel,
            },
        },
        description: "尖晶石具有穩定情緒、改善心情的作用，可以幫助消除生活中的疲勞與擔憂，消除負面的思想。適合生活正面臨變動的你，能協助你找回安定的心。",
        image: Spinel,
    },
}

export default resultData;
