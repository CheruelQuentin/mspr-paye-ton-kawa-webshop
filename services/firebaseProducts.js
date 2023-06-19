//const {admin} = require('./Firebase');

async function allProducts() {
  //let db = admin.firestore();
  //let data = await db.collection("products").get()
  //return data.docs.map(doc => {
  //    return {
  //        "name": doc.data()["name"],
  //        "stock": doc.data()["stock"],
  //        "id":doc.id
  //    }
  //})
}

module.exports = {
  allProducts
};