/**
 * @file mofron-effect-center/index.js
 * @brief center effect module for mofron
 *        this effect centers the placement of components vertically and horizontally
 * @license MIT
 */
const cmputl = mofron.util.component;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) key-value: effect config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("Center");
            
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effect contents
     * 
     * @type private
     */
    contents (cmp) {
        try {
	     if (null === cmp.parent()) {
                 console.warn("could not find parent component,the center effect is invalid");
		 return;
	     }
             cmp.parent().childDom().style({ "display" : "grid" });
	     cmputl.rstyle(
	         cmp,
                 {
		     "display"     : "grid",
		     "place-items" : "center"
		 }
             );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
