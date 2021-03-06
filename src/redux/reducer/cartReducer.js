const INITIAL_STATE = {
    cart: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDITEM":
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id);

            //on vérifie si on a déjà l'objet dans le panier
            if(indexItemAdd !== -1){
                const updatedQuantity = {
                    ...state.cart[indexItemAdd],
                    quantity: state.cart[indexItemAdd].quantity + action.payload.quantity
                };

                const newArr= [...state.cart];

                newArr.splice(indexItemAdd, 1, updatedQuantity);

                console.log("Modif panier : ", newArr);
                console.log("Nouvelle quantité : ", updatedQuantity);

                return {
                    cart: newArr
                }

            } else {
                //si objet non dans panier, premier ajout :
                const newArr = [...state.cart];
                newArr.push(action.payload);
                console.log("Premier ajout de l'item dans le panier : ", newArr);
                
                return {
                    cart: newArr
                }
                    
            }

        case "UPDATEITEM":

            //trouver l'id de l'item
            const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id);

            //changer le tableau existante
            const newArr= [...state.cart];
            // remlacer la qté du tableau par celle de l'action
            newArr.splice(indexItemUpdate, 1, action.payload);

            console.log("quantité updated : ", action.payload.quantity)
            return {
                cart: newArr
            }
        
        default:
            break;
    }
    
    return state;
        
}