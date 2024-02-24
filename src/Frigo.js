export default class Frigo{

  constructor (filmJSON) { // en paramètre un film au format JSON
    this._id = filmJSON.id
    this._nom = filmJSON.nom
    this._qte = filmJSON.qte
    this._photo = filmJSON.photo
  }
  get nom() { return this._nom }
  get qte() { return this._qte}
  get id() { return this._id }
  get photo() { return this._photo }
  toString() { return `--> ${this._nom} `; }
}

