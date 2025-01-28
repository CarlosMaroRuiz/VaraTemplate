class ContractData {
    constructor(programId, idl) {
        this._programId = programId;
        this._idl = idl;
    }
    get programId() {
        return this._programId;
    }

    set programId(value) {
        this._programId = value;
    }

    get idl() {
        return this._idl;
    }


    set idl(value) {
        this._idl = value;
    }
}