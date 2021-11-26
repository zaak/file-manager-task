const CATEGORY_EXTENSIONS = {
    Images: ['jpg', 'png', 'bmp', 'gif', 'webp'],
    Documents: ['pdf', 'doc', 'docx', 'odt'],
    Audio: ['flac', 'mp3', 'wav'],
    Video: ['mov', 'mp4', 'avi'],
    Other: ['zip', 'rar', 'exe', 'dmg']
};

const CHARS = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','x','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','U','R','S','T','U','V','W','X','Y','Z'];

const seededRandomString = (seed, length) => {
    const rand = () => {
        const x = Math.sin(seed++) * 10000;
        return Math.floor(CHARS.length * (x - Math.floor(x)));
    };

    const result = [];

    for (let i = 0; i < length; ++i) {
        result.push(CHARS[rand() % CHARS.length]);
    }

    return result.join('');
};

export const createDummyFiles = (categoryName, offset, limit) => {
    const result = [];
    const extArray = CATEGORY_EXTENSIONS[categoryName];

    for (let i = offset + 1; i < offset + limit + 1; ++i) {
        const ext = extArray[i % extArray.length];
        const randomPart = seededRandomString(
            categoryName.charCodeAt(0) + i,
            (i * 1337) % 20
        );
        result.push(`${i}_${randomPart}.${ext}`);
    }

    return result;
};
