import { LightningElement, api } from 'lwc';

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

}