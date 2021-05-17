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
    backgroundColor = 'rgb(243, 242, 242)';

    @api
    borderThick = '1px';

    @api
    borderColor = 'rgb(221, 219, 218)';

    @api 
    iconColor;

    @api 
    textColor = 'black';

    get headerStyle(){
        return (`
            --lwc-pageHeaderColorBackground: ${this.backgroundColor};
            --lwc-borderWidthThin: ${this.borderThick}; 
            --lwc-pageHeaderColorBorder: ${this.borderColor};
            color: ${this.textColor};
            --lwc-colorTextIconDefault: ${this.iconColor};
        `)
    };

    connectedCallback(){
        loadStyle(this, NoHeader)
            .then(res => console.log('style loaded'))
            .catch(error => console.log('Failed load style. ' + error))
    }

}