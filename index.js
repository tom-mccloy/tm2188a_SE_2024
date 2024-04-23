// URL of the postcode API
const POSTCODE_API = "https://api.postcodes.io/postcodes/"

function getPostcode(postcode) {
    /**
     * Retrieves geographic information about a postcode from
     * the postcode.io API. 
     * 
     * @param {String} postcode UK postcode
     * 
     * @return {Postcode} Geographic information for postcode
     */
    return new Postcode(postcode);
}

class Postcode {
    /**
     * Holder of UK postcode information for a given postcode
     */
    constructor(postcode) {
        /**
         * Sets up a UK postcode
         * @param {String} postcode UK postcode
         */
        this.postcode = postcode;
    }

}
let my_postcode = "SA2 8DH";
let my_postcode_obj = getPostcode(my_postcode);
console.log(my_postcode_obj.postcode);