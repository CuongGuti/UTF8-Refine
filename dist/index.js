const UTF8Refine = content => {
    const replacements = {
        'Ã¢Ì': 'ấ',
        'aÌ‰': 'ả',
        'Ã´Ì£': 'ộ',
        'Ã´Ì€': 'ồ',
        'oÌ€': 'ò',
        'aÌ€': 'à',
        'Ä‘': 'đ',
        'Å©': 'ũ',
        'Äƒ': 'ă',
        'Ä©': 'ĩ',
        'Ä': 'Đ',
        'Æ°': 'ư',
        'Æ¡': 'ơ',
        'á»·': 'ỷ',
        'á»µ': 'ỵ',
        'á»±': 'ự',
        'á»¡': 'ỡ',
        'á»©': 'ứ',
        'á»§': 'ủ',
        'á»ƒ': 'ể',
        'á»›': 'ớ',
        'á»—': 'ỗ',
        'á»™': 'ộ',
        'á»“': 'ồ',
        'á»«': 'ừ',
        'á»¥': 'ụ',
        'á»‰': 'ỉ',
        'á»‹': 'ị',
        'á»‡': 'ệ',
        'á»…': 'ễ',
        'á»Ÿ': 'ở',
        'á»£': 'ợ',
        'á»•': 'ổ',
        'á»‘': 'ố',
        'á»¯': 'ữ',
        'á»³': 'ỳ',
        'á»¹': 'ỹ',
        'á»': 'ỏ',
        'á»': 'ọ',
        'á»': 'ề',
        'á»': 'ờ',
        'á»­': 'ử',
        'áº¤': 'Ấ',
        'áº»': 'ẻ',
        'áºµ': 'ẵ',
        'áº·': 'ặ',
        'áº«': 'ẫ',
        'áº±': 'ằ',
        'áº©': 'ẩ',
        'áº¿': 'ế',
        'áº¥': 'ấ',
        'áº¯': 'ắ',
        'áº§': 'ầ',
        'áº¡': 'ạ',
        'áº£': 'ả',
        'áº³': 'ẳ',
        'áº¹': 'ẹ',
        'áº­': 'ậ',
        'Ã': 'Í',
        'Ã”': 'Ô',
        'Ã‚': 'Â',
        'Ã ': 'à',
        'Ã½': 'ý',
        'Ãµ': 'õ',
        'Ãª': 'ê',
        'Ã©': 'é',
        'Ã¨': 'è',
        'Ã¬': 'ì',
        'Ã´': 'ô',
        'Ã¢': 'â',
        'Ã£': 'ã',
        'Ã¡': 'á',
        'Ã³': 'ó',
        'Ã²': 'ò',
        'Ã¹': 'ù',
        'Ãº': 'ú',
        'Ã­': 'í'
    };

    Object.entries(replacements).forEach(([find, replace]) => {
        content = content.replace(new RegExp(find, 'g'), replace);
    });

    return content;
};

export default UTF8Refine;