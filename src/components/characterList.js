// import percival from "../images/percival.png";
// import mordred from "../images/mordred.png";
// import merlin from "../images/merlin.png";
// import oberon from "../images/oberon.png";
import morgana from "../images/morgana.png";

export const characterList = [
  {
    id: 0,
    name: "Accolon",
    image: morgana,
    reason: "הוא נשאר סוד גמור עבור כל השחקנים עד לסוף המשחק",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description: "בלתי נראה למרלין ולרעים ואינו יודע מיהם הרעים.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "",
        description: "בלתי נראה למרלין אך כן יודע מיהם הרעים האחרים.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "",
        description:
          "בלתי נראה לרעים ולא מוכר על ידיהם (להשתמש באופציה זו רק אם רוצים אוברון שני במשחק)",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "",
        description:
          "Accolon ו Oberon מכירים אחד את השני. הרעים האחרים מכירים אותם אך לא להפך.",
      },
      {
        index: 5,
        loyalty: "רע",
        limitation: "",
        description:
          "Accolon ו Oberon מכירים אחד את השני. הרעים האחרים לא מכירים אותם ולהפך.",
      },
      {
        index: 6,
        loyalty: "רע",
        limitation: "",
        description:
          "בלתי נראה ל Merlin (להשתמש באופציה זו רק אם רוצים Mordred שני במשחק).",
      },
    ],
  },
  {
    id: 1,
    name: "Agravain",
    image: morgana,
    reason: "עוזר לרעים במהשלך המשחק אך מקשה על הרעים בהתנקשות ב Merlin.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "+8 שחקנים, דורש Sir Kay ו Oberon",
        description:
          "רואה את Sir Kay ו Oberon. לא יודע מי זה מי. הוא מנצח אם הרעים ניצחו במשימות או אם אחד מאלו שהוא מכיר נרצח במקום מרלין.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "+8 שחקנים, דורש Sir Kay ו Oberon",
        description: "רואה את Sir Kay ו Oberon לכוד.",
      },
    ],
  },
  {
    id: 2,
    name: "Arthur",
    image: morgana,
    reason: "דורש מ Arthur יכולת תמרון טובה, המשחק יהיה יותר חי מתמיד.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description:
          'פותח את עיניו עם החברה הרעים אך משחק כטוב. כאשר הרעים מרימים אגודל ל Merlin, ארתור פותח את 2 ידיו כך שניתן להבדיל בינו לבין שאר הרעים. Arthur רשאי לשים fail במשימות על מנת לא להחשף. אם ה Assassin במהלך המשחק חושב שהוא יודע מיהו Arthur הוא רשאי לעצור את המשחק ולהכריז בקול "אנסה להתנקש במלך". אם הניחוש נכון הרעים מנצחים אחרת הניצחון הולך ישר לטובים. ה Assassin אינו רשאי להתנקש ב Arthur בסוף המשחק במקרה של ניצחון לטובים. הוא אינו רשאי להתנקש במלך במהלך משימה (כאשר המשלחת כבר אושרה).',
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description: "Arthur מכיר את Assassin",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "8+ שחקנים",
        description:
          'מדבקות "נאמני ארתור" [לא מחייב שימוש בדמות ארתור] - יש להדביק למערום הרעים מדבקות באופן אקראית המקבל מדבקה הופך ל"טוב". יש לבחור רעים למשחק ככמות הרעים הנדרשת + כמות המדבקות שרוצים להדביק. רע עם מדבקה רשאי לשים Fail על מנת לטשטש את עקבותיו. מופיע כרע עבור הרעים האחרים. אם הטובים ניצחו, בסוף המשחק הרעים האמיתיים צריכים להתנקש בנאמני ארתור ובמרלין.',
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "8+ שחקנים",
        description:
          "בסוף המשחק הרעים אמיתיים רשאים לנסות להתנקש ברעים-הטובים העונדים את המדבקה במקום ב Merlin.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "8+ שחקנים",
        description:
          'במשחק עם מספר זוגי של שחקנים בשימוש באופציית המדבקות, בהצבעה לאישור משלחת תיקו משמעו שהמשלחת יוצאת. בגלל ש Assassin יכול להיות זה שמקבל את המדבקה, ההתנקשות מתבצעת ע"י הצבעה דמוקרטית של הרעים. במקרה של שוויון ה Assassin משמש כשובר שוויון.',
      },
      {
        index: 6,
        loyalty: "טוב",
        limitation: "8+ שחקנים",
        description: "באופציות המדבקות הרעים טובים מופיעים כרעים למרלין .",
      },
      {
        index: 7,
        loyalty: "טוב",
        limitation: "8+ שחקנים",
        description:
          'Arthur חייב לשים Fail, "נאמני ארתור" חייבים לשים או Fail או קלף "יחי המלך ארתור" השווה לערך "Success". אם הקלף "יחי המלך ארתור" מופיע עם Fail של המלך ארתור הFail שלו נחשב לSuccess.',
      },
    ],
  },
  {
    id: 3,
    name: "Assassin",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "אם הטובים מנצחים יכול להתנקש בדמות לבחירתו, אם מתנקש ב Merlin הרעים מנצחים.",
      },
    ],
  },
  {
    id: 4,
    name: "Balin",
    image: morgana,
    reason:
      "אותם החוקים כמו Lancelot's רק שעכשיו אי הוודאות מוכפלת. אופציה 3 עושה לרעים חיים טיפה יותר רעים.",
    variations: [
      {
        index: 1,
        loyalty: "טוב ורע",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description:
          "מתחלפים. אותם החוקים כמו עבור ה Lancelot's הרע והטוב אך יש לבנות מערום הבנוי מ 3 קלפים ריקים ו 3 קלפי החלפת נאמנות. ניתן להשתמש גם באופציות הבסיס האחרות עבור ה Lancelot's.",
      },
      {
        index: 2,
        loyalty: "טוב ורע",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description:
          "מתחלפים. ניתן להשתמש במערום אחד עבור דמויות אלו ועבור דמויות ה Lancelot's. כשקלף שינוי הנאמנות מופיע 2 הצמדים מתחלפים בו זמנית.",
      },
      {
        index: 3,
        loyalty: "טוב ורע",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description:
          "יש להכין 3 ערימות Lancelot רע + דמות טובה, Lancelot טוב + דמות רעה, Balin + Balain. רק Balin ו Balain מחליפים נאמנות. יש לבחור ערימה אחת אותה נכניס למשחק. במשחקים עם הרבה שחקנים יש לבחור 2 ערימות מתוך הערימות המוצעות.",
      },
      {
        index: 4,
        loyalty: "טוב ורע",
        limitation: "שחקנים מנוסים, 7+ שחקנים",
        description:
          "מכירים זה את זה. בכל פעם שהם יוצאים למשלחת יחדיו הם מחליפים נאמנות. האחד מהשניים שבסוף המשחק רע, אינו רשאי להשתתף בדיון עם ה Assassin.",
      },
    ],
  },
  {
    id: 5,
    name: "Balain",
    image: morgana,
    reason: "יתרון לרעים",
    variations: [
      {
        index: 1,
        loyalty: "טוב ורע",
        limitation: "",
        description:
          "כאשר יוצא למשלחת מחליף נאמנות (לאחר שבחר את קלף המשימה). כשהוא רע הוא חייב תמיד לשים Fail וכשהוא טוב חייב לשים Success. בלי קשר לנאמנות שלו בסוף המשחק הוא מנצח רק אם הטובים מנצחים.",
      },
      {
        index: 2,
        loyalty: "טוב ורע",
        limitation: "",
        description: "נראה על ידי מרלין",
      },
      {
        index: 3,
        loyalty: "טוב ורע",
        limitation: "",
        description: "במשימה האחרונה בלוח הנאמנות שלו היא של טוב",
      },
    ],
  },
  {
    id: 6,
    name: "Blanchefleur",
    image: morgana,
    reason: "דמות שמוסיפה כוח לטובים אם היא תצליח לגלות איזה מהמשפטים נכון.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "7+ שחקנים. מחייב מחשב הנחייה או קערות עם פתקים.",
        description:
          "המידע שיש לו - משפט 1: שחקן א' רואה את שחקן ב'. משפט 2: שחקן ג' רואה את שחקן ד'. רק אחד מן המשפטים נכון.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "7+ שחקנים. מחייב מחשב הנחייה או קערות עם פתקים.",
        description:
          'לפני הלילה, כל שחקן מקבל מספר פתקים שעליו למלא כמספר השחקנים. הכיתוב בכל פתק הוא "שם:___. רואה את:___." בלילה כל שחקן מחלק את פתקיו בים קערת האמת שהמשפטים בה נכונים לבין קערת השקר, לאחר מכן שחקן שאינו Blanchefleur שולף מכל קערה פתק אחד באקראי ומציב אותם על לוח המשחק. Blanchefleur בלילה מביט בהם.',
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "7+ שחקנים. מחייב מחשב הנחייה או קערות עם פתקים.",
        description: "הרעים יכולים להתנקש ב Blanchefleur",
      },
    ],
  },
  {
    id: 7,
    name: "Bors",
    image: morgana,
    reason: "נותן יתרון לטובים. אם כי מקל על הרעים מאוד במציאת Merlin.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "7+ שחקנים",
        description:
          "דורש שימוש ב Grail. כשמקבל אותו רשאי להסתכל על דמות של שחקן לבחירתו. מנהיג המשלחת הראשונה שיצאה מעביר אותו לשחקן לבחירתו החל מסוף המשימה השניה, המחזיק בו מעביר אותו לאחר המשלחת הבאה לשחקן לבחירתו.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "7+ שחקנים",
        description: "צריך לחשוף את עצמו כשמקבל את ה Grail.",
      },
    ],
  },
  {
    id: 8,
    name: "Brute",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "יכול לשים Fail רק בחצי הראשון של הלוח (בלוח גדול משימות 1-5 ובקטן 1-3)",
      },
    ],
  },
  {
    id: 9,
    name: "Caradoc",
    image: morgana,
    reason: "Fail מזוייף יוסיף חוסר ודאות למשחק.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "חייב תמיד להצביע Fail. ההצבעות שלו בסוף המשחק נחשבות ל Success",
      },
    ],
  },
  {
    id: 10,
    name: "Chief I Good",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation:
          "דורש שימוש בדמויות: Chief (רע), Hunter (טוב ורע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description:
          "כעת כתנאי ניצחון לאחד הצדדים מעבר לניצחון בלוח הוא התנקשות נכונה בצ'יף של הצד השני. אם יש 2 צ'יפים טובים הם מכירים זה את זה. ראה אופציית Hunter.",
      },
    ],
  },
  {
    id: 11,
    name: "Chief II Good",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation:
          "דורש שימוש בדמויות: Chief (רע), Hunter (טוב ורע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description:
          "כעת כתנאי ניצחון לאחד הצדדים מעבר לניצחון בלוח הוא התנקשות נכונה בצ'יף של הצד השני. אם יש 2 צ'יפים טובים הם מכירים זה את זה. ראה אופציית Hunter.",
      },
    ],
  },
  {
    id: 12,
    name: "Chief I Bad",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation:
          "דורש שימוש בדמויות: Chief (טוב), Hunter (טוב ורע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description:
          "הרעים יודעים מי הצ'יף שלהם. ב7+ שחקנים הצ'יף הרע צריך להשתמש בקלף Chief Fail במקום בFail הרגיל. ראה אופצית Hunter.",
      },
    ],
  },
  {
    id: 13,
    name: "Chief II Bad",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation:
          "דורש שימוש בדמויות: Chief (טוב), Hunter (טוב ורע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description:
          "הרעים יודעים מי הצ'יף שלהם. ב7+ שחקנים הצ'יף הרע צריך להשתמש בקלף Chief Fail במקום בFail הרגיל. ראה אופצית Hunter.",
      },
    ],
  },
  {
    id: 14,
    name: "Cordana",
    image: morgana,
    reason:
      "זהו תפקיד ה Assassin עבור השחקנים הטובים. יהיה יותר קל לחבר'ה הרעים לזהות את מרלין, אבל החבר'ה הטובים זוכים בהזדמנות לנצח את הרעים גם אם הרעים ניצחו.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description:
          "אם הרעים מנצחים Cordana רשאי לבחור אחד מהשחקנים האחרים (שאינם רשאים לדבר). אם השחקן שהוא בחר הוא Mordred אז הרעים האחרים צריכים לבחור שחקן מהטובים בתקווה להתנקש ב Merlin ולזכות בניצחון.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description:
          "Mordred מכיר את Cordana ואינו רשאי להשתתף בדיון ההתנקשות.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description: "מצא את Morgana במקום את Mordred.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description: "מצא את Oberon במקום את Mordred.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description: "Cordana צריך לנסות להתנקש בכל הרעים במשחק.",
      },
      {
        index: 6,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description:
          "Cordana רשאי לבחור שחקן אחר להתייעץ עמו. שחקן זה אינו רשאי לחשוף את דמותו. Cordana אפילו יכול להתנקש בשחקן בו הוא בחר להיעזר.",
      },
      {
        index: 7,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description: "בחר 2 שחקנים להיעזר בהם.",
      },
      {
        index: 8,
        loyalty: "טוב",
        limitation: "+4 מרגלים",
        description: "Cordana רשאי להתייעץ עם Percival.",
      },
    ],
  },
  {
    id: 15,
    name: "Dagonet",
    image: morgana,
    reason: "מוסיף ענין לויכוח ההתנקשות.",
    variations: [
      {
        index: 1,
        loyalty: "ניטרלי",
        limitation: "",
        description: "שם רק Success. אם מישהו מתנקש בו, הוא המנצח היחיד במשחק.",
      },
      {
        index: 2,
        loyalty: "ניטרלי",
        limitation: "",
        description: "פרסיבל רואה אותו עם מרלין ומורגנה.",
      },
      {
        index: 3,
        loyalty: "ניטרלי",
        limitation: "",
        description: "רואה את מרלין ו Assassin אבל לא יודע מי זה מי.",
      },
    ],
  },
  {
    id: 16,
    name: "Dummy",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "אופצית Hunter",
        description: "אם נחקר מציג את עצמו כצ'יף של הטובים.",
      },
    ],
  },
  {
    id: 17,
    name: "Ector",
    image: morgana,
    reason:
      "משמש ככוח עבור כל השחקנים. השחקנים שיהיו יותר משכנעים יוכלו לזכות בהצבעה של הקטור שתוכל להוביל אותם לניצחון.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "חושף את הדמות שלו לשאר השחקנים ישירות כשהוא מקבל את קלף הדמות. לא רשאי להשתתף באף משלחת אך כן רשאי להציע ולהצביע עבור בניית משלחות. בשימוש בדמות זו משימות וחוקים צריכים להילקח בחשבון כאילו יש שחקן אחד פחות.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "כאשר כוחות הרעים והטובים שווים ויש תיקו בהצבעה על יציאת המשלחת Ector קובע את כיוון שבירת השוויון. (כשמספר השחקנים זוגי)",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description:
          "יש לבחור את קלפי הדמויות איתם רוצים לשחק (כמות השחקנים + 1) לערבב את הקלפים ולחלק לכל שחקן. השחקן שקיבל את Ector חייב להזדהות במיידי. אם לאף אחד אין את Ector' סימן שזהו הקלף שלא חולק. יש לאסוף את הקלפים ולחלק מחדש. קלפי הדמויות בטובות מעורבבות יחדיו ו Ector דג אחת מהם. לבסוף יש לערבב מחדש את כל שאר הקלפים הרעים והטובים ולחלק כל אחד מהם לכל שאר השחקנים. בדרך זו, Ector, שאינו רשאי לצאת למשימות, יכול להיות גם Merlin או Percival.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "",
        description:
          "בוחר את הדמויות למשחק, לא חושף לאחרים מה בחר. ל Ector יש יכולת הנקראת 'Redemption' המעניקה לטובים צ'אנס אחרון לניצחון - אם הרעים ניצחו לפני ההגעה למשימה האחרונה בלוח. לאחר התייעצות עם השחקנים האחרים עליו לנסות לזהות את השחקנים הרעים במשחק. במידה שניחש את כל הרעים נכונה, הטובים מנצחים. לרעים עדין יש הזדמנות להתנקש ב Merlin.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "",
        description:
          "Ector לא רשאי לדוג את Merlin או את Percival (רק אחד מהם).",
      },
      {
        index: 6,
        loyalty: "טוב",
        limitation: "",
        description:
          "במקרה של ניצחון לטובים רשאי לשים את קלף הדמות שלו על קלף הדמות של אחד השחקנים האחרים ובכך להגן עליו מהתנקשות.",
      },
      {
        index: 7,
        loyalty: "טוב",
        limitation: "",
        description:
          "משמש כמנהיג היחיד לאורך המשחק, כל קבוצה של משלחת שהוא בוחר מאושרת אוטומטית.",
      },
      {
        index: 8,
        loyalty: "טוב",
        limitation: "",
        description: "הקטור רשאי להשתתף באחת מן המשלחות.",
      },
      {
        index: 9,
        loyalty: "טוב",
        limitation: "",
        description:
          "הקטור רשאי להשתתף באחת מן המשלחות אך לא בכזו שתקנה ניצחון לטובים.",
      },
      {
        index: 10,
        loyalty: "רע וטוב",
        limitation: "",
        description:
          "שימוש ב Ector עם Melwas אחד טוב ואחד רע. בלילה נקבעת נאמנותם הידועה רק להם.",
      },
    ],
  },
  {
    id: 18,
    name: "Elaine",
    image: morgana,
    reason: "מאפשרת מידע לטובים מבלי להפסיד משלחת.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "רשאי להשתמש בקלף ה 'Avalon Power' במשלחות עלמנת לבטל את המשימה הנוכחית. אם קלף ה 'Avalon Power' נוכח ההנהגה עוברת ויש לחזור על המשימה. Elain יכול להשתמש בכוח רק פעם אחת במשחק. לא ניתן להשתמש בקלף ה 'Avalon Power' במשימה האחרונה.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "אם משלחת שאישר יצאה, חייב להיות נגד כל הצעות המשלחת הבאה.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description:
          "בעקבות השימוש בקלף המשימה שדורשת 2 Fails כעת דורשת Fail אחד בלבד.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "",
        description: "Elaine נראית על ידי Merlin.",
      },
    ],
  },
  {
    id: 19,
    name: "Evil Messenger",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "7+ שחקנים. דורש שימוש ב-3 Messengers: 2 טובים ו-1 רע.",
        description:
          "רשאי להשתמש בקלף 'Evil Message' השווה ערך ל-'Fail'. במעמד המשימה האחרונה בלוח הרעים רשאים להוסיף קלף Fail אם היו 2+ או 3+ קלפי 'Evil Message' לאורך המשחק בלוח של 5 או 7 בהתאמה.",
      },
    ],
  },
  {
    id: 20,
    name: "Galahad",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "שימוש ב Nimue ומרלין. 8+ שחקנים.",
        description:
          "אם נוכח עם Nimue במשלחת כורם לו לשים Success אפילו אם merlin נוכח בה גם. אינו מכיר את Nimue.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "שימוש ב Nimue ומרלין. 8+ שחקנים.",
        description:
          "אם לרעים נשארה משימה אחת בשביל לנצח, יכול לחשוף את עצמו וההנהגה תעבור אוטומטית אליו.",
      },
    ],
  },
  {
    id: 21,
    name: "Gawain",
    image: morgana,
    reason: "המשימה האחרונה נעשית אפילו יותר לא ברורה עבור 2 הצדדים.",
    variations: [
      {
        index: 1,
        loyalty: "ניטרלי",
        limitation: "",
        description:
          "כשמתמשים בדמות זו חייבים להסיר דמות אחת רעה. במשימה רשאי להשתמש ב Fail או ב Success. אך בשביל לנצח חייב להיות חלק מהצוות של המשימה האחרונה (לאחר שכל שאר המשימות בלוח כבר בוצעו). אם הצליח להכנס למשימה האחרונה הוא ורק הוא המנצח.",
      },
      {
        index: 2,
        loyalty: "ניטרלי",
        limitation: "",
        description: "רואה את Pervial, Merlin והרעים ביחד.",
      },
      {
        index: 3,
        loyalty: "ניטרלי",
        limitation: "",
        description: "הוא נראה על ידי מרלין בנפרד מהרעים.",
      },
      {
        index: 4,
        loyalty: "ניטרלי",
        limitation: "",
        description: "הוא נראה על ידי Merlin ו Morgana.",
      },
      {
        index: 5,
        loyalty: "ניטרלי",
        limitation: "",
        description:
          "במשימה האחרונה משקל ההצבעה ליציאת המשלחת של Gawain הוא כשל 2 שחקנים.",
      },
      {
        index: 6,
        loyalty: "ניטרלי",
        limitation: "",
        description:
          "בסוף המשחק אם הטובים ניצחו, רשאי לנסות להתנקש ב Merlin (לאחר שהחבר'ה הרעים בחרו את הבחירה שלהם). אם החבר'ה הרעים ניצחו רשאי לנסות להתנקש ב Morgana (לאחר שהחבר'ה הטובים בחרו את הבחירה שלהם).",
      },
    ],
  },
  {
    id: 22,
    name: "Ginevra",
    image: morgana,
    reason: "מונע מהמשחק להגמר מהר מדי.",
    variations: [
      {
        index: 1,
        loyalty: "ניטרלי",
        limitation: "במקום שחקן רע",
        description:
          "מנצח עם הרעים אך ורק אם הם מנצחים במשחק לאחר שכל המשימות בלוח בוצעו. רשאי להשתתף בדיון עם ה Assassin רק אם כל המשימות על הלוח בוצעו.",
      },
      {
        index: 2,
        loyalty: "ניטרלי",
        limitation: "במקום שחקן רע",
        description: "מכיר את הרעים האחרים אך הם לא אותו",
      },
      {
        index: 3,
        loyalty: "ניטרלי",
        limitation: "במקום שחקן רע",
        description: "מכיר את הרעים האחרים והם אותו",
      },
    ],
  },
  {
    id: 23,
    name: "Gornemant",
    image: morgana,
    reason: "יתרון לטובים.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation:
          "דורש שימוש במחשב או הנחייה או קערות או Melwas בלי ניטרלים.",
        description:
          "רואה שני צמדים: 1. באותו צוות. 2. צוותים מנוגדים. לא יודע איזה מהצמדים משתייך לאיזו קטגוריה. 2 קערות לטובים ורעים. בלילה כל שחקן מכניס את שמו לקערה. דמות שאינה Gornemant לוקחת פתק אחד מכל אחת מהקערות ומחברת אותם יחד ואז בוחרת מאחת הקערות 2 פתקים נוספים ומחברת אותם יחדיו. את 2 זוגות הפתקים המחוברים מניחים על לוח המשחק, Gornemant פותח את עיניו ומתבונן בהם.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation:
          "דורש שימוש במחשב או הנחייה או קערות או Melwas בלי ניטרלים.",
        description: "בלילה Meaves מצביע בעיניים עצומות על כל אחד מהצמדים.",
      },
    ],
  },
  {
    id: 24,
    name: "Guinevere",
    image: morgana,
    reason:
      "אופציה 1: מענקה יתרון לטובים. אופציה 2: אם השחקנים מהקבוצה השניה במשחק מצליחים לגלות מיהם Guinevere ו Lancelot הם מגיעים ליתרון עצום במשחק. או שנמצאו 2 רעים או שנטרלו 2 מועמדים אפשריים לתפקיד של Merlin. אופציה 4: מגדיל את חוסר הודאות לגבי מתי Lancelot מתחלף.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "דורש שימוש בלנסלוט.",
        description: "מכיר את 2 ה Lancelot's.",
      },
      {
        index: 2,
        loyalty: "טוב או רע",
        limitation: "דורש שימוש בלנסלוט.",
        description:
          "Guinevere ו Lancelot מכירים זה את זה. אך Guinevere אינו יודע באיזה צד הוא. יכול לשים Fail או Success. Guinevere באותו הצוות של Lancelot. אם Lancelot רע הוא מצביע לשאר הרעים בשלב הלילה מיהו Guinevere. בשלב הלילה בתחילת המשחק יש ליצור 2 ערימות קלפים. ערימה 1: Lancelot טוב, Oberon ודמות רעה נוספת. ערימה 2: Lancelot רע ושתי דמויות טובות רגילות. אם יש 5-6 שחקנים, יש להחליף את הרע הרגיל בערימה הראשונה ל Assassin. במצב זה ה Lancelot הרע גם לוקח על עצמו את תפקיד ה Assassin אם ערימה 2 נבחרת. יש לבחור אחת משתי הערימות ולסלק את הערימה האחרת מבלי להביט בה. כעת יש להוסיף את Guinevere ו Merlin לערימה שנבחרה, כעת יש ברשותנו ערימה עם 3 טובים ו 2 רעים. בהתאם למספר השחקנים במשחק יש להוסיף קלפים לערימה כמפורט: 5 שחקנים אין מה להוסיף. 6 שחקנים יש להוסיף טוב אחד. 7 שחקנים יש להוסיף Assassin וטוב אחד. 8 שחקנים יש להוסף Assassin ו 2 טובים. 9 שחקנים יש להוסיף Assassin ו 3 טובים. 10 שחקנים Assassin, רע אחד ו 3 טובים. 11 שחקנים Assassin, רע אחד ו 4 טובים. 12 שחקנים: Assassin, 2 רעים ו 4 טובים. הערה: לפי כמות האצבעות של הרעים Merlin יכול להסיק באיזה צד Guinevere.",
      },
      {
        index: 3,
        loyalty: "טוב או רע",
        limitation: "דורש שימוש בלנסלוט.",
        description: "Guinevere לא מכיר את Lancelot.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "דורש שימוש בלנסלוט.",
        description:
          "בשלב הלילה 2 ה Lancelot's רואים את Guinevere. כל פעם שאחד מהם במשימה עם Guinevere עליהם להחליף נאמנות (אחרי שימוש בקלף המשימה). Lancelot הרע אינו רשאי להשתתף בדיון הסופי על ה Assassin. אם 2 ה Lancelot's נוכחים במשימה עם Guinevere הנאמנות שלהם אינה משתנה.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "דורש שימוש בלנסלוט.",
        description: "מכיר את Balin and Balain.",
      },
    ],
  },
  {
    id: 25,
    name: "Hunter (good)",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation:
          "דורש שימוש בדמויות: Chief (טוב ורע) ו Hunter (רע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description: "ראה אופציית Hunter.",
      },
    ],
  },
  {
    id: 26,
    name: "Hunter (bad)",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation:
          "דורש שימוש בדמויות: Chief (טוב ורע) ו Hunter (רע). ב8+ שחקנים דורש את Chief II (טוב). ב10+ שחקנים דורש את Chief II (רע).",
        description:
          "ברגע שבמשחק מופיע קלף Chief Fail במשחקים של 7+ או קלף Fail שאינו של הצייד הרע במשחקים של 5-6, לצייד הרע הזדמנות לנסות לחסל את הצ'יף של הטובים ולסיים את המשחק מוקדם. אם הצייד הרע ניחש נכון - הרעים מנצחים. אם טעה, תוצאות המשלחת האחרונה מתהפכות והמשחק ממשיך. ראה אופציית Hunter.",
      },
    ],
  },
  {
    id: 27,
    name: "Iseult & Tristan (אוהבים)",
    image: morgana,
    reason: "מקנה יתרון לטובים",
    variations: [
      {
        index: 1,
        loyalty: "טובים",
        limitation: "8+ שחקנים",
        description: "יודעים אחד על השני",
      },
      {
        index: 2,
        loyalty: "טובים",
        limitation: "8+ שחקנים",
        description: "אם Assassin מתנקש ב 2 האוהבים, הרעים מנצחים.",
      },
    ],
  },
  {
    id: 28,
    name: "Javran",
    image: morgana,
    reason:
      "נותן הזדמנות להציל את הטובים או לחילופין לחרוץ את גורלם. מעניק לרעים יתרון בהתנקשות במרלין.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description:
          "חושף את זהותו במספר מקרים: 1. אם מופעלת עליו Excalibur עליו לחשוף את הדמות שלו ולא לשנות את קלף המשימה שבחר. 2. אם משלחת ללא Javran מאושרת, רשאי להיחשף ולחשוף קלף הצבעה של שחקן, אם נחשף Success אזי Javran 'מוגלה' ואינו רשאי יותר להשתתף במשלחות עתיד או ביכולת זו, אם כי הוא עדין רשאי לשמש כמנהיג ולהצביע על אישור משלחות. אם נחשף קלף שאינו Success הוא מוחלף ל Success ו Javran לא מוגלה. 3. במידה ו Javran עוד לא נחשף במשימה האחרונה בלוח הוא רשאי לחשוף את קלף הדמות שלו לכולם. בעשותו כך הוא רשאי להורות לאילו שחקנים שהוא רוצה להחליף את קלף המשימה שלהם. השימוש בכוח של Excalibur בא לידי ביטוי לפני השימוש בכוחו של Javran.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description:
          "אם אקסקליבר מופעלת על Javran וזהותו נחשפת הוא מוגלה ממשלחות עתידיות.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description: "באופציה 2 קלף ההצבעה שנחשף אינו משתנה",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description:
          "אם קסקליבר מופעלת על ידי Javran הוא רשאי לבחור אם הוא חושף את זהותו ובכך מנטרל את אקסקליבר.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description:
          "ברגע שזהותו נחשפת, לוח המשחק משתנה לכזה עם פחות שחקן (מומלץ אך ורק במשחקים עם מספר אי זוגי של שחקנים).",
      },
      {
        index: 6,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description: "הרעים מכירים את Javran.",
      },
      {
        index: 7,
        loyalty: "טוב",
        limitation:
          "9+ שחקנים. שימוש באקסקליבר. עם שימוש בדמות זו על חברי השחקנים שנבחרים כחברי משלחת להניח את הקלף שבחרו הפוך על לפניהם כך שברור איזה שחקן בחר באיזה קלף",
        description:
          "לאחר שדמותו נחשפה במקרה והטובים מנצחים, יכול לשים את קלף הדמות שלו על דמות אחרת מדמויות השחקנים ובכך להגן עליו מהתנקשות.",
      },
      {
        index: 8,
        loyalty: "טוב",
        limitation: "במחשב או Melwas",
        description:
          "על מנת להקל לשחקן שמחזיק בדמות זו על זיהוי רעים, רשאי בתחילת המשחק לזהות נאמנות שלדמות רנדומלית אחת טובה ושל עוד 2 דמויות רנדומליות נוספות.",
      },
    ],
  },
  {
    id: 29,
    name: "Junior Messenger",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "7+ שחקנים, דורש שימוש ב3 Messengers, 2 טובים ואחד רע.",
        description:
          "רשאי להשתמש בקלף 'Good Message' פעמיים לאורך המשחק בלוח של 5 ושלוש פעמים בלוח של 7.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "7+ שחקנים, דורש שימוש ב3 Messengers, 2 טובים ואחד רע.",
        description:
          "רשאי להשתמש בקלף 'Good Message' פעמיים גם בלוח של 7 ואז דרושים להם +4 קלפי 'Good Message לאורך המשחק כדי לבטל Fail במשימה האחרונה.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "7+ שחקנים, דורש שימוש ב3 Messengers, 2 טובים ואחד רע.",
        description:
          "אם מתנקשים ב2 השחקנים שמחזיקים בדמויות ה Messengers הטובים, הרעים מנצחים.",
      },
    ],
  },
  {
    id: 30,
    name: "King Claudas",
    image: morgana,
    reason:
      "כעת יש דמות טובה שמנסה במכוון לחפות על אחת מהרעות אך תוך כדי מנסה להמנע מלשלוח אותה למשימות.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "7+ שחקנים, יכולת התנקשות ברעים.",
        description:
          "אם King Claudas מזוהה כרע, גם Prince Claudin מפסיד במשחק.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "7+ שחקנים, יכולת התנקשות ברעים.",
        description: "מכיר את Prince Claudin.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "7+ שחקנים, יכולת התנקשות ברעים.",
        description:
          "בהיעדר דמות מתנקש לטובים, פרסיבל מתנקש ברעים במידה והם ניצחו.",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "7+ שחקנים, יכולת התנקשות ברעים.",
        description:
          "במידה וכל הרעים נוחשו נכונה, ל Assassin נגזלת זכות ההתנקשות.",
      },
      {
        index: 5,
        loyalty: "רע",
        limitation: "7+ שחקנים, יכולת התנקשות ברעים.",
        description:
          "בשלב ההתנקשות בטובים, רק אם מתנקשים ב Prince Claudin הוא מנצח.",
      },
    ],
  },
  {
    id: 31,
    name: "Lancelot's",
    image: morgana,
    reason: "מוסיף בלבול.",
    variations: [
      {
        index: 1,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description:
          "הלנסלוטים מתחלפים לאורך המשחק. הרע אינו מכיר את הרעים האחרים אבל הרעים האחרים כן מכירים אותו.",
      },
      {
        index: 2,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description: "מערום 5 קלפים ריקים ו2 של שינוי.",
      },
      {
        index: 3,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description: "מערום 3 קלפים ריקים ו2 של שינוי",
      },
      {
        index: 4,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description: "פתיחת קלפים מהמערום מתחילה בתחילת סיבוב 3.",
      },
      {
        index: 5,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description: "הרע באותו רגע חייב תמיד להצביע Fail.",
      },
      {
        index: 6,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description:
          "כל קלפי חילוף הנאמנות גלויים כך שיודעים מראש באיזה סיבוב הם מתחלפים.",
      },
      {
        index: 7,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description:
          "Lancelot (good) ו Lancelot (bad) מכירים אחד את השני. מומלץ רק בקבוצות גדולות.",
      },
      {
        index: 8,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description: "ה Lancelot הרע לא במשחק. הטוב מחליף נאמנות לפי המערום.",
      },
      {
        index: 9,
        loyalty: "טוב ורע",
        limitation: "7+ שחקנים.",
        description:
          "ניתן לשחק ללא מערום כשהנאמנות של Lancelot פשוט מתחלפת כשלטובים נותרה עוד משימה להכתיר כמוצלחת על מנת לזכות בניצחון.",
      },
    ],
  },
  {
    id: 32,
    name: "Lot",
    image: morgana,
    reason:
      "נותן יתרון לרעים באישור המשלחות. הטובים לא יודעים אם מותר לסמוך גם על מילתו של אדם שהוכיח את עצמו במשימות.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description:
          "נראה על ידי Merlin ביחד עם כוחות הרעים, אך בעוד שאר הרעים מרימים אגודל, הוא פותח את ידו כדי להיות מזוהה. בלתי נראה לרעים האחרים אך מכיר אותם. במשימות תמיד ישתמש בקלף ה Success. אינו רשאי להשתתף בדיון עם ה Assassin בשביל לגלות מיהו Merlin. הוא מנצח אם הרעים מנצחים.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "Merlin לא מבדיל בינו לבין הרעים האחרים.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "רשאי להשתתף בהתנקשות. הוא המתנקש.",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "יודע מיהו Morgana. למעשה הוא מאין Percival של Morgana.",
      },
      {
        index: 5,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "מכיר את כל הרעים, כולל אלו שבלתי נראים לרעים אחרים.",
      },
      {
        index: 6,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "כעת בכל משימה יש שחקן אחד פחות.",
      },
      {
        index: 7,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description:
          "אם משלחת מוצעת עם שחקנים טובים בלבד הוא חייב להצביע בעד המשלחת.",
      },
      {
        index: 8,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "אין לו ידע.",
      },
      {
        index: 9,
        loyalty: "רע",
        limitation: "מחליף דמות טובה. 8+ שחקנים.",
        description: "מכיר ממש איזה שחקן רע מחזיק איזו דמות.",
      },
    ],
  },
  {
    id: 33,
    name: "Loyal Servant of Arthur",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "אין ידע.",
      },
    ],
  },
  {
    id: 34,
    name: "Maeve",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "דורש אקסקליבר.",
        description: "חסין לאקסקליבר.",
      },
    ],
  },
  {
    id: 35,
    name: "Meliagant",
    image: morgana,
    reason: "יתרון לרעים אך עם פגם בסוף.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "מכיר את Merlin (או דמות טוב שהרעים צריכים להתנקש בה). אם בסוף המשחק הרעים מתנקשים נכון הוא מפסיד.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "",
        description: "לא משתתף בדיון ההתנקשות.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "",
        description:
          "בשלב ההתנקשות הרעים לא חושפים את קלפי הדמות שלהם, כך שלא ניתן לדעת מיהו Maliagant.",
      },
    ],
  },
  {
    id: 36,
    name: "Merlin",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "מכיר את הרעים.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "קח ערימת קלפים שכל הדמויות בה הן של Merlin. גודל הערימה הינו כגודל השחקנים הטובים פחות אחד. הוסף לערימה קלף של דמות טובה גנרית. ערבב את הערימה ובחר קלף אחד. הוסף את הקלף שנבחר לערימת הקלפים של שאר הדמויות שנבחרו למשחק, בדרך זו יש סיכוי ש Merlin לא במשחק. במקרה זה אם הטובים מנצחים על מנת ש Assassin יזכה את הרעים בניצחון הוא צריך להצהיר ש Merlin לא במשחק.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description:
          "הסר עוד קלפים של Merlin בשביל להקטין את הסיכוי של Merlin להיות נוכח.",
      },
    ],
  },
  {
    id: 37,
    name: "Merlin X",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "מחייב פרסיבל",
        description:
          "Merlin X בעל כוחותיו של מרלין אך אינו נראה על ידי Percival. הכן שתי ערימות כשאחת מכילה את Merlin + רע והשניה את Morgana + Merlin X. בחר ברנדומליות אחת מהערימות והפטר מהשניה. את הערימה שנבחרה יש לערבב עם שאר הדמויות שנבחרו למשחק. בדרך זו Percival לא יודע אם בשלב הלילה מי שהוא רואה זה Merlin או Morgana.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "ברגע שלרעים נשארת עוד משימה אחת בשביל לזכות בניצחון, נחשפים הקלפים של הערימה שלא נכנסה למשחק.",
      },
      {
        index: 3,
        loyalty: "טוב ורע",
        limitation: "מחייב מרלין",
        description:
          "באופציה זו יש להשתמש בדמויות Merlin ו Merlin X כש Merlin X תחילה רע רגיל. Merlin X ו Merlin בשלב הלילה רואים אחד את השני. המשלחת הראשונה אליה הם יוצאים Merlin הופך לרע ו Merlin X הופך לטוב. Merlin ו Merlin X אינם רשאים להשתתף בדיון עם Assassin בשביל לעזור לו להתנקש אחד בשני.",
      },
      {
        index: 4,
        loyalty: "טוב ורע",
        limitation: "מחייב מרלין וקורדנה",
        description: "Cordana בסוף המשחק צריך להתנקש ברע מבינהם.",
      },
      {
        index: 5,
        loyalty: "טוב ורע",
        limitation: "מחייב מרלין ופרסיבל",
        description:
          "Merlin X עם הכוחות של Morgana במקום רע רעיל. Percival יצטרך בתחילת המשחק לעקוב אחר הוראותיו של Merlin ובהמשך אחר עצתו של Merlin X",
      },
    ],
  },
  {
    id: 38,
    name: "Merlin's Apprentice",
    image: morgana,
    reason:
      "נותן לטובים יותר מידע על הרעים, אך באותו הזמן לרעים יש יותר אופציות להתנקשות בסוף המשחק.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "מחייב שימוש ב Assassin.",
        description:
          "מכיר את Assassin. בסוף המשחק Assassin רשאי להתנקש או בדמות זו או ה Merlin.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "מחייב שימוש ב Assassin.",
        description: "יכול לראות גם את Assassin וגם את Percival (ביחד).",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "מחייב שימוש ב Assassin.",
        description: "Merlin מכיר אותו.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "מחייב שימוש ב Assassin.",
        description:
          "יכול לראות גם את Assassin וגם את Merlin (ביחד). מומלץ כש Percival לא במשחק.",
      },
    ],
  },
  {
    id: 39,
    name: "Melwas",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "חושף את הדמות שלו לשאר השחקנים ישירות כשהוא מקבל את קלף הדמות. לא רשאי להשתתף באף משלחת אך כן רשאי להציע ולהצביע עבור בניית משלחות. בשימוש בדמות זו משימות וחוקים צריכים להילקח בחשבון כאילו יש שחקן אחד פחות. מנצח אם הרעים מנצחים.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "",
        description: "מכיר את הרעים האחרים.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "",
        description:
          "מכיר את הרעים וגם את Merlin ו Percival (ביחד). הוא מפסיד אם בסוף המשחק Merlin נרצח.",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "",
        description:
          "במשחקים שמערבים שימוש בקלפי Plot רשאי להסתכל בקלף שבראש ערימת הקלפים ולבטל אותו. אם לטובים נשארה משימה אחת לניצחון רשאי לשלוף קלף Plot מהערימה לבחירתו.",
      },

      {
        index: 5,
        loyalty: "רע",
        limitation: "",
        description:
          "שימוש ב Ector עם Melwas אחד טוב ואחד רע. בלילה נקבעת נאמנותם הידועה רק להם.",
      },
      {
        index: 6,
        loyalty: "רע",
        limitation: "",
        description:
          "בכל משלחת הוא לבדו רואה את תוצאות הקלפים, חייב למסור לשאר השחקנים רק אם המשלחת הצליחה או נכשלה.",
      },
    ],
  },
  {
    id: 40,
    name: "Minion of Mordred",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description: "מכיר את הרעים האחרים.",
      },
    ],
  },
  {
    id: 41,
    name: "Mora",
    image: morgana,
    reason: "יתרון לרעים. מטשטש את עקבותיהם במשימות חשיפה.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "דורש אופציה למשימה הכופה על הרעים לשים Fail.",
        description: "לא כפוף לאף חוק שמכריח את הרעים לשים Fail.",
      },
    ],
  },
  {
    id: 42,
    name: "Mordred",
    image: morgana,
    reason: "מפנה מקום לדמויות רעות חדשות בתפקידים חדשים למשחק.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "דורש Merlin במשחק או דמות שוות כוח",
        description: "בלתי נראה ל Merlin.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "דורש Merlin במשחק או דמות שוות כוח",
        description: "מקבל את הכוח של ה Assassin.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "דורש Merlin במשחק או דמות שוות כוח",
        description: "מקבל את הכוח של Maliagant.",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "דורש Merlin במשחק או דמות שוות כוח",
        description: "מקבל את הכוח של Morgana.",
      },
    ],
  },
  {
    id: 43,
    name: "Morgana",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description: "מתגלה ל Percival ביחד עם Merlin.",
      },
    ],
  },
  {
    id: 44,
    name: "Morgause",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "חסין לכח 'קלף הכישוף', לאחר אישור משלחת המנהיג מביא את 'קלף הכישוף' לאחד מחברי המשלחת. אם דמות רעה שאינה Morgause מקבלת אותו היא חייבת לשים Success.",
      },
    ],
  },
  {
    id: 45,
    name: "Mute",
    image: morgana,
    reason:
      "סיטואציה מצחיקה בה מתחילים עם מספר רב של פנטומימאים בתחילת המשחק שהולך ויורד ככל שהמשחק מתקדם.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "אינו רשאי לדבר, אם בטעות דיבר חייב לחשוף את קלף הדמות שלו לפני התוצאות של המשימה הבאה או ש Merlin נהרג במקום.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "ברגע שמאושרת משלחת ש Mute עומד בראשה, Mute יכול לחשוף את עצמו לפני שקלפי המשימה מחולקים והמשימה באופן אוטומטי מוגדרת כמוצלחת. ברגע שנחשף הוא רשאי לדבר כרגיל.",
      },
    ],
  },
  {
    id: 46,
    name: "Ner'zhul",
    image: morgana,
    reason: "נותן יתרון לרעים כשאוברון במשחק.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "שימוש ב Oberon",
        description: "יודע מיהו Oberon.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "שימוש ב Oberon",
        description:
          "נראה על ידי Oberon. (במשחקים בהם Oberon לא מכיר את שאר הרעים)",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "שימוש ב Oberon",
        description: "יודע מיהו Accolon",
      },
    ],
  },
  {
    id: 47,
    name: "Nilrem",
    image: morgana,
    reason: "מעניק יתרון לטובים, יש שחקן אחד שכולם יודעים שהם יכולים לבטוח בו.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "אין לו ידע על אף אחד. אבל כל הטובים מכירים אותו. הרעים יכולים לנצח אם מתנקשים ב Nilrem.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description: "באופציית Hunter: נראה על ידי הצ'יף של הטובים בלבד.",
      },
    ],
  },
  {
    id: 48,
    name: "Nimue",
    image: morgana,
    reason:
      "לדמות זו הרבה מידע במשחק, אך לפעמים היא נותנת יתרון לרעים כשהיא שמה Fail.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "8+ שחקנים. משחק עם Merlin.",
        description:
          "חייב לשים Fail כשיוצאת למשלחת עם Merlin ללא Galahad. מכיר מיהו Merlin ומיהו Galahad.",
      },
    ],
  },
  {
    id: 49,
    name: "Oberon",
    image: morgana,
    reason: "רע שפוגע במידע של החבר'ה הרעים.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description: "מכיר את הרעים אך הם לא מכירים אותו.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "",
        description: "מכיר רק אחד מהחבר'ה הרעים (לדוגמה Morgana).",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "",
        description: "הרעים מכירים אותו אך הוא לא אותם",
      },
      {
        index: 4,
        loyalty: "רע",
        limitation: "",
        description:
          "החל מהסיבוב השני, כל עוד לא נשארה לרעים עוד משימה אחת לנצח בשביל לנצח במשחק, Oberon רשאי לחשוף את עצמו ולהחליף אדם אחד מחברי המשלחת שנבחרו בעצמו. הוא רשאי להשתמש ביכולת זו רק פעם אחת לאורך המשחק.",
      },
      {
        index: 5,
        loyalty: "רע",
        limitation: "",
        description:
          "Oberon Fake. אופציה זו מחייבת שימוש באופציה שהראים רואים את Oberon אך הוא לא רואה אותם. על אחת מדמויות הטובים יש לשים באקראי מדבקה של Fake Oberon.",
      },
    ],
  },
  {
    id: 50,
    name: "Oberon Fake",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "מחייב את Oberon שהרעים רואים אותו אך הוא לא אותם.",
        description:
          "בשלב הלילה כשהרעים נגלים זה לזה על Oberon האמיתי והמזוייף להרים אגודל בלבד מבלי לפתוח את עינהם. כש Merlin רואה את החבר'ה הרעים הוא רואה רק את Oberon האמיתי.",
      },
      {
        index: 2,
        loyalty: "טוב ורע",
        limitation: "מחייב את Oberon שהרעים רואים אותו אך הוא לא אותם.",
        description:
          "בכל שלב טרם יציאת המשלחת Oberon רשאי לחשוף את עצמו ולהאשים את Fake Oberon בהתחזות לו. השחקן המואשם חייב לענות בכנות מבלי לחשוף את קלף הדמות שלו. אם Oberon האשים נכון הוא מחליף את הנאמנות אלו לצד של הטובים ואילו המחזה מחליף נאמנות לצד הרעים. האשמה יכולה להתרחש רק פעם אחת במשחק.",
      },
    ],
  },
  {
    id: 51,
    name: "Pelinor",
    image: morgana,
    reason:
      "משחק בתוך משחק, לטובים יותר קל לזהות אחד מהרעים אך לפעמים יציע שחקנים רעים למשלחות במכוון מתוך מטרה לפגוש בחיה.",
    variations: [
      {
        index: 1,
        loyalty: "ניטרלי",
        limitation: "7+ שחקנים. במקום דמות טובה. דורש The Questing Beast.",
        description:
          "המטרה שלו היא למצוא מיהו ה Questing Beast ואז לצאת עמו למשלחת. יכול לנצח בשלושה מצבים: 1. לא שוחקו קלפי Questing Beast Was Here לאורך כל המשחק. 2. Pelinor נוכח במשלחת בה שוחק קלף Questing Beast Was Here והטובים ניצחו ברוב המשימות בלוח. 3. אם אף אחד מהתנאים הקודמים לא התקיימו עד לסוף המשחק Pelinor רשאי לבחור שחקן אחד שהוא מאמין שמחזיק בקלף ה Questing Beast, אם ניחש נכונה Pelinor מנצח.",
      },
    ],
  },
  {
    id: 52,
    name: "Percival",
    image: morgana,
    reason: "ל Percival לוקח יותר זמן להבין מיהו Merlin או לא מוצא אותו כלל.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "מכיר את מרלין ומורגנה. אך לא יודע להבדיל בינהם.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description: "רואה רק את Mordred",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description: "רואה את Morgana, Merlin ו Mordred.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "",
        description: "יכול לראות את Oberon במקום את Mordred.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "",
        description:
          "במקום Mordred/Oberon יכול לראות דמות רעה נוספת לבחירת המשתתפים.",
      },
      {
        index: 6,
        loyalty: "טוב",
        limitation: "",
        description: "רואה דמות רעה ו 2 דמויות טובות",
      },
      {
        index: 7,
        loyalty: "טוב",
        limitation: "מחשב",
        description:
          "רואה דמות רנדומלית אחת טובה ועוד 2 דמויות רנדומליות אחרות.",
      },
    ],
  },
  {
    id: 53,
    name: "Polygraph",
    image: morgana,
    reason:
      "מקל על הרעים במצבים בהם רוצים להמנע מ Fail כפול. אך מנגד לטובים קל הרבה יותר לעלות על עקבותיו.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "7+ שחקנים",
        description: "חייב לשים תמיד רק Fail",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "7+ שחקנים",
        description: "מרים 2 אצבעות בשביל שהרעים האחרים ידעו מיהו.",
      },
      {
        index: 3,
        loyalty: "רע",
        limitation: "7+ שחקנים",
        description:
          "לאחר שקלפי המשימה בה Poligraph נכח נחשפים, אם המשימה מוגדרת כמוצלחת (למרות ש Polygraph שם Fail) Polygraph רשאי לחשוף את עצמו ולגרום בכך למשימה להכשל.",
      },
    ],
  },
  {
    id: 54,
    name: "Prince Claudin",
    image: morgana,
    reason:
      "כעת יש דמות טובה שמנסה במכוון לחפות על אחת מהרעות אך תוך כדי מנסה להמנע מלשלוח אותה למשימות. מחליש את הטובים.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "7+ שחקנים.",
        description:
          "מכיר את King Claudas. אם King Claudas מזוהה כרע, גם Prince Claudin מפסיד במשחק.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "7+ שחקנים.",
        description: "מנצח אם הטובים ניצחו אפילו אם הרעים מתנקשים נכון.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "7+ שחקנים.",
        description:
          "מכיר את פרסיבל, לא יכול לקחת את פרסיבל למשלחות אלא אם כן זו המשימה האחרונה בלוח.",
      },
    ],
  },
  {
    id: 55,
    name: "Puck",
    image: morgana,
    reason:
      "מוסיף מתח למשימה שלפני האחרונה. מאפשר לנצל את כל המשימות בלוח. בכללי דמות מאזנת.",
    variations: [
      {
        index: 1,
        loyalty: "ניטרלי",
        limitation: "על בסיס דמות טובה.",
        description:
          "מנצח אך ורק אם המשימה האחרונה בלוח מוצלחת. אפילו אם Assassin מתנקש בהצלחה ב Merlin. אם המשחק נגמר לפני המשימה האחרונה או אם המשימה האחרונה נכשלת, Puck מפסיד. רשאי להשתמש בקלפי Fail ו Success כראות עיניו.",
      },
      {
        index: 2,
        loyalty: "ניטרלי",
        limitation: "על בסיס דמות טובה.",
        description:
          "במשחקים של 5, 7 או 8 שחקנים יש להשתמש ב Puck על בסיס מקום של דמות רעה.",
      },
    ],
  },
  {
    id: 56,
    name: "Queen Mab",
    image: morgana,
    reason: "מוריד מהאמינות של ה Lady Of The Lake.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "Lady Of The Lake",
        description: "רשאי לשקר ל Lady Of The Lake.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "Lady Of The Lake",
        description: "רשאי לשקר רק אם הוא נשאל לפני המשימה האחרונה בלוח.",
      },
    ],
  },
  {
    id: 57,
    name: "Raven",
    image: morgana,
    reason: "מוריד מהאמינות של ה Lady Of The Lake.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "Lady Of The Lake",
        description: "מופיע כרע ל Lady Of The Lake.",
      },
    ],
  },
  {
    id: 58,
    name: "Reverser Good",
    image: morgana,
    reason: "מוסיף תהפוכות וחוסר בטחון למשחק.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "רשאי להשתמש בקלף המשימה Reversal ההופך את תוצאות המשלחת.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description: "מרלין רואה אותו כרע.",
      },
    ],
  },
  {
    id: 59,
    name: "Reverser Bad",
    image: morgana,
    reason: "מוסיף תהפוכות וחוסר בטחון למשחק.",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "אחד מהרעים. רשאי להשתמש בקלף המשימה Reversal ההופך את תוצאות המשלחת.",
      },
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description: "לא מכיר ולא מוכר על ידי אף אחד.",
      },
    ],
  },
  {
    id: 60,
    name: "Rouge Good",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "יכול להשתמש בקלף Rouge Success. מנצח אם קלף Rouge Success מופיע באחת המשימות בלוח + במשימה האחרונה במשחק או אם המשימה האחרונה בלוח יצאה והצליחה. ברגע שהמשימה מאושרת מנהיג המשלחת נותן Watch Token לשחקן במשלחת, אם Rouge קיבל אותו הוא רשאי להשתמש בקלף המיוחד שלו.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description: "אם Rouge ניצח אין התנקשות.",
      },
    ],
  },
  {
    id: 61,
    name: "Rouge Bad",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "רע",
        limitation: "",
        description:
          "לא מכיר או מוכר על ידי מרלין והרעים. יכול להשתמש בקלף Rouge Fail. מנצח אם קלף Rouge Fail מופיע באחת המשימות בלוח + במשימה האחרונה במשחק או אם המשימה האחרונה בלוח יצאה ונכשלה. ברגע שמשימה מאושרת, מנהיג המשלחת נותן Watch Token לשחקן במשלחת, אם Rouge קיבל אותו הוא לא רשאי להשתמש בקלף המיוחד שלו.",
      },
      {
        index: 2,
        loyalty: "רע",
        limitation: "",
        description: "אם Rouge ניצח אין התנקשות.",
      },
    ],
  },
  {
    id: 62,
    name: "Seer",
    image: morgana,
    reason: "מחזק מאוד את הטובים.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "רואה את הקלף של השחק לימינו או לשמאלו.",
      },
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "רואה את הקלפים גם של השחקן מימינו וגם של זה שמשמאלו.",
      },
    ],
  },
  {
    id: 63,
    name: "Senior Messenger",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "7+ שחקנים. דורש שימוש ב3 Messengers: 2 טובים ואחד רע.",
        description:
          "מכיר את Junior Messenger. רשאי להשתמש בקלף Message Good השווה ערך ל Success פעמיים לאורך המשחק בלוח של 5 ושלוש פעמים בלוח של 7. במעמד המשימה האחרונה בלוח הטובים רשאים לבטל קלף Fail אחד אם היו 3+ או 5+ קלפי Message Good לאורך המשחק בלוח של 5 או 7 בהתאמה.",
      },
    ],
  },
  {
    id: 64,
    name: "Sir Kay",
    image: morgana,
    reason: "מבלבל את Merlin ומעניק לרעים יותר מרווח פעולה.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "נראה על ידי מרלין כרע",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description:
          "מכיר את Assassin, אם הטובים ניצחו טרם התנקשות של הרעים, ה Assassin צריך לנסות לנחש מיהו Sir Kay, אם ניחש נכונה Sir Kay הופך לרע וכעת הוא זה שצריך לבצע את ההתנקשות.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description: "Percival מכיר את Sir Kay.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "",
        description:
          "אם נעשה שימוש ב Trapper module (מנהיג המשלחת בוחר שחקן אקסטרה למשלחת ואז מבטל הצבעה של אחד מחברי המשלחת תוך שהוא מתבונן בקלף ההצבעה שלו מבלי לחשוף מה ראה.) אם Sir Kay נבחר למשלחת אף מושאר בחוץ, Sir Kay רשאי לחשוף את עצמו ולחטוף את כוח ה Trapping ולבחור חבר משלחת אחר שישאר מחוץ למשימה.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "",
        description: "נגלה גם לרעים כרגע (במשחקים של 9+ שחקנים).",
      },
    ],
  },
  {
    id: 65,
    name: "Sir Robin",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description: "מנצח רק אם הטובים ניצחו והוא לא משתתף ביותר מ 2 משימות.",
      },
      {
        index: 2,
        loyalty: "טוב",
        limitation: "",
        description: "לא משתתף ביותר מ 3 משימות.",
      },
      {
        index: 3,
        loyalty: "טוב",
        limitation: "",
        description: "לא משתתף ביותר מ 4 משימות.",
      },
      {
        index: 4,
        loyalty: "טוב",
        limitation: "",
        description:
          "גלגל הצלה: אם עבר את מכסת המשימות שלו, אם בסוף המשחק, לפני שהרעים נחשפים, מצליח לזהות את הרעים (איזה תפקיד כל אחד מהם מחזיק), מנצח עם הטובים.",
      },
      {
        index: 5,
        loyalty: "טוב",
        limitation: "",
        description:
          "בסוף המשחק זורקים קוביה, אם יוצא מספר זוגי מותר לסר רובין להשתמש בגלגל ההצלה.",
      },
    ],
  },
  {
    id: 66,
    name: "Stray",
    image: morgana,
    reason:
      "מוסיף אתגר למשחק. מאתגר את השחקנים, יש לזכור את הדמויות במשחק ולחשוב על האופציות שיכולות לצאת ל Stray.",
    variations: [
      {
        index: 1,
        loyalty: "טוב או רע",
        limitation: "במשחקים של 8 או פחות שחקנים חייב להיות במקום דמות רעה.",
        description:
          "Stray פותח את ידו כדי ש Merlin והרעים האחרים יוכלו לזהות אותו. יש לערבב 4 קלפי Mordred עם עוד קלפי גמויות טובות שאינן במשחק. בשלב הלילה על Stray לקחת קלף אחד מהמערום הקובע את זהותו.",
      },
      {
        index: 2,
        loyalty: "טוב או רע",
        limitation: "במשחקים של 8 או פחות שחקנים חייב להיות במקום דמות רעה.",
        description:
          "יש לערבב 2 קלפי Mordred ו 2 קלפי Oberon/Mordred (מכיר רעים, לא נראה למרלין ולרעים) עם 4 קלפי דמויות טובות",
      },
      {
        index: 3,
        loyalty: "טוב או רע",
        limitation: "במשחקים של 8 או פחות שחקנים חייב להיות במקום דמות רעה.",
        description:
          "ניתן להוסיף לכוחותיו של Mordred את כוחותיו של Oberon שיודע מי הם הרעים האחרים אף הם לא מכירים אותו.",
      },
      {
        index: 4,
        loyalty: "טוב או רע",
        limitation: "במשחקים של 8 או פחות שחקנים חייב להיות במקום דמות רעה.",
        description:
          "Stray מחליף דמות גנרית רעה או טובה (בלי כוחות מיוחדים), Merlin ו Mordred יודעים באיזה צד ה Stray נמצא.",
      },
      {
        index: 5,
        loyalty: "טוב או רע",
        limitation: "במשחקים של 8 או פחות שחקנים חייב להיות במקום דמות רעה.",
        description: "ב8+ שחקנים יכול להיות על בסיס מקום של דמות טובה.",
      },
    ],
  },
  {
    id: 67,
    name: "The Coward",
    image: morgana,
    reason: "מוסיף ענין להתנקשות. יכול לתת לרעים יתרון בהתנקשות ב Merlin.",
    variations: [
      {
        index: 1,
        loyalty: "טוב",
        limitation: "",
        description:
          "בשימוש בדמות זו גם השחקנים הטובים רשאים להשתתף בדיון של ה Assassin. משמש כשחקן טוב לאורך על המשחק. אם הטובים מנצחים The Coward מפסיד רק אם Assassin מתנקש בו. למעשה The Coward יכול לנצח עם הטובים או עם הרעים.",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
  {
    id: 600,
    name: "",
    image: morgana,
    reason: "",
    variations: [
      {
        index: 1,
        loyalty: "",
        limitation: "",
        description: "",
      },
    ],
  },
];
