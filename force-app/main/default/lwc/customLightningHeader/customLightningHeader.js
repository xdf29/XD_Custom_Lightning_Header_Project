import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import NoHeader from '@salesforce/resourceUrl/NoHeader';

export default class CustomLightningHeader extends LightningElement {

    @api
    iconCode = 'standard:custom_notification';

    @api
    title;

    @api
    description;

    @api
    backgroundColor;

    @api
    borderThick;

    @api
    borderColor;

    @api 
    iconColor;

    @api 
    textColor;

    get headerStyle(){
        return (`
            --lwc-pageHeaderColorBackground: ${this.backgroundColor ? this.backgroundColor : 'rgb(243, 242, 242)'};
            --lwc-borderWidthThin: ${this.borderThick ? this.borderThick : '1px'}; 
            --lwc-pageHeaderColorBorder: ${this.borderColor ? this.borderColor : 'rgb(221, 219, 218)'};
            color: ${this.textColor ? this.textColor : 'black'};
            --lwc-colorTextIconDefault: ${this.iconColor};
        `)
    };

    connectedCallback(){
        loadStyle(this, NoHeader)
    }

}