interface IToken {
  name: string;
    chainId: number;
    symbol: string;
    decimals: number;
    address: string;
    logoURI: string;
    categories: string[];
    description: string;
}

export default IToken;
