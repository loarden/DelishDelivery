import store from "./firestore"
import {collection, query} from 'firebase/firestore'

const postConvert = {
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  })
}

const prodRef = collection(store, 'food',).withConverter(postConvert)
const prodQuery = query(prodRef)

export default prodQuery