const uuidRandomize = (c) =>  {
  let r = Math.random()*16|0, v = (c === 'x') ? r : (r&0x3|0x8);
  return v.toString(16);
}
const uuidString = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const generateUUID = () => uuidString.replace(/[xy]/g, uuidRandomize);

export {
  generateUUID
}
