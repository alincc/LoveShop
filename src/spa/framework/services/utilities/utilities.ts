export const tagNameList = ['p','h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article', 'aside', 'details', 'figcaption', 'figure',
    'footer', 'header', 'hgroup', 'menu', 'nav', 'section'];


export class Utils {



    public static isNotNull(obj): boolean {
        return (obj !== undefined)
            && (obj !== null);
    }

    public static isNull(obj): boolean {
        return !this.isNotNull(obj);
    }

    public static lengthGreaterThan0(obj): boolean {
        return (obj !== undefined)
            && (obj !== null)
            && (obj.length > 0);
    }

    public static convertCurrency(obj) {
        let currency_symbols = {
            'USD': '$', // US Dollar
            'EUR': '€', // Euro
            'CRC': '₡', // Costa Rican Colón
            'GBP': '£', // British Pound Sterling
            'ILS': '₪', // Israeli New Sheqel
            'INR': '₹', // Indian Rupee
            'JPY': '¥', // Japanese Yen
            'KRW': '₩', // South Korean Won
            'NGN': '₦', // Nigerian Naira
            'PHP': '₱', // Philippine Peso
            'PLN': 'zł', // Polish Zloty
            'PYG': '₲', // Paraguayan Guarani
            'THB': '฿', // Thai Baht
            'UAH': '₴', // Ukrainian Hryvnia
            'VND': '₫', // Vietnamese Dong
        };

        if (this.isNotNull(currency_symbols[obj])) {
            return currency_symbols[obj];
        }
    }

    public static normalizeUrl(url) {
        if (this.isNotNull(url)) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                if (url.startsWith('/')) {
                    return 'https://www.love2shop.co.uk' + url;
                }
                return 'http://' + url;
            }
        }
        return url;
    }


    public static getTextContent(n) {
        let rv = '';

        if (n.nodeType == 3) {
            rv = n.nodeValue;
        } else {
            for (let i = 0; i < n.childNodes.length; i++) {
                rv += Utils.getTextContent(n.childNodes[i]);
            }
            let d = getComputedStyle(n).getPropertyValue('display');

            if (d == '') {
                if(tagNameList.indexOf(n.tagName.toLowerCase()) !== -1) {
                    rv += "\n";
                }
            }
            else if (d.match(/^block/) || d.match(/list/) || n.tagName == 'BR') {
                rv += "\n";
            }
        }
        return rv;
    };

    constructor() {
        throw new Error('Error: Instantiation failed: '
            + 'Use Utils.methodName(...) instead of new.');
    }



}
