var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    aantalWielen: 4,
    kleur: "blauw",
    snelheid: 0,

    toeteren: function () {
      console.log("toet")
    },

    gassen: function () {
        this.snelheid += 5
        console.log(this.snelheid)
    }
}

mijnauto.toeteren()
mijnauto.gassen()