export const isValidEthAddress = (address) => {
    return String(address).match(/^0x[a-fA-F0-9]{40}$/);
};