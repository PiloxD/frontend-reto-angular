import { ItemInCart } from "./itemInCart.model";

export class Cart{
    dateInstant: any;
    idType: string;
    documentId: number;
    clientName: string;
    clientSelection: Array<ItemInCart>;
}