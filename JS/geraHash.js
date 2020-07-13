const privateKey = "f574bf5a39663b70b90ea92cb7acdafccbc9c89f";
const publicKey = "8bbc353555bcee76c91a1d6354245bcb";

export function createHash(timeStamp) {

    const myHash = timeStamp + privateKey + publicKey;
    const hashMessage = md5(myHash);
    return hashMessage;

}



