export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const valu = new DataView(arr);

  try {
    valu.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }
  return valu;
}
