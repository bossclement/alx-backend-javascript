export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'string') return this._location;
    return this._size;
  }
}
