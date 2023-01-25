import { ItemInCart } from "./itemInCart.model";

export class Cart{
    idType: string;
    documentId: number;
    clientName: string;
    clientSelection: Array<ItemInCart>;
}