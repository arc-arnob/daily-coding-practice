/**
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

function reverseVowels(s: string): string {

    // hello -> holle
    // l /e //e t c ///o d ////e
    // l ////e ///o t c //e d /e
    return bruteForceSol(s);
};


function bruteForceSol(s: string): string {
    const vowels: string = 'aeiouAEIOU';
    const strArray: string[] = convertToArray(s);
    let fptr: number = 0;
    let lptr: number = s.length - 1;

    while (fptr < lptr && (lptr > 0 && fptr < strArray.length)) {
        if (vowels.includes(strArray[fptr])) {
            while (!vowels.includes(strArray[lptr]) && lptr > 0) {
                lptr -= 1;
            }
            if (lptr > 0) {
                let temp: string = strArray[fptr];
                strArray[fptr] = strArray[lptr];
                strArray[lptr] = temp;
                lptr -= 1;
            }
        }
        fptr += 1;
    }
    return strArray.join('');

}

function convertToArray(s: string): string[] {
    return s.split('');
}